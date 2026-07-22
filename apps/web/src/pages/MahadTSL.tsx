import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const whatsapp = 'https://wa.me/62881025766336';
const registerUrl = 'https://pmb.sim-tsl.com';
const consultUrl = `${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin mendapatkan informasi pendaftaran program Ma’had TSL Daring.')}`;

const navItems = [
  { id: 'keunggulan', label: 'Keunggulan', icon: 'verified' },
  { id: 'sistem-belajar', label: 'Sistem Belajar', icon: 'schedule' },
  { id: 'kurikulum-mahad', label: 'Kurikulum', icon: 'menu_book' },
  { id: 'pendaftaran-mahad', label: 'Pendaftaran', icon: 'how_to_reg' },
  { id: 'biaya-mahad', label: 'Biaya', icon: 'payments' },
  { id: 'faq-mahad', label: 'FAQ', icon: 'help' },
];

const advantages = [
  ['workspace_premium', 'Hafalan Juz 30', 'Program hafalan Juz 30 yang diarahkan agar kuat, tepat, dan mutqin.'],
  ['translate', 'Bahasa Arab', 'Belajar membaca, memahami, dan menerjemahkan bahasa Arab secara bertahap.'],
  ['menu_book', 'Ilmu syar’i aplikatif', 'Pembelajaran ilmu syar’i yang aplikatif dan sesuai manhaj Ahlus Sunnah.'],
  ['library_books', 'Kitab ulama mu’tabar', 'Kurikulum dibangun dengan rujukan kitab para ulama yang mu’tabar.'],
  ['video_library', 'Kelas dan rekaman daring', 'Pembelajaran sepenuhnya online dengan rekaman di setiap pertemuan.'],
];

const learningSystem = [
  ['cast_for_education', 'Full Online', 'Belajar dari lokasi masing-masing melalui kelas daring TSL.'],
  ['date_range', 'Senin–Sabtu', 'Pertemuan rutin enam hari dalam sepekan.'],
  ['schedule', '19.45–20.45 WIB', 'Satu jam belajar pada waktu malam yang konsisten.'],
  ['video_library', 'Rekaman tersedia', 'Setiap pertemuan dapat dipelajari kembali melalui rekaman.'],
];

const subjects = [
  ['translate', 'Bahasa Arab', 'Nahwu, sharaf, dan durusul lughah.'],
  ['auto_stories', 'Aqidah', 'Pemurnian tauhid dan penguatan manhaj.'],
  ['balance', 'Fiqh', 'Ibadah harian dan dasar muamalah.'],
  ['volunteer_activism', 'Adab', 'Akhlak mulia dan adab penuntut ilmu.'],
  ['history_edu', 'Hadits', 'Kajian hadits dan pengenalan kitab induk.'],
  ['book_2', 'Tafsir', 'Tadabbur dan pemahaman ayat Al-Qur’an.'],
];

const faqs = [
  ['Apakah seluruh pembelajaran dilakukan secara daring?', 'Ya. Kegiatan belajar, tes penempatan, materi, dan administrasi dilaksanakan secara daring melalui kanal resmi serta LMS TSL.'],
  ['Apakah pemula dapat mengikuti program ini?', 'Dapat. Tes penempatan membantu menentukan level belajar yang sesuai, sehingga peserta memulai dari tingkat kemampuan yang tepat.'],
  ['Berapa lama satu periode pembelajaran?', 'Program berjalan dengan sistem semester dan tahapan belajar. Jadwal serta durasi terbaru diinformasikan pada saat pendaftaran.'],
  ['Apakah tersedia beasiswa?', 'Tersedia dukungan beasiswa bagi santri berprestasi dan kurang mampu, mengikuti syarat, kuota, dan ketentuan yang berlaku.'],
  ['Apakah biaya dapat berubah?', 'Nominal pada halaman ini merupakan acuan program. Konfirmasikan biaya dan skema pembayaran terbaru kepada admin sebelum menyelesaikan pendaftaran.'],
];

