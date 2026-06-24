import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Category = 'Semua' | 'Anak & Keluarga' | 'Fondasi' | 'Akademik' | 'Kajian';

const categories: { label: Category; icon: string }[] = [
  { label: 'Semua', icon: 'apps' },
  { label: 'Anak & Keluarga', icon: 'family_restroom' },
  { label: 'Fondasi', icon: 'foundation' },
  { label: 'Akademik', icon: 'school' },
  { label: 'Kajian', icon: 'live_tv' },
];

const programs = [
  {
    title: 'Belajar Islam Dasar', short: 'BID', category: 'Fondasi' as Category, audience: 'Pemula & dewasa', format: 'Mandiri melalui LMS', icon: 'menu_book', to: '/bid',
    image: '/images/program-bid-landscape.webp', alt: 'Ruang belajar Islam dasar dengan buku dan laptop',
    text: 'Bangun fondasi aqidah, ibadah, manhaj, dan adab melalui jalur belajar mandiri yang fleksibel namun tetap terstruktur.',
    accent: 'bg-[#e6eedc]', badge: 'Program fondasi utama',
  },
  {
    title: "Program Al-Qur'an", short: "Al-Qur'an", category: 'Anak & Keluarga' as Category, audience: 'Anak & dewasa', format: 'Bimbingan daring', icon: 'auto_stories', to: '/al-quran',
    image: '/images/program-quran-anak-landscape.webp', alt: "Ruang belajar Al-Qur'an dengan rehal dan perangkat digital",
    text: 'Bimbingan tahsin, talaqqi, dan hafalan untuk membantu anak maupun dewasa membaca Al-Qur’an dengan lebih baik.',
    accent: 'bg-[#f5edcf]', badge: 'Tahsin & tahfizh',
  },
  {
    title: 'Preschool Daring TSL', short: 'Preschool', category: 'Anak & Keluarga' as Category, audience: 'Usia prasekolah', format: 'Kelas interaktif', icon: 'toys', to: '/preschool-daring',
    image: '/images/program-quran-anak.png', alt: "Ilustrasi Al-Qur’an ceria dengan pola geometris untuk anak",
    text: 'Pengalaman belajar usia dini melalui cerita, gerak, bermain, dan pembiasaan Islami bersama pendampingan keluarga.',
    accent: 'bg-[#fde8d5]', badge: 'Bermain & bertumbuh',
  },
  {
    title: 'Madrasah Anak Daring', short: 'Madrasah Anak', category: 'Anak & Keluarga' as Category, audience: 'Anak usia sekolah', format: 'Kelas daring', icon: 'child_care', to: '/madrasah-anak',
    image: '/images/hero-learning-library-landscape.webp', alt: 'Perpustakaan Islam dengan buku dan perangkat belajar digital',
    text: 'Pendidikan diniyah untuk anak usia sekolah melalui pembelajaran aqidah, ibadah, adab, dan materi pendukung yang menyenangkan.',
    accent: 'bg-[#e5ece5]', badge: 'Diniyah anak',
  },
  {
    title: 'Bahasa Arab Daring', short: 'Bahasa Arab', category: 'Fondasi' as Category, audience: 'Pemula & lanjutan', format: 'Kelas daring bertahap', icon: 'translate', to: '/bahasa-arab',
    image: '/images/program-arabic-hero.jpg', alt: 'Laptop untuk belajar Bahasa Arab dari rumah',
    text: 'Pelajari Bahasa Arab dari dasar melalui tahapan yang membantu peserta memahami kosakata, struktur, dan teks secara bertahap.',
    accent: 'bg-[#e4eee1]', badge: 'Bahasa Al-Qur’an',
  },
  {
    title: 'Ma’had TSL Daring', short: 'Ma’had TSL', category: 'Akademik' as Category, audience: 'Remaja & dewasa', format: 'Berbasis marhalah', icon: 'account_balance', to: '/mahad-tsl',
    image: '/images/program-bahasa-arab-landscape.webp', alt: 'Ruang belajar Bahasa Arab dan ilmu diniyah',
    text: 'Pembelajaran Bahasa Arab dan ilmu diniyah yang terstruktur, bertahap, dan mendalam melalui sistem marhalah.',
    accent: 'bg-[#e8ebdf]', badge: 'Bahasa Arab & diniyah',
  },
  {
    title: 'S1 Pendidikan Jarak Jauh', short: 'S1 PJJ', category: 'Akademik' as Category, audience: 'Calon mahasiswa', format: 'Perkuliahan daring', icon: 'school', to: '/s1-pjj',
    image: '/images/program-s1-hero.jpg', alt: 'Koridor kampus bernuansa hijau',
    text: 'Jalur pendidikan tinggi Bahasa Arab melalui perkuliahan jarak jauh yang membantu mahasiswa belajar tanpa meninggalkan aktivitas utama.',
    accent: 'bg-[#e1ebe7]', badge: 'Jenjang sarjana',
  },
  {
    title: 'Kajian Rutin Daring', short: 'Kajian Rutin', category: 'Kajian' as Category, audience: 'Terbuka untuk umum', format: 'Live & arsip rekaman', icon: 'live_tv', to: '/kajian',
    image: '/images/program-kajian-hero.jpg', alt: 'Pintu lengkung sebagai simbol menuju majelis ilmu',
    text: 'Jaga ritme belajar melalui kajian aqidah, fiqh, tafsir, dan keluarga yang dapat diikuti langsung maupun dipelajari kembali.',
    accent: 'bg-[#dce8df]', badge: 'Gratis & terbuka',
  },
];

