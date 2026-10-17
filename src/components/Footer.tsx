import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080807] border-t border-[#1D1D19] text-[#F5F0E8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Invitation Banner */}
        <div className="bg-[#151512] border border-[#23221C] rounded-sm p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-2">
              An Invitation to Taste
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] font-normal tracking-tight mb-4 text-balance">
              Your Table Awaits at NOIRÉ
            </h2>
            <p className="text-sm md:text-base text-[#BDB7AB] font-sans leading-relaxed mb-6 max-w-xl">
              Immerse yourself in seasonal gastronomy and thoughtful hospitality. Book your table or exclusive private salon dining today.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 rounded-sm"
              >
                <span>Reserve an Experience</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#23221C] hover:border-[#C6A66B] text-[#F5F0E8] hover:text-[#C6A66B] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 rounded-sm"
              >
                <span>View Full Menu</span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none font-serif text-[180px] font-bold text-[#C6A66B] leading-none">
            NOIRÉ
          </div>
        </div>

        {/* 4-Column Footer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1D1D19]">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.25em] text-[#F5F0E8] font-medium block">
                NOIRÉ
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6A66B] font-sans">
                Modern Fine Dining
              </span>
            </Link>
            <p className="text-xs text-[#BDB7AB] leading-relaxed pr-4">
              A celebration of high-altitude Himalayan botanicals, coastal seafood, and progressive culinary architecture.
            </p>
            <div className="pt-2 text-xs text-[#8E7C57]">
              <span>Curated by Chef Julian Varma</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-medium mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-[#BDB7AB]">
              <li>
                <Link to="/" className="hover:text-[#F5F0E8] transition-colors">
                  Home & Experience
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#F5F0E8] transition-colors">
                  Seasonal À La Carte Menu
                </Link>
              </li>
              <li>
                <Link to="/menu#tasting" className="hover:text-[#F5F0E8] transition-colors">
                  Chef's 7-Course Tasting
                </Link>
              </li>
              <li>
                <Link to="/reservations#story" className="hover:text-[#F5F0E8] transition-colors">
                  Our Culinary Philosophy
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#F5F0E8] transition-colors">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link to="/reservations#faq" className="hover:text-[#F5F0E8] transition-colors">
                  Dining Policies & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours of Hospitality */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-medium mb-4 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Service Hours</span>
            </h3>
            <div className="space-y-3 text-xs text-[#BDB7AB]">
              <div>
                <span className="text-[#F5F0E8] block font-medium">Lunch Service</span>
                <span>{RESTAURANT_INFO.lunchHours}</span>
              </div>
              <div>
                <span className="text-[#F5F0E8] block font-medium">Dinner Service</span>
                <span>{RESTAURANT_INFO.dinnerHours}</span>
              </div>
              <div className="text-[#8E7C57] text-[11px] pt-1">
                <span>{RESTAURANT_INFO.closedDays}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Inquiries */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-medium mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Location & Concierge</span>
            </h3>
            <div className="space-y-2.5 text-xs text-[#BDB7AB]">
              <p className="leading-relaxed">
                {RESTAURANT_INFO.address}, {RESTAURANT_INFO.city} — {RESTAURANT_INFO.postalCode}
              </p>
              <div className="flex items-center gap-2 pt-1 text-[#F5F0E8]">
                <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#C6A66B] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#F5F0E8]">
                <Mail className="w-3.5 h-3.5 text-[#C6A66B]" />
                <a href={`mailto:${RESTAURANT_INFO.reservationEmail}`} className="hover:text-[#C6A66B] transition-colors truncate">
                  {RESTAURANT_INFO.reservationEmail}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#8E7C57]">
                <span>Complimentary valet parking at portico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Portfolio Disclosure */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E7C57]">
          <div>
            <p>
              © {new Date().getFullYear()} NOIRÉ Modern Fine Dining. All rights reserved.
            </p>
          </div>

          {/* Explicit Portfolio Demonstration Notice as requested */}
          <div className="flex items-center gap-2 text-[11px] bg-[#151512] px-3 py-1.5 rounded border border-[#23221C] text-[#BDB7AB]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
            <span>Client Portfolio Demonstration — Fictional luxury hospitality showcase</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span className="hover:text-[#F5F0E8] cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-[#F5F0E8] cursor-pointer transition-colors">Terms of Hospitality</span>
            <span className="hover:text-[#F5F0E8] cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
