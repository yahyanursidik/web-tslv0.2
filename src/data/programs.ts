/**
 * Data program (padanan model `Program` + `ProgramOffering` di brief bagian 9).
 * Hanya memuat fakta dari panduan resmi / brief. Program yang rinciannya belum
 * tersedia memakai `dataStatus: 'pending'` sehingga halaman menampilkan
 * pemberitahuan pembaruan, bukan kurikulum/harga karangan.
 */

export type Segment = 'anak' | 'dewasa' | 'lanjutan' | 'senja';
export type ProgramStatus = 'active' | 'planned' | 'closed' | 'archived';
export type EnrollmentStatus = 'open' | 'closed' | 'unverified';

export interface Offering {
  id: string;
  label: string;
  age: string;
  summary: string;
  focus: string[];
}

export interface Track {
  label: string;
  format: string;
  detail: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  segment: Segment;
  ageLabel: string;
  menuDescription: string;
  summary: string;
  intro: string[];
  audience: string[];
  outcomes: string[];
  modalities: { title: string; text: string }[];
  offerings?: Offering[];
  groups?: { label: string; age: string }[];
  tracks?: Track[];
  curriculum?: string[];
  support?: string[];
  facts: { label: string; value: string }[];
  faq?: { q: string; a: string }[];
  /** 'guide' = bersumber dari panduan resmi; 'pending' = menunggu dokumen/validasi. */
  dataStatus: 'guide' | 'pending';
  /** Pemberitahuan publik saat rincian belum lengkap. */
  pendingNotice?: string;
  /** Catatan untuk tim/admin — tidak ditampilkan di halaman publik. */
  internalNote?: string;
  status: ProgramStatus;
  enrollmentStatus: EnrollmentStatus;
  registrationUrl: string | null;
  contactUrl: string | null;
  image: string;
  imageAlt: string;
  tone: 'green' | 'sand' | 'mist';
  seo: { title: string; description: string };
}

export const segments: Record<Segment, { label: string; short: string; description: string }> = {
  anak: {
    label: 'Anak & keluarga',
    short: 'Anak 3–12',
    description: 'Program pembelajaran Islam dan Al-Qur’an usia 3–12 tahun.',
  },
  dewasa: {
    label: 'Remaja & dewasa',
    short: 'Dewasa',
    description: 'Fondasi Islam, Al-Qur’an, dan Bahasa Arab untuk pembelajar dewasa.',
  },
  lanjutan: {
    label: 'Pendidikan lanjutan',
    short: 'Lanjutan',
    description: 'Pembelajaran diniyyah lebih mendalam dan studi akademik.',
  },
  senja: {
    label: 'Usia 45+',
    short: 'Usia 45+',
    description: 'Pembinaan Islam yang hangat dan berkelanjutan untuk usia 45 ke atas.',
  },
};

const pendingDefault =
  'Rincian kurikulum, jadwal angkatan, biaya, dan alur pendaftaran sedang diperbarui bersama pengelola program. Informasi di halaman ini akan dilengkapi setelah divalidasi.';

