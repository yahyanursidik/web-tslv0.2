import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <header className="relative pt-24 pb-16 overflow-hidden bg-surface animate-fade-up">
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">Eksplorasi Kurikulum</span>
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-6">Program Pendidikan TSL</h1>
          <p className="text-xl text-secondary max-w-2xl leading-relaxed">Mewujudkan generasi Rabbani melalui kurikulum terpadu berbasis Al-Qur'an dan Sunnah, mulai dari pendidikan usia dini hingga jenjang pendidikan tinggi dan masyarakat umum.</p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-lg border-l-4 border-primary">
            <h3 className="font-bold text-primary text-xl mb-4">Mulai Perjalanan Belajar</h3>
            <p className="text-on-surface-variant text-sm mb-6">Pilih program yang sesuai dengan kebutuhan dan jenjang pendidikan Anda.</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg">
                <span className="material-symbols-outlined text-primary">school</span>
                <span className="text-sm font-medium">20+ Program Aktif</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg">
                <span className="material-symbols-outlined text-primary">groups</span>
                <span className="text-sm font-medium">5000+ Mahasiswa &amp; Santri</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,85.6,-0.8C84.2,14.1,78.1,28.2,69,40.1C59.9,51.9,47.8,61.5,34.4,68.4C21,75.3,6.3,79.5,-9.1,78.4C-24.5,77.3,-40.6,70.9,-54.1,60.8C-67.6,50.7,-78.5,36.9,-82.9,21.5C-87.3,6.1,-85.2,-10.9,-78.9,-25.9C-72.6,-40.9,-62.1,-53.9,-49.4,-61.5C-36.7,-69.1,-21.8,-71.3,-6.1,-70.3C9.6,-69.3,21.8,-69.3,44.7,-76.4Z" fill="#004d4c" transform="translate(100 100)"></path>
      </svg>
    </div>
  </header>
);

const FilterSection = () => (
  <section className="bg-surface-container-low py-8 sticky top-[108px] z-40 border-y border-outline-variant/10">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input className="w-full bg-surface-container-highest border-none border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-12 py-4" placeholder="Cari program pendidikan..." type="text" />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-semibold text-sm">Semua</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-lowest text-secondary font-semibold text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Usia Dini</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-lowest text-secondary font-semibold text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Dasar</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-lowest text-secondary font-semibold text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Tinggi</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-lowest text-secondary font-semibold text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors">Masyarakat</button>
        </div>
      </div>
    </div>
  </section>
);

