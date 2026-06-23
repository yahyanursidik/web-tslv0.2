import { Link } from 'react-router-dom';

const registrationUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendapatkan%20informasi%20pendaftaran%20S1%20PJJ%20Pendidikan%20Bahasa%20Arab%20TSL.';

const lmsFeatures = [
  { icon: 'update', title: 'Fleksibel', text: 'Atur waktu belajar mandiri tanpa kehilangan alur perkuliahan dan tenggat akademik.' },
  { icon: 'near_me', title: 'Terarah', text: 'Kurikulum sistematis dan bertahap mengikuti capaian pembelajaran program studi.' },
  { icon: 'cast_for_education', title: 'Interaktif', text: 'Diskusi langsung bersama dosen dan pendamping akademik untuk memperdalam materi.' },
  { icon: 'assignment_turned_in', title: 'Akuntabel', text: 'Evaluasi, tugas, dan progres terdokumentasi secara transparan dalam satu sistem.' },
];

const curriculum = [
  'Mata Kuliah Dasar Umum: keislaman dan kebangsaan',
  'Linguistik Arab: nahwu, sharaf, balaghah, dan keterampilan berbahasa',
  'Metodologi pengajaran dan psikologi pendidikan',
  'Teknologi pendidikan dan inovasi pembelajaran digital',
];

