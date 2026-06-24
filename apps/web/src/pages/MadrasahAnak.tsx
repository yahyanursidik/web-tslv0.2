import { Link } from 'react-router-dom';

const registerUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendaftarkan%20ananda%20ke%20Madrasah%20Anak%20Daring%20TSL.';
const consultUrl = 'https://wa.me/62895377710900?text=Assalamu%27alaikum%2C%20saya%20ingin%20bertanya%20tentang%20Madrasah%20Anak%20Daring%20TSL.';

const levels = [
  { code: 'A', label: 'Level A · TK', age: 'Usia 4–6 tahun', description: 'Pengenalan aqidah, huruf hijaiyah, doa harian, dan adab sederhana.', progress: 'w-1/3', active: false },
  { code: 'B', label: 'Level B · SD Rendah', age: 'Usia 7–9 tahun', description: 'Aqidah dasar, adab praktis, ibadah harian, dan tahsin Al-Qur’an.', progress: 'w-2/3', active: true },
  { code: 'C', label: 'Level C · SD Tinggi', age: 'Usia 10–12 tahun', description: 'Sirah nabawiyah, fikih ibadah, penguatan akhlak, dan hafalan.', progress: 'w-full', active: false },
];

const subjects = [
  { icon: 'light_mode', title: 'Aqidah', text: 'Mengenal Allah dan rukun iman melalui bahasa yang dekat dengan keseharian anak.' },
  { icon: 'favorite', title: 'Adab & Akhlak', text: 'Membiasakan santun kepada orang tua, guru, teman, dan lingkungan.' },
  { icon: 'clean_hands', title: 'Ibadah', text: 'Belajar wudhu, shalat, doa, dan ibadah harian melalui contoh visual.' },
  { icon: 'auto_stories', title: 'Kisah Teladan', text: 'Meneladani para Nabi dan sahabat lewat cerita yang hangat dan memikat.' },
];

const methods = [
  { icon: 'videocam', title: 'Live Class Interaktif', text: 'Ananda belajar langsung bersama pengajar dalam ruang daring yang aman dan terkontrol.' },
  { icon: 'edit_document', title: 'Worksheet Bermakna', text: 'Lembar aktivitas digital dan cetak membantu anak memahami materi dengan cara yang konkret.' },
  { icon: 'family_home', title: 'Aktivitas Bersama Orang Tua', text: 'Proyek ringan di rumah menghubungkan materi kelas dengan kebiasaan baik sehari-hari.' },
];

const quickLinks = [
  { href: '#level', label: 'Level usia' },
  { href: '#kurikulum', label: 'Kurikulum' },
  { href: '#metode', label: 'Metode belajar' },
  { href: '#pendaftaran', label: 'Pendaftaran' },
];

