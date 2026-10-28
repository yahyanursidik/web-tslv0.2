import { defineConfig } from 'astro/config';

// Domain kanonis belum diputuskan (brief P0). Set SITE_URL saat build produksi,
// mis. SITE_URL=https://tarbiyahsunnah.or.id npm run build
const site = process.env.SITE_URL ?? 'https://tsl.my.id';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'ignore',
  // URL lama → lokasi baru (cadangan meta-refresh; di Netlify berlaku 301 dari netlify.toml).
  // Tambahkan redirect Preschool setelah alamat migrasinya dikonfirmasi.
  redirects: {
    '/kelas-bahasa-arab': '/program/quran-bahasa-arab-dewasa',
    '/madrasah-anak': '/program/tsl-for-kids',
    '/bid': '/program/belajar-islam-dasar',
    '/al-quran': '/program/quran-bahasa-arab-dewasa',
    '/bahasa-arab': '/program/quran-bahasa-arab-dewasa',
    '/mahad-tsl': '/program/mahad-tsl',
    '/s1-pjj': '/program/s1-pjj',
  },
});
