/**
 * Kajian rutin daring (padanan model `Teacher`, `Kajian`, `KajianException`).
 * Sumber: data pembaruan 28 Oktober 2026 — menggantikan seluruh jadwal lama.
 * Semua waktu dalam WIB (UTC+7). Hari: 0 = Ahad … 6 = Sabtu.
 */

export interface Teacher {
  id: string;
  name: string;
  active: boolean;
}

export interface KajianSession {
  day: number;
  time: string; // 'HH:MM' WIB
}

export interface Kajian {
  id: string;
  slug: string;
  title: string;
  teacherId: string;
  platform: 'Zoom Meeting' | 'Google Meet';
  sessions: KajianSession[];
  summary: string;
  kitab?: string;
  audience?: string;
  topics: string[];
  /** Judul perlu diperiksa redaksi sebelum dipublikasikan final. */
  titleNeedsReview?: boolean;
  /** Tautan bergabung hanya diisi setelah diverifikasi admin. */
  joinUrl: string | null;
  active: boolean;
}

export interface KajianException {
  kajianId: string;
  date: string; // 'YYYY-MM-DD' WIB
  type: 'cancelled' | 'rescheduled';
  replacementTime?: string;
  notice: string;
}

export const teachers: Teacher[] = [
  { id: 'andy', name: 'Ustadz Dr. Andy Octavian Latief, S.Si., M.Sc.', active: true },
  { id: 'rendi', name: 'Ustadz Rendi Rustandi', active: true },
  { id: 'toriqul', name: 'Ustadz Mohamad Toriqul Huda, S.Ag., M.S.I', active: true },
  { id: 'alifianty', name: 'Ustadzah Alifianty Iqrominissa, BA.', active: true },
];

export const kajian: Kajian[] = [
  {
    id: 'aqidah',
    slug: 'kajian-aqidah',
    title: 'Kajian Aqidah',
    teacherId: 'andy',
    platform: 'Zoom Meeting',
    sessions: [{ day: 0, time: '20:00' }],
    summary: 'Kajian aqidah pekanan dengan membaca kitab al-Aqidah ath-Thahawiyyah karya Abu Ja’far ath-Thahawiy.',
    kitab: 'al-Aqidah ath-Thahawiyyah — Abu Ja’far ath-Thahawiy',
    topics: ['Aqidah'],
    joinUrl: null,
    active: true,
  },
  {
    id: 'tahsin',
    slug: 'perbaikan-bacaan-quran',
    title: 'Perbaikan Bacaan Al-Qur’an',
    teacherId: 'rendi',
    platform: 'Google Meet',
    sessions: [{ day: 3, time: '17:00' }],
    summary: 'Tahsin dan hafalan bertahap untuk memperbaiki kualitas bacaan Al-Qur’an.',
    topics: ['Al-Qur’an', 'Tahsin', 'Hafalan'],
    joinUrl: null,
    active: true,
  },
  {
    id: 'tadabbur',
    slug: 'tadabbur-quran',
    title: 'Kajian Tadabbur Al-Qur’an',
    teacherId: 'toriqul',
    platform: 'Google Meet',
    sessions: [
      { day: 4, time: '15:45' },
      { day: 5, time: '05:30' },
    ],
    summary: 'Kajian tadabbur Al-Qur’an dengan dua sesi setiap pekan.',
    topics: ['Al-Qur’an', 'Tadabbur'],
    joinUrl: null,
    active: true,
  },
  {
    id: 'shalat-wanita',
    slug: 'belajar-shalat-untuk-wanita',
    title: 'Belajar Shalat untuk Wanita',
    teacherId: 'alifianty',
    platform: 'Google Meet',
    sessions: [{ day: 5, time: '16:00' }],
    summary: 'Kelas khusus wanita untuk mempelajari tata cara shalat.',
    audience: 'Khusus wanita',
    topics: ['Fiqih ibadah', 'Shalat'],
    joinUrl: null,
    active: true,
  },
  {
    id: 'kaidah-amal',
    slug: 'kaidah-beramal-shaleh',
    title: 'Kaidah Beramal Shaleh',
    teacherId: 'toriqul',
    platform: 'Google Meet',
    sessions: [{ day: 6, time: '06:00' }],
    summary: 'Kajian pekanan tentang kaidah-kaidah dalam beramal shaleh.',
    topics: ['Amal shaleh'],
    joinUrl: null,
    active: true,
  },
  {
    id: 'siroh',
    slug: 'siroh',
    // Redaksi mengikuti data sumber; menunggu konfirmasi nama publik.
    title: 'Class or Siroh',
    teacherId: 'toriqul',
    platform: 'Google Meet',
    sessions: [{ day: 6, time: '15:45' }],
    summary: 'Kajian pekanan bersama Ustadz Mohamad Toriqul Huda.',
    topics: ['Siroh'],
    titleNeedsReview: true,
    joinUrl: null,
    active: true,
  },
];

/** Libur atau perubahan jadwal yang menimpa jadwal berulang. Kosong = belum ada pengumuman. */
export const kajianExceptions: KajianException[] = [];

export const getTeacher = (id: string) => teachers.find((t) => t.id === id)!;
export const kajianUrl = (k: Kajian) => `/kajian/${k.slug}`;

export const activeKajian = kajian.filter((k) => k.active);
export const sessionCount = activeKajian.reduce((n, k) => n + k.sessions.length, 0);
