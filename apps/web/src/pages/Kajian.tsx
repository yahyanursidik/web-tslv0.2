import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Theme = 'Semua' | 'Aqidah' | 'Fiqh' | 'Keluarga' | 'Tafsir';

const themes: { label: Theme; icon: string }[] = [
  { label: 'Semua', icon: 'apps' },
  { label: 'Aqidah', icon: 'menu_book' },
  { label: 'Fiqh', icon: 'balance' },
  { label: 'Keluarga', icon: 'family_restroom' },
  { label: 'Tafsir', icon: 'auto_stories' },
];

const schedules = [
  { day: 'Senin', time: '16.00 WIB', theme: 'Aqidah' as Theme, title: 'Ushul Tsalatsah', teacher: 'Ustadz Abu Yahya Badrusalam', text: 'Mempelajari tiga landasan utama seorang muslim secara runtut melalui kitab para ulama.', featured: false },
  { day: 'Rabu', time: '19.30 WIB', theme: 'Fiqh' as Theme, title: 'Fiqh Ibadah · Kitab Shalat', teacher: 'Tim Asatidzah TSL', text: 'Memahami syarat, rukun, dan sunnah shalat berdasarkan dalil yang sahih.', featured: true },
  { day: 'Sabtu', time: '09.00 WIB', theme: 'Keluarga' as Theme, title: 'Baiti Jannati', teacher: 'Ustadzah TSL', text: 'Bekal membangun keluarga muslim yang hangat, bertumbuh, dan saling menguatkan.', featured: false },
  { day: 'Minggu', time: '20.00 WIB', theme: 'Tafsir' as Theme, title: 'Tafsir Al-Muyassar', teacher: 'Tim Tafsir TSL', text: 'Mendekatkan makna ayat Al-Qur’an melalui penjelasan yang ringkas dan terarah.', featured: false },
];

const archives = [
  { theme: 'Aqidah', duration: '48 menit', title: 'Makna Laa Ilaha Illallah', image: '/images/program-kajian-hero.jpg' },
  { theme: 'Fiqh', duration: '55 menit', title: 'Tuntunan Thaharah Lengkap', image: '/images/program-arabic-zoom.jpg' },
  { theme: 'Keluarga', duration: '42 menit', title: 'Adab Mendidik Anak Shalih', image: '/images/program-quran-anak-landscape.webp' },
  { theme: 'Adab', duration: '51 menit', title: 'Hilyah Thalibil Ilmi', image: '/images/program-s1-hero.jpg' },
];

const faqs = [
  ['Apakah kajian ini berbayar?', 'Kajian rutin dapat diikuti tanpa biaya. Anda hanya perlu mendaftar agar tautan kelas dan pengingat dapat dikirimkan.'],
  ['Di mana kajian dilaksanakan?', 'Kajian diselenggarakan secara daring. Tautan ruang belajar dibagikan melalui kanal resmi TSL menjelang sesi dimulai.'],
  ['Bagaimana jika saya tidak bisa hadir langsung?', 'Rekaman kajian terpilih tersedia di LMS sehingga materi dapat dipelajari kembali pada waktu yang lebih lapang.'],
  ['Apakah ada batasan usia atau tingkat pemahaman?', 'Kajian terbuka untuk muslim dan muslimah. Setiap seri memiliki keterangan tema agar Anda dapat memilih materi yang paling sesuai.'],
];

const whatsapp = 'https://wa.me/62895377710900';
const reminderUrl = (title: string) => `${whatsapp}?text=${encodeURIComponent(`Assalamu’alaikum, saya ingin mendapat pengingat untuk kajian “${title}”.`)}`;

