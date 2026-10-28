/**
 * Aturan Program Finder: usia → tujuan → rekomendasi.
 * Ini pemetaan konten, bukan asesmen kemampuan peserta (brief bagian 6).
 */
export type FinderAge = 'anak' | 'dewasa' | 'senja';

export interface FinderResult {
  /** id program, atau 'kajian:<id>' / 'kajian' untuk kajian rutin. */
  ref: string;
  reason: string;
}

export const finderAges: { id: FinderAge; label: string; hint: string }[] = [
  { id: 'anak', label: 'Anak saya (3–12 tahun)', hint: 'Untuk orang tua & keluarga' },
  { id: 'dewasa', label: 'Saya sendiri — remaja/dewasa', hint: 'Termasuk pendidikan lanjutan' },
  { id: 'senja', label: 'Usia 45 tahun ke atas', hint: 'Untuk diri sendiri atau orang tua' },
];

export const finderGoals: Record<FinderAge, { id: string; label: string; results: FinderResult[] }[]> = {
  anak: [
    {
      id: 'fondasi',
      label: 'Dasar aqidah, ibadah & adab',
      results: [{ ref: 'kids', reason: 'Madrasah Anak Usia Dini (3–6) atau Madrasah Usia Dasar (7–12), kelas maks. 6 anak.' }],
    },
    {
      id: 'quran',
      label: 'Membaca Al-Qur’an',
      results: [{ ref: 'kids', reason: 'Layanan Belajar Al-Qur’an: hijaiyah, tahsin, hingga membaca Al-Qur’an.' }],
    },
    {
      id: 'tahfidz',
      label: 'Menghafal Al-Qur’an',
      results: [{ ref: 'kids', reason: 'Layanan Belajar Tahfidz: hafalan, murojaah, makhraj, dan tajwid dasar.' }],
    },
    {
      id: 'private',
      label: 'Pendampingan individual',
      results: [{ ref: 'kids', reason: 'Intensif Al-Qur’an Private: 1 guru untuk 1 peserta, fokus sesuai kebutuhan anak.' }],
    },
  ],
  dewasa: [
    {
      id: 'fondasi',
      label: 'Memulai dari dasar',
      results: [
        { ref: 'dasar', reason: 'Fondasi aqidah, ibadah, dan adab yang disusun bertahap.' },
        { ref: 'kajian:aqidah', reason: 'Kajian pekanan terbuka untuk memperdalam aqidah.' },
      ],
    },
    {
      id: 'quran',
      label: 'Memperbaiki bacaan Al-Qur’an',
      results: [
        { ref: 'quran', reason: 'Jalur Al-Qur’an untuk peserta dewasa.' },
        { ref: 'kajian:tahsin', reason: 'Kajian pekanan: tahsin dan hafalan bertahap.' },
        { ref: 'kajian:tadabbur', reason: 'Memahami dan merenungi Al-Qur’an, dua sesi per pekan.' },
      ],
    },
    {
      id: 'arab',
      label: 'Belajar Bahasa Arab',
      results: [
        { ref: 'quran', reason: 'Jalur Bahasa Arab untuk peserta dewasa.' },
        { ref: 'mahad', reason: 'Bila sudah memiliki dasar dan ingin pendalaman.' },
        { ref: 's1', reason: 'Bila menginginkan studi akademik Pendidikan Bahasa Arab.' },
      ],
    },
    {
      id: 'lanjutan',
      label: 'Pendalaman ilmu diniyyah',
      results: [
        { ref: 'mahad', reason: 'Pembelajaran diniyyah dan Bahasa Arab tingkat lanjutan secara daring.' },
        { ref: 'kajian', reason: 'Lengkapi dengan kajian rutin pekanan.' },
      ],
    },
    {
      id: 'akademik',
      label: 'Studi bergelar (S1)',
      results: [{ ref: 's1', reason: 'Program sarjana Pendidikan Bahasa Arab melalui pembelajaran jarak jauh.' }],
    },
    {
      id: 'kajian',
      label: 'Ikut kajian tanpa mendaftar kelas',
      results: [{ ref: 'kajian', reason: '6 kajian dengan 7 sesi pekanan via Zoom & Google Meet.' }],
    },
  ],
  senja: [
    {
      id: 'holistik',
      label: 'Pembinaan menyeluruh',
      results: [{ ref: 'senja', reason: 'Diniyyah, Al-Qur’an, tazkiyatun nafs, serta kesehatan fisik dan spiritual.' }],
    },
    {
      id: 'quran',
      label: 'Lebih dekat dengan Al-Qur’an',
      results: [
        { ref: 'senja', reason: 'Jalur Reguler memuat 3× sesi private Al-Qur’an per pekan.' },
        { ref: 'kajian:tahsin', reason: 'Kajian pekanan: perbaikan bacaan Al-Qur’an.' },
      ],
    },
    {
      id: 'intensif',
      label: 'Belajar intensif tatap muka',
      results: [{ ref: 'senja', reason: 'Jalur Intensif: full board tatap muka 3 hari 2 malam.' }],
    },
    {
      id: 'kajian',
      label: 'Ikut kajian rutin',
      results: [
        { ref: 'kajian', reason: 'Kajian daring pekanan yang terbuka.' },
        { ref: 'senja', reason: 'Atau kajian diniyyah terstruktur 2× per pekan di jalur Reguler.' },
      ],
    },
  ],
};
