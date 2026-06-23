import { Link } from 'react-router-dom';

const programs = [
  { title: 'Belajar Islam Dasar', tag: 'Fondasi utama', text: 'Bangun dasar aqidah, ibadah, dan adab melalui jalur belajar mandiri yang terarah.', image: '/images/program-bid-landscape.webp', alt: 'Ruang belajar Islam dasar dengan buku, laptop, dan penanda progres', to: '/bid', color: 'bg-[#e6eedc]' },
  { title: "Al-Qur'an Anak", tag: 'Usia 5–12 tahun', text: 'Tahsin, talaqqi, dan hafalan dengan pendampingan yang ramah untuk tumbuh kembang anak.', image: '/images/program-quran-anak-landscape.webp', alt: "Paviliun belajar Al-Qur'an dengan rehal, buku, dan perangkat digital", to: '/program#anak', color: 'bg-[#f5edcf]' },
  { title: 'Bahasa Arab & S1 PJJ', tag: 'Jalur akademik', text: 'Kuasai bahasa Al-Qur’an dan lanjutkan pendidikan formal tanpa meninggalkan kesibukan.', image: '/images/program-bahasa-arab-landscape.webp', alt: 'Ruang belajar Bahasa Arab dengan buku, laptop, dan diagram geometris', to: '/program#tinggi', color: 'bg-[#e5ece5]' },
];

