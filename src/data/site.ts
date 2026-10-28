/**
 * Pengaturan situs (padanan model `SiteSettings` di brief).
 * Nilai `null` berarti data belum diverifikasi: komponen akan menampilkan status
 * "sedang dikonfirmasi" alih-alih tautan palsu. Isi saat data resmi tersedia.
 */
export const site = {
  name: 'Tarbiyah Sunnah Learning',
  shortName: 'TSL',
  tagline: 'Menuntut ilmu, bertumbuh dalam kebaikan.',
  description:
    'Portal pembelajaran Islam Tarbiyah Sunnah Learning: program terarah dan bertahap untuk anak, dewasa, pendidikan lanjutan, hingga usia 45+, serta jadwal kajian rutin daring.',
  locale: 'id_ID',
  /** Tampilkan penanda pratinjau sampai logo, kontak, dan pendaftaran resmi diverifikasi. */
  isPreview: true,
  announcement: {
    text: 'Pembaruan program pembelajaran TSL 2026–2027',
    linkLabel: 'Lihat program',
    href: '/program',
  },
  contact: {
    whatsapp: null as string | null, // contoh format: 'https://wa.me/62xxxxxxxxxx'
    email: null as string | null,
    address: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
  },
  /** Tautan pendaftaran umum; tiap program juga punya `registrationUrl` sendiri. */
  registrationUrl: null as string | null,
};

export type Site = typeof site;