export const programs: Program[] = [
  {
    id: 'kids',
    slug: 'tsl-for-kids',
    title: 'TSL for Kids',
    segment: 'anak',
    ageLabel: '3–12 tahun',
    menuDescription: 'Madrasah, Al-Qur’an, dan tahfidz usia 3–12',
    summary:
      'Pembelajaran Islam daring untuk anak usia 3–12 tahun: diniyyah, Al-Qur’an, dan tahfidz melalui kelas klasikal maupun private.',
    intro: [
      'TSL for Kids (sebelumnya Madrasah Anak Daring) adalah program pembelajaran Islam daring untuk usia 3–12 tahun yang mengacu pada Tujuan Pembelajaran TSL Islamic Essential Knowledge.',
      'Pembelajaran menekankan aqidah, ibadah, adab, akhlak, Al-Qur’an, serta pembiasaan nilai-nilai Islam dalam keseharian anak — disesuaikan dengan tahap perkembangan dan kemampuan masing-masing.',
    ],
    audience: [
      'Orang tua yang mencari pembelajaran Islam terstruktur untuk anak usia 3–12 tahun.',
      'Anak yang ingin mulai mengenal hijaiyah, membaca, atau menghafal Al-Qur’an.',
      'Keluarga yang membutuhkan pendampingan individual (private) sesuai kebutuhan anak.',
    ],
    outcomes: [
      'Anak mengenal dasar aqidah, ibadah, adab, dan akhlak sesuai usianya.',
      'Kemampuan Al-Qur’an berkembang bertahap: hijaiyah, tahsin, membaca, hingga hafalan.',
      'Nilai-nilai Islam dibiasakan dalam keseharian, bukan hanya dipelajari di kelas.',
      'Orang tua menerima laporan perkembangan dan rekomendasi target setiap periode.',
    ],
    modalities: [
      { title: 'Klasikal daring', text: 'Kelas madrasah dalam kelompok kecil, maksimal 6 anak per kelas.' },
      { title: 'Private daring', text: 'Sesi individual satu guru untuk satu peserta dengan fokus sesuai kebutuhan anak.' },
    ],
    offerings: [
      {
        id: 'maud',
        label: 'Madrasah Anak Usia Dini (MAUD)',
        age: '3–6 tahun',
        summary: 'Pengenalan Islam yang menyenangkan untuk usia dini.',
        focus: ['Aqidah', 'Ibadah', 'Adab', 'Akhlak', 'Al-Qur’an', 'Pembiasaan'],
      },
      {
        id: 'mud',
        label: 'Madrasah Usia Dasar (MUD)',
        age: '7–12 tahun',
        summary: 'Pembelajaran diniyyah untuk usia sekolah dasar.',
        focus: ['Diniyyah', 'Sirah', 'Al-Qur’an', 'Karakter muslim'],
      },
      {
        id: 'quran',
        label: 'Belajar Al-Qur’an',
        age: '3–12 tahun',
        summary: 'Dari mengenal huruf hingga lancar membaca Al-Qur’an.',
        focus: ['Hijaiyah', 'Tahsin', 'Membaca Al-Qur’an'],
      },
      {
        id: 'tahfidz',
        label: 'Belajar Tahfidz',
        age: '3–12 tahun',
        summary: 'Menghafal dan menjaga hafalan Al-Qur’an secara bertahap.',
        focus: ['Hafalan', 'Murojaah', 'Makhraj', 'Tajwid dasar'],
      },
      {
        id: 'private',
        label: 'Intensif Al-Qur’an Private',
        age: '3–12 tahun',
        summary: 'Pendampingan individual 1 guru : 1 peserta.',
        focus: ['Individual', 'Fokus sesuai kebutuhan'],
      },
    ],
    groups: [
      { label: 'KB', age: '3–4 tahun' },
      { label: 'TK A', age: '4–5 tahun' },
      { label: 'TK B', age: '5–6 tahun' },
      { label: 'Fase A', age: '7–8 tahun' },
      { label: 'Fase B', age: '9–10 tahun' },
      { label: 'Fase C', age: '11–12 tahun' },
    ],
    support: [
      'Siklus belajar 3 bulan per periode.',
      'Laporan perkembangan setiap akhir periode.',
      'Umpan balik dan rekomendasi target untuk periode berikutnya.',
    ],
    facts: [
      { label: 'Usia', value: '3–12 tahun' },
      { label: 'Format', value: 'Daring · klasikal & private' },
      { label: 'Kelas madrasah', value: 'Maks. 6 anak' },
      { label: 'Siklus belajar', value: '3 bulan' },
    ],
    faq: [
      {
        q: 'Apakah TSL for Kids hanya kelas madrasah?',
        a: 'Tidak. Selain Madrasah Anak Usia Dini dan Madrasah Usia Dasar, tersedia Belajar Al-Qur’an, Belajar Tahfidz, dan Intensif Al-Qur’an Private.',
      },
      {
        q: 'Bagaimana orang tua mengetahui perkembangan anak?',
        a: 'Setiap periode belajar 3 bulan diakhiri dengan laporan perkembangan, umpan balik, dan rekomendasi target untuk periode berikutnya.',
      },
      {
        q: 'Berapa jumlah sesi per pekan untuk tiap layanan?',
        a: 'Alokasi sesi per layanan sedang difinalkan oleh tim program dan akan dicantumkan setelah divalidasi.',
      },
    ],
    dataStatus: 'guide',
    internalNote:
      'Panduan menyebut "empat layanan utama" namun tabel merinci lima; frekuensi private MAUD berbeda antar tabel. Jangan publikasikan frekuensi sesi sebelum diputuskan.',
    status: 'active',
    enrollmentStatus: 'unverified',
    registrationUrl: null,
    contactUrl: null,
    image: '/images/learning-kids.svg',
    imageAlt: 'Ilustrasi perlengkapan belajar anak: balok, kartu huruf hijaiyah, dan meja belajar',
    tone: 'green',
    seo: {
      title: 'TSL for Kids — Belajar Islam & Al-Qur’an Daring Usia 3–12',
      description:
        'Madrasah Anak Usia Dini, Madrasah Usia Dasar, Belajar Al-Qur’an, Tahfidz, dan Intensif Private. Kelas maksimal 6 anak dengan laporan perkembangan tiap 3 bulan.',
    },
  },
  {
    id: 'dasar',
    slug: 'belajar-islam-dasar',
    title: 'Belajar Islam Dasar',
    segment: 'dewasa',
    ageLabel: 'Remaja & dewasa',
    menuDescription: 'Fondasi aqidah, ibadah, dan adab',
    summary: 'Pembelajaran aqidah, ibadah, dan adab bagi pembelajar dewasa, disusun secara bertahap dari dasar.',
    intro: [
      'Belajar Islam Dasar adalah jalur untuk membangun fondasi pemahaman Islam: aqidah yang benar, ibadah yang tertata, dan adab dalam keseharian.',
    ],
    audience: [
      'Pembelajar dewasa yang ingin memulai atau menata ulang pemahaman dasar Islam.',
      'Peserta yang membutuhkan alur belajar bertahap sebelum ke tingkat lanjutan.',
    ],
    outcomes: [],
    modalities: [],
    curriculum: ['Aqidah', 'Ibadah', 'Adab'],
    facts: [
      { label: 'Untuk', value: 'Remaja & dewasa' },
      { label: 'Fokus', value: 'Aqidah, ibadah, adab' },
    ],
    dataStatus: 'pending',
    pendingNotice: pendingDefault,
    internalNote: 'Data program aktif perlu diverifikasi dengan admin.',
    status: 'active',
    enrollmentStatus: 'unverified',
    registrationUrl: null,
    contactUrl: null,
    image: '/images/learning-dasar.svg',
    imageAlt: 'Ilustrasi lembar catatan belajar dan tanda centang',
    tone: 'mist',
    seo: {
      title: 'Belajar Islam Dasar — Fondasi Aqidah, Ibadah, dan Adab',
      description: 'Jalur pembelajaran Islam dasar bagi pembelajar dewasa: aqidah, ibadah, dan adab yang disusun bertahap.',
    },
  },
  {
    id: 'quran',
    slug: 'quran-bahasa-arab-dewasa',
    title: 'Al-Qur’an & Bahasa Arab Dewasa',
    segment: 'dewasa',
    ageLabel: 'Dewasa',
    menuDescription: 'Belajar dan meningkatkan keterampilan',
    summary: 'Jalur pengembangan kemampuan membaca Al-Qur’an dan berbahasa Arab bagi peserta dewasa.',
    intro: [
      'Program ini ditujukan bagi peserta dewasa yang ingin belajar atau meningkatkan kemampuan Al-Qur’an dan Bahasa Arab secara terarah.',
    ],
    audience: [
      'Pembelajar dewasa yang ingin memperbaiki bacaan Al-Qur’an.',
      'Peserta yang ingin mulai atau melanjutkan belajar Bahasa Arab.',
    ],
    outcomes: [],
    modalities: [],
    curriculum: ['Al-Qur’an', 'Bahasa Arab'],
    facts: [
      { label: 'Untuk', value: 'Dewasa' },
      { label: 'Fokus', value: 'Al-Qur’an & Bahasa Arab' },
    ],
    dataStatus: 'pending',
    pendingNotice:
      'Rincian level, durasi, jadwal, dan biaya sedang disusun dalam dokumen program resmi. Halaman ini akan diperbarui setelah dokumen tersebut tersedia.',
    internalNote: 'Menunggu dokumen resmi dari Ustadz Sigit — jangan mengarang level, harga, atau durasi.',
    status: 'active',
    enrollmentStatus: 'unverified',
    registrationUrl: null,
    contactUrl: null,
    image: '/images/learning-arabic.svg',
    imageAlt: 'Ilustrasi papan tulis dengan huruf Arab ‘ain dan pensil',
    tone: 'sand',
    seo: {
      title: 'Al-Qur’an & Bahasa Arab Dewasa — Tarbiyah Sunnah Learning',
      description: 'Jalur belajar dan peningkatan kemampuan Al-Qur’an serta Bahasa Arab untuk peserta dewasa.',
    },
  },
  {
    id: 'mahad',
    slug: 'mahad-tsl',
    title: 'Ma’had TSL Daring',
    segment: 'lanjutan',
    ageLabel: 'Pendidikan lanjutan',
    menuDescription: 'Pembelajaran diniyyah lanjutan',
    summary: 'Pembelajaran diniyyah dan Bahasa Arab tingkat lanjutan yang diselenggarakan secara daring.',
    intro: [
      'Ma’had TSL Daring adalah jalur bagi pembelajar yang ingin memperdalam ilmu diniyyah dan Bahasa Arab secara lebih terstruktur.',
    ],
    audience: [
      'Pembelajar yang telah memiliki dasar dan ingin pendalaman diniyyah.',
      'Peserta yang menginginkan pembelajaran berjenjang dengan komitmen jangka panjang.',
    ],
    outcomes: [],
    modalities: [],
    curriculum: ['Diniyyah', 'Bahasa Arab'],
    facts: [
      { label: 'Jenjang', value: 'Lanjutan' },
      { label: 'Format', value: 'Daring' },
    ],
    dataStatus: 'pending',
    pendingNotice: pendingDefault,
    internalNote: 'Validasi level, kurikulum aktif, jadwal, dan periode penerimaan.',
    status: 'active',
    enrollmentStatus: 'unverified',
    registrationUrl: null,
    contactUrl: null,
    image: '/images/learning-mahad.svg',
    imageAlt: 'Ilustrasi layar laptop untuk pembelajaran daring',
    tone: 'mist',
    seo: {
      title: 'Ma’had TSL Daring — Pembelajaran Diniyyah Lanjutan',
      description: 'Pembelajaran diniyyah dan Bahasa Arab tingkat lanjutan secara daring bersama Tarbiyah Sunnah Learning.',
    },
  },
  {
    id: 's1',
    slug: 's1-pjj',
    title: 'S1 Pendidikan Jarak Jauh',
    segment: 'lanjutan',
    ageLabel: 'Pendidikan tinggi',
    menuDescription: 'Program sarjana Pendidikan Bahasa Arab',
    summary: 'Program pendidikan sarjana Pendidikan Bahasa Arab melalui pembelajaran jarak jauh.',
    intro: [
      'S1 Pendidikan Jarak Jauh (PJJ) memberi kesempatan menempuh studi sarjana Pendidikan Bahasa Arab tanpa harus meninggalkan kota dan pekerjaan.',
    ],
    audience: [
      'Pembelajar yang menginginkan studi akademik bergelar.',
      'Peserta yang membutuhkan fleksibilitas belajar jarak jauh.',
    ],
    outcomes: [],
    modalities: [],
    curriculum: ['Pendidikan Bahasa Arab'],
    facts: [
      { label: 'Jenjang', value: 'Sarjana (S1)' },
      { label: 'Format', value: 'Pendidikan jarak jauh' },
    ],
    dataStatus: 'pending',
    pendingNotice:
      'Status akademik, mitra penyelenggara, biaya, dan jadwal penerimaan sedang dikonfirmasi. Informasi resmi akan dicantumkan setelah divalidasi.',
    internalNote: 'Verifikasi status akademik dan pendaftaran.',
    status: 'active',
    enrollmentStatus: 'unverified',
    registrationUrl: null,
    contactUrl: null,
    image: '/images/learning-s1.svg',
    imageAlt: 'Ilustrasi topi wisuda',
    tone: 'sand',
    seo: {
      title: 'S1 Pendidikan Jarak Jauh — Pendidikan Bahasa Arab',
      description: 'Program sarjana Pendidikan Bahasa Arab melalui pembelajaran jarak jauh.',
    },
  },
  {
    id: 'senja',
    slug: 'gemilang-senja',
    title: 'TSL Gemilang Senja',
    segment: 'senja',
    ageLabel: 'Usia 45+',
    menuDescription: 'Pembinaan Islam usia 45+',
    summary:
      'Pembinaan Islam holistik untuk usia 45 tahun ke atas: diniyyah, interaksi dengan Al-Qur’an, tazkiyatun nafs, serta kesehatan fisik dan spiritual.',
    intro: [
      'TSL Gemilang Senja adalah program pembinaan Islam untuk usia 45 tahun ke atas. Fokusnya pada pembelajaran diniyyah, interaksi dengan Al-Qur’an, tazkiyatun nafs, serta kesehatan fisik dan spiritual.',
      'Program ini dirancang sebagai pembinaan yang menyeluruh dan berkelanjutan — bukan semata kursus keterampilan Al-Qur’an atau Bahasa Arab.',
    ],
    audience: [
      'Muslim dan muslimah usia 45 tahun ke atas yang ingin terus belajar.',
      'Keluarga yang ingin mendampingi orang tua dalam pembinaan Islam yang hangat dan fleksibel.',
    ],
    outcomes: [
      'Pemahaman aqidah dan fiqih ibadah yang menguatkan amalan harian.',
      'Interaksi yang rutin dan terbimbing dengan Al-Qur’an.',
      'Penyucian jiwa (tazkiyatun nafs) sebagai bekal menjalani usia matang.',
      'Perhatian pada kesehatan fisik, termasuk materi fisioterapi.',
    ],
    modalities: [
      { title: 'Kajian diniyyah daring', text: 'Kajian terjadwal dengan durasi 60 menit per pertemuan.' },
      { title: 'Private Al-Qur’an', text: 'Sesi individual 15 menit, tiga kali setiap pekan pada jalur Reguler.' },
      { title: 'Tatap muka', text: 'Jalur intensif full board untuk pengalaman belajar yang lebih mendalam.' },
    ],
    tracks: [
      {
        label: 'Reguler',
        format: 'Daring · setiap pekan',
        detail: '2× kajian diniyyah per pekan (@60 menit) + 3× sesi private Al-Qur’an per pekan (@15 menit).',
      },
      { label: 'Intensif', format: 'Tatap muka · full board', detail: 'Program 3 hari 2 malam.' },
      { label: 'Seasonal', format: 'Daring · Ramadan', detail: 'Program khusus Ramadan selama sekitar 1 bulan.' },
    ],
    curriculum: ['Aqidah', 'Fiqih ibadah', 'Tazkiyatun nafs', 'Al-Qur’an', 'Fisioterapi & kesehatan'],
    facts: [
      { label: 'Usia', value: '45 tahun ke atas' },
      { label: 'Jalur', value: 'Reguler · Intensif · Seasonal' },
      { label: 'Kajian reguler', value: '2× per pekan, 60 menit' },
      { label: 'Private Al-Qur’an', value: '3× per pekan, 15 menit' },
    ],
    faq: [
      {
        q: 'Apakah Gemilang Senja hanya daring?',
        a: 'Jalur Reguler dan Seasonal dilaksanakan daring, sedangkan jalur Intensif dilaksanakan tatap muka dengan format full board 3 hari 2 malam.',
      },
      {
        q: 'Apakah program ini kursus membaca Al-Qur’an?',
        a: 'Bukan semata itu. Gemilang Senja adalah pembinaan menyeluruh: diniyyah, Al-Qur’an, tazkiyatun nafs, dan kesehatan fisik serta spiritual.',
      },
      {
        q: 'Apakah keluarga bisa mendaftarkan orang tuanya?',
        a: 'Alur pendaftaran sedang dikonfirmasi. Keluarga dapat menghubungi pengelola melalui kanal resmi setelah tersedia di halaman Kontak.',
      },
    ],
    dataStatus: 'guide',
    status: 'active',
    enrollmentStatus: 'unverified',
    registrationUrl: null,
    contactUrl: null,
    image: '/images/learning-senja.svg',
    imageAlt: 'Ilustrasi kursi nyaman di dekat jendela bercahaya',
    tone: 'sand',
    seo: {
      title: 'TSL Gemilang Senja — Pembinaan Islam Usia 45+',
      description:
        'Pembinaan diniyyah, Al-Qur’an, tazkiyatun nafs, dan kesehatan untuk usia 45+. Jalur Reguler, Intensif 3 hari 2 malam, dan Seasonal Ramadan.',
    },
  },
];

export const getProgram = (id: string) => programs.find((p) => p.id === id)!;
export const programUrl = (p: Program) => `/program/${p.slug}`;

/** Kelompok mega menu sesuai brief bagian 6. */
export const menuGroups: { title: string; programIds: string[] }[] = [
  { title: 'Anak', programIds: ['kids'] },
  { title: 'Fondasi Islam', programIds: ['dasar'] },
  { title: 'Al-Qur’an & Bahasa Arab Dewasa', programIds: ['quran'] },
  { title: 'Pendidikan Lanjutan', programIds: ['mahad', 's1'] },
  { title: 'Gemilang Senja', programIds: ['senja'] },
];
