import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import logoTsl from '../assets/logo.png';

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-xl bg-white ${className}`} aria-hidden="true">
      <img src={logoTsl} alt="" className="absolute left-1/2 top-0 h-[72px] w-[56px] max-w-none -translate-x-1/2 object-contain object-top" />
    </span>
  );
}

const programLinks = [
  { to: '/bid', icon: 'menu_book', title: 'Belajar Islam Dasar', text: 'Fondasi aqidah, ibadah, dan adab.' },
  { to: '/al-quran', icon: 'auto_stories', title: "Program Al-Qur'an", text: 'Tahsin dan hafalan untuk anak & dewasa.' },
  { to: '/preschool-daring', icon: 'toys', title: 'Preschool Daring TSL', text: 'Belajar dan bertumbuh islami dari rumah.' },
  { to: '/madrasah-anak', icon: 'child_care', title: 'Madrasah Anak Daring', text: 'Diniyah interaktif untuk usia 4–12 tahun.' },
  { to: '/bahasa-arab', icon: 'translate', title: 'Bahasa Arab Daring', text: 'Dari pemula hingga mampu membaca teks.' },
  { to: '/s1-pjj', icon: 'school', title: 'S1 Pendidikan Jarak Jauh', text: 'Program sarjana Pendidikan Bahasa Arab.' },
  { to: '/mahad-tsl', icon: 'account_balance', title: 'Ma’had TSL Daring', text: 'Bahasa Arab dan diniyah berbasis marhalah.' },
  { to: '/kajian', icon: 'live_tv', title: 'Kajian Rutin Daring', text: 'Jadwal tematik dan arsip rekaman kajian.' },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link ${isActive ? 'nav-link-active' : ''}`;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProgramOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">Lewati ke konten utama</a>
      <div className="bg-[#183d25] text-white">
        <div className="site-container flex h-9 items-center justify-center gap-2 text-center text-[11px] font-semibold tracking-wide sm:text-xs">
          <span className="material-symbols-outlined text-[15px] text-[#f0c84b]">verified</span>
          Pendaftaran program belajar semester baru telah dibuka
          <Link to="/program" className="hidden underline underline-offset-4 sm:inline">Lihat program</Link>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-[#d9ddcf] bg-[#fbfaf4]/95 backdrop-blur-xl">
        <nav className="site-container flex h-[72px] items-center justify-between" aria-label="Navigasi utama">
          <Link to="/" className="group flex items-center gap-3" aria-label="Tarbiyah Sunnah Learning - Beranda">
            <BrandMark className="h-11 w-11 border border-[#d9ddcf] shadow-[0_5px_18px_rgba(40,92,50,.13)] transition-transform group-hover:-rotate-3" />
            <span className="leading-tight">
              <strong className="block font-headline text-[17px] text-[#183d25]">Tarbiyah Sunnah</strong>
              <span className="block text-[9px] font-bold uppercase tracking-[.22em] text-[#697264]">Learning</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <NavLink className={navClass} to="/" end>Beranda</NavLink>
            <NavLink className={navClass} to="/tentang">Tentang</NavLink>
            <div className="relative" onMouseEnter={() => setProgramOpen(true)} onMouseLeave={() => setProgramOpen(false)}>
              <button
                className={`nav-link flex items-center gap-1 ${['/program', '/bid', '/al-quran', '/preschool-daring', '/madrasah-anak', '/bahasa-arab', '/s1-pjj', '/mahad-tsl', '/kajian'].includes(location.pathname) ? 'nav-link-active' : ''}`}
                onClick={() => setProgramOpen((value) => !value)}
                aria-expanded={programOpen}
                aria-haspopup="true"
              >
                Program <span className={`material-symbols-outlined text-[17px] transition-transform ${programOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              <div className={`absolute left-1/2 top-full w-[580px] -translate-x-1/2 pt-4 transition-all ${programOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}>
                <div className="rounded-2xl border border-[#d9ddcf] bg-white p-3 shadow-[0_20px_50px_rgba(24,61,37,.14)]">
                  <div className="grid grid-cols-2 gap-1">
                    {programLinks.map((item) => (
                      <Link key={item.title} to={item.to} className="rounded-xl p-4 transition-colors hover:bg-[#f1f3e9]">
                        <span className="material-symbols-outlined mb-3 text-[24px] text-[#285c32]">{item.icon}</span>
                        <strong className="block text-sm text-[#1d2a20]">{item.title}</strong>
                        <span className="mt-1 block text-xs leading-relaxed text-[#697264]">{item.text}</span>
                      </Link>
                    ))}
                  </div>
                  <Link to="/program" className="mt-2 flex items-center justify-between rounded-xl bg-[#183d25] px-4 py-3 text-sm font-bold text-white">
                    Jelajahi semua program
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
            <a className="nav-link" href="/#cara-belajar">Cara Belajar</a>
            <a className="nav-link" href="https://wa.me/62895377710900" target="_blank" rel="noreferrer">Kontak</a>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer" className="btn btn-ghost py-2.5">Masuk LMS</a>
            <Link to="/program" className="btn btn-primary py-2.5">Mulai belajar</Link>
          </div>

          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-[#d9ddcf] text-[#183d25] lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!mobileOpen}>
        <button className={`absolute inset-0 bg-[#102718]/55 backdrop-blur-sm transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} aria-label="Tutup menu" />
        <aside className={`absolute right-0 top-0 flex h-full w-[min(90vw,390px)] flex-col overflow-y-auto overscroll-contain bg-[#fbfaf4] p-6 shadow-2xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-8 flex items-center justify-between">
            <span className="font-headline text-xl font-bold text-[#183d25]">Menu</span>
            <button className="grid h-10 w-10 place-items-center rounded-xl border border-[#d9ddcf]" onClick={() => setMobileOpen(false)} aria-label="Tutup menu">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="space-y-1">
            <NavLink className="mobile-nav-link" to="/">Beranda <span className="material-symbols-outlined">home</span></NavLink>
            <NavLink className="mobile-nav-link" to="/tentang">Tentang TSL <span className="material-symbols-outlined">domain</span></NavLink>
            <NavLink className="mobile-nav-link" to="/program">Semua Program <span className="material-symbols-outlined">grid_view</span></NavLink>
          </div>
          <div className="my-5 h-px bg-[#d9ddcf]" />
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#7a8175]">Program populer</p>
          <div className="space-y-2">
            {programLinks.map((item) => (
              <Link key={item.title} to={item.to} aria-current={location.pathname === item.to ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl border p-3.5 text-sm font-bold text-[#183d25] ${location.pathname === item.to ? 'border-[#9caf94] bg-[#e3efd8]' : 'border-transparent bg-white'}`}>
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#e3efd8] material-symbols-outlined text-xl">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="mt-auto grid gap-2 pt-6">
            <a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer" className="btn btn-outline">Masuk LMS</a>
            <a href="https://wa.me/62895377710900" target="_blank" rel="noreferrer" className="btn btn-primary">Konsultasi via WhatsApp</a>
          </div>
        </aside>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#d9ddcf] bg-[#eef0e7]">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.35fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="mb-5 inline-flex items-center gap-3">
            <BrandMark className="h-12 w-12 border border-[#d2d8ce]" />
            <span className="font-headline text-lg font-bold text-[#183d25]">Tarbiyah Sunnah Learning</span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-[#667064]">Ekosistem pendidikan Islam yang membantu keluarga belajar secara bertahap, terarah, dan amanah.</p>
        </div>
        <div>
          <h3 className="footer-title">Program</h3>
          <div className="footer-links"><Link to="/bid">Belajar Islam Dasar</Link><Link to="/al-quran">Al-Qur'an Anak & Dewasa</Link><Link to="/preschool-daring">Preschool Daring TSL</Link><Link to="/madrasah-anak">Madrasah Anak Daring</Link><Link to="/bahasa-arab">Bahasa Arab Daring</Link><Link to="/s1-pjj">Program S1 PJJ</Link><Link to="/mahad-tsl">Ma’had TSL Daring</Link><Link to="/kajian">Kajian Rutin Daring</Link></div>
        </div>
        <div>
          <h3 className="footer-title">Jelajahi</h3>
          <div className="footer-links"><Link to="/tentang">Tentang Kami</Link><Link to="/program">Semua Program</Link><a href="/#cara-belajar">Cara Belajar</a></div>
        </div>
        <div>
          <h3 className="footer-title">Terhubung</h3>
          <div className="footer-links"><a href="https://my.tslbelajarislam.id/" target="_blank" rel="noreferrer">Learning Management System</a><a href="https://wa.me/62895377710900" target="_blank" rel="noreferrer">WhatsApp Admin</a><a href="mailto:salam@tarbiyahsunnahlearning.or.id">salam@tarbiyahsunnahlearning.or.id</a></div>
        </div>
      </div>
      <div className="border-t border-[#d9ddcf]">
        <div className="site-container flex flex-col gap-3 py-5 text-xs text-[#697264] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tarbiyah Sunnah Learning. Amanah &amp; Bertahap.</p>
          <div className="flex gap-5"><a href="#">Kebijakan Privasi</a><a href="#">Syarat &amp; Ketentuan</a></div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return <><Navbar /><div id="main-content"><Outlet /></div><Footer /></>;
}
