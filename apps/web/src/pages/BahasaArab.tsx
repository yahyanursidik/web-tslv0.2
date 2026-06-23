import { Link } from 'react-router-dom';

const registerUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendaftar%20Kelas%20Bahasa%20Arab%20Daring%20TSL.';
const consultUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20tentang%20Kelas%20Bahasa%20Arab%20Daring%20TSL.';

const stages = [
  { number: '01', title: 'Pemula I', text: 'Mengenal huruf, makhraj, kosakata, dan ungkapan harian dasar.' },
  { number: '02', title: 'Pemula II', text: 'Menyusun kalimat sederhana dan mempraktikkan percakapan dasar.' },
  { number: '03', title: 'Dasar Lanjutan', text: 'Mulai memahami pola kalimat serta pengantar nahwu dan sharaf.' },
  { number: '04', title: 'Menengah', text: 'Membaca teks Arab dan memahami kandungan dengan lebih mandiri.' },
];

const audiences = [
  { icon: 'person_search', title: 'Pemula Total', text: 'Belum pernah belajar atau ingin menguatkan kembali fondasi dari awal.' },
  { icon: 'menu_book', title: 'Pembelajar Mandiri', text: 'Pernah belajar tetapi membutuhkan kurikulum dan pendampingan yang rapi.' },
  { icon: 'schedule', title: 'Karyawan & Mahasiswa', text: 'Membutuhkan jadwal belajar yang dapat berjalan di tengah kesibukan.' },
  { icon: 'family_restroom', title: 'Keluarga Muslim', text: 'Ingin membangun lingkungan bahasa Al-Qur’an yang hidup di rumah.' },
];

const quickLinks = [
  { href: '#jenjang', label: 'Jenjang belajar' },
  { href: '#metode', label: 'Metode' },
  { href: '#peserta', label: 'Cocok untuk siapa' },
  { href: '#pendaftaran', label: 'Pendaftaran' },
];