const quickLinks = [
  { href: '#profil', label: 'Profil program' },
  { href: '#sistem-belajar', label: 'Sistem belajar' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#pendaftaran', label: 'Pendaftaran' },
];

export default function S1PJJ() {
  return (
    <main className="bg-[#fbfaf4]">
      <section className="relative isolate overflow-hidden bg-[#e8ece4]">
        <img src="/images/program-s1-hero.jpg" alt="Koridor kampus modern dengan cahaya alami" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#f4f6f0]/85 backdrop-blur-[2px]" />
        <div className="s1-hero site-container flex items-center justify-center py-20 text-center">
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
              <span className="eyebrow"><span className="material-symbols-outlined text-[16px]">school</span> Akademik & pendidikan jarak jauh</span>
              <Link to="/program#tinggi" className="text-xs font-bold text-[#697264] hover:text-[#285c32]">Program / Pendidikan Tinggi</Link>
            </div>
            <h1 className="s1-hero-title font-headline font-black leading-[1.08] tracking-[-.035em] text-[#183d25]">S1 Pendidikan Jarak Jauh · Pendidikan Bahasa Arab</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#596358]">Program sarjana untuk calon pendidik Bahasa Arab yang menggabungkan kecakapan akademik, pedagogi modern, dan kemudahan akses belajar dari mana saja.</p>
            <div className="s1-hero-actions mt-8 justify-center">
              <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-8">Info pendaftaran S1 <span className="material-symbols-outlined text-lg">arrow_forward</span></a>
              <a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer" className="btn btn-outline bg-white/90 px-8">Masuk LMS PJJ</a>
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs font-semibold text-[#596358]">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">workspace_premium</span> Jalur gelar S.Pd</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">schedule</span> 8 semester</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">menu_book</span> 144 SKS</span>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi S1 PJJ" className="s1-subnav sticky z-30 border-b border-[#d9ddcf] bg-[#fbfaf4]/95 backdrop-blur-xl" style={{ top: 72 }}>
        <div className="site-container no-scrollbar flex gap-2 overflow-x-auto py-3">
          {quickLinks.map((item) => <a key={item.href} href={item.href} className="shrink-0 rounded-full px-4 py-2 text-xs font-bold text-[#596358] transition-colors hover:bg-[#e3efd8] hover:text-[#285c32]">{item.label}</a>)}
        </div>
      </nav>

      <section id="profil" className="site-container scroll-mt-40 py-20 sm:py-24">
        <div className="grid gap-5 md:grid-cols-12">
          <article className="flex flex-col justify-between rounded-3xl border border-[#d8ddd1] bg-white p-7 sm:p-9 md:col-span-7">
            <div><span className="eyebrow">Profil program</span><h2 className="mt-5 font-headline text-3xl font-black text-[#183d25]">Menyiapkan pendidik Bahasa Arab yang profesional.</h2><p className="mt-5 text-sm leading-7 text-[#697264]">Program Pendidikan Bahasa Arab dijalankan melalui kerja sama akademik bersama STAI Sayid Sabiq. Pembelajaran dirancang untuk menguatkan ilmu keislaman, kompetensi bahasa, serta kemampuan mengajar di ruang belajar modern.</p></div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#f1f3e9] p-5 text-center"><strong className="font-headline text-4xl text-[#285c32]">144</strong><span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[.16em] text-[#697264]">Total SKS</span></div>
              <div className="rounded-2xl bg-[#f1f3e9] p-5 text-center"><strong className="font-headline text-4xl text-[#285c32]">8</strong><span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[.16em] text-[#697264]">Semester</span></div>
            </div>
          </article>
          <article className="flex flex-col items-center justify-center rounded-3xl bg-primary p-8 text-center text-white md:col-span-5">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-[#f2d85e] material-symbols-outlined">verified_user</span>
            <h3 className="mt-6 font-headline text-2xl font-bold">Jalur akademik resmi</h3>
            <p className="mt-4 text-sm leading-7 text-white/75">Program mitra perguruan tinggi yang terakreditasi DIKTI dengan jalur ijazah Sarjana Pendidikan (S.Pd).</p>
            <span className="mt-6 rounded-full border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em]">Mitra: STAI Sayid Sabiq</span>
          </article>
        </div>
      </section>

      <section id="sistem-belajar" className="scroll-mt-40 bg-[#eef0e7] py-20 sm:py-24">
        <div className="site-container">
          <div className="mx-auto mb-12 max-w-2xl text-center"><span className="eyebrow bg-white">Learning Management System</span><h2 className="mt-5 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Kuliah jarak jauh yang tetap terasa dekat.</h2><p className="mt-4 text-sm leading-7 text-[#697264]">Materi, diskusi, evaluasi, dan pendampingan akademik hadir dalam satu pengalaman belajar terintegrasi.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {lmsFeatures.map((feature) => <article key={feature.title} className="rounded-3xl border border-[#d8ddd1] bg-white p-7 transition-transform hover:-translate-y-1"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e3efd8] text-[#285c32] material-symbols-outlined">{feature.icon}</span><h3 className="mt-5 font-headline text-xl font-bold text-[#183d25]">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-[#697264]">{feature.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="kurikulum" className="site-container scroll-mt-40 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl bg-[#eef0e7] shadow-[0_18px_45px_rgba(24,61,37,.1)]"><img src="/images/program-bahasa-arab-landscape.webp" alt="Ruang studi digital untuk pembelajaran Bahasa Arab" loading="lazy" className="aspect-[4/3] w-full object-cover" /><div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3 text-xs font-bold text-[#183d25] shadow-lg backdrop-blur">Kurikulum nasional × kekhasan TSL</div></div>
          <div><span className="eyebrow">Kurikulum akademik</span><h2 className="mt-5 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Bahasa, pedagogi, dan teknologi pembelajaran.</h2><p className="mt-5 text-sm leading-7 text-[#697264]">Kurikulum mengintegrasikan standar pendidikan tinggi dengan penguasaan Bahasa Arab dan kompetensi mengajar yang relevan.</p><ul className="mt-7 space-y-4">{curriculum.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#455044]"><span className="material-symbols-outlined text-[19px] text-[#285c32]">check_circle</span>{item}</li>)}</ul></div>
        </div>
      </section>

      <section id="pendaftaran" className="site-container scroll-mt-40 pb-20 sm:pb-24">
        <div className="relative overflow-hidden rounded-[32px] bg-[#e6e9df] px-6 py-14 text-center sm:px-12">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#f6e9a9]" />
          <span className="material-symbols-outlined relative text-4xl text-[#285c32]">school</span><h2 className="relative mx-auto mt-4 max-w-2xl font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Siap menempuh pendidikan tinggi dari mana saja?</h2><p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-[#697264]">Dapatkan informasi penerimaan, persyaratan, dan jadwal pendaftaran dari tim akademik TSL.</p><div className="relative mt-8"><a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary px-8">Hubungi tim pendaftaran</a></div>
        </div>
      </section>
    </main>
  );
}
