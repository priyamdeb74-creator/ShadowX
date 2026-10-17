import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { ReservationsPage } from './pages/ReservationsPage';

/**
 * Automatically scrolls to top on route change unless an anchor hash is present
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B0B0A] text-[#F5F0E8] flex flex-col font-sans selection:bg-[#C6A66B]/30 selection:text-[#F5F0E8]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page Viewport Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            {/* Fallback route for unknown paths */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Unified Luxury Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
