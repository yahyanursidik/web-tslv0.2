

const AboutHero = () => (
  <section className="relative academic-gradient py-32 overflow-hidden">
    {/* CSS-based geometric pattern background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1 bg-on-primary-container text-primary font-bold text-xs tracking-widest uppercase mb-6 rounded-full">Lembaga Pendidikan Islam</span>
        <h1 className="font-headline text-6xl md:text-7xl text-white font-black leading-tight mb-8">Tentang TSL</h1>
        <p className="text-xl text-on-primary-container leading-relaxed font-medium">Mentransformasi pendidikan melalui integrasi kurikulum diniyah dan akademik berbasis sunnah demi melahirkan generasi yang bertaqwa dan profesional.</p>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
      <div className="w-full h-full opacity-20 transform translate-x-12 translate-y-12 flex items-center justify-center">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
          <path fill="currentColor" d="M100,0 L120,40 L160,40 L130,70 L140,110 L100,90 L60,110 L70,70 L40,40 L80,40 Z" opacity="0.3" transform="scale(1.5) translate(-33,-33)"/>
          <path fill="none" stroke="currentColor" strokeWidth="1" d="M0,100 L200,100 M100,0 L100,200" opacity="0.1"/>
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        </svg>
      </div>
    </div>
  </section>
);

const ProfilSingkat = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-headline text-4xl font-bold text-primary mb-6">Pendidikan yang Berakar pada Sunnah</h2>
          <div className="w-24 h-1 bg-primary mb-8"></div>
          <div className="w-full aspect-[4/3] bg-surface-container-high rounded-2xl shadow-xl overflow-hidden relative">
            <img src="/images/hero-learning-library-landscape.webp" alt="Perpustakaan bernuansa Islam dengan buku dan perangkat belajar digital" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[#183d25]/10 mix-blend-multiply"></div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xl font-bold text-secondary font-headline italic">"Belajar adalah ibadah, dan mengajar adalah amanah."</p>
          <p className="text-lg leading-relaxed text-on-surface-variant">Tarbiyah Sunnah Learning (TSL) merupakan sayap pendidikan formal dan non-formal di bawah naungan Yayasan Tarbiyah Sunnah. Berdiri dengan semangat untuk memberikan akses pendidikan Islam yang berkualitas, TSL mengintegrasikan nilai-nilai luhur Al-Qur'an dan As-Sunnah sesuai pemahaman para Salafush Shalih dengan standar akademik modern.</p>
          <p className="text-lg leading-relaxed text-on-surface-variant">Kami percaya bahwa pendidikan sejati tidak hanya mentransfer ilmu pengetahuan (transfer of knowledge), tetapi juga pembentukan karakter dan adab (transfer of values). Oleh karena itu, setiap modul dan kurikulum yang kami kembangkan melalui proses riset yang mendalam untuk memastikan relevansi dan akurasi materi bagi para santri dan peserta didik.</p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <div className="text-4xl font-black text-primary mb-2">15k+</div>
              <div className="text-sm font-bold text-secondary">Alumni Aktif</div>
            </div>
            <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <div className="text-4xl font-black text-primary mb-2">40+</div>
              <div className="text-sm font-bold text-secondary">Asatidzah &amp; Pakar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const VisiMisi = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-surface-container-lowest p-12 rounded-2xl shadow-sm border-l-[6px] border-primary">
          <span className="material-symbols-outlined text-4xl text-primary mb-4">visibility</span>
          <h3 className="font-headline text-3xl font-bold text-primary mb-6">Visi Kami</h3>
          <p className="text-xl leading-relaxed text-on-surface-variant">Menjadi pusat keunggulan pendidikan Islam berbasis sunnah yang terpercaya, inovatif, dan berstandar internasional untuk mencetak generasi Rabbani yang unggul.</p>
        </div>
        <div className="bg-surface-container-lowest p-12 rounded-2xl shadow-sm border-l-[6px] border-secondary">
          <span className="material-symbols-outlined text-4xl text-secondary mb-4">task_alt</span>
          <h3 className="font-headline text-3xl font-bold text-secondary mb-6">Misi Kami</h3>
          <ul className="space-y-4 text-on-surface-variant">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <span>Menyelenggarakan pendidikan Islam yang komprehensif berdasarkan Al-Qur'an dan As-Sunnah.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <span>Mengembangkan metodologi pembelajaran kreatif dan adaptif terhadap teknologi.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <span>Membangun ekosistem belajar yang mendukung pembentukan adab dan akhlak mulia.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <span>Menyediakan fasilitas dan tenaga pendidik yang berkompeten di bidangnya.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const BudayaKerja = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold text-primary mb-4">Budaya Kerja</h2>
        <p className="text-secondary max-w-2xl mx-auto font-medium">Nilai-nilai utama yang menjadi landasan profesionalisme dan khidmah kami dalam pendidikan Islam.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: 'auto_awesome', title: 'Keimanan dan Ketakwaan', desc: "Mengutamakan nilai-nilai keimanan dan ketakwaan dalam setiap aktivitas dan keputusan. Menjadikan Al-Qur'an dan Sunnah sebagai pedoman hidup dan kerja." },
          { icon: 'verified_user', title: 'Integritas', desc: 'Menjunjung tinggi kejujuran, amanah, dan transparansi dalam semua aspek. Bertanggung jawab dan konsisten dalam menjalankan tugas dan tanggung jawab.' },
          { icon: 'workspace_premium', title: 'Kualitas dan Keunggulan', desc: 'Berkomitmen untuk menyediakan pendidikan yang berkualitas tinggi dan unggul. Mendorong inovasi dan peningkatan berkelanjutan dalam metode pembelajaran.' },
          { icon: 'work_history', title: 'Kedisiplinan dan Profesionalisme', desc: 'Menerapkan kedisiplinan tinggi dalam segala aktivitas dan proses kerja. Bekerja dengan profesionalisme dan etos kerja yang tinggi.' },
          { icon: 'groups', title: 'Kerjasama dan Kebersamaan', desc: 'Membangun semangat kerjasama dan saling mendukung di antara semua anggota organisasi. Mendorong partisipasi aktif dan kontribusi dari semua pihak.' },
          { icon: 'favorite', title: 'Peduli dan Empati', desc: 'Mengembangkan sikap peduli dan empati terhadap sesama, baik di dalam maupun di luar organisasi. Membantu dan mendukung perkembangan dan kesejahteraan seluruh stakeholder.' },
          { icon: 'lightbulb', title: 'Kreativitas dan Inovasi', desc: 'Mendorong kreativitas dan inovasi dalam pengembangan kurikulum dan metode pembelajaran. Terbuka terhadap ide-ide baru dan perubahan yang positif.' },
          { icon: 'school', title: 'Komitmen terhadap Pendidikan', desc: 'Mengutamakan pengembangan pendidikan yang holistik, mencakup aspek akademik, keimanan, dan karakter. Menyediakan lingkungan belajar yang kondusif dan inspiratif bagi peserta didik.' },
          { icon: 'psychology', title: 'Pengembangan SDM', desc: 'Berfocus pada pengembangan kompetensi dan kapasitas seluruh anggota organisasi. Menyediakan pelatihan dan pengembangan berkelanjutan bagi tenaga pendidik dan staf.' },
          { icon: 'eco', title: 'Keberlanjutan dan Kemandirian', desc: 'Menerapkan prinsip keberlanjutan dalam semua kegiatan dan program. Mendorong kemandirian dan tanggung jawab dalam pengelolaan sumber daya.', large: true },
        ].map((item, idx) => (
          <div key={idx} className={`p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 hover:shadow-lg transition-all duration-300 ${item.large ? 'lg:col-span-1' : ''}`}>
            <div className="w-12 h-12 bg-primary-container/10 text-primary rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <h4 className="font-headline text-xl font-bold text-primary mb-3">{item.title}</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SejarahPerjalanan = () => (
  <section className="py-24 bg-surface-container-low overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <h2 className="font-headline text-4xl font-bold text-primary mb-6">Sejarah Perjalanan</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8">Sebuah ikhtiar pendidikan yang berkesinambungan, menebar manfaat setapak demi setapak dalam naungan keberkahan.</p>
          <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-primary/5 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center gap-6 p-8 text-center">
            <span className="material-symbols-outlined text-[100px] text-primary/30">map</span>
            <p className="text-primary/60 font-bold uppercase tracking-widest text-xs">The Adventure of Knowledge</p>
          </div>
        </div>
        <div className="lg:w-2/3 relative">
          <div className="absolute left-10 top-12 bottom-12 w-1 adventure-line hidden md:block"></div>
          <div className="space-y-16 relative">
            <div className="relative flex items-start gap-12 group">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">explore</span>
              </div>
              <div className="pt-2">
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-3">2018</div>
                <h5 className="text-2xl font-headline font-bold text-primary mb-3">Peletakan Batu Pertama</h5>
                <p className="text-on-surface-variant leading-relaxed">TSL didirikan sebagai inisiatif untuk menjawab kebutuhan umat akan pembelajaran bahasa Arab dan ilmu syar'i yang fleksibel namun tetap terstruktur secara akademik.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-12 group">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">history_edu</span>
              </div>
              <div className="pt-2">
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-3">2020</div>
                <h5 className="text-2xl font-headline font-bold text-primary mb-3">Transformasi Digital</h5>
                <p className="text-on-surface-variant leading-relaxed">Meluncurkan Learning Management System (LMS) mandiri untuk menjangkau ribuan penuntut ilmu dari berbagai daerah di Indonesia dan luar negeri di masa pandemi.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-12 group">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">light_mode</span>
              </div>
              <div className="pt-2">
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-3">2022</div>
                <h5 className="text-2xl font-headline font-bold text-primary mb-3">Ekspansi Unit Pendidikan</h5>
                <p className="text-on-surface-variant leading-relaxed">Meresmikan beberapa unit pendidikan formal tingkat dasar dan menengah serta memperkuat divisi Riset &amp; Inovasi kurikulum.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-12 group">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">language</span>
              </div>
              <div className="pt-2">
                <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-3">2024</div>
                <h5 className="text-2xl font-headline font-bold text-primary mb-3">Menuju Perbaikan Yang Lebih Baik</h5>
                <p className="text-on-surface-variant leading-relaxed">Berkomitmen untuk terus berbenah dan meningkatkan kualitas sistem pembelajaran, pelayanan administrasi, serta infrastruktur digital pendidikan Islam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SejarahKepemimpinan = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8 text-center">
      <h2 className="font-headline text-4xl font-bold text-primary mb-4">Sejarah Kepemimpinan</h2>
      <p className="text-secondary max-w-2xl mx-auto font-medium mb-16">Amanah kepemimpinan yang telah mengawal perjalanan dakwah pendidikan di TSL.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">person</span>
          </div>
          <h4 className="font-headline text-lg font-bold text-primary mb-1">Yahya Nursidik, S.Pd, M.T.</h4>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-2">2018 - 2024</p>
        </div>
        <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">person</span>
          </div>
          <h4 className="font-headline text-lg font-bold text-primary mb-1">Ustadz Abu Umar Indra, S.S.</h4>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-2">2025</p>
        </div>
        <div className="p-8 bg-surface-container-low rounded-2xl border-2 border-primary/30 text-center flex flex-col items-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Aktif</div>
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">stars</span>
          </div>
          <h4 className="font-headline text-lg font-bold text-primary mb-1">Dr. Muhammad Bisri M, M.Si.</h4>
          <p className="text-secondary font-bold text-xs tracking-widest uppercase mb-2">Sekarang</p>
        </div>
      </div>
    </div>
  </section>
);

const DewanPimpinan = () => (
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold text-primary mb-4">Dewan Pimpinan</h2>
        <p className="text-secondary max-w-2xl mx-auto font-medium">Dipimpin oleh asatidzah dan profesional yang berdedikasi tinggi bagi perkembangan dakwah dan pendidikan.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="group text-center">
          <div className="relative overflow-hidden rounded-full mx-auto w-64 h-64 mb-6 border-8 border-surface-container-high bg-surface-container-low flex items-center justify-center shadow-inner">
            <div className="text-primary/10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[140px]">account_circle</span>
            </div>
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
              <p className="text-white text-sm font-medium leading-relaxed">Fokus pada Pengembangan Kurikulum &amp; Manhaj Dakwah.</p>
            </div>
          </div>
          <h4 className="font-headline text-2xl font-bold text-primary">Ust. Abu Haidar As-Sundawy</h4>
          <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mt-2">Pembina Utama</p>
        </div>
        <div className="group text-center">
          <div className="relative overflow-hidden rounded-full mx-auto w-64 h-64 mb-6 border-8 border-surface-container-high bg-surface-container-low flex items-center justify-center shadow-inner">
            <div className="text-secondary/10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[140px]">admin_panel_settings</span>
            </div>
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
              <p className="text-white text-sm font-medium leading-relaxed">Manajemen Operasional &amp; Strategi Kelembagaan.</p>
            </div>
          </div>
          <h4 className="font-headline text-2xl font-bold text-primary">Dr. Muhammad Bisri M, M.Si.</h4>
          <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mt-2">Direktur TSL</p>
        </div>
      </div>
    </div>
  </section>
);

const AboutCTA = () => (
  <section className="py-24 bg-surface px-8">
    <div className="max-w-5xl mx-auto bg-primary rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
      <div className="relative z-10">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Siap Membangun Masa Depan Bersama TSL?</h2>
        <p className="text-on-primary-container text-lg max-w-2xl mx-auto mb-12">Dapatkan informasi lebih lanjut mengenai program pendidikan, donasi, atau kemitraan strategis.</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:scale-105 transition-all duration-200" href="#">Hubungi Kami</a>
          <a className="px-10 py-4 bg-transparent border-2 border-on-primary-container text-white font-bold rounded-xl hover:bg-white/10 transition-all" href="#">Lihat Program Kami</a>
        </div>
      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <main>
      <AboutHero />
      <ProfilSingkat />
      <VisiMisi />
      <BudayaKerja />
      <SejarahPerjalanan />
      <SejarahKepemimpinan />
      <DewanPimpinan />
      <AboutCTA />
    </main>
  );
}
