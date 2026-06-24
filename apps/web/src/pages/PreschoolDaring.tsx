import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const whatsapp = 'https://wa.me/62895377710900';
const registerUrl = `${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin mendaftarkan anak ke program Preschool Daring TSL. Mohon informasi pendaftarannya.')}`;
const consultUrl = `${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin berkonsultasi mengenai kesiapan anak mengikuti Preschool Daring TSL.')}`;

const navItems = [
  { id: 'tentang-preschool', label: 'Tentang program', icon: 'favorite' },
  { id: 'tema-preschool', label: 'Tema belajar', icon: 'toys' },
  { id: 'pengalaman-preschool', label: 'Pengalaman kelas', icon: 'videocam' },
  { id: 'orang-tua-preschool', label: 'Peran orang tua', icon: 'family_restroom' },
  { id: 'faq-preschool', label: 'FAQ', icon: 'help' },
];

const learningThemes = [
  ['auto_stories', 'Cinta Al-Qur’an', 'Mengenal huruf, mendengar ayat, dan menumbuhkan kedekatan dengan Al-Qur’an.'],
  ['mosque', 'Aqidah sederhana', 'Mengenal Allah, ciptaan-Nya, dan rasa syukur melalui bahasa yang dekat dengan anak.'],
  ['volunteer_activism', 'Adab keseharian', 'Membiasakan salam, doa, berbagi, menjaga kebersihan, dan menghormati orang tua.'],
  ['waving_hand', 'Ibadah dasar', 'Mengenal wudhu, gerakan shalat, dan doa harian melalui contoh serta pengulangan.'],
  ['palette', 'Kreasi & eksplorasi', 'Aktivitas seni, cerita, gerak, dan permainan untuk menguatkan rasa ingin tahu.'],
  ['record_voice_over', 'Bahasa & komunikasi', 'Mendorong anak menyimak, bercerita, menambah kosakata, dan percaya diri berbicara.'],
];

const faqs = [
  ['Apakah anak harus sudah bisa membaca?', 'Tidak. Program dirancang untuk tahap prasekolah dan menggunakan pendekatan visual, cerita, gerak, bunyi, serta aktivitas sederhana.'],
  ['Apakah orang tua harus mendampingi setiap kelas?', 'Pendampingan sangat dianjurkan, khususnya pada masa adaptasi. Orang tua membantu menyiapkan perangkat, menjaga fokus, dan melanjutkan pembiasaan setelah kelas.'],
  ['Bagaimana jika anak sulit duduk lama?', 'Kegiatan dirancang dengan segmen singkat dan variasi aktivitas. Anak tidak dituntut duduk diam sepanjang sesi; gerak dan respons aktif adalah bagian dari proses belajar.'],
  ['Perangkat apa yang dibutuhkan?', 'Gunakan ponsel, tablet, atau laptop dengan kamera dan koneksi internet yang memadai. Posisi layar sebaiknya aman serta nyaman bagi anak.'],
  ['Di mana saya dapat memperoleh jadwal dan biaya terbaru?', 'Jadwal kelas, pilihan kelompok, biaya, dan periode pendaftaran terbaru dapat dikonfirmasi langsung melalui admin TSL.'],
];