export default function MahadTSL() {
  const [activeSection, setActiveSection] = useState('keunggulan');
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-24% 0px -58% 0px', threshold: [0, 0.15, 0.35] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById('mahad-hero');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShowMobileCta(!entry.isIntersecting), { threshold: 0.08 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#fbfaf4] pb-20 text-[#1d2a20] sm:pb-0">
      <section id="mahad-hero" className="site-container py-6 sm:py-10">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-[#183d25] text-white shadow-[0_24px_70px_rgba(24,61,37,.17)]">
          <div className="grid lg:min-h-[620px] lg:grid-cols-[1.05fr_.95fr]">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex flex-wrap items-center gap-3"><span className="inline-flex items-center gap-2 rounded-full bg-[#c8efb7] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] text-[#285c32]"><span className="material-symbols-outlined text-[16px]">school</span>Pendidikan terstruktur</span><Link to="/program" className="text-xs font-bold text-white/55 hover:text-white">Program <span aria-hidden="true">/</span> Ma’had TSL</Link></div>
              <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#f0c84b]">Bahasa Arab & ilmu diniyah</p>
              <h1 className="mt-3 max-w-2xl font-headline text-[2.55rem] font-black leading-[1.04] tracking-[-.04em] sm:text-5xl lg:text-[3.75rem]">Ma’had TSL Daring: belajar lebih terarah dan mendalam.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">Program pembelajaran Bahasa Arab dan ilmu diniyah yang sistematis, bertahap, dan berbasis level belajar untuk membangun fondasi keilmuan Islam berdasarkan Al-Qur’an dan As-Sunnah.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-7"><span className="material-symbols-outlined text-xl">how_to_reg</span>Daftar Ma’had TSL</a><a href="#kurikulum-mahad" className="btn border border-white/25 bg-white/5 px-7 text-white hover:bg-white/10"><span className="material-symbols-outlined text-xl">menu_book</span>Pelajari kurikulum</a></div>
              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3 border-t border-white/15 pt-6">{[['Senin–Sabtu','jadwal kelas'],['19.45 WIB','mulai belajar'],['Tersedia','rekaman kelas']].map(([value,label]) => <div key={label}><strong className="block font-headline text-base text-[#f0c84b] sm:text-xl">{value}</strong><span className="mt-1 block text-[11px] text-white/50">{label}</span></div>)}</div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden lg:min-h-full"><img src="/images/program-bahasa-arab-landscape.webp" alt="Ruang belajar Bahasa Arab dan ilmu diniyah dengan buku serta perangkat digital" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#183d25]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#183d25]/35 lg:to-transparent" /><div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/25 bg-[#102b1b]/85 p-5 backdrop-blur-md sm:inset-x-8 sm:bottom-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f0c84b] text-[#3d3100] material-symbols-outlined">auto_stories</span><div><p className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#f0c84b]">Bertahap & amanah</p><strong className="mt-1 block font-headline text-lg">Kurikulum bertahap dan terarah</strong></div></div></div></div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi halaman Ma’had TSL" className="sticky top-[72px] z-30 border-y border-[#d9ddcf] bg-[#fbfaf4]/95 shadow-[0_8px_24px_rgba(24,61,37,.04)] backdrop-blur-xl"><div className="site-container flex items-center gap-3"><div className="no-scrollbar flex flex-1 gap-1 overflow-x-auto py-2.5">{navItems.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all ${activeSection === item.id ? 'bg-[#285c32] text-white shadow-sm' : 'text-[#596358] hover:bg-[#e3efd8] hover:text-[#285c32]'}`}><span className="material-symbols-outlined text-[16px]">{item.icon}</span>{item.label}</a>)}</div><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-primary hidden min-h-10 shrink-0 px-5 py-2 text-xs md:inline-flex">Daftar sekarang<span className="material-symbols-outlined text-[16px]">arrow_outward</span></a></div></nav>

      <section id="keunggulan" className="site-container scroll-mt-36 py-20 sm:py-24"><div className="text-center"><span className="eyebrow">Keunggulan program</span><h2 className="mx-auto mt-5 section-title">Fondasi ilmu, bahasa, dan hafalan dalam satu program.</h2><p className="mx-auto mt-4 section-copy">Setiap bagian pembelajaran dirancang agar peserta bukan hanya menyelesaikan materi, tetapi juga memahami dan mengamalkannya secara bertahap.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{advantages.map(([icon,title,text],index) => <article key={title} className={`group rounded-2xl border border-[#d8ddd1] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#9caf94] hover:shadow-[0_16px_36px_rgba(24,61,37,.09)] ${index === advantages.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e3efd8] text-[#285c32] transition-colors group-hover:bg-[#285c32] group-hover:text-white material-symbols-outlined">{icon}</span><span className="font-headline text-4xl font-black text-[#e5e9e1]">0{index+1}</span></div><h3 className="mt-7 font-headline text-2xl font-bold text-[#183d25]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#697264]">{text}</p></article>)}</div></section>

      <section id="sistem-belajar" className="scroll-mt-36 bg-[#183d25] py-20 text-white sm:py-24"><div className="site-container"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start lg:gap-14"><div><span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#f0c84b]">Sistem pembelajaran</span><h2 className="mt-5 font-headline text-3xl font-black leading-tight sm:text-4xl">Belajar rutin tanpa kehilangan kesempatan mengulang.</h2><p className="mt-4 max-w-md text-sm leading-7 text-white/65">Jadwal malam yang konsisten dan rekaman setiap pertemuan membantu peserta menjaga ritme belajar dari mana saja.</p><div className="mt-8 rounded-2xl border border-white/15 bg-white/[.06] p-5"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f0c84b]">Informasi pendaftaran</p><a href={consultUrl} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-3 font-headline text-xl font-bold text-white hover:text-[#f0c84b]"><span className="material-symbols-outlined">call</span>0881 0257 66336</a><p className="mt-2 text-xs text-white/55">Ma’had & STPII Support</p></div></div><div className="grid gap-4 sm:grid-cols-2">{learningSystem.map(([icon,title,text]) => <article key={title} className="rounded-2xl border border-white/15 bg-white/[.07] p-6"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f0c84b] text-[#3d3100] material-symbols-outlined">{icon}</span><h3 className="mt-5 font-headline text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-7 text-white/60">{text}</p></article>)}</div></div><div className="mt-10 flex flex-col gap-3 rounded-2xl bg-[#f0c84b] p-5 text-[#2d270d] sm:flex-row sm:items-center sm:justify-between sm:px-7"><div><strong className="font-headline text-xl">Siap mengikuti kelas Ma’had?</strong><p className="mt-1 text-sm text-[#5f500e]">Lengkapi pendaftaran melalui portal PMB TSL.</p></div><a href={registerUrl} target="_blank" rel="noreferrer" className="btn bg-[#183d25] px-7 text-white hover:bg-[#102b1b]">Daftar di PMB<span className="material-symbols-outlined text-lg">arrow_outward</span></a></div></div></section>

      <section id="kurikulum-mahad" className="scroll-mt-36 bg-[#eef0e7] py-20 sm:py-24"><div className="site-container grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14"><div><span className="eyebrow bg-white">Kurikulum Ma’had</span><h2 className="mt-5 section-title">Enam rumpun ilmu dalam satu jalur.</h2><p className="mt-4 section-copy">Bahasa menjadi alat untuk memahami sumber ilmu, sementara materi diniyah menata pemahaman dan amal secara seimbang.</p><div className="mt-8 rounded-2xl bg-[#285c32] p-6 text-white"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f0c84b]">Kurikulum berbasis kitab</p><p className="mt-3 text-sm leading-7 text-white/70">Materi disusun dengan rujukan kitab para ulama yang mu’tabar agar pembelajaran memiliki dasar ilmiah yang jelas, terarah, dan sesuai manhaj Ahlus Sunnah.</p></div></div><div className="grid gap-4 sm:grid-cols-2">{subjects.map(([icon,title,text]) => <article key={title} className="flex gap-4 rounded-2xl border border-[#d8ddd1] bg-white p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e3efd8] text-[#285c32] material-symbols-outlined">{icon}</span><div><h3 className="font-headline text-lg font-bold text-[#183d25]">{title}</h3><p className="mt-1 text-xs leading-6 text-[#697264]">{text}</p></div></article>)}</div></div>
        <div className="site-container mt-14 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-[26px] bg-white p-7 sm:p-8"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#987400]">Target peserta</p><h3 className="mt-3 font-headline text-2xl font-bold text-[#183d25]">Siapa yang cocok bergabung?</h3><div className="mt-6 space-y-4">{[['child_care','Remaja','Membangun karakter Islami dan kebiasaan belajar sejak dini.'],['person','Dewasa','Memperdalam ilmu agama di tengah kesibukan.'],['cast_for_education','Guru & pengajar','Meningkatkan kompetensi bahasa dan ilmu syar’i.']].map(([icon,title,text]) => <div key={title} className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#c8efb7] text-[#285c32] material-symbols-outlined">{icon}</span><div><h4 className="text-sm font-extrabold text-[#183d25]">{title}</h4><p className="mt-1 text-xs leading-5 text-[#697264]">{text}</p></div></div>)}</div></div><div className="relative overflow-hidden rounded-[26px] bg-[#183d25] p-7 text-white sm:p-9"><span className="material-symbols-outlined absolute -bottom-10 -right-4 text-[170px] text-white/[.05]">school</span><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f0c84b]">Komitmen belajar</p><h3 className="mt-3 max-w-lg font-headline text-3xl font-bold">Program untuk Anda yang siap bertumbuh secara bertahap.</h3><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Ma’had menuntut konsistensi mengikuti materi, evaluasi, dan administrasi setiap semester. Bila masih ragu dengan kesiapan atau level awal, admin siap membantu.</p><a href={consultUrl} target="_blank" rel="noreferrer" className="btn mt-7 border border-white/25 bg-white/5 px-6 text-white hover:bg-white/10">Konsultasikan kesiapan Anda</a></div></div>
      </section>

      <section id="pendaftaran-mahad" className="site-container scroll-mt-36 py-20 sm:py-24"><div className="text-center"><span className="eyebrow">Alur pendaftaran</span><h2 className="mx-auto mt-5 section-title">Empat langkah menuju kelas pertama.</h2><p className="mx-auto mt-4 section-copy">Setiap tahap membantu memastikan peserta berada pada kelas dan jalur belajar yang tepat.</p></div><div className="relative mx-auto mt-12 max-w-5xl"><div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[#bec7ba] md:block"/><div className="relative grid gap-5 md:grid-cols-4">{[
        ['01','Registrasi','Isi formulir melalui kanal pendaftaran resmi TSL.','edit_document'],
        ['02','Tes penempatan','Ikuti ujian daring untuk menentukan level belajar.','assignment'],
        ['03','Administrasi','Selesaikan biaya pendidikan dan konfirmasi.','fact_check'],
        ['04','Mulai belajar','Akses LMS dan ikuti materi pertama.','rocket_launch'],
      ].map(([number,title,text,icon],index) => <article key={number} className="rounded-2xl border border-[#d8ddd1] bg-[#fbfaf4] p-5 text-center"><span className={`mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-[#fbfaf4] font-headline text-xl font-black shadow-sm ${index === 3 ? 'bg-[#e5bc27] text-[#3a3008]' : 'bg-[#285c32] text-white'}`}>{number}</span><span className="material-symbols-outlined mt-6 text-2xl text-[#285c32]">{icon}</span><h3 className="mt-3 font-headline text-lg font-bold text-[#183d25]">{title}</h3><p className="mt-2 text-xs leading-6 text-[#697264]">{text}</p></article>)}</div></div></section>

      <section id="biaya-mahad" className="scroll-mt-36 bg-[#183d25] py-20 text-white sm:py-24"><div className="site-container"><div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#f0c84b]">Investasi ilmu</span><h2 className="mt-5 font-headline text-3xl font-black sm:text-4xl">Transparan sejak awal.</h2><p className="mt-4 max-w-md text-sm leading-7 text-white/65">Biaya mendukung layanan pembelajaran digital dan pengelolaan kelas yang terarah. Konfirmasikan nominal periode berjalan kepada admin.</p></div><div className="overflow-hidden rounded-[26px] bg-white text-[#1d2a20]"><div className="grid sm:grid-cols-2"><div className="p-7 sm:p-8"><p className="text-[10px] font-extrabold uppercase tracking-[.13em] text-[#7a8175]">Pendaftaran & tes</p><strong className="mt-3 block font-headline text-2xl text-[#183d25]">Akan diinformasikan</strong><p className="mt-2 text-xs text-[#697264]">Disampaikan pada masa SPMB.</p></div><div className="border-t border-[#d9ddcf] p-7 sm:border-l sm:border-t-0 sm:p-8"><p className="text-[10px] font-extrabold uppercase tracking-[.13em] text-[#7a8175]">SPP per semester</p><strong className="mt-3 block font-headline text-3xl text-[#183d25]">Rp1.800.000/semester</strong><p className="mt-2 text-xs text-[#697264]">Dapat dicicil hingga 6 kali.</p></div></div><div className="flex gap-3 border-t border-[#d9ddcf] bg-[#eff8e9] p-5 sm:px-8"><span className="material-symbols-outlined text-xl text-[#285c32]">volunteer_activism</span><p className="text-xs leading-6 text-[#596358]"><strong className="text-[#183d25]">Beasiswa tersedia</strong> bagi santri berprestasi dan kurang mampu, sesuai syarat, kuota, dan ketentuan.</p></div></div></div></div></section>

      <section id="faq-mahad" className="site-container scroll-mt-36 py-20 sm:py-24"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><span className="eyebrow">Pertanyaan umum</span><h2 className="mt-5 section-title">Sebelum mendaftar.</h2><p className="mt-4 section-copy">Pastikan format belajar, level awal, dan komitmen biayanya sesuai dengan kebutuhan Anda.</p><a href={consultUrl} target="_blank" rel="noreferrer" className="btn btn-outline mt-7"><span className="material-symbols-outlined text-lg">chat</span>Hubungi admin</a></div><div className="divide-y divide-[#d9ddcf] border-y border-[#d9ddcf]">{faqs.map(([question,answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-headline text-lg font-bold text-[#183d25]"><span>{question}</span><span className="material-symbols-outlined transition-transform group-open:rotate-45">add</span></summary><p className="max-w-2xl pr-10 pt-3 text-sm leading-7 text-[#697264]">{answer}</p></details>)}</div></div></section>

      <section className="site-container pb-16 sm:pb-20"><div className="relative overflow-hidden rounded-[30px] bg-[#e5bc27] px-6 py-12 text-center sm:px-10 sm:py-16"><span className="material-symbols-outlined absolute -bottom-10 -right-4 text-[190px] text-white/20">auto_stories</span><p className="relative text-[10px] font-extrabold uppercase tracking-[.14em] text-[#6b5200]">Semester baru</p><h2 className="relative mx-auto mt-4 max-w-3xl font-headline text-3xl font-black leading-tight text-[#2d270d] sm:text-4xl">Mulai perjalanan ilmu Anda bersama Ma’had TSL.</h2><p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5f500e]">Ambil langkah pertama menuju pembelajaran Bahasa Arab dan diniyah yang lebih terarah.</p><div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={registerUrl} target="_blank" rel="noreferrer" className="btn bg-[#183d25] px-8 text-white hover:bg-[#102b1b]">Daftar Ma’had TSL</a><a href={consultUrl} target="_blank" rel="noreferrer" className="btn border border-[#786415]/35 bg-white/25 px-8 text-[#3f350a] hover:bg-white/40">Konsultasi admin</a></div></div></section>

      <div aria-hidden={!showMobileCta} className={`fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-white/20 bg-[#183d25]/95 p-2 shadow-[0_14px_40px_rgba(16,39,24,.35)] backdrop-blur-xl transition-all duration-300 sm:hidden ${showMobileCta ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}><div className="flex items-center gap-2"><a href={consultUrl} target="_blank" rel="noreferrer" aria-label="Konsultasi program Ma’had TSL" className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/20 text-white"><span className="material-symbols-outlined">chat</span></a><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-accent min-h-12 flex-1 px-4">Daftar Ma’had<span className="material-symbols-outlined text-lg">arrow_outward</span></a></div></div>
    </main>
  );
}