export default function BahasaArab() {
  return (
    <main className="bg-[#fbfaf4]">
      <section className="relative overflow-hidden border-b border-[#e0e3da] bg-white">
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#f6e9a9]/60 blur-3xl" />
        <div className="site-container relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20 lg:gap-14 lg:py-24">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f6e9a9] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#6b5200]"><span className="material-symbols-outlined text-[16px]">translate</span> Program unggulan</span>
              <Link to="/program" className="text-xs font-bold text-[#697264] hover:text-[#285c32]">Program / Bahasa Arab</Link>
            </div>
            <h1 className="arabic-hero-title max-w-2xl font-headline font-black leading-[1.08] tracking-[-.035em] text-[#183d25]">Bahasa Arab lebih dekat, memahami Al-Qur’an lebih nikmat.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#596358]">Mulai dari nol dengan kurikulum bertahap, bimbingan asatidzah, dan latihan yang membantu Anda aktif membaca, menyimak, serta berbicara.</p>
            <div className="arabic-hero-actions mt-8">
              <a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-arabic px-7">Daftar kelas Bahasa Arab <span className="material-symbols-outlined text-lg">arrow_forward</span></a>
              <a href={consultUrl} target="_blank" rel="noreferrer" className="btn btn-outline bg-white px-7">Konsultasi program</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#596358]">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">videocam</span> Live via Zoom</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">dashboard</span> LMS terintegrasi</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">history</span> Akses rekaman</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="overflow-hidden rounded-[30px] border border-[#d8ddd1] bg-[#eef0e7] shadow-[0_28px_70px_rgba(24,61,37,.16)] lg:rounded-[36px]">
              <img src="/images/program-arabic-hero.jpg" alt="Ruang belajar Bahasa Arab daring dengan laptop dan mushaf" className="aspect-square w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-[#d8ddd1] bg-white/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-[280px]">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f6e9a9] text-[#755a00] material-symbols-outlined">campaign</span>
              <span><strong className="block text-xs text-[#183d25]">Pendaftaran sedang dibuka</strong><small className="text-[10px] text-[#697264]">Kuota kelas terbatas</small></span>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi Kelas Bahasa Arab" className="arabic-subnav sticky z-30 border-b border-[#d9ddcf] bg-[#fbfaf4]/95 backdrop-blur-xl" style={{ top: 72 }}>
        <div className="site-container no-scrollbar flex gap-2 overflow-x-auto py-3">
          {quickLinks.map((item) => <a key={item.href} href={item.href} className="shrink-0 rounded-full px-4 py-2 text-xs font-bold text-[#596358] transition-colors hover:bg-[#f6e9a9] hover:text-[#183d25]">{item.label}</a>)}
        </div>
      </nav>

      <section id="jenjang" className="scroll-mt-40 bg-[#eef0e7] py-20 sm:py-24">
        <div className="site-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow bg-white">Bertahap & terarah</span>
            <h2 className="mt-5 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Satu jalur, empat tahap kemajuan.</h2>
            <p className="mt-4 text-sm leading-7 text-[#697264]">Belajar dari fondasi hingga mampu membaca dan memahami teks secara lebih mandiri.</p>
          </div>
          <div className="relative grid gap-5 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-[#d8ad17]/60 md:block" />
            {stages.map((stage, index) => (
              <article key={stage.number} className="relative z-10 rounded-3xl border border-[#d8ddd1] bg-white p-6 text-center shadow-[0_8px_24px_rgba(24,61,37,.04)] transition-transform hover:-translate-y-1">
                <span className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl text-sm font-extrabold ${index === stages.length - 1 ? 'arabic-accent-card' : 'bg-[#d9edcf] text-[#285c32]'}`}>{stage.number}</span>
                <h3 className="mt-5 font-headline text-xl font-bold text-[#183d25]">{stage.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#697264]">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metode" className="site-container scroll-mt-40 py-20 sm:py-24">
        <div className="mb-12 text-center"><span className="eyebrow">Belajar modern</span><h2 className="mt-5 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Kelas hidup, progres tetap terukur.</h2></div>
        <div className="grid gap-5 md:grid-cols-3">
          <article className="overflow-hidden rounded-3xl border border-[#d8ddd1] bg-[#f1f3e9] md:col-span-2">
            <div className="grid h-full md:grid-cols-2">
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-[#285c32] shadow-sm material-symbols-outlined">video_call</span>
                <h3 className="mt-6 font-headline text-2xl font-bold text-[#183d25]">Interaktif via Zoom</h3>
                <p className="mt-3 text-sm leading-7 text-[#697264]">Belajar langsung bersama asatidzah, bertanya saat kelas, serta melatih makhraj dan hiwar secara aktif.</p>
              </div>
              <img src="/images/program-arabic-zoom.jpg" alt="Perangkat belajar daring Bahasa Arab" loading="lazy" className="h-full min-h-[280px] w-full object-cover" />
            </div>
          </article>
          <article className="flex flex-col justify-between rounded-3xl bg-primary p-7 text-white sm:p-9">
            <div><span className="material-symbols-outlined text-3xl text-[#f2d85e]">dashboard</span><h3 className="mt-6 font-headline text-2xl font-bold">LMS Terintegrasi</h3><p className="mt-3 text-sm leading-7 text-white/75">Rekaman kelas, modul PDF, latihan, dan evaluasi tersedia di satu tempat.</p></div>
            <div className="mt-8 border-t border-white/15 pt-5 text-xs font-bold"><span className="material-symbols-outlined mr-2 align-middle text-[18px] text-[#f2d85e]">check_circle</span>Akses materi lebih fleksibel</div>
          </article>
          <article className="arabic-accent-card rounded-3xl p-7 sm:p-9">
            <span className="material-symbols-outlined text-3xl">edit_note</span><h3 className="mt-6 font-headline text-2xl font-bold">Latihan Rutin</h3><p className="mt-3 text-sm leading-7 opacity-80">Tugas mingguan menguatkan kosakata, struktur, dan kebiasaan belajar.</p>
          </article>
          <article className="rounded-3xl border border-[#d8ddd1] bg-white p-7 sm:p-9 md:col-span-2">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div><span className="material-symbols-outlined text-3xl text-[#285c32]">monitoring</span><h3 className="mt-5 font-headline text-2xl font-bold text-[#183d25]">Evaluasi Bertahap</h3><p className="mt-3 text-sm leading-7 text-[#697264]">Umpan balik berkala membantu Anda melihat progres dan menjaga target tetap realistis.</p></div>
              <div><div className="flex items-end justify-between"><span className="text-xs font-bold uppercase tracking-[.12em] text-[#697264]">Progres materi</span><strong className="font-headline text-3xl text-[#183d25]">75%</strong></div><div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#eef0e7]"><div className="h-full w-3/4 rounded-full bg-[#d8ad17]" /></div><p className="mt-3 text-xs text-[#8a9386]">Target disesuaikan dengan level belajar Anda.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section id="peserta" className="scroll-mt-40 bg-[#eef0e7] py-20">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div><span className="eyebrow bg-white">Untuk siapa?</span><h2 className="mt-5 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Dibuat untuk ritme hidup yang nyata.</h2><p className="mt-4 text-sm leading-7 text-[#697264]">Anda tidak perlu menunggu “siap”. Mulailah dari level yang sesuai, lalu bertumbuh bersama pendampingan yang jelas.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((audience) => <article key={audience.title} className="rounded-2xl border border-[#d8ddd1] bg-white p-6"><span className="material-symbols-outlined text-2xl text-[#285c32]">{audience.icon}</span><h3 className="mt-4 font-headline text-lg font-bold text-[#183d25]">{audience.title}</h3><p className="mt-2 text-sm leading-6 text-[#697264]">{audience.text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="pendaftaran" className="site-container scroll-mt-40 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[32px] bg-primary px-6 py-14 text-center text-white shadow-[0_20px_55px_rgba(24,61,37,.16)] sm:px-12">
          <div className="absolute -bottom-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-[50%] border border-white/15" />
          <span className="material-symbols-outlined relative text-4xl text-[#f2d85e]">translate</span>
          <h2 className="relative mx-auto mt-5 max-w-2xl font-headline text-3xl font-black sm:text-4xl">Mulai perjalanan memahami bahasa Al-Qur’an.</h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75">Konsultasikan kemampuan awal Anda dan temukan kelas yang paling tepat untuk memulai.</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-arabic px-8">Daftar kelas Bahasa Arab</a><a href={consultUrl} target="_blank" rel="noreferrer" className="btn border border-white/30 bg-white/10 px-8 text-white hover:bg-white/15">Tanya admin</a></div>
          <p className="relative mt-8 text-[9px] font-extrabold uppercase tracking-[.18em] text-white/50">Amanah · Terarah · Bertahap</p>
        </div>
      </section>
    </main>
  );
}