export default function PreschoolDaring() {
  const [activeSection, setActiveSection] = useState('tentang-preschool');
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
    const hero = document.getElementById('preschool-hero');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShowMobileCta(!entry.isIntersecting), { threshold: 0.08 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#fffdf7] pb-20 text-[#263028] sm:pb-0">
      <section id="preschool-hero" className="site-container py-6 sm:py-10">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-[#eaf3df] shadow-[0_24px_70px_rgba(24,61,37,.13)]">
          <span className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-[#f3cd45]/35 blur-sm" />
          <span className="absolute bottom-10 left-[42%] h-24 w-24 rounded-full bg-[#f29a61]/20" />
          <div className="grid lg:min-h-[620px] lg:grid-cols-[1.03fr_.97fr]">
            <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex flex-wrap items-center gap-3"><span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.13em] text-[#285c32]"><span className="material-symbols-outlined text-[16px]">child_care</span>Pendidikan usia dini dari rumah</span><Link to="/program" className="text-xs font-bold text-[#697264] hover:text-[#285c32]">Program <span aria-hidden="true">/</span> Preschool Daring</Link></div>
              <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[.16em] text-[#a05d22]">Bermain · bertumbuh · beradab</p>
              <h1 className="mt-3 max-w-2xl font-headline text-[2.65rem] font-black leading-[1.03] tracking-[-.04em] text-[#183d25] sm:text-5xl lg:text-[4rem]">Ruang belajar pertama yang hangat dan bermakna.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#596358] sm:text-lg">Preschool Daring TSL membantu anak usia prasekolah mengenal nilai Islam, bahasa, kemandirian, dan dunia di sekitarnya melalui cerita, gerak, bermain, dan pembiasaan bersama keluarga.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={registerUrl} target="_blank" rel="noreferrer" className="btn bg-[#e5bc27] px-7 text-[#3b3000] shadow-[0_9px_22px_rgba(142,108,0,.17)] hover:bg-[#f0ca3c]"><span className="material-symbols-outlined text-xl">how_to_reg</span>Daftar minat</a><a href={consultUrl} target="_blank" rel="noreferrer" className="btn border border-[#aeb9a8] bg-white/60 px-7 text-[#285c32] hover:bg-white"><span className="material-symbols-outlined text-xl">chat</span>Konsultasi orang tua</a></div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#cdd8c5] pt-6 text-xs font-bold text-[#596358]">{['Kelas interaktif', 'Berbasis pembiasaan', 'Didampingi keluarga'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[17px] text-[#d16e34]">kid_star</span>{item}</span>)}</div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden lg:min-h-full"><div className="absolute inset-0 bg-[#315d50]"/><img src="/images/program-quran-anak.png" alt="Ilustrasi Al-Qur’an ceria dengan pola geometris untuk anak" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#183d25]/55 via-transparent to-transparent"/><div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/25 bg-white/88 p-5 shadow-xl backdrop-blur-md sm:inset-x-8 sm:bottom-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#f3cd45] text-[#553f00] material-symbols-outlined">favorite</span><div><p className="text-[9px] font-extrabold uppercase tracking-[.14em] text-[#a05d22]">Belajar bersama keluarga</p><strong className="mt-1 block font-headline text-lg text-[#183d25]">Kelas kecil, aktivitas singkat, interaksi hangat</strong></div></div></div></div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi halaman Preschool Daring" className="sticky top-[72px] z-30 border-y border-[#d9ddcf] bg-[#fffdf7]/95 shadow-[0_8px_24px_rgba(24,61,37,.04)] backdrop-blur-xl"><div className="site-container flex items-center gap-3"><div className="no-scrollbar flex flex-1 gap-1 overflow-x-auto py-2.5">{navItems.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all ${activeSection === item.id ? 'bg-[#285c32] text-white shadow-sm' : 'text-[#596358] hover:bg-[#e7f1dc] hover:text-[#285c32]'}`}><span className="material-symbols-outlined text-[16px]">{item.icon}</span>{item.label}</a>)}</div><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-primary hidden min-h-10 shrink-0 px-5 py-2 text-xs md:inline-flex">Daftar minat<span className="material-symbols-outlined text-[16px]">arrow_outward</span></a></div></nav>

      <section id="tentang-preschool" className="site-container scroll-mt-36 py-20 sm:py-24"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16"><div><span className="eyebrow"><span className="material-symbols-outlined text-[16px]">spa</span>Fitrah anak</span><h2 className="mt-5 section-title">Anak belajar melalui pengalaman, bukan ceramah panjang.</h2><p className="mt-4 section-copy">Setiap kegiatan dirancang dekat dengan dunia anak: mengamati, bergerak, meniru, bertanya, mencoba, dan mengulang bersama orang yang ia percaya.</p></div><div className="grid gap-4 sm:grid-cols-2">{[
        ['schedule','Ritme ramah anak','Sesi dibagi menjadi aktivitas singkat agar anak tetap terlibat tanpa terbebani.'],
        ['sentiment_satisfied','Belajar menyenangkan','Cerita, permainan, gerak, dan visual membantu konsep terasa hidup.'],
        ['home','Terhubung dengan rumah','Pembiasaan dilanjutkan dalam rutinitas keluarga setelah kelas berakhir.'],
        ['diversity_1','Tumbuh bersama','Guru dan orang tua bekerja sebagai satu tim untuk mendampingi perkembangan anak.'],
      ].map(([icon,title,text]) => <article key={title} className="rounded-2xl border border-[#d8ddd1] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#adc49e] hover:shadow-[0_16px_35px_rgba(24,61,37,.08)]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#fff0c2] text-[#a05d22] material-symbols-outlined">{icon}</span><h3 className="mt-6 font-headline text-xl font-bold text-[#183d25]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#697264]">{text}</p></article>)}</div></div></section>

      <section id="tema-preschool" className="scroll-mt-36 bg-[#edf3e7] py-20 sm:py-24"><div className="site-container"><div className="text-center"><span className="eyebrow bg-white">Tema pembelajaran</span><h2 className="mx-auto mt-5 section-title">Fondasi kecil untuk kebiasaan besar.</h2><p className="mx-auto mt-4 section-copy">Tema saling terhubung agar nilai Islam hadir bersama perkembangan bahasa, emosi, sosial, kognitif, dan kreativitas anak.</p></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{learningThemes.map(([icon,title,text],index) => <article key={title} className="group rounded-2xl border border-[#d5ddcf] bg-white p-6"><div className="flex items-center justify-between"><span className={`grid h-12 w-12 place-items-center rounded-2xl material-symbols-outlined ${index % 3 === 0 ? 'bg-[#dff0d3] text-[#285c32]' : index % 3 === 1 ? 'bg-[#fff0c2] text-[#977100]' : 'bg-[#fde2d2] text-[#a85327]'}`}>{icon}</span><span className="font-headline text-3xl font-black text-[#e7ebe3]">0{index+1}</span></div><h3 className="mt-6 font-headline text-xl font-bold text-[#183d25]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#697264]">{text}</p></article>)}</div></div></section>

      <section id="pengalaman-preschool" className="site-container scroll-mt-36 py-20 sm:py-24"><div className="grid items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16"><div className="relative overflow-hidden rounded-[28px] bg-[#315d50]"><img src="/images/program-quran-anak-landscape.webp" alt="Ruang aktivitas Al-Qur’an dengan buku, rehal, dan perangkat digital" loading="lazy" className="aspect-[4/3] h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#183d25]/75 via-transparent to-transparent"/><div className="absolute inset-x-6 bottom-6 text-white"><p className="text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f3cd45]">Satu sesi, beragam pengalaman</p><p className="mt-2 font-headline text-xl font-bold">Menyapa, bercerita, bergerak, berkarya, lalu mengulang bersama.</p></div></div><div><span className="eyebrow">Pengalaman kelas</span><h2 className="mt-5 section-title">Daring tetap terasa dekat.</h2><p className="mt-4 section-copy">Interaksi dirancang dua arah. Guru memberi ruang anak untuk merespons, menunjukkan karya, bergerak, dan menghubungkan pelajaran dengan aktivitas sehari-hari.</p><div className="mt-8 space-y-4">{[
        ['01','Pembukaan hangat','Salam, doa, dan aktivitas transisi untuk membantu anak siap belajar.'],
        ['02','Eksplorasi tema','Cerita, visual, lagu tanpa musik, gerak, atau demonstrasi sederhana.'],
        ['03','Aktivitas anak','Anak mencoba, menjawab, bergerak, atau menghasilkan karya dengan bantuan seperlunya.'],
        ['04','Penguatan di rumah','Guru memberi arahan pembiasaan sederhana yang dapat dilanjutkan keluarga.'],
      ].map(([number,title,text]) => <div key={number} className="flex gap-4 rounded-2xl border border-[#e0e4db] bg-white p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f3cd45] font-headline font-black text-[#4b3a00]">{number}</span><div><h3 className="text-sm font-extrabold text-[#183d25]">{title}</h3><p className="mt-1 text-xs leading-6 text-[#697264]">{text}</p></div></div>)}</div></div></div></section>

      <section id="orang-tua-preschool" className="scroll-mt-36 bg-[#183d25] py-20 text-white sm:py-24"><div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16"><div><span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#f3cd45]">Partner utama anak</span><h2 className="mt-5 font-headline text-3xl font-black leading-tight sm:text-4xl">Orang tua bukan pengawas kelas—melainkan teman bertumbuh.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/65">Pendampingan terbaik tidak mengambil alih tugas anak. Cukup hadir, menyiapkan lingkungan, memberi rasa aman, dan membantu kebiasaan baik terus hidup.</p></div><div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">{[
        ['devices','Siapkan ruang dan perangkat','Pastikan layar, suara, alat sederhana, serta posisi duduk sudah nyaman sebelum kelas.'],
        ['visibility','Amati tanpa mendominasi','Beri anak kesempatan menjawab dan mencoba sendiri sebelum menawarkan bantuan.'],
        ['repeat','Ulangi dalam keseharian','Hubungkan doa, adab, atau tema kelas dengan rutinitas keluarga.'],
        ['forum','Berkomunikasi dengan guru','Sampaikan kebutuhan adaptasi atau kendala anak agar pendampingan lebih selaras.'],
      ].map(([icon,title,text]) => <article key={title} className="bg-[#214b2c] p-6 sm:p-7"><span className="material-symbols-outlined text-2xl text-[#f3cd45]">{icon}</span><h3 className="mt-7 font-headline text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div></section>

      <section id="faq-preschool" className="site-container scroll-mt-36 py-20 sm:py-24"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><span className="eyebrow">Pertanyaan orang tua</span><h2 className="mt-5 section-title">Sebelum anak memulai.</h2><p className="mt-4 section-copy">Setiap anak memiliki ritme yang berbeda. Bila Anda masih ragu, ceritakan kebutuhan anak kepada admin sebelum memilih kelas.</p><a href={consultUrl} target="_blank" rel="noreferrer" className="btn btn-outline mt-7"><span className="material-symbols-outlined text-lg">chat</span>Konsultasi dengan admin</a></div><div className="divide-y divide-[#d9ddcf] border-y border-[#d9ddcf]">{faqs.map(([question,answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-headline text-lg font-bold text-[#183d25]"><span>{question}</span><span className="material-symbols-outlined transition-transform group-open:rotate-45">add</span></summary><p className="max-w-2xl pr-10 pt-3 text-sm leading-7 text-[#697264]">{answer}</p></details>)}</div></div></section>

      <section className="site-container pb-16 sm:pb-20"><div className="relative overflow-hidden rounded-[30px] bg-[#f3cd45] px-6 py-12 text-center sm:px-10 sm:py-16"><span className="absolute left-8 top-7 h-16 w-16 rounded-full bg-white/25"/><span className="absolute -bottom-10 -right-5 h-52 w-52 rounded-full bg-[#f29a61]/25"/><p className="relative text-[10px] font-extrabold uppercase tracking-[.14em] text-[#755600]">Langkah kecil yang berarti</p><h2 className="relative mx-auto mt-4 max-w-3xl font-headline text-3xl font-black leading-tight text-[#2d270d] sm:text-4xl">Mari tumbuhkan kecintaan belajar sejak dini.</h2><p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#675316]">Konsultasikan kesiapan anak dan dapatkan informasi kelas Preschool Daring TSL yang tersedia.</p><div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={registerUrl} target="_blank" rel="noreferrer" className="btn bg-[#183d25] px-8 text-white hover:bg-[#102b1b]">Daftar minat sekarang</a><a href={consultUrl} target="_blank" rel="noreferrer" className="btn border border-[#796414]/35 bg-white/30 px-8 text-[#3f350a] hover:bg-white/45">Tanya admin</a></div></div></section>

      <div aria-hidden={!showMobileCta} className={`fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-white/20 bg-[#183d25]/95 p-2 shadow-[0_14px_40px_rgba(16,39,24,.35)] backdrop-blur-xl transition-all duration-300 sm:hidden ${showMobileCta ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}><div className="flex items-center gap-2"><a href={consultUrl} target="_blank" rel="noreferrer" aria-label="Konsultasi Preschool Daring" className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/20 text-white"><span className="material-symbols-outlined">chat</span></a><a href={registerUrl} target="_blank" rel="noreferrer" className="btn min-h-12 flex-1 bg-[#f3cd45] px-4 text-[#3d3100]">Daftar minat<span className="material-symbols-outlined text-lg">arrow_outward</span></a></div></div>
    </main>
  );
}
