
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Program from './pages/Program';
import BID from './pages/BID';
import Quran from './pages/Quran';
import MadrasahAnak from './pages/MadrasahAnak';
import BahasaArab from './pages/BahasaArab';
import S1PJJ from './pages/S1PJJ';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/bid" element={<BID />} />
          <Route path="/al-quran" element={<Quran />} />
          <Route path="/madrasah-anak" element={<MadrasahAnak />} />
          <Route path="/bahasa-arab" element={<BahasaArab />} />
          <Route path="/s1-pjj" element={<S1PJJ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
