import { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-surface-container-low rounded-2xl p-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="font-bold">{question}</h5>
        <span className={`material-symbols-outlined transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </div>
      {isOpen && <p className="mt-4 text-secondary">{answer}</p>}
    </div>
  );
};

export default function BID() {
  return (
    <main className="bg-surface text-on-surface selection:bg-primary-fixed-dim">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
              Pendaftaran Dibuka
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-primary">
              Belajar Islam Dasar (BID)
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-xl">
              Program Pendidikan Islam Jarak Jauh yang fleksibel namun terarah. Dirancang untuk membina fondasi ilmu syar'i Anda dengan standar akademik modern yang inklusif dan gratis.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all">Daftar Sekarang</button>
              <button className="bg-surface-container-high text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">menu_book</span> Pelajari Sistem
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-[140%] h-[140%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_#bee6fa_0%,_transparent_70%)] opacity-40"></div>
            <img alt="Ruang belajar Islam dasar dengan buku, laptop, dan penanda progres" className="aspect-[3/2] w-full rounded-3xl object-cover shadow-[0_24px_60px_rgba(24,61,37,.14)]" src="/images/program-bid-landscape.webp" />
          </div>
        </div>
      </section>

      {/* Model Pembelajaran */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-primary mb-6">Guided Self-Paced Learning</h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
            <div className="lg:w-2/3 space-y-8">
              <p className="text-xl text-on-surface-variant leading-relaxed">
                BID menerapkan model <span className="font-bold text-primary">Guided Self-Paced Learning</span>. Mahasiswa diberikan kebebasan dalam mengatur waktu belajar secara fleksibel, namun tetap mengikuti jalur yang terstruktur melalui "Learning Path".
              </p>
              <p className="text-lg text-on-surface-variant">
                Setiap modul memiliki prasyarat (mandatory prerequisites) yang harus dipenuhi sebelum melanjutkan ke tahap berikutnya, memastikan pemahaman yang kokoh dan bertahap bagi mahasiswa usia 10 hingga 70 tahun.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                <div className="space-y-2">
                  <span className="text-4xl font-serif font-bold text-primary">100%</span>
                  <p className="text-sm font-medium text-secondary">Gratis &amp; Inklusif</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-serif font-bold text-primary">Flexible</span>
                  <p className="text-sm font-medium text-secondary">Atur Waktu Anda</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-serif font-bold text-primary">Path</span>
                  <p className="text-sm font-medium text-secondary">Alur Terstruktur</p>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl font-serif font-bold text-primary">LMS</span>
                  <p className="text-sm font-medium text-secondary">Monitoring Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur & Penilaian */}
      <section className="bg-surface-container-high py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Level &amp; Tahapan Pembelajaran</h2>
            <p className="text-secondary max-w-2xl mx-auto">Kurikulum disusun dalam tahapan yang sistematis untuk memastikan penguasaan materi secara menyeluruh.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface p-8 rounded-3xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-container text-on-primary-container w-12 h-12 rounded-xl flex items-center justify-center font-bold">L1</div>
                <h3 className="text-2xl font-bold">Level 1: Dasar</h3>
              </div>
              <p className="text-secondary">Fokus pada pembentukan pondasi adab dan aqidah yang shahih, serta pengenalan dasar ibadah harian.</p>
            </div>
            <div className="bg-surface p-8 rounded-3xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-container text-on-primary-container w-12 h-12 rounded-xl flex items-center justify-center font-bold">L2</div>
                <h3 className="text-2xl font-bold">Level 2: Penguatan</h3>
              </div>
              <p className="text-secondary">Pendalaman materi syariat, pengenalan hadits nabawi, dan dasar-dasar bahasa Arab untuk pemahaman teks.</p>
            </div>
          </div>


        </div>
      </section>

      {/* Mekanisme Evaluasi */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Mekanisme Evaluasi</h2>
            <p className="text-secondary">Sistem evaluasi yang simpel namun tetap menjaga kualitas standar akademik.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-6 bg-surface-container-low p-6 rounded-2xl">
              <div className="w-12 h-12 flex-shrink-0 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">01</div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold">Kuis Modul Wajib</h4>
                <p className="text-secondary">Mahasiswa wajib lulus kuis/test di akhir setiap modul sebelum diperbolehkan mengakses modul berikutnya.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 bg-surface-container-low p-6 rounded-2xl">
              <div className="w-12 h-12 flex-shrink-0 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">02</div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold">Review Penguatan Berkala</h4>
                <p className="text-secondary">Sesi review berkala untuk mengulang materi yang telah dipelajari. Sesi ini bersifat penguatan dan tidak masuk dalam nilai modul.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 bg-surface-container-low p-6 rounded-2xl">
              <div className="w-12 h-12 flex-shrink-0 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold">03</div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold">Evaluasi Akhir Level</h4>
                <p className="text-secondary">Meliputi ujian komprehensif seluruh materi di level tersebut serta kewajiban membuat refleksi atau ringkasan materi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring & Keunggulan */}
      <section className="bg-surface-container-lowest py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-primary">monitoring</span>
              </div>
              <h4 className="text-xl font-bold">LMS Monitoring</h4>
              <p className="text-sm text-secondary leading-relaxed">Progres dipantau penuh melalui LMS (status materi, kuis, &amp; aktivitas terakhir). WhatsApp hanya untuk pendukung.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-primary">update</span>
              </div>
              <h4 className="text-xl font-bold">Fleksibel &amp; Scalable</h4>
              <p className="text-sm text-secondary leading-relaxed">Sistem dirancang sederhana untuk kenyamanan belajar namun tetap scalable untuk ribuan mahasiswa.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-primary">stairs</span>
              </div>
              <h4 className="text-xl font-bold">Prasyarat Berjenjang</h4>
              <p className="text-sm text-secondary leading-relaxed">Mekanisme Learning Path memastikan mahasiswa tidak melewatkan materi fundamental yang penting.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl">
                <span className="material-symbols-outlined text-primary">public</span>
              </div>
              <h4 className="text-xl font-bold">Aksesibilitas Luas</h4>
              <p className="text-sm text-secondary leading-relaxed">Dapat diakses kapan saja, di mana saja, menjangkau penuntut ilmu dari berbagai belahan dunia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peluang Lanjutan */}
      <section className="bg-primary text-on-primary py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Peluang Pendidikan Lanjutan</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 opacity-90">
            Setelah menyelesaikan seluruh Level di BID, Anda memiliki kesempatan untuk mendalami spesialisasi di akademi lanjutan kami:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-on-primary/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-on-primary/20">
              <span className="text-lg font-bold">Arabic Academy</span>
            </div>
            <div className="bg-on-primary/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-on-primary/20">
              <span className="text-lg font-bold">Quran Academy</span>
            </div>
            <div className="bg-on-primary/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-on-primary/20">
              <span className="text-lg font-bold">Ma'had Bahasa Arab dan Diniyah TSL</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-6">
            <FAQItem
              question="Apakah program ini benar-benar gratis?"
              answer="Ya, 100% gratis. Tarbiyah Sunnah Learning berkomitmen menyebarkan ilmu syar'i tanpa biaya pendaftaran maupun SPP."
            />
            <FAQItem
              question="Bagaimana jika saya sibuk bekerja?"
              answer="Sangat cocok. Sistem Guided Self-Paced Learning memungkinkan Anda mengatur jadwal belajar sendiri di sela kesibukan Anda."
            />
            <FAQItem
              question="Apakah ada grup WhatsApp untuk diskusi?"
              answer="Grup WhatsApp tersedia sebagai sarana support dan pengumuman. Namun, pusat pembelajaran dan monitoring progres sepenuhnya ada di LMS."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-8 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-on-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20">
            <span className="material-symbols-outlined text-[10rem]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 relative z-10 leading-tight">Mulai Langkah Pertama Menuju Ilmu yang Syar'i</h2>
          <p className="text-xl mb-12 opacity-80 relative z-10">Sistem belajar yang simpel, fleksibel, namun tetap terstruktur dan berkualitas.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="bg-on-primary text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-xl">
              Daftar Sekarang
            </button>
            <button className="bg-transparent border-2 border-on-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-on-primary/10 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">chat</span> Konsultasi via WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
