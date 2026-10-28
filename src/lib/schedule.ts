/**
 * Utilitas jadwal kajian — dipakai saat build dan di browser.
 * Semua jadwal disimpan dalam WIB (UTC+7, tanpa DST), jadi konversi cukup offset tetap.
 */
import type { Kajian, Teacher } from '../data/kajian';

export const DAYS = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum’at', 'Sabtu'];
const WIB_OFFSET_MS = 7 * 3600_000;

export interface FlatSession {
  kajianId: string;
  slug: string;
  title: string;
  teacher: string;
  platform: string;
  audience?: string;
  day: number;
  time: string;
}

export const formatTime = (time: string) => time.replace(':', '.');
const minutesOf = (time: string) => {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};

export function flattenSessions(list: Kajian[], teachers: Teacher[]): FlatSession[] {
  return list
    .flatMap((k) =>
      k.sessions.map((s) => ({
        kajianId: k.id,
        slug: k.slug,
        title: k.title,
        teacher: teachers.find((t) => t.id === k.teacherId)?.name ?? '',
        platform: k.platform,
        audience: k.audience,
        day: s.day,
        time: s.time,
      })),
    )
    .sort((a, b) => a.day - b.day || minutesOf(a.time) - minutesOf(b.time));
}

/** Tanggal "dinding" WIB, direpresentasikan sebagai Date UTC yang digeser. */
function wib(now: Date) {
  const d = new Date(now.getTime() + WIB_OFFSET_MS);
  return { day: d.getUTCDay(), minutes: d.getUTCHours() * 60 + d.getUTCMinutes(), shifted: d };
}

export const todayWIB = (now = new Date()) => wib(now).day;

/** Waktu mulai (absolut) sesi berikutnya. Sesi yang sudah dimulai hari ini dihitung ke pekan depan. */
export function nextOccurrence(s: { day: number; time: string }, now = new Date()): Date {
  const w = wib(now);
  const start = minutesOf(s.time);
  let delta = (s.day - w.day + 7) % 7;
  if (delta === 0 && start <= w.minutes) delta = 7;
  const midnightWibAsUtc =
    Date.UTC(w.shifted.getUTCFullYear(), w.shifted.getUTCMonth(), w.shifted.getUTCDate()) - WIB_OFFSET_MS;
  return new Date(midnightWibAsUtc + delta * 86_400_000 + start * 60_000);
}

export function upcoming<T extends { day: number; time: string }>(sessions: T[], now = new Date()) {
  return sessions
    .map((s) => ({ ...s, at: nextOccurrence(s, now) }))
    .sort((a, b) => a.at.getTime() - b.at.getTime());
}

/** "Hari ini", "Besok", atau "Ahad, 1 Nov" — dihitung menurut kalender WIB. */
export function dayLabel(at: Date, now = new Date()) {
  const a = wib(at).shifted;
  const n = wib(now).shifted;
  const diff = Math.round(
    (Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()) -
      Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate())) /
      86_400_000,
  );
  if (diff === 0) return 'Hari ini';
  if (diff === 1) return 'Besok';
  return `${DAYS[a.getUTCDay()]}, ${a.getUTCDate()} ${a.toLocaleString('id-ID', { month: 'short', timeZone: 'UTC' })}`;
}

export function countdown(at: Date, now = new Date()) {
  const mins = Math.max(0, Math.round((at.getTime() - now.getTime()) / 60_000));
  if (mins < 60) return `dalam ${mins} menit`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `dalam ${hours} jam${mins % 60 ? ` ${mins % 60} menit` : ''}`;
  if (hours < 48) return `dalam ${hours} jam`;
  return `dalam ${Math.floor(hours / 24)} hari`;
}

/** Label jam lokal pengunjung bila zona waktunya bukan UTC+7; null bila sama dengan WIB. */
export function localTimeLabel(at: Date) {
  if (at.getTimezoneOffset() === -420) return null;
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const time = at.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(':', '.');
  const sameDay = new Date(at).getDay() === wib(at).day;
  return `${time}${sameDay ? '' : ` (${DAYS[at.getDay()]})`} waktu Anda${zone ? ` · ${zone.split('/').pop()?.replace('_', ' ')}` : ''}`;
}

const icsDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const icsEscape = (s: string) => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (c) => `\\${c}`).replace(/\n/g, '\\n');

/** File kalender .ics dengan pengulangan pekanan untuk setiap sesi sebuah kajian. */
export function buildICS(
  k: { id: string; title: string; teacher: string; platform: string; sessions: { day: number; time: string }[] },
  pageUrl: string,
  now = new Date(),
) {
  const events = k.sessions.map((s, i) => {
    const start = nextOccurrence(s, now);
    return [
      'BEGIN:VEVENT',
      `UID:tsl-${k.id}-${i}@tarbiyahsunnah`,
      `DTSTAMP:${icsDate(now)}`,
      `DTSTART:${icsDate(start)}`,
      'DURATION:PT1H',
      // Tanpa BYDAY: hari WIB bisa berbeda dengan hari UTC (mis. Jum'at 05.30 WIB = Kamis UTC),
      // jadi pengulangan cukup mengikuti DTSTART.
      'RRULE:FREQ=WEEKLY',
      `SUMMARY:${icsEscape(k.title)}`,
      `DESCRIPTION:${icsEscape(
        `${k.teacher}\nPlatform: ${k.platform}\nDurasi di kalender adalah perkiraan. Tautan bergabung dibagikan pengelola.\n${pageUrl}`,
      )}`,
      `URL:${pageUrl}`,
      'END:VEVENT',
    ].join('\r\n');
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Tarbiyah Sunnah Learning//Kajian//ID', 'CALSCALE:GREGORIAN', ...events, 'END:VCALENDAR'].join(
    '\r\n',
  );
}

export function downloadFile(filename: string, content: string, type = 'text/calendar;charset=utf-8') {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
