# Tarbiyah Sunnah Learning — Website

Portal publik TSL (Astro 7 + Tailwind 3 + TypeScript), dibangun dari *Initial Brief Revamp* (28 Okt 2026) dan prototipe UI/UX `tsl-revamp`. Node ≥ 22.22.

Tailwind dijalankan lewat PostCSS (`postcss.config.mjs`), bukan `@astrojs/tailwind` yang tidak mendukung Astro 7.

## Logo

Aset logo resmi di `public/images/`: `tsl-logo.webp`/`.png` (logo vertikal lengkap), `tsl-mark-96/192.webp` dan `tsl-mark-512.png` (mark layang-layang). Header/footer memakai mark + logotype horizontal (`src/components/Brand.astro`). Favicon, apple-touch-icon, dan gambar Open Graph default (`og-default.png`) dibuat dari logo yang sama.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output statis di dist/
SITE_URL=https://tarbiyahsunnah.or.id npm run build   # domain kanonis (default sementara: https://tsl.my.id)
```

## Struktur

| Rute | Isi |
|---|---|
| `/` | Hero + kajian berikutnya (live), pintu masuk per kelompok usia, 6 program, pendekatan, jadwal pekanan, sorotan Kids & Senja, cara memulai, FAQ |
| `/program` | Program Finder (usia → tujuan → rekomendasi) + katalog dengan filter segmen (`?segmen=anak`) dan saring teks |
| `/program/[slug]` | Detail program: fakta kunci, navigasi dalam halaman, tab layanan, jalur, panel pendaftaran, FAQ, program terkait |
| `/kajian`, `/kajian/[slug]` | Jadwal pekanan (filter hari/pemateri, tampilan daftar/pekan, jam lokal pengunjung, sesi berikutnya, unduh `.ics`) |
| `/cara-belajar`, `/tentang`, `/bantuan`, `/kontak`, `/artikel`, `404` | Halaman pendukung |
| `/sitemap.xml`, `/robots.txt` | SEO |

Fitur global: mega menu (keyboard + `aria-expanded`), drawer mobile dengan akordeon, tab bar bawah di mobile, pencarian situs (`Ctrl K` atau `/`), opsi **ukuran teks lebih besar** (untuk pembelajar 45+), toast, dan event analitik via `window.dataLayer` (`data-track`).

## Mengubah konten (tanpa menyentuh komponen)

Semua konten ada di `src/data/` dan modelnya mengikuti brief bagian 9 — siap dipindahkan ke headless CMS:

- `site.ts` — kontak, tautan pendaftaran umum, pengumuman, `isPreview`. **Nilai `null` = belum terverifikasi**; UI otomatis menampilkan status "sedang dikonfirmasi" alih-alih tautan palsu. Setelah diisi, tombol Daftar/Konsultasi aktif sendiri.
- `programs.ts` — program, layanan, jalur, FAQ program. `dataStatus: 'pending'` menampilkan pemberitahuan pembaruan; `internalNote` tidak pernah tampil di publik.
- `courses.ts` — kelas & silabus Divisi Bahasa Arab dan Waris (kitab, jumlah pertemuan, durasi, capaian, rencana pertemuan, evaluasi). Kelas tampil per rumpun di halaman program dan bisa ditautkan langsung (`#kelas-<id>`).
- `kajian.ts` — pengajar, kajian, sesi (WIB), `joinUrl`, dan `kajianExceptions` untuk libur/perubahan jadwal.
- `faq.ts` — pertanyaan umum (kategori, `featured` untuk beranda).

## Masih menunggu data resmi (brief P0)

- Alamat, media sosial, kebijakan tautan kajian, dan portal pendaftaran selain Ma'had (saat ini lewat WhatsApp admin). Sebaiknya minta juga file logo vektor (SVG/AI).
- Verifikasi Belajar Islam Dasar dan S1 PJJ. Kelas Bahasa Arab & Waris: jadwal, biaya, dan nama pengajar per pembukaan kelas.
- Frekuensi sesi MAUD/private TSL for Kids (sengaja tidak ditampilkan) dan redaksi "Class or Siroh".
- Alamat migrasi Preschool → tambahkan ke `redirects` di `astro.config.mjs`.

## Deploy

Netlify membaca `netlify.toml` (build `npm run build`, publish `dist`) dan memasang redirect 301 dari URL website lama (`/madrasah-anak`, `/mahad-tsl`, `/al-quran`, dll.).