const whatsapp = 'https://wa.me/62895377710900';

export default function Program() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');
  const [query, setQuery] = useState('');

  const filteredPrograms = useMemo(() => {
    const keyword = query.trim().toLocaleLowerCase('id');
    return programs.filter((program) => {
      const categoryMatches = activeCategory === 'Semua' || program.category === activeCategory;
      const keywordMatches = !keyword || `${program.title} ${program.short} ${program.audience} ${program.format} ${program.text}`.toLocaleLowerCase('id').includes(keyword);
      return categoryMatches && keywordMatches;
    });
  }, [activeCategory, query]);

  return (
    <main className="bg-[#fbfaf4]">
      <section className="site-container py-6 sm:py-10">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-[#183d25] px-6 py-14 text-white shadow-[0_24px_70px_rgba(24,61,37,.17)] sm:px-10 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute -right-28 -top-32 h-[420px] w-[420px] rounded-full border-[70px] border-white/[.035]" />
          <div className="pointer-events-none absolute -bottom-24 right-[22%] h-56 w-56 rounded-full bg-[#e5bc27]/10 blur-2xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f0c84b]"><span className="material-symbols-outlined text-[16px]">route</span>Jalur belajar TSL</span><h1 className="mt-6 max-w-3xl font-headline text-[2.7rem] font-black leading-[1.04] tracking-[-.04em] sm:text-5xl lg:text-[4rem]">Temukan program untuk langkah Anda berikutnya.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">Mulai dari pendidikan usia dini, fondasi ilmu, Al-Qur’an, Bahasa Arab, hingga pendidikan tinggi—setiap program memiliki tujuan, ritme, dan pendampingan yang jelas.</p></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">{[
              ['8','program tersedia'],['Daring','akses dari rumah'],['Bertahap','sesuai kesiapan'],['Keluarga','hingga akademik'],
            ].map(([value,label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[.055] p-4"><strong className="block font-headline text-xl text-[#f0c84b] sm:text-2xl">{value}</strong><span className="mt-1 block text-[11px] text-white/50">{label}</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-y border-[#d9ddcf] bg-[#fbfaf4]/95 shadow-[0_8px_24px_rgba(24,61,37,.04)] backdrop-blur-xl" aria-label="Pencarian dan filter program">
        <div className="site-container flex flex-col gap-3 py-3 lg:flex-row lg:items-center">
          <label className="flex min-h-11 shrink-0 items-center gap-3 rounded-xl border border-[#c9cec4] bg-white px-4 text-[#596358] lg:w-[300px]"><span className="material-symbols-outlined text-xl">search</span><span className="sr-only">Cari program</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Cari program atau kebutuhan…" className="w-full border-0 bg-transparent p-0 text-sm focus:ring-0" /></label>
          <div className="no-scrollbar flex gap-2 overflow-x-auto" role="group" aria-label="Filter kategori program">{categories.map((category) => <button key={category.label} type="button" aria-pressed={activeCategory === category.label} onClick={() => setActiveCategory(category.label)} className={`inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border px-4 text-xs font-bold transition-all ${activeCategory === category.label ? 'border-[#285c32] bg-[#285c32] text-white shadow-sm' : 'border-[#d3d8cf] bg-white text-[#596358] hover:border-[#285c32] hover:text-[#285c32]'}`}><span className="material-symbols-outlined text-[16px]">{category.icon}</span>{category.label}</button>)}</div>
          <span className="ml-auto hidden shrink-0 text-xs font-bold text-[#7a8175] lg:block">{filteredPrograms.length} program ditemukan</span>
        </div>
      </section>

      <section className="site-container py-20 sm:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><span className="eyebrow">Pilihan program</span><h2 className="mt-5 section-title">Belajar sesuai kebutuhan hari ini.</h2><p className="mt-4 section-copy">Baca tujuan dan format setiap program sebelum memilih. Anda dapat berkonsultasi bila masih ragu menentukan titik mulai.</p></div><p className="text-xs font-bold text-[#7a8175] lg:hidden">{filteredPrograms.length} program ditemukan</p></div>

        {filteredPrograms.length ? <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filteredPrograms.map((program) => <Link key={program.to} to={program.to} className="program-card group flex flex-col"><div className={`relative aspect-[16/10] overflow-hidden ${program.accent}`}><img src={program.image} alt={program.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-[#102b1b]/55 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.1em] text-[#285c32] backdrop-blur">{program.badge}</span><span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#285c32] shadow-lg transition-transform group-hover:rotate-12 material-symbols-outlined">{program.icon}</span></div><div className="flex flex-1 flex-col p-6"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#eef3e9] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-[#596358]">{program.audience}</span><span className="rounded-full bg-[#fbf1c8] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.1em] text-[#806300]">{program.format}</span></div><h3 className="mt-5 font-headline text-2xl font-bold leading-tight text-[#183d25]">{program.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-[#667064]">{program.text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#285c32]">Lihat program<span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span></span></div></Link>)}</div> : <div className="rounded-[28px] border border-dashed border-[#bdc5b8] bg-white px-6 py-16 text-center"><span className="material-symbols-outlined text-5xl text-[#9aa395]">search_off</span><h3 className="mt-5 font-headline text-2xl font-bold text-[#183d25]">Program belum ditemukan.</h3><p className="mt-2 text-sm text-[#697264]">Coba gunakan kata kunci lain atau tampilkan kembali seluruh kategori.</p><button type="button" onClick={() => { setQuery(''); setActiveCategory('Semua'); }} className="btn btn-outline mt-6">Tampilkan semua program</button></div>}
      </section>

      <section className="bg-[#eef0e7] py-20 sm:py-24"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-16"><div><span className="eyebrow bg-white">Panduan memilih</span><h2 className="mt-5 section-title">Mulai dari siapa yang akan belajar.</h2><p className="mt-4 section-copy">Tidak semua orang perlu memulai dari program yang sama. Gunakan kebutuhan dan kesiapan sebagai kompas pertama.</p><a href={`${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin dibantu memilih program TSL yang paling sesuai.')}`} target="_blank" rel="noreferrer" className="btn btn-primary mt-7"><span className="material-symbols-outlined text-lg">chat</span>Konsultasi pilihan program</a></div><div className="grid gap-3 sm:grid-cols-2">{[
        ['Anak usia prasekolah','Preschool Daring','Cerita, bermain, gerak, dan pembiasaan bersama keluarga.','/preschool-daring','toys'],
        ['Anak usia sekolah','Madrasah & Al-Qur’an','Diniyah, adab, tahsin, dan hafalan dengan pendampingan.','/madrasah-anak','child_care'],
        ['Pemula & masyarakat','BID, Bahasa Arab, Kajian','Mulai dari fondasi atau jaga ritme belajar sesuai kebutuhan.','/bid','foundation'],
        ['Jalur akademik','Ma’had & S1 PJJ','Pembelajaran terstruktur untuk komitmen yang lebih mendalam.','/mahad-tsl','school'],
      ].map(([audience,title,text,to,icon]) => <Link key={audience} to={to} className="group rounded-2xl border border-[#d5dbd0] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#9caf94] hover:shadow-[0_14px_30px_rgba(24,61,37,.08)]"><div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e3efd8] text-[#285c32] material-symbols-outlined">{icon}</span><div><p className="text-[9px] font-extrabold uppercase tracking-[.12em] text-[#8a6c00]">{audience}</p><h3 className="mt-1 font-headline text-lg font-bold text-[#183d25]">{title}</h3><p className="mt-2 text-xs leading-6 text-[#697264]">{text}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#285c32]">Lihat rekomendasi<span className="material-symbols-outlined text-[15px] transition-transform group-hover:translate-x-1">arrow_forward</span></span></div></div></Link>)}</div></div></div></section>

      <section className="site-container py-20 sm:py-24"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><span className="eyebrow">Pertanyaan umum</span><h2 className="mt-5 section-title">Sebelum memilih program.</h2><p className="mt-4 section-copy">Informasi jadwal, biaya, dan periode penerimaan dapat berbeda pada setiap jalur. Selalu konfirmasikan detail terbaru kepada admin.</p></div><div className="divide-y divide-[#d9ddcf] border-y border-[#d9ddcf]">{[
        ['Apakah seluruh program dilaksanakan secara daring?','Katalog ini berfokus pada program daring TSL. Format kelas berbeda pada setiap program: mandiri melalui LMS, kelas langsung, perkuliahan, atau kombinasi beberapa metode.'],
        ['Program mana yang tepat untuk pemula?','Belajar Islam Dasar cocok untuk membangun fondasi umum. Untuk kebutuhan khusus, Anda dapat memilih Bahasa Arab, Al-Qur’an, atau berkonsultasi dengan admin.'],
        ['Apakah tersedia program untuk anak?','Ya. Preschool Daring dirancang untuk usia prasekolah, sedangkan Madrasah Anak dan Program Al-Qur’an melayani kebutuhan anak pada tahap berikutnya.'],
        ['Di mana saya melihat biaya dan jadwal?','Buka halaman detail program yang diminati. Jika informasi belum dicantumkan, hubungi admin karena jadwal, kuota, dan biaya dapat berubah setiap periode.'],
      ].map(([question,answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-headline text-lg font-bold text-[#183d25]"><span>{question}</span><span className="material-symbols-outlined transition-transform group-open:rotate-45">add</span></summary><p className="max-w-2xl pr-10 pt-3 text-sm leading-7 text-[#697264]">{answer}</p></details>)}</div></div></section>

      <section className="site-container pb-16 sm:pb-20"><div className="relative overflow-hidden rounded-[30px] bg-[#e5bc27] px-6 py-12 text-center sm:px-10 sm:py-16"><span className="material-symbols-outlined absolute -bottom-12 -right-5 text-[200px] text-white/20">route</span><p className="relative text-[10px] font-extrabold uppercase tracking-[.14em] text-[#6b5200]">Tidak harus memilih sendiri</p><h2 className="relative mx-auto mt-4 max-w-3xl font-headline text-3xl font-black leading-tight text-[#2d270d] sm:text-4xl">Ceritakan kebutuhan belajar Anda dan keluarga.</h2><p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5f500e]">Tim TSL akan membantu mengarahkan Anda ke program, tingkat, dan format yang paling sesuai.</p><div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={`${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin berkonsultasi untuk memilih program TSL.')}`} target="_blank" rel="noreferrer" className="btn bg-[#183d25] px-8 text-white hover:bg-[#102b1b]">Konsultasi dengan admin</a><Link to="/tentang" className="btn border border-[#796414]/35 bg-white/25 px-8 text-[#3f350a] hover:bg-white/40">Kenali TSL</Link></div></div></section>
    </main>
  );
}
