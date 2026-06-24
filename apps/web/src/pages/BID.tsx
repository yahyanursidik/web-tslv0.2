import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const whatsapp = 'https://wa.me/62895377710900';
const registerUrl = `${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin mendaftar program Belajar Islam Dasar (BID). Mohon informasi selanjutnya.')}`;
const consultUrl = `${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin berkonsultasi mengenai program Belajar Islam Dasar (BID).')}`;

const curriculum = [
  { icon: 'shield', title: 'Aqidah', text: 'Memahami rukun iman, tauhid, serta prinsip dasar keyakinan Islam yang murni.' },
  { icon: 'menu_book', title: 'Fiqh Ibadah', text: 'Panduan praktis thaharah, shalat, dan ibadah harian sesuai tuntunan Sunnah.' },
  { icon: 'explore', title: 'Manhaj & Adab', text: 'Mengenal jalan beragama para salafush shalih dan adab seorang penuntut ilmu.' },
];

const methods = [
  { number: '01', icon: 'laptop_mac', title: 'Mandiri melalui LMS', text: 'Pelajari video, teks, dan audio kapan saja melalui ruang belajar yang mudah digunakan.' },
  { number: '02', icon: 'route', title: 'Alur belajar berjenjang', text: 'Setiap modul memiliki prasyarat agar materi penting dipelajari secara runtut dan tidak terlewat.' },
  { number: '03', icon: 'quiz', title: 'Evaluasi berkala', text: 'Kuis modul dan evaluasi akhir membantu Anda mengukur pemahaman, bukan sekadar menonton materi.' },
  { number: '04', icon: 'forum', title: 'Dukungan belajar', text: 'Grup pendamping tersedia untuk pengumuman serta tanya jawab teknis dan materi dasar.' },
];

const faqs = [
  ['Apakah program BID benar-benar gratis?', 'Ya. Program BID dapat diikuti tanpa biaya pendaftaran maupun SPP. Anda tetap memerlukan perangkat dan koneksi internet untuk mengakses LMS.'],
  ['Apakah BID cocok untuk orang yang bekerja?', 'Cocok. Model guided self-paced learning memberi keleluasaan mengatur waktu, dengan jalur belajar yang tetap terstruktur.'],
  ['Apakah saya harus sudah memiliki dasar ilmu agama?', 'Tidak. BID dirancang sebagai program fondasi untuk pemula, mualaf, maupun siapa pun yang ingin menata kembali pemahaman dasar keislamannya.'],
  ['Bagaimana progres belajar dipantau?', 'Status materi, hasil kuis, dan aktivitas belajar tercatat di LMS. Grup WhatsApp berfungsi sebagai kanal pendukung dan pengumuman.'],
  ['Apakah peserta memperoleh sertifikat?', 'Sertifikat digital diberikan sebagai apresiasi kepada peserta yang menyelesaikan seluruh modul dan memenuhi ketentuan evaluasi.'],
];

const sectionNav = [
  { id: 'kurikulum', label: 'Kurikulum', icon: 'auto_stories' },
  { id: 'cara-belajar', label: 'Cara belajar', icon: 'route' },
  { id: 'tahapan', label: 'Tahapan', icon: 'stairs' },
  { id: 'peserta', label: 'Untuk siapa', icon: 'groups' },
  { id: 'faq', label: 'FAQ', icon: 'help' },
];

