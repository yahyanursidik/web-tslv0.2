import { programs, programUrl, segments } from '../data/programs';
import { activeKajian, getTeacher, kajianUrl } from '../data/kajian';
import { faqs } from '../data/faq';
import { DAYS, formatTime } from './schedule';

export interface SearchItem {
  type: 'Program' | 'Layanan' | 'Kajian' | 'Halaman' | 'Bantuan';
  title: string;
  description: string;
  url: string;
  keywords: string;
}

export const pages = [
  { title: 'Beranda', url: '/', description: 'Halaman utama Tarbiyah Sunnah Learning', keywords: 'home utama' },
  { title: 'Program Belajar', url: '/program', description: 'Katalog program dan Program Finder', keywords: 'katalog kelas daftar finder' },
  { title: 'Jadwal Kajian', url: '/kajian', description: 'Kajian rutin daring pekanan (WIB)', keywords: 'jadwal kajian zoom meet pekan' },
  { title: 'Cara Belajar', url: '/cara-belajar', description: 'Pendekatan dan langkah memulai belajar di TSL', keywords: 'metode pendekatan mulai langkah' },
  { title: 'Tentang TSL', url: '/tentang', description: 'Identitas dan prinsip pembelajaran TSL', keywords: 'profil lembaga tentang' },
  { title: 'Bantuan & FAQ', url: '/bantuan', description: 'Pertanyaan yang sering diajukan', keywords: 'faq tanya bantuan' },
  { title: 'Kontak', url: '/kontak', description: 'Kanal informasi resmi TSL', keywords: 'hubungi admin whatsapp email kontak konsultasi' },
];

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const p of programs) {
    items.push({
      type: 'Program',
      title: p.title,
      description: p.summary,
      url: programUrl(p),
      keywords: [segments[p.segment].label, p.ageLabel, ...(p.curriculum ?? [])].join(' '),
    });
    for (const c of p.courses ?? []) {
      items.push({
        type: 'Layanan',
        title: c.title,
        description: `${p.title} · ${c.level} · ${c.meetings} · ${c.summary}`,
        url: `${programUrl(p)}#kelas-${c.id}`,
        keywords: [c.kitab, ...c.plan.map(([, t]) => t)].join(' '),
      });
    }
    for (const o of p.offerings ?? []) {
      items.push({
        type: 'Layanan',
        title: o.label,
        description: `${p.title} · ${o.age} · ${o.summary}`,
        url: `${programUrl(p)}#layanan`,
        keywords: o.focus.join(' '),
      });
    }
  }
  for (const k of activeKajian) {
    const teacher = getTeacher(k.teacherId).name;
    items.push({
      type: 'Kajian',
      title: k.title,
      description: `${k.sessions.map((s) => `${DAYS[s.day]} ${formatTime(s.time)}`).join(' & ')} WIB · ${teacher}`,
      url: kajianUrl(k),
      keywords: [teacher, k.platform, k.kitab ?? '', ...k.topics].join(' '),
    });
  }
  for (const p of pages) items.push({ type: 'Halaman', ...p });
  for (const f of faqs) {
    items.push({ type: 'Bantuan', title: f.q, description: f.a, url: '/bantuan', keywords: f.category });
  }
  return items;
}
