import { Link } from 'react-router-dom';

const whatsappUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20Program%20Al-Qur%27an%20TSL.';
const registrationUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendaftar%20Program%20Al-Qur%27an%20TSL.';

const pageNav = [
  { href: '#metode', icon: 'route', label: 'Metode belajar' },
  { href: '#pilih-kelas', icon: 'groups', label: 'Pilihan kelas' },
  { href: '#materi', icon: 'menu_book', label: 'Fokus materi' },
  { href: '#monitoring', icon: 'monitoring', label: 'Monitoring SIQ' },
];

const learningSteps = [
  { icon: 'spellcheck', title: 'Tahsin Dasar', text: 'Memperbaiki makhraj dan kelancaran bacaan, huruf demi huruf.', tone: 'bg-[#285c32] text-white' },
  { icon: 'school', title: 'Tajwid Terapan', text: 'Memahami hukum bacaan sekaligus mempraktikkannya bersama pengajar.', tone: 'bg-[#e8c437] text-[#3b3000]' },
  { icon: 'favorite', title: 'Talaqqi & Hafalan', text: 'Setoran terarah dan muraja’ah rutin sesuai target kemampuan.', tone: 'bg-[#d9edcf] text-[#285c32]' },
];

const classOptions = [
  {
    icon: 'child_care', target: 'Usia TK–SD', title: 'Kelas Al-Qur’an Anak',
    description: 'Pendekatan hangat dan interaktif untuk menumbuhkan kecintaan kepada Al-Qur’an sejak dini.',
    features: ['Pengenalan hijaiyah visual', 'Tahsin, hafalan Juz Amma & adab', 'Laporan perkembangan untuk orang tua'],
    accent: 'bg-[#d9edcf] text-[#285c32]',
  },
  {
    icon: 'auto_stories', target: 'Pemula–Lanjutan', title: 'Kelas Al-Qur’an Dewasa',
    description: 'Kurikulum sistematis bagi ikhwan dan akhwat yang ingin memperbaiki bacaan atau menambah hafalan.',
    features: ['Tahsin intensif bertahap', 'Talaqqi dan program hafalan', 'Pilihan jadwal pagi atau malam'],
    accent: 'bg-[#285c32] text-white',
  },
];

const materials = [
  { icon: 'record_voice_over', title: 'Tahsin & Tajwid', text: 'Standarisasi makhraj, sifat huruf, dan hukum tajwid.' },
  { icon: 'sync', title: 'Muraja’ah', text: 'Sistem pengulangan agar hafalan tetap terjaga dan mutqin.' },
  { icon: 'format_quote', title: 'Gharib', text: 'Mengenal bacaan khusus dan kaidah unik dalam Al-Qur’an.' },
  { icon: 'volunteer_activism', title: 'Adab Penghafal', text: 'Pembiasaan etika dan akhlak mulia bagi pencari ilmu.' },
];