export default function Kajian() {
  const [activeTheme, setActiveTheme] = useState<Theme>('Semua');
  const [archiveQuery, setArchiveQuery] = useState('');

  const filteredSchedules = useMemo(() => activeTheme === 'Semua' ? schedules : schedules.filter((item) => item.theme === activeTheme), [activeTheme]);
  const filteredArchives = useMemo(() => {
    const query = archiveQuery.trim().toLocaleLowerCase('id');
    return query ? archives.filter((item) => `${item.theme} ${item.title}`.toLocaleLowerCase('id').includes(query)) : archives;
  }, [archiveQuery]);

  return (
    <main className="bg-[#fbfaf4]">
      <section className="site-container py-6 sm:py-10">
        <div className="kajian-hero-grid relative isolate overflow-hidden rounded-[28px] bg-[#173c25] text-white shadow-[0_24px_70px_rgba(24,61,37,.18)] lg:min-h-[620px]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="rounded-full bg-[#f0c84b] px-3 py-1.5 uppercase tracking-[.14em] text-[#352b00]">Gratis & terbuka untuk umum</span>
              <Link to="/program" className="text-white/65 transition-colors hover:text-white">Program <span aria-hidden="true">/</span> Kajian Rutin</Link>
            </div>
            <h1 className="mt-7 max-w-2xl font-headline text-[2.55rem] font-black leading-[1.06] tracking-[-.04em] sm:text-5xl lg:text-[3.8rem]">Jaga ritme belajar, dari mana saja.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">Majelis ilmu daring yang membantu Anda mempelajari aqidah, fiqh, tafsir, dan keluarga secara rutin—bersama asatidzah TSL dan materi yang dapat diulang kembali.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#jadwal" className="btn btn-accent px-7"><span className="material-symbols-outlined text-xl">calendar_month</span>Lihat jadwal pekan ini</a>
              <a href={`${whatsapp}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin bergabung dengan Kajian Rutin Daring TSL.')}`} target="_blank" rel="noreferrer" className="btn border border-white/25 bg-white/10 px-7 text-white hover:bg-white/15"><span className="material-symbols-outlined text-xl">chat</span>Tanya admin</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/15 pt-6">
              {[['4', 'tema utama'], ['Live', 'kelas daring'], ['Arsip', 'belajar ulang']].map(([value, label]) => <div key={label}><strong className="block font-headline text-xl text-[#f0c84b] sm:text-2xl">{value}</strong><span className="mt-1 block text-[11px] text-white/60 sm:text-xs">{label}</span></div>)}
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
            <img src="/images/program-kajian-hero.jpg" alt="Pintu lengkung bernuansa hijau sebagai simbol menuju majelis ilmu" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173c25]/65 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#173c25]/35 lg:to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#102b1b]/80 p-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#f0c84b]">Ruang belajar yang berkelanjutan</p>
              <p className="mt-2 text-sm leading-6 text-white/80">Hadir langsung saat lapang. Ulangi rekamannya saat perlu. Yang penting, ilmu tetap bertumbuh.</p>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Navigasi halaman Kajian Rutin" className="sticky top-[72px] z-30 border-y border-[#d9ddcf] bg-[#fbfaf4]/95 backdrop-blur-xl">
        <div className="site-container no-scrollbar flex items-center gap-1 overflow-x-auto py-2.5">
          {[['#jadwal','Jadwal kajian'],['#cara-ikut','Cara mengikuti'],['#arsip','Arsip rekaman'],['#faq','Pertanyaan umum']].map(([href,label]) => <a key={href} href={href} className="shrink-0 rounded-full px-4 py-2.5 text-xs font-bold text-[#596358] transition-colors hover:bg-[#e3efd8] hover:text-[#285c32]">{label}</a>)}
        </div>
      </nav>

      <section id="jadwal" className="site-container scroll-mt-36 py-20 sm:py-24">
        <div className="mb-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><span className="eyebrow"><span className="material-symbols-outlined text-[16px]">event_available</span>Agenda pekanan</span><h2 className="mt-5 section-title">Pilih kajian yang ingin Anda ikuti.</h2><p className="mt-4 section-copy">Setiap seri berdiri sendiri. Mulai dari tema yang paling Anda butuhkan, lalu bangun kebiasaan hadir secara konsisten.</p></div>
          <div className="no-scrollbar flex max-w-full gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter tema kajian">
            {themes.map((theme) => <button key={theme.label} type="button" aria-pressed={activeTheme === theme.label} onClick={() => setActiveTheme(theme.label)} className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold transition-all ${activeTheme === theme.label ? 'border-[#285c32] bg-[#285c32] text-white shadow-sm' : 'border-[#cbd1c7] bg-white text-[#596358] hover:border-[#285c32] hover:text-[#285c32]'}`}><span className="material-symbols-outlined text-[17px]">{theme.icon}</span>{theme.label}</button>)}
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#d8ddd1] bg-white shadow-[0_14px_40px_rgba(24,61,37,.05)]">
          {filteredSchedules.map((item, index) => <article key={item.title} className={`group grid gap-5 p-6 transition-colors hover:bg-[#f5f7ef] sm:p-7 md:grid-cols-[150px_1fr_auto] md:items-center ${index ? 'border-t border-[#e0e4db]' : ''}`}>
            <div className="flex items-center gap-3 md:block"><span className="block font-headline text-xl font-black text-[#183d25]">{item.day}</span><span className="mt-1 block text-xs font-bold text-[#7a8175]">{item.time}</span></div>
            <div><div className="flex items-center gap-2"><span className="rounded-full bg-[#e3efd8] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#285c32]">{item.theme}</span>{item.featured && <span className="text-[10px] font-bold text-[#9a7400]">Pilihan pekan ini</span>}</div><h3 className="mt-3 font-headline text-xl font-bold text-[#183d25] sm:text-2xl">{item.title}</h3><p className="mt-1 text-xs font-bold text-[#285c32]">{item.teacher}</p><p className="mt-2 max-w-2xl text-sm leading-6 text-[#697264]">{item.text}</p></div>
            <a href={reminderUrl(item.title)} target="_blank" rel="noreferrer" className="btn btn-outline w-full px-5 md:w-auto"><span className="material-symbols-outlined text-lg">notifications</span>Ingatkan saya</a>
          </article>)}
        </div>
        <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#697264]"><span className="material-symbols-outlined mt-0.5 text-[16px]">info</span><p>Jadwal dapat berubah menyesuaikan agenda pengajar. Konfirmasi terbaru dikirimkan melalui admin dan kanal resmi TSL.</p></div>
      </section>

      <section id="cara-ikut" className="scroll-mt-36 bg-[#173c25] py-20 text-white sm:py-24">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><span className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#f0c84b]">Mudah diikuti</span><h2 className="mt-5 font-headline text-3xl font-black sm:text-4xl">Tiga langkah menuju ruang kajian.</h2><p className="mt-4 max-w-md text-sm leading-7 text-white/65">Tak perlu bingung mencari tautan. Daftar sekali, pilih sesi, lalu ikuti informasi dari kanal resmi.</p></div><div className="grid gap-4 sm:grid-cols-3">{[
            ['01','Daftar pengingat','Pilih sesi pada jadwal, kemudian kirim permintaan melalui WhatsApp.','how_to_reg'],
            ['02','Terima tautan','Admin membagikan tautan dan informasi teknis menjelang kajian.','mark_email_read'],
            ['03','Hadir & ulangi','Ikuti sesi langsung atau pelajari kembali rekamannya di LMS.','play_circle'],
          ].map(([number,title,text,icon]) => <article key={number} className="rounded-2xl border border-white/12 bg-white/[.06] p-6"><div className="flex items-center justify-between"><span className="font-headline text-3xl font-black text-[#f0c84b]">{number}</span><span className="material-symbols-outlined text-2xl text-white/45">{icon}</span></div><h3 className="mt-8 font-headline text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{text}</p></article>)}</div></div>
        </div>
      </section>

      <section id="arsip" className="site-container scroll-mt-36 py-20 sm:py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="eyebrow"><span className="material-symbols-outlined text-[16px]">video_library</span>Belajar kembali</span><h2 className="mt-5 section-title">Arsip kajian pilihan.</h2><p className="mt-4 section-copy">Ulangi pembahasan penting dan lanjutkan catatan Anda kapan pun dibutuhkan.</p></div><label className="flex min-h-12 items-center gap-3 rounded-xl border border-[#c9cec4] bg-white px-4 text-[#596358] shadow-sm"><span className="material-symbols-outlined text-xl">search</span><span className="sr-only">Cari arsip kajian</span><input value={archiveQuery} onChange={(event) => setArchiveQuery(event.target.value)} type="search" placeholder="Cari judul atau tema…" className="w-full border-0 bg-transparent p-0 text-sm focus:ring-0 md:w-64" /></label></div>
        {filteredArchives.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filteredArchives.map((item) => <article key={item.title} className="group overflow-hidden rounded-2xl border border-[#d8ddd1] bg-white transition-all hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(24,61,37,.1)]"><div className="relative overflow-hidden"><img src={item.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#102b1b]/65 to-transparent" /><span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-[#285c32] shadow-lg material-symbols-outlined">play_arrow</span></div><div className="p-5"><p className="text-[9px] font-extrabold uppercase tracking-[.13em] text-[#8a6c00]">{item.theme} · {item.duration}</p><h3 className="mt-2 font-headline text-lg font-bold leading-snug text-[#183d25]">{item.title}</h3><a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#285c32]">Tonton di LMS<span className="material-symbols-outlined text-[15px]">arrow_outward</span></a></div></article>)}</div> : <div className="rounded-2xl border border-dashed border-[#c9cec4] bg-white p-10 text-center text-sm text-[#697264]">Belum ada arsip yang cocok. Coba gunakan kata kunci lain.</div>}
      </section>

      <section id="faq" className="scroll-mt-36 bg-[#eef0e7] py-20 sm:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><span className="eyebrow bg-white">Sebelum bergabung</span><h2 className="mt-5 section-title">Yang sering ditanyakan.</h2><p className="mt-4 section-copy">Belum menemukan jawabannya? Admin TSL siap membantu Anda memilih kajian yang sesuai.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline mt-7 bg-white">Hubungi admin</a></div>
          <div className="divide-y divide-[#d7dbd2] border-y border-[#d7dbd2]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline text-lg font-bold text-[#183d25]"><span>{question}</span><span className="material-symbols-outlined transition-transform group-open:rotate-45">add</span></summary><p className="max-w-2xl pr-10 pt-3 text-sm leading-7 text-[#697264]">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="site-container py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[28px] bg-[#e5bc27] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-12"><div className="relative z-10"><p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-[#6b5200]">Mulai dari satu kajian</p><h2 className="mt-3 max-w-2xl font-headline text-3xl font-black leading-tight text-[#2d270d] sm:text-4xl">Pilih waktunya. Siapkan catatan. Mari bertumbuh bersama ilmu.</h2></div><a href="#jadwal" className="btn relative z-10 mt-7 shrink-0 bg-[#183d25] px-7 text-white hover:bg-[#102b1b] lg:mt-0">Lihat jadwal<span className="material-symbols-outlined text-lg">arrow_forward</span></a><span className="material-symbols-outlined absolute -bottom-12 -right-7 text-[190px] text-white/20">auto_stories</span></div>
      </section>
    </main>
  );
}
