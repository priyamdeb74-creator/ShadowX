import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Our Story', path: '/reservations#story' },
    { label: 'Reservations', path: '/reservations' },
  ];

  const isActive = (path: string) => {
    if (path.includes('#')) {
      return location.pathname === '/reservations' && location.hash === '#story';
    }
    return location.pathname === path && !location.hash;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0A]/90 backdrop-blur-md border-b border-[#23221C] py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0A]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          className="group flex items-baseline gap-2 text-decoration-none focus-visible:outline-[#C6A66B] rounded"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-medium text-[#F5F0E8] group-hover:text-[#C6A66B] transition-colors whitespace-nowrap">
            NOIRÉ
          </span>
          <span className="hidden sm:inline text-[10px] tracking-[0.25em] text-[#C6A66B] uppercase font-sans font-medium">
            Fine Dining
          </span>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wider"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative py-1 whitespace-nowrap text-xs uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? 'text-[#C6A66B] font-medium'
                    : 'text-[#BDB7AB] hover:text-[#F5F0E8]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A66B]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/reservations"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.18em] font-medium text-[#0B0B0A] bg-[#C6A66B] hover:bg-[#DFC493] transition-all duration-200 rounded-sm shadow-md whitespace-nowrap"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F0E8] hover:text-[#C6A66B] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] rounded transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0A]/98 backdrop-blur-xl border-b border-[#23221C] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base tracking-[0.15em] uppercase font-serif py-2 border-b border-[#1D1D19] transition-colors ${
                  isActive(link.path) ? 'text-[#C6A66B]' : 'text-[#F5F0E8] hover:text-[#C6A66B]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-[#0B0B0A] bg-[#C6A66B] hover:bg-[#DFC493] rounded-sm transition-colors"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
