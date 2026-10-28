import { defineConfig } from 'astro/config';

// Domain kanonis belum diputuskan (brief P0). Set SITE_URL saat build produksi,
// mis. SITE_URL=https://tarbiyahsunnah.or.id npm run build
const site = process.env.SITE_URL ?? 'https://tsl.my.id';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'ignore',
  redirects: {
    // URL lama → lokasi baru. Tambahkan redirect Preschool setelah alamat migrasinya dikonfirmasi.
    '/kelas-bahasa-arab': '/program/quran-bahasa-arab-dewasa',
  },
});
