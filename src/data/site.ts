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
  /** Tampilkan penanda pratinjau di footer (mis. untuk deploy staging). */
  isPreview: false,
  announcement: {
    text: 'Pembaruan program pembelajaran TSL 2026–2027',
    linkLabel: 'Lihat program',
    href: '/program',
  },
  // Kontak umum yang sudah tampil di website sebelumnya (React, Juni 2026).
  contact: {
    whatsapp: 'https://wa.me/62895377710900' as string | null,
    whatsappLabel: '0895 3777 10900',
    email: 'salam@tarbiyahsunnahlearning.or.id' as string | null,
    address: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
  },
  /** Learning Management System untuk peserta terdaftar. */
  lmsUrl: 'https://my.tslbelajarislam.id/' as string | null,
  /** Tautan pendaftaran umum; tiap program juga punya `registrationUrl` sendiri. */
  registrationUrl: null as string | null,
};

export type Site = typeof site;

/** Tautan WhatsApp admin dengan pesan pembuka; null bila nomor belum diisi. */
export const waLink = (message: string) =>
  site.contact.whatsapp ? `${site.contact.whatsapp}?text=${encodeURIComponent(message)}` : null;