export default function MadrasahAnak() {
  return (
    <main className="bg-[#fbfaf4]">
      <section className="relative overflow-hidden border-b border-[#e0e3da] bg-white">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#d9edcf]/60 blur-3xl" />
        <div className="site-container relative grid items-center gap-10 py-14 md:grid-cols-2 md:py-20 lg:gap-14 lg:py-24">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="eyebrow"><span className="material-symbols-outlined text-[16px]">verified</span> Program unggulan</span>
              <Link to="/program" className="text-xs font-bold text-[#697264] hover:text-[#285c32]">Program / Anak</Link>
            </div>
            <h1 className="madrasah-hero-title max-w-2xl font-headline font-black leading-[1.08] tracking-[-.035em] text-[#183d25]">Madrasah Anak Daring: ilmu tumbuh, adab berakar.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#596358]">Pendampingan diniyah untuk anak usia 4–12 tahun dengan pembelajaran yang hangat, bertahap, dan sesuai tahap tumbuh kembangnya.</p>
            <div className="madrasah-hero-actions mt-8">
              <a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-7">Daftar Madrasah Anak <span className="material-symbols-outlined text-lg">arrow_forward</span></a>
              <a href="#kurikulum" className="btn btn-outline bg-white px-7">Pelajari kurikulum</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#596358]">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">groups</span> Kelas usia 4–12 tahun</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">devices</span> 100% daring</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-[#285c32]">shield</span> Ruang belajar aman</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="rounded-[30px] bg-[#274d45] p-4 shadow-[0_28px_70px_rgba(24,61,37,.2)] sm:p-6 lg:rounded-[36px] lg:p-8">
              <img src="/images/program-quran-anak.png" alt="Ilustrasi Al-Qur’an berwarna lembut untuk pembelajaran anak" className="aspect-square w-full rounded-[24px] object-cover" />
            </div>
            <div className="absolute -right-3 -top-4 hidden items-center gap-3 rounded-2xl border border-[#d8ddd1] bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#f6e9a9] text-[#755a00] material-symbols-outlined">task_alt</span>
              <span><strong className="block text-xs text-[#183d25]">Kurikulum terstruktur</strong><small className="text-[10px] text-[#697264]">Bertahap sesuai usia</small></span>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi Madrasah Anak" className="madrasah-subnav sticky z-30 border-b border-[#d9ddcf] bg-[#fbfaf4]/95 backdrop-blur-xl">
        <div className="site-container no-scrollbar flex gap-2 overflow-x-auto py-3">
          {quickLinks.map((item) => <a key={item.href} href={item.href} className="shrink-0 rounded-full px-4 py-2 text-xs font-bold text-[#596358] transition-colors hover:bg-[#e3efd8] hover:text-[#285c32]">{item.label}</a>)}
        </div>
      </nav>

      <section className="site-container py-16 text-center sm:py-20">
        <span className="eyebrow">Belajar seru, akhlak terjaga</span>
        <h2 className="mx-auto mt-5 max-w-3xl font-headline text-3xl font-black leading-tight text-[#183d25] sm:text-4xl">Fondasi agama yang terasa dekat dengan dunia ananda.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#697264] sm:text-base">Kami menghadirkan suasana belajar yang interaktif dan menyenangkan, tanpa kehilangan nilai amanah, kedisiplinan, dan kasih sayang.</p>
      </section>

      <section id="level" className="scroll-mt-40 bg-[#eef0e7] py-20">
        <div className="site-container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><span className="eyebrow bg-white">Jalur belajar</span><h2 className="mt-4 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Level sesuai tahap usia</h2></div>
            <p className="max-w-sm text-sm leading-7 text-[#697264]">Materi, bahasa, dan aktivitas disesuaikan dengan perkembangan kognitif dan emosional anak.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {levels.map((level) => (
              <article key={level.code} className={`relative flex min-h-[330px] flex-col rounded-3xl border bg-white p-7 transition-transform hover:-translate-y-1 ${level.active ? 'border-[#8fae84] shadow-[0_15px_35px_rgba(24,61,37,.1)] md:-translate-y-3' : 'border-[#d8ddd1]'}`}>
                {level.active && <span className="absolute right-5 top-5 rounded-full bg-[#e3efd8] px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#285c32]">Pilihan populer</span>}
                <span className={`grid h-14 w-14 place-items-center rounded-2xl font-headline text-xl font-bold ${level.active ? 'bg-[#285c32] text-white' : 'bg-[#d9edcf] text-[#285c32]'}`}>{level.code}</span>
                <span className="mt-6 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#8a9386]">{level.age}</span>
                <h3 className="mt-2 font-headline text-2xl font-bold text-[#183d25]">{level.label}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#697264]">{level.description}</p>
                <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#eef0e7]"><div className={`h-full rounded-full bg-[#e0b618] ${level.progress}`} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kurikulum" className="site-container scroll-mt-40 py-20 sm:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
          <div>
            <span className="eyebrow">Kurikulum diniyah</span>
            <h2 className="mt-4 font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Materi yang dipelajari ananda</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#697264]">Empat fondasi utama dirangkai menjadi pengalaman belajar yang relevan dengan kehidupan anak.</p>
            <div className="mt-8 grid gap-3">
              {subjects.map((subject) => (
                <article key={subject.title} className="flex gap-4 rounded-2xl border border-transparent bg-[#f1f3e9] p-5 transition-colors hover:border-[#bfc9b8] hover:bg-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#285c32] shadow-sm material-symbols-outlined">{subject.icon}</span>
                  <div><h3 className="font-headline text-lg font-bold text-[#183d25]">{subject.title}</h3><p className="mt-1 text-sm leading-6 text-[#697264]">{subject.text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/program-quran-anak-landscape.webp" alt="Ruang belajar Al-Qur’an dengan rehal dan perangkat digital" loading="lazy" className="mt-12 aspect-[3/4] w-full rounded-3xl object-cover shadow-[0_15px_35px_rgba(24,61,37,.12)]" />
            <img src="/images/hero-learning-library-landscape.webp" alt="Perpustakaan Islam dengan buku dan meja belajar" loading="lazy" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-[0_15px_35px_rgba(24,61,37,.12)]" />
          </div>
        </div>
      </section>

      <section id="metode" className="scroll-mt-40 bg-primary py-20 text-white sm:py-24">
        <div className="site-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] text-[#f2d85e]">Dekat meski dari rumah</span>
            <h2 className="mt-5 font-headline text-3xl font-black sm:text-4xl">Metode pembelajaran yang hidup</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">Teknologi memudahkan pertemuan; pendekatan personal menjaga koneksi.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {methods.map((method, index) => (
              <article key={method.title} className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm transition-colors hover:bg-white/15">
                <div className="flex items-center justify-between"><span className="material-symbols-outlined text-3xl text-[#f2d85e]">{method.icon}</span><span className="font-headline text-3xl font-bold text-white/15">0{index + 1}</span></div>
                <h3 className="mt-7 font-headline text-xl font-bold">{method.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{method.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pendaftaran" className="site-container scroll-mt-40 py-16 sm:py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-[#d8ddd1] bg-white px-6 py-14 text-center shadow-[0_18px_50px_rgba(24,61,37,.08)] sm:px-12">
          <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#f6e9a9]" />
          <span className="material-symbols-outlined relative text-4xl text-[#285c32]">family_restroom</span>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-headline text-3xl font-black text-[#183d25] sm:text-4xl">Siapkan masa depan gemilang ananda.</h2>
          <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#697264]">Konsultasikan usia dan kebutuhan ananda. Tim kami akan membantu memilih level belajar yang paling tepat.</p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={registerUrl} target="_blank" rel="noreferrer" className="btn btn-primary px-8">Daftar Madrasah Anak</a>
            <a href={consultUrl} target="_blank" rel="noreferrer" className="btn btn-accent px-8">Tanya admin via WhatsApp</a>
          </div>
          <p className="relative mt-8 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#8a9386]">Amanah · Terarah · Ramah anak</p>
        </div>
      </section>
    </main>
  );
}