const values = [
  { icon: 'route', title: 'Bertahap', text: 'Mulai dari fondasi, lalu bertumbuh sesuai kesiapan.' },
  { icon: 'verified_user', title: 'Amanah', text: 'Materi terkurasi dan didampingi pengajar kompeten.' },
  { icon: 'devices', title: 'Fleksibel', text: 'Belajar dari mana saja melalui ekosistem digital.' },
  { icon: 'monitoring', title: 'Terpantau', text: 'Progres belajar tersimpan rapi di satu sistem.' },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#fbfaf4]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-[#dce9cf]/70 blur-3xl" />
        <div className="site-container grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="eyebrow"><span className="material-symbols-outlined text-base">auto_awesome</span> Ekosistem belajar keluarga muslim</div>
            <h1 className="mt-6 font-headline text-[44px] font-black leading-[1.06] tracking-[-.035em] text-[#183d25] sm:text-6xl lg:text-[68px]">
              Belajar Islam dengan arah yang <span className="relative inline-block text-[#8a6a00]">jelas.<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 10" fill="none"><path d="M2 7C60 2 150 2 218 5" stroke="#E4BC25" strokeWidth="4" strokeLinecap="round"/></svg></span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#596358] sm:text-lg">Dari fondasi ilmu, Al-Qur’an, hingga Bahasa Arab—temukan program terpercaya untuk setiap tahap perjalanan belajar Anda dan keluarga.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/program" className="btn btn-accent">Temukan program <span className="material-symbols-outlined text-lg">arrow_forward</span></Link>
              <a href="https://wa.me/62895377710900" target="_blank" rel="noreferrer" className="btn btn-outline">Konsultasi dengan admin</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#4f5b50]">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#4d7b42]">check_circle</span> Belajar fleksibel</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#4d7b42]">check_circle</span> Kurikulum terarah</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#4d7b42]">check_circle</span> Pendampingan amanah</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[32px] border-[10px] border-white bg-[#183d25] shadow-[0_28px_70px_rgba(24,61,37,.18)]">
              <img src="/images/hero-learning-library-landscape.webp" alt="Perpustakaan bernuansa Islam dengan buku dan perangkat belajar digital" className="h-full w-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102b1a]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/25 bg-white/90 p-4 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#e8c437] text-[#493900] material-symbols-outlined">school</span>
                <div><strong className="block text-sm text-[#183d25]">Satu akun, banyak perjalanan ilmu</strong><span className="text-xs text-[#687268]">Materi, progres, dan evaluasi dalam LMS.</span></div>
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden rounded-2xl border border-[#d9ddcf] bg-[#fbfaf4] px-4 py-3 shadow-lg sm:block">
              <span className="block font-headline text-2xl font-black text-[#285c32]">5.000+</span><span className="text-xs font-semibold text-[#697264]">pembelajar aktif</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9ddcf] bg-white">
        <div className="site-container grid grid-cols-2 divide-x divide-y divide-[#e3e5dc] md:grid-cols-4 md:divide-y-0">
          {values.map((item) => <div key={item.title} className="p-6 sm:p-8"><span className="material-symbols-outlined mb-4 text-2xl text-[#285c32]">{item.icon}</span><h2 className="font-headline text-lg font-bold text-[#183d25]">{item.title}</h2><p className="mt-2 text-sm leading-6 text-[#697264]">{item.text}</p></div>)}
        </div>
      </section>

      <section className="section-space bg-[#fbfaf4]">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><div className="eyebrow">Jalur pilihan</div><h2 className="section-title mt-4">Mulai dari kebutuhanmu hari ini</h2><p className="section-copy mt-3">Setiap program punya tujuan, ritme, dan pendampingan yang jelas.</p></div>
            <Link to="/program" className="inline-flex items-center gap-2 text-sm font-bold text-[#285c32]">Lihat semua program <span className="material-symbols-outlined text-lg">arrow_forward</span></Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Link key={program.title} to={program.to} className="program-card group">
                <div className={`relative aspect-[3/2] overflow-hidden ${program.color}`}><img src={program.image} alt={program.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-[#285c32] backdrop-blur">{program.tag}</span></div>
                <div className="p-6"><div className="flex items-start justify-between gap-4"><div><span className="text-xs font-bold text-[#9a7800]">0{index + 1}</span><h3 className="mt-2 font-headline text-2xl font-bold text-[#183d25]">{program.title}</h3></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#cfd5c7] text-[#285c32] transition-all group-hover:bg-[#285c32] group-hover:text-white material-symbols-outlined">north_east</span></div><p className="mt-4 text-sm leading-7 text-[#667064]">{program.text}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cara-belajar" className="section-space bg-[#eef0e7] scroll-mt-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><div className="eyebrow">Cara belajar</div><h2 className="section-title mt-4">Tidak perlu bingung harus mulai dari mana.</h2><p className="section-copy mt-5">Kami menyusun pengalaman belajar agar langkah pertama terasa ringan, namun tetap membawa Anda menuju pemahaman yang utuh.</p><Link to="/program" className="btn btn-primary mt-8">Pilih jalur belajar</Link></div>
          <ol className="grid gap-3">
            {[['01','Pilih program yang tepat','Baca tujuan, tingkat kesulitan, dan pola belajar sebelum mendaftar.'],['02','Belajar sesuai ritme','Akses materi di LMS dan ikuti jalur yang telah disusun bertahap.'],['03','Ukur progresmu','Selesaikan evaluasi, lihat perkembangan, lalu lanjut ke tahap berikutnya.']].map(([number,title,text]) => <li key={number} className="group grid grid-cols-[52px_1fr] gap-4 rounded-2xl border border-[#d4d9ce] bg-[#fbfaf4] p-5 sm:p-6"><span className="font-headline text-2xl font-black text-[#a18413]">{number}</span><div><h3 className="font-headline text-xl font-bold text-[#183d25]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#667064]">{text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section-space bg-[#fbfaf4]">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-[32px] bg-[#183d25] px-6 py-14 text-center text-white sm:px-12 lg:py-20">
            <div className="absolute inset-0 opacity-[.07]" style={{backgroundImage:'radial-gradient(circle at 2px 2px, white 1.5px, transparent 0)',backgroundSize:'28px 28px'}} />
            <div className="relative mx-auto max-w-2xl"><span className="material-symbols-outlined mb-5 text-4xl text-[#e8c437]">local_library</span><h2 className="font-headline text-3xl font-black sm:text-5xl">Ilmu yang baik dimulai dari langkah yang tepat.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#d5dfd1] sm:text-base">Ceritakan kebutuhan belajarmu. Tim kami akan membantu memilihkan program yang paling sesuai.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://wa.me/62895377710900" target="_blank" rel="noreferrer" className="btn btn-accent">Konsultasi gratis</a><Link to="/tentang" className="btn border border-white/35 text-white hover:bg-white/10">Kenali TSL</Link></div></div>
          </div>
        </div>
      </section>
    </>
  );
}