export default function BID() {
  const [activeSection, setActiveSection] = useState('kurikulum');
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const sections = sectionNav.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-24% 0px -58% 0px', threshold: [0, 0.15, 0.35] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.getElementById('bid-hero');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setShowMobileCta(!entry.isIntersecting), { threshold: 0.08 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#fbfaf4] pb-20 text-[#1d2a20] sm:pb-0">
      <section id="bid-hero" className="site-container py-6 sm:py-10">
        <div className="relative isolate overflow-hidden rounded-[30px] bg-[#eef1e8] shadow-[0_20px_65px_rgba(24,61,37,.1)]">
          <div className="grid lg:min-h-[610px] lg:grid-cols-[1.04fr_.96fr]">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#c8efb7] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#285c32]"><span className="material-symbols-outlined text-[16px]">verified</span>Program fondasi utama</span>
                <Link to="/program" className="text-xs font-bold text-[#697264] hover:text-[#285c32]">Program <span aria-hidden="true">/</span> BID</Link>
              </div>
              <p className="mt-7 text-sm font-extrabold uppercase tracking-[.14em] text-[#987400]">Belajar Islam Dasar</p>
              <h1 className="mt-3 max-w-xl font-headline text-[2.65rem] font-black leading-[1.04] tracking-[-.045em] text-[#183d25] sm:text-5xl lg:text-[4rem]">Fondasi yang kokoh untuk perjalanan ilmu Anda.</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#596358] sm:text-lg">Program pendidikan Islam jarak jauh yang membimbing Anda memahami aqidah, ibadah, manhaj, dan adab secara bertahap—fleksibel waktunya, jelas alurnya.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-7"><span className="material-symbols-outlined text-xl">how_to_reg</span>Daftar BID</a>
                <a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer" className="btn btn-outline bg-white/65 px-7"><span className="material-symbols-outlined text-xl">login</span>Masuk LMS TSL</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#cfd5ca] pt-6 text-xs font-bold text-[#596358]">
                {['100% gratis', 'Belajar mandiri', 'Terstruktur di LMS'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><span className="material-symbols-outlined text-[17px] text-[#285c32]">check_circle</span>{item}</span>)}
              </div>
            </div>
            <div className="relative min-h-[370px] overflow-hidden lg:min-h-full">
              <img src="/images/program-bid-landscape.webp" alt="Ruang belajar Islam dengan buku, laptop, dan pencahayaan alami" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#183d25]/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#eef1e8]/25 lg:to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/85 p-5 shadow-lg backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#285c32] text-white material-symbols-outlined">schedule</span><div><strong className="block text-sm text-[#183d25]">Belajar sesuai ritme Anda</strong><span className="text-xs text-[#697264]">Materi dapat diakses kapan saja melalui LMS.</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi halaman Belajar Islam Dasar" className="sticky top-[72px] z-30 border-y border-[#d9ddcf] bg-[#fbfaf4]/95 shadow-[0_8px_24px_rgba(24,61,37,.04)] backdrop-blur-xl">
        <div className="site-container flex items-center gap-3">
          <div className="no-scrollbar flex flex-1 gap-1 overflow-x-auto py-2.5">
            {sectionNav.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? 'location' : undefined} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold transition-all ${activeSection === item.id ? 'bg-[#285c32] text-white shadow-sm' : 'text-[#596358] hover:bg-[#e3efd8] hover:text-[#285c32]'}`}><span className="material-symbols-outlined text-[16px]">{item.icon}</span>{item.label}</a>)}
          </div>
          <a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-primary hidden min-h-10 shrink-0 px-5 py-2 text-xs md:inline-flex">Daftar BID<span className="material-symbols-outlined text-[16px]">arrow_outward</span></a>
        </div>
      </nav>

      <section aria-label="Ringkasan program" className="site-container pt-10 sm:pt-12">
        <div className="grid overflow-hidden rounded-2xl border border-[#d8ddd1] bg-white shadow-[0_12px_34px_rgba(24,61,37,.05)] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['payments', 'Biaya program', 'Gratis', 'Tanpa SPP dan biaya pendaftaran'],
            ['devices', 'Format belajar', 'Daring mandiri', 'Video, audio, dan teks di LMS'],
            ['pace', 'Waktu belajar', 'Fleksibel', 'Disesuaikan dengan ritme peserta'],
            ['workspace_premium', 'Penyelesaian', 'Sertifikat digital', 'Setelah modul dan evaluasi tuntas'],
          ].map(([icon, label, value, note], index) => <article key={label} className={`p-5 sm:p-6 ${index ? 'border-t border-[#e0e4db] sm:border-l sm:border-t-0 lg:border-l' : ''} ${index === 2 ? 'sm:border-l-0 sm:border-t lg:border-l lg:border-t-0' : ''}`}><div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#e3efd8] text-[#285c32] material-symbols-outlined">{icon}</span><div><p className="text-[9px] font-extrabold uppercase tracking-[.13em] text-[#7a8175]">{label}</p><strong className="mt-1 block font-headline text-lg text-[#183d25]">{value}</strong><p className="mt-1 text-[11px] leading-5 text-[#697264]">{note}</p></div></div></article>)}
        </div>
      </section>

      <section id="kurikulum" className="site-container scroll-mt-36 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div><span className="eyebrow"><span className="material-symbols-outlined text-[16px]">auto_stories</span>Fokus pembelajaran</span><h2 className="mt-5 section-title">Mulai dari ilmu yang paling mendasar.</h2><p className="mt-4 section-copy">Kurikulum disusun bertahap agar peserta memahami dasar keislaman dengan benar sebelum melanjutkan ke pembahasan yang lebih tinggi.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">{curriculum.map((item, index) => <article key={item.title} className="rounded-2xl border border-[#d8ddd1] bg-white p-6 shadow-[0_8px_25px_rgba(24,61,37,.04)] transition-all hover:-translate-y-1 hover:border-[#9caf94] hover:shadow-[0_15px_35px_rgba(24,61,37,.09)]"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#c8efb7] text-[#285c32] material-symbols-outlined">{item.icon}</span><span className="font-headline text-3xl font-black text-[#e4e8df]">0{index + 1}</span></div><h3 className="mt-7 font-headline text-xl font-bold text-[#183d25]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#697264]">{item.text}</p></article>)}</div>
        </div>
      </section>

      <section id="cara-belajar" className="scroll-mt-36 bg-[#183d25] py-20 text-white sm:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16"><div><span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#f0c84b]">Guided self-paced learning</span><h2 className="mt-5 font-headline text-3xl font-black leading-tight sm:text-4xl">Fleksibel, tetapi tidak kehilangan arah.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/65">Anda bebas menentukan waktu belajar, sementara learning path menjaga urutan materi tetap sistematis. Progres, kuis, dan aktivitas tercatat di LMS.</p><div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 p-4"><strong className="font-headline text-2xl text-[#f0c84b]">Kapan saja</strong><span className="mt-1 block text-xs text-white/55">akses materi</span></div><div className="rounded-xl border border-white/10 p-4"><strong className="font-headline text-2xl text-[#f0c84b]">Bertahap</strong><span className="mt-1 block text-xs text-white/55">alur pembelajaran</span></div></div></div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">{methods.map((item) => <article key={item.number} className="bg-[#214b2c] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-[10px] font-extrabold tracking-[.15em] text-[#f0c84b]">LANGKAH {item.number}</span><span className="material-symbols-outlined text-2xl text-white/45">{item.icon}</span></div><h3 className="mt-8 font-headline text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p></article>)}</div></div>
        </div>
      </section>

      <section id="tahapan" className="site-container scroll-mt-36 py-20 sm:py-24">
        <div className="text-center"><span className="eyebrow">Jalur belajar</span><h2 className="mx-auto mt-5 section-title">Belajar, pahami, lalu lanjutkan.</h2><p className="mx-auto mt-4 section-copy">Setiap tahap memberi fondasi untuk tahap berikutnya. Anda tidak hanya menuntaskan materi, tetapi juga memastikan pemahamannya.</p></div>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-[#bfc7bb] md:block" />
          <div className="relative grid gap-5 md:grid-cols-4">{[
            ['01','Pelajari modul','Video, audio, dan teks tersedia di LMS.','play_lesson'],
            ['02','Kerjakan kuis','Ukur pemahaman sebelum membuka materi berikutnya.','task_alt'],
            ['03','Tuntaskan level','Ikuti evaluasi komprehensif dan refleksi materi.','flag'],
            ['04','Raih sertifikat','Dapatkan sertifikat digital setelah memenuhi ketentuan.','workspace_premium'],
          ].map(([number,title,text,icon]) => <article key={number} className="rounded-2xl border border-[#d8ddd1] bg-[#fbfaf4] p-5 text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-[#fbfaf4] bg-[#e5bc27] font-headline text-xl font-black text-[#3a3008] shadow-sm">{number}</span><span className="material-symbols-outlined mt-6 text-2xl text-[#285c32]">{icon}</span><h3 className="mt-3 font-headline text-lg font-bold text-[#183d25]">{title}</h3><p className="mt-2 text-xs leading-6 text-[#697264]">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="peserta" className="scroll-mt-36 bg-[#eef0e7] py-20 sm:py-24">
        <div className="site-container grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-stretch">
          <div className="rounded-[28px] bg-white p-7 sm:p-10"><span className="eyebrow">Untuk siapa?</span><h2 className="mt-5 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">BID tepat untuk Anda yang ingin memulai dengan benar.</h2><div className="mt-8 grid gap-4 sm:grid-cols-2">{[
            ['Muslim & muslimah','Ingin memperbaiki kembali pemahaman aqidah dan ibadah dasar.'],
            ['Mualaf','Membutuhkan bimbingan awal keislaman yang runtut dan ramah pemula.'],
            ['Penuntut ilmu pemula','Ingin belajar secara sistematis tanpa bingung memilih urutan materi.'],
            ['Pelajar & pekerja','Memerlukan sistem fleksibel yang dapat disesuaikan dengan kesibukan.'],
          ].map(([title,text]) => <div key={title} className="flex gap-3"><span className="material-symbols-outlined mt-0.5 text-xl text-[#285c32]">check_circle</span><div><h3 className="text-sm font-extrabold text-[#183d25]">{title}</h3><p className="mt-1 text-xs leading-6 text-[#697264]">{text}</p></div></div>)}</div></div>
          <aside className="relative overflow-hidden rounded-[28px] bg-[#315f34] p-7 text-white sm:p-10"><span className="material-symbols-outlined absolute -bottom-8 -right-5 text-[150px] text-white/[.07]">foundation</span><span className="grid h-12 w-12 place-items-center rounded-xl bg-[#f0c84b] text-[#3d3100] material-symbols-outlined">shield_with_heart</span><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[.15em] text-[#f0c84b]">Catatan amanah</p><h3 className="mt-3 font-headline text-2xl font-bold leading-snug">BID adalah langkah awal, bukan garis akhir.</h3><p className="mt-4 text-sm leading-7 text-white/70">Program ini dirancang untuk membangun fondasi sebelum Anda menempuh pembelajaran yang lebih tinggi. Setelah BID, lanjutkan sesuai kebutuhan ke Bahasa Arab, Al-Qur’an, atau program pendalaman lainnya.</p><Link to="/program" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">Jelajahi program lanjutan<span className="material-symbols-outlined text-lg">arrow_forward</span></Link></aside>
        </div>
      </section>

      <section id="faq" className="site-container scroll-mt-36 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><div><span className="eyebrow">Pertanyaan umum</span><h2 className="mt-5 section-title">Sebelum Anda mendaftar.</h2><p className="mt-4 section-copy">Masih ada hal yang ingin dipastikan? Konsultasikan kebutuhan belajar Anda dengan admin TSL.</p><a href={consultUrl} target="_blank" rel="noreferrer" className="btn btn-outline mt-7"><span className="material-symbols-outlined text-lg">chat</span>Konsultasi program</a></div><div className="divide-y divide-[#d9ddcf] border-y border-[#d9ddcf]">{faqs.map(([question,answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-headline text-lg font-bold text-[#183d25]"><span>{question}</span><span className="material-symbols-outlined transition-transform group-open:rotate-45">add</span></summary><p className="max-w-2xl pr-10 pt-3 text-sm leading-7 text-[#697264]">{answer}</p></details>)}</div></div>
      </section>

      <section className="site-container pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-[30px] bg-[#252a25] px-6 py-12 text-center text-white sm:px-10 sm:py-16"><span className="material-symbols-outlined absolute -bottom-12 -right-6 text-[200px] text-white/[.04]">auto_stories</span><p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[#f0c84b]">Belajar dari fondasinya</p><h2 className="relative mx-auto mt-4 max-w-3xl font-headline text-3xl font-black leading-tight sm:text-4xl">Siap membangun fondasi Islam yang lebih kokoh?</h2><p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">Mulai perjalanan belajar yang terarah dan bertahap bersama Belajar Islam Dasar.</p><div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-8">Daftar BID sekarang</a><a href={consultUrl} target="_blank" rel="noreferrer" className="btn border border-white/25 bg-white/5 px-8 text-white hover:bg-white/10">Konsultasi program</a></div></div>
      </section>

      <div aria-hidden={!showMobileCta} className={`fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-white/20 bg-[#183d25]/95 p-2 shadow-[0_14px_40px_rgba(16,39,24,.35)] backdrop-blur-xl transition-all duration-300 sm:hidden ${showMobileCta ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}>
        <div className="flex items-center gap-2"><a href={consultUrl} target="_blank" rel="noreferrer" aria-label="Konsultasi program BID" className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/20 text-white"><span className="material-symbols-outlined">chat</span></a><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-accent min-h-12 flex-1 px-4">Daftar BID sekarang<span className="material-symbols-outlined text-lg">arrow_outward</span></a></div>
      </div>
    </main>
  );
}
