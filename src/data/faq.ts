export interface Faq {
  q: string;
  a: string;
  category: 'Umum' | 'Program' | 'Kajian' | 'Pendaftaran';
  featured?: boolean;
}

export const faqs: Faq[] = [
  {
    category: 'Umum',
    featured: true,
    q: 'Apa itu Tarbiyah Sunnah Learning?',
    a: 'Tarbiyah Sunnah Learning (TSL) adalah ekosistem pembelajaran Islam lintas usia: program untuk anak, pembelajar dewasa, pendidikan lanjutan, dan usia 45+, ditambah kajian rutin daring yang terbuka setiap pekan.',
  },
  {
    category: 'Umum',
    featured: true,
    q: 'Apakah semua program TSL dilaksanakan secara daring?',
    a: 'Sebagian besar layanan berjalan daring, termasuk TSL for Kids dan kajian rutin. TSL Gemilang Senja juga memiliki jalur Intensif yang dilaksanakan tatap muka. Lihat halaman masing-masing program untuk format lengkapnya.',
  },
  {
    category: 'Program',
    featured: true,
    q: 'Saya bingung harus memilih program apa. Dari mana memulai?',
    a: 'Gunakan Program Finder di halaman Program Belajar: pilih untuk siapa program dicari dan apa tujuan belajarnya, lalu Anda akan melihat program yang paling relevan. Rekomendasi ini adalah panduan awal, bukan asesmen kemampuan.',
  },
  {
    category: 'Program',
    q: 'Apakah TSL for Kids hanya memiliki kelas madrasah?',
    a: 'Tidak. TSL for Kids memuat Madrasah Anak Usia Dini, Madrasah Usia Dasar, Belajar Al-Qur’an, Belajar Tahfidz, dan Intensif Al-Qur’an Private.',
  },
  {
    category: 'Program',
    q: 'Apa yang terjadi dengan Preschool Daring TSL dan Madrasah Anak Daring?',
    a: 'Madrasah Anak Daring kini menjadi bagian dari TSL for Kids dengan layanan yang lebih luas. Preschool Daring TSL telah dipindahkan dari katalog TSL; informasi lokasi barunya akan diumumkan oleh pengelola.',
  },
  {
    category: 'Program',
    q: 'Untuk siapa program Gemilang Senja?',
    a: 'Untuk muslim dan muslimah usia 45 tahun ke atas. Program ini adalah pembinaan menyeluruh — diniyyah, Al-Qur’an, tazkiyatun nafs, serta kesehatan fisik dan spiritual.',
  },
  {
    category: 'Kajian',
    featured: true,
    q: 'Bagaimana cara mengikuti kajian rutin?',
    a: 'Lihat jadwal di halaman Jadwal Kajian. Seluruh waktu dalam WIB (UTC+7). Tautan Zoom/Google Meet hanya dibagikan setelah diverifikasi pengelola; Anda dapat menambahkan jadwal ke kalender agar tidak terlewat.',
  },
  {
    category: 'Kajian',
    q: 'Saya tinggal di luar zona WIB. Bagaimana mengetahui waktunya?',
    a: 'Halaman jadwal otomatis menampilkan perkiraan waktu sesuai zona waktu perangkat Anda bila berbeda dari WIB. Fitur "Tambah ke kalender" juga menyesuaikan zona waktu secara otomatis.',
  },
  {
    category: 'Kajian',
    q: 'Bagaimana jika ada kajian yang libur atau berubah jadwal?',
    a: 'Perubahan dan libur akan diumumkan pada halaman Jadwal Kajian dan halaman detail kajian terkait.',
  },
  {
    category: 'Pendaftaran',
    featured: true,
    q: 'Bagaimana cara mendaftar program?',
    a: 'Setiap halaman program memiliki panel pendaftaran. Ma’had TSL Daring didaftarkan melalui portal PMB TSL; program lainnya melalui WhatsApp admin dengan pesan yang sudah disiapkan.',
  },
  {
    category: 'Pendaftaran',
    q: 'Berapa biaya program?',
    a: 'Biaya dicantumkan di halaman program yang sudah divalidasi — misalnya SPP Ma’had TSL Daring Rp1.800.000 per semester. Untuk program lain, tanyakan kepada admin; kami tidak menampilkan angka sebelum dikonfirmasi.',
  },
];

export const faqCategories = ['Umum', 'Program', 'Kajian', 'Pendaftaran'] as const;