function SideNavigation() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-2xl border border-[#d8ddd1] bg-[#f1f3e9] p-4">
        <p className="px-3 pt-2 font-headline text-xl font-bold text-[#183d25]">Program Al-Qur’an</p>
        <p className="mb-5 px-3 text-xs leading-5 text-[#697264]">Belajar bertahap, dibimbing, dan terukur.</p>
        <nav aria-label="Navigasi halaman Al-Qur'an" className="space-y-1">
          {pageNav.map((item) => (
            <a key={item.href} href={item.href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#596358] transition-colors hover:bg-white hover:text-[#183d25]">
              <span className="material-symbols-outlined text-[20px] text-[#285c32]">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-accent mt-5 w-full">Daftar kelas</a>
      </div>
    </aside>
  );
}

export default function Quran() {
  return (
    <main className="bg-[#fbfaf4]">
      <div className="site-container py-6 lg:hidden">
        <nav aria-label="Navigasi cepat" className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {pageNav.map((item) => <a key={item.href} href={item.href} className="shrink-0 rounded-full border border-[#d8ddd1] bg-white px-4 py-2 text-xs font-bold text-[#285c32]">{item.label}</a>)}
        </nav>
      </div>

      <div className="site-container grid gap-8 pb-24 lg:grid-cols-[240px_minmax(0,1fr)] lg:py-10">
        <SideNavigation />
        <div className="min-w-0 overflow-hidden rounded-[28px] border border-[#e0e3da] bg-white shadow-[0_18px_55px_rgba(24,61,37,.07)]">
          <section className="relative overflow-hidden bg-[#f1f3e9] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[42px] border-[#e2ead8]" />
            <div className="relative grid items-center gap-10 xl:grid-cols-[1.08fr_.92fr]">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="eyebrow"><span className="h-2 w-2 rounded-full bg-[#65a358]" /> Pendaftaran dibuka</span>
                  <Link to="/program" className="text-xs font-bold text-[#697264] hover:text-[#285c32]">Program / Al-Qur’an</Link>
                </div>
                <h1 className="max-w-2xl font-headline text-4xl font-black leading-[1.08] tracking-[-.035em] text-[#183d25] sm:text-5xl lg:text-[58px]">Bertumbuh bersama Al-Qur’an, satu tahap setiap waktu.</h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-[#596358]">Program tahsin, talaqqi, dan hafalan untuk anak dan dewasa. Setiap santri dibimbing sesuai kemampuan agar proses belajar terasa dekat, terarah, dan konsisten.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-7">Daftar kelas Al-Qur’an <span className="material-symbols-outlined text-lg">arrow_forward</span></a>
                  <a href="#pilih-kelas" className="btn btn-outline bg-white px-7">Lihat pilihan kelas</a>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#596358]">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">verified</span> Placement test</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">schedule</span> Jadwal fleksibel</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">devices</span> Belajar online</span>
                </div>
              </div>
              <div className="relative">
                <img src="/images/program-quran-anak-landscape.webp" alt="Ruang belajar Al-Qur’an yang tenang dengan mushaf dan perangkat belajar digital" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_22px_60px_rgba(24,61,37,.2)]" />
                <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:w-[270px]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#d9edcf] text-[#285c32] material-symbols-outlined">monitoring</span>
                  <span><strong className="block text-sm text-[#183d25]">Progres lebih terlihat</strong><small className="text-[#697264]">Terintegrasi dengan SIQ</small></span>
                </div>
              </div>
            </div>
          </section>

          <section id="metode" className="scroll-mt-28 px-6 py-20 sm:px-10 lg:px-14">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="eyebrow">Alur belajar</span>
              <h2 className="mt-4 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Metode pembelajaran bertahap</h2>
              <p className="mt-4 text-sm leading-7 text-[#697264] sm:text-base">Tidak terburu-buru mengejar banyak materi. Kami menguatkan fondasi, praktik, lalu konsistensi.</p>
            </div>
            <div className="relative grid gap-8 md:grid-cols-3">
              <div className="absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-[#bcc5b5] md:block" />
              {learningSteps.map((step, index) => (
                <article key={step.title} className="relative text-center">
                  <div className={`relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-2xl border-4 border-white shadow-lg ${step.tone}`}><span className="material-symbols-outlined">{step.icon}</span></div>
                  <span className="mt-5 block text-[10px] font-extrabold uppercase tracking-[.16em] text-[#8a9386]">Tahap {index + 1}</span>
                  <h3 className="mt-2 font-headline text-xl font-bold text-[#183d25]">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-[240px] text-sm leading-6 text-[#697264]">{step.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="pilih-kelas" className="scroll-mt-28 bg-[#eef0e7] px-6 py-20 sm:px-10 lg:px-14">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><span className="eyebrow bg-white">Pilih sesuai kebutuhan</span><h2 className="mt-4 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Satu tujuan, dua jalur belajar</h2></div>
              <p className="max-w-sm text-sm leading-7 text-[#697264]">Kurikulum dan cara pendampingan disesuaikan dengan usia, kesiapan, serta target tiap santri.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {classOptions.map((item) => (
                <article key={item.title} className="flex flex-col rounded-3xl border border-[#d8ddd1] bg-white p-7 shadow-[0_10px_30px_rgba(24,61,37,.05)] sm:p-8">
                  <div className="flex items-start justify-between gap-4"><span className={`grid h-12 w-12 place-items-center rounded-xl material-symbols-outlined ${item.accent}`}>{item.icon}</span><span className="rounded-full bg-[#f1f3e9] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-[#285c32]">{item.target}</span></div>
                  <h3 className="mt-7 font-headline text-2xl font-bold text-[#183d25]">{item.title}</h3>
                  <p className="mt-3 min-h-[84px] text-sm leading-7 text-[#697264]">{item.description}</p>
                  <ul className="mt-6 space-y-3">
                    {item.features.map((feature) => <li key={feature} className="flex gap-3 text-sm font-medium text-[#455044]"><span className="material-symbols-outlined text-[18px] text-[#a17d00]">check_circle</span>{feature}</li>)}
                  </ul>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline mt-8 w-full">Konsultasikan kelas ini <span className="material-symbols-outlined text-lg">chat</span></a>
                </article>
              ))}
            </div>
          </section>

          <section id="materi" className="scroll-mt-28 px-6 py-20 sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
              <div>
                <span className="eyebrow">Kurikulum inti</span>
                <h2 className="mt-4 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Bacaan yang benar, hubungan yang lebih dekat.</h2>
                <p className="mt-5 text-sm leading-7 text-[#697264]">Kami tidak hanya mengajarkan cara membaca, tetapi juga membangun kebiasaan berinteraksi dengan Al-Qur’an.</p>
                <blockquote className="mt-7 rounded-2xl border-l-4 border-[#e8c437] bg-[#f6f2df] p-5 font-headline text-lg font-semibold leading-7 text-[#384238]">“Sebaik-baik kalian adalah yang mempelajari Al-Qur’an dan mengajarkannya.”</blockquote>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {materials.map((item) => <article key={item.title} className="rounded-2xl border border-[#d8ddd1] bg-[#fbfaf4] p-6 transition-transform hover:-translate-y-1"><span className="material-symbols-outlined text-2xl text-[#285c32]">{item.icon}</span><h3 className="mt-4 font-headline text-xl font-bold text-[#183d25]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[#697264]">{item.text}</p></article>)}
              </div>
            </div>
          </section>

          <section id="monitoring" className="scroll-mt-28 bg-[#203226] px-6 py-20 text-white sm:px-10 lg:px-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#efd35f]"><span className="material-symbols-outlined text-xl">monitoring</span> Sistem Informasi Qur’an</span>
                <h2 className="mt-4 max-w-2xl font-headline text-3xl font-black sm:text-4xl">Perkembangan belajar tidak lagi samar.</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#cbd3c7] sm:text-base">Santri dan orang tua dapat memantau hafalan, evaluasi bacaan, kehadiran, serta catatan pengajar secara digital dan transparan.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {['E-rapor berkala', 'Target personal', 'Catatan pengajar'].map((item) => <span key={item} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold"><span className="material-symbols-outlined text-[16px] text-[#efd35f]">check</span>{item}</span>)}
                </div>
              </div>
              <a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer" className="btn border border-white/35 bg-white/10 px-7 text-white hover:bg-white/20">Masuk sistem <span className="material-symbols-outlined text-lg">open_in_new</span></a>
            </div>
          </section>

          <section className="px-6 py-20 sm:px-10 lg:px-14">
            <div className="relative overflow-hidden rounded-3xl bg-[#e6e9df] px-6 py-12 text-center sm:px-10">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#e8c437]/30" />
              <span className="material-symbols-outlined text-4xl text-[#285c32]">auto_stories</span>
              <h2 className="relative mx-auto mt-4 max-w-xl font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Siap memulai langkah pertama?</h2>
              <p className="relative mt-4 text-sm leading-7 text-[#697264]">Mulai dengan konsultasi dan placement test untuk menemukan kelas yang paling sesuai.</p>
              <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary px-8">Daftar sekarang</a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-outline border-[#285c32] bg-white px-8">Konsultasi program</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