const UnitAnakSection = () => (
  <section id="anak" className="reveal scroll-mt-32 opacity-0 [&.active]:animate-fade-up [&.active]:opacity-100">
    <div className="flex items-baseline gap-4 mb-12">
      <h2 className="text-4xl font-bold text-primary">Unit Usia Dini &amp; Dasar</h2>
      <div className="h-[2px] flex-1 bg-surface-variant opacity-30"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* TSL Islamic Elementary School */}
      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
        <div className="relative h-56 overflow-hidden bg-[#e0f2f1] flex items-center justify-center p-12">
          <svg className="w-full h-full text-primary opacity-80" fill="currentColor" viewBox="0 0 100 100">
            <path d="M10 80h80v5H10zM50 15L15 35v5h70v-5L50 15zM25 45v30h10V45H25zm20 0v30h10V45H45zm20 0v30h10V45H65z"></path>
          </svg>
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Dasar</span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Bandung / Offline</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">TSL Islamic Elementary School</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Pendidikan dasar dengan kurikulum integrasi yang mengutamakan adab, ilmu syar'i, dan kompetensi umum.</p>
          <button className="flex items-center gap-2 text-primary font-bold group/btn">
            Lihat Detail <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* TSL Islamic Preschool (Offline) */}
      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
        <div className="relative h-56 overflow-hidden bg-[#fff9c4] flex items-center justify-center p-12">
          <svg className="w-full h-full text-[#f9a825] opacity-80" fill="currentColor" viewBox="0 0 100 100">
            <path d="M30 60h40v5H30zM50 30l-20 20h40L50 30zM20 75h60v5H20zM40 70h20v5H40z"></path>
            <circle cx="50" cy="40" r="10"></circle>
          </svg>
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Usia Dini</span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Bandung / Offline</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">TSL Islamic Preschool (Offline)</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Stimulasi fitrah anak usia dini melalui bermain dan belajar dalam lingkungan yang islami.</p>
          <button className="flex items-center gap-2 text-primary font-bold group/btn">
            Lihat Detail <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* TSL Islamic Preschool Online */}
      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
        <div className="relative h-56 overflow-hidden bg-[#e3f2fd] flex items-center justify-center p-12">
          <svg className="w-full h-full text-secondary opacity-80" fill="currentColor" viewBox="0 0 100 100">
            <path d="M15 20h70v45H15zM10 65h80v5H10zM40 70h20v5H40z"></path>
            <rect fill="white" height="25" opacity="0.5" width="40" x="30" y="30"></rect>
          </svg>
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Usia Dini</span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sm text-secondary">computer</span>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Jarak Jauh</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">TSL Islamic Preschool Online</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Program prasekolah jarak jauh yang interaktif untuk membentuk karakter dasar muslim dari rumah.</p>
          <button className="flex items-center gap-2 text-primary font-bold group/btn">
            Lihat Detail <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Madrasah Anak Online */}
      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
        <div className="relative h-56 overflow-hidden bg-[#f3e5f5] flex items-center justify-center p-12">
          <svg className="w-full h-full text-purple-700 opacity-80" fill="currentColor" viewBox="0 0 100 100">
            <path d="M20 20h60v60H20zM30 30h40v5H30zM30 45h40v5H30zM30 60h40v5H30z"></path>
          </svg>
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Dasar</span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sm text-secondary">import_contacts</span>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Full Online</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">Madrasah Anak Online</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Suplemen pendidikan agama untuk anak usia sekolah dasar yang dilakukan secara daring.</p>
          <Link to="/madrasah-anak" className="flex items-center gap-2 text-primary font-bold group/btn">
            Lihat Detail <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* Qur'an for Kids */}
      <div className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
        <div className="relative h-56 overflow-hidden bg-[#e8f5e9]">
          <img src="/images/program-quran-anak-landscape.webp" alt="Paviliun belajar Al-Qur'an dengan rehal, buku, dan perangkat digital" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/90 text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Al-Qur'an</span>
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sm text-secondary">auto_awesome</span>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">Live Sessions</span>
          </div>
          <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">Qur'an for Kids (Online)</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-1">Bimbingan tahsin dan tahfizh interaktif khusus anak-anak dengan metode yang menyenangkan.</p>
          <Link to="/al-quran" className="flex items-center gap-2 text-primary font-bold group/btn">
            Lihat Detail <span className="material-symbols-outlined text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const UnitTinggiSection = () => (
  <section id="tinggi" className="bg-surface-container-low -mx-8 scroll-mt-32 px-8 py-20 rounded-3xl reveal opacity-0 [&.active]:animate-fade-up [&.active]:opacity-100">
    <div className="flex items-baseline gap-4 mb-12">
      <h2 className="text-4xl font-bold text-primary">Unit Pendidikan Tinggi</h2>
      <div className="h-[2px] flex-1 bg-primary/10"></div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Large Feature Card */}
      <div className="bg-surface-container-lowest rounded-2xl p-1 shadow-sm hover:shadow-2xl transition-all overflow-hidden flex flex-col group">
        <div className="relative aspect-[3/2] overflow-hidden bg-[#f5f5f5]">
          <img src="/images/program-bahasa-arab-landscape.webp" alt="Ruang belajar Bahasa Arab dengan buku, laptop, dan diagram geometris" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px] fill-current">verified</span>
              Terakreditasi DIKTI
            </span>
          </div>
          <h3 className="text-3xl font-bold text-primary mb-4 leading-tight">S1 Jarak Jauh Bahasa Arab</h3>
          <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">Program kerjasama dengan lembaga perguruan tinggi yang sudah berjalan (Partner: <strong>STAI Sayid Sabiq</strong>).</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">workspace_premium</span>
              <span className="text-primary font-bold">Ijazah Resmi Sarjana (S.Pd)</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">groups</span>
              <span>Perkuliahan Daring Terbimbing</span>
            </div>
          </div>
          <Link className="inline-flex items-center justify-center bg-primary text-on-primary font-bold py-4 rounded-lg hover:brightness-110 hover:scale-[1.02] transition-all" to="/s1-pjj">Lihat Program S1</Link>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Ma'had Diniyah */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-l-4 border-secondary group">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary-container px-2 py-1 rounded">Diploma</span>
              <h3 className="text-2xl font-bold text-primary mt-3">Ma'had Diniyah</h3>
            </div>
            <span className="material-symbols-outlined text-3xl text-secondary/30 group-hover:scale-110 transition-transform">menu_book</span>
          </div>
          <p className="text-on-surface-variant text-sm mb-6 italic">"Mencetak penuntut ilmu yang bermanhaj salaf dengan pemahaman yang lurus."</p>
          <div className="flex gap-4">
            <button className="bg-surface-container-high text-on-surface-variant font-bold text-xs px-6 py-3 rounded hover:bg-surface-variant transition-colors">Unduh Silabus</button>
            <button className="text-primary font-bold text-xs px-6 py-3 rounded border border-primary/20 hover:bg-primary/5 transition-colors">Lihat Program</button>
          </div>
        </div>

        {/* Research and Literacy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-primary p-6 rounded-2xl text-on-primary flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-4xl opacity-50">biotech</span>
            <div className="mt-8">
              <div className="text-xl font-bold">Riset Inovasi Pendidikan</div>
              <p className="text-xs text-on-primary-container mt-1">Pengembangan konten dan metodologi dakwah ilmiah modern.</p>
            </div>
          </div>
          <div className="bg-secondary p-6 rounded-2xl text-on-primary flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-4xl opacity-50">history_edu</span>
            <div className="mt-8">
              <div className="text-xl font-bold">Layanan Literasi &amp; Dakwah</div>
              <p className="text-xs text-on-secondary-container mt-1">Penerjemahan kitab klasik &amp; konten edukasi syar'i.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const UnitMasyarakatSection = () => (
  <section className="reveal opacity-0 [&.active]:animate-fade-up [&.active]:opacity-100">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <h2 className="text-4xl font-bold text-primary mb-2">Unit Pendidikan Masyarakat</h2>
        <p className="text-secondary">Program belajar fleksibel untuk segala usia dan kesibukan.</p>
      </div>
      <div className="flex gap-2">
        <span className="px-4 py-1 bg-surface-container-high text-[10px] font-black uppercase rounded text-secondary">Non-Formal</span>
        <span className="px-4 py-1 bg-surface-container-high text-[10px] font-black uppercase rounded text-secondary">Bersertifikat</span>
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* BID */}
      <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col group">
        <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">menu_book</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-3">Belajar Islam Dasar</h3>
        <p className="text-sm text-on-surface-variant mb-6 flex-1">Kurikulum bertahap 4 level untuk memahami aqidah, ibadah, dan akhlak harian.</p>
        <Link className="text-sm font-bold text-primary flex items-center gap-2 group/link" to="/bid">Detail Program <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">open_in_new</span></Link>
      </div>
      {/* Arabic Academy */}
      <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col group">
        <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">translate</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-3">Arabic Academy</h3>
        <p className="text-sm text-on-surface-variant mb-6 flex-1">Metode pembelajaran bahasa Arab yang memudahkan pemula untuk mengerti Al-Qur'an.</p>
        <Link className="text-sm font-bold text-primary flex items-center gap-2 group/link" to="/bahasa-arab">Detail Program <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">open_in_new</span></Link>
      </div>
      {/* Quran Academy */}
      <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col group">
        <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-on-tertiary-fixed-variant mb-6 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">auto_awesome</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-3">Quran Academy</h3>
        <p className="text-sm text-on-surface-variant mb-6 flex-1">Tahsin dan tahfizh intensif dengan bimbingan ustadz berpengalaman via video call.</p>
        <Link className="text-sm font-bold text-primary flex items-center gap-2 group/link" to="/al-quran">Detail Program <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">open_in_new</span></Link>
      </div>
      {/* Youth */}
      <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col group">
        <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined">rocket_launch</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-3">TSL Youth</h3>
        <p className="text-sm text-on-surface-variant mb-6 flex-1">Program pembekalan diniyah untuk remaja dengan topik yang relevan dengan Gen-Z.</p>
        <Link className="text-sm font-bold text-primary flex items-center gap-2 group/link" to="#">Detail Program <span className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">open_in_new</span></Link>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group border-b border-surface-variant/20 pb-6">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{question}</span>
        <span className={`material-symbols-outlined text-primary transition-transform icon ${isOpen ? 'rotate-45' : ''}`}>add</span>
      </button>
      <div className={`mt-4 transition-all ${isOpen ? 'block' : 'hidden'}`}>
        <p className="text-on-surface-variant leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section className="max-w-4xl mx-auto py-20 border-t border-surface-variant/30 reveal opacity-0 [&.active]:animate-fade-up [&.active]:opacity-100">
    <h2 className="text-4xl font-bold text-primary text-center mb-16">Pertanyaan Umum</h2>
    <div className="space-y-4">
      <FAQItem
        question="Bagaimana sistem belajar di TSL?"
        answer="Sistem belajar kami menggunakan Learning Management System (LMS) mandiri yang memungkinkan santri/mahasiswa mengakses materi video, teks, dan ujian secara fleksibel, ditambah sesi pertemuan daring via Zoom."
      />
      <FAQItem
        question="Apakah program S1 TSL resmi?"
        answer="Ya, program S1 Jarak Jauh kami merupakan program kerjasama dengan STAI Sayid Sabiq yang telah terakreditasi resmi oleh DIKTI, sehingga lulusan akan mendapatkan ijazah resmi yang diakui negara."
      />
      <FAQItem
        question="Apakah ada batasan usia untuk mendaftar?"
        answer="TSL memiliki program untuk semua rentang usia: mulai dari Preschool (balita), Madrasah/Elementary (anak-anak), hingga program masyarakat umum tanpa batasan usia maksimal."
      />
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative bg-primary rounded-[2rem] p-12 md:p-24 overflow-hidden text-center reveal opacity-0 [&.active]:animate-fade-up [&.active]:opacity-100">
    <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-on-primary mb-6">Masih bingung memilih program?</h2>
      <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12">Tim konsultan pendidikan kami siap membantu Anda menemukan jalur belajar yang paling sesuai dengan kebutuhan Anda dan keluarga.</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-on-primary text-primary px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:-translate-y-1 transition-transform">Konsultasi Pendaftaran</button>
        <button className="bg-primary-container border border-on-primary-container text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-container/80 transition-all">Download Katalog 2024</button>
      </div>
    </div>
    <div className="absolute inset-0 opacity-10">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
          </pattern>
        </defs>
        <rect fill="url(#grid)" height="100%" width="100%"></rect>
      </svg>
    </div>
  </section>
);


export default function Program() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-8 py-2 space-y-32">
      <HeroSection />
      <FilterSection />
      <UnitAnakSection />
      <UnitTinggiSection />
      <UnitMasyarakatSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
