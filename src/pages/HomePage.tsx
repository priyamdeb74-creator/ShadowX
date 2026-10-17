import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Clock, Wine, Star, Compass } from 'lucide-react';
import {
  SIGNATURE_EXPERIENCES,
  MENU_ITEMS,
  TESTIMONIALS,
  MenuItem,
} from '../data/restaurantData';
import { DishDetailModal } from '../components/DishDetailModal';

export const HomePage: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // 4 Featured signature dishes
  const featuredDishes = MENU_ITEMS.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F5F0E8] overflow-hidden">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-10 overflow-hidden">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_fine_dining_1791889783863.jpg"
            alt="NOIRÉ Modern Fine Dining interior and plated gastronomy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Refined gradient scrim for optimal typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/70 to-[#0B0B0A]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0A]/30 to-[#0B0B0A]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 pt-10">
          {/* Quiet Subtitle Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#151512]/90 border border-[#C6A66B]/30 rounded-sm text-[#C6A66B] text-[11px] font-sans uppercase tracking-[0.25em] shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-[#C6A66B]" />
            <span>Modern Fine Dining · Haute Gastronomy</span>
          </div>

          {/* Large Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5F0E8] leading-[1.08] text-balance">
            An Artful Expression of Taste.
          </h1>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#BDB7AB] font-sans leading-relaxed tracking-wide font-light">
            Seasonal ingredients. Thoughtful craftsmanship. An unforgettable dining experience where progressive culinary artistry meets warm, timeless hospitality.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all shadow-xl hover:shadow-2xl"
            >
              <span>Explore Our Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#151512]/80 hover:bg-[#23221C] border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#F5F0E8] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all backdrop-blur-sm"
            >
              <span>Reserve Your Experience</span>
            </Link>
          </div>

          {/* Micro Trust Strip */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#8E7C57] border-t border-[#23221C]/60 max-w-2xl mx-auto">
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Michelin Selection</span>
            </span>
            <span aria-hidden="true" className="text-[#3A382F]">·</span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Bio-dynamic Terroir</span>
            </span>
            <span aria-hidden="true" className="text-[#3A382F]">·</span>
            <span className="flex items-center gap-1.5">
              <Wine className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Grand Cru Cellar</span>
            </span>
          </div>
        </div>
      </section>

      {/* ===================== SIGNATURE EXPERIENCES ===================== */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-[#1D1D19]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-2">
              Curated Encounters
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight text-balance">
              Signature Dining Experiences
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#BDB7AB] max-w-md font-sans leading-relaxed">
            Every visit to NOIRÉ is designed as an intimate sensory narrative, balancing rare seasonal harvests with thoughtful modern hospitality.
          </p>
        </div>

        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SIGNATURE_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="group bg-[#151512] border border-[#23221C] hover:border-[#C6A66B]/60 transition-all duration-300 rounded-sm overflow-hidden flex flex-col"
            >
              {/* Media Container */}
              <div className="relative h-64 overflow-hidden bg-[#0B0B0A]">
                <img
                  src={exp.image}
                  alt={exp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151512] via-transparent to-black/20" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-[#C6A66B] bg-[#0B0B0A]/80 px-2.5 py-1 border border-[#23221C]">
                  {exp.subtitle}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#F5F0E8] group-hover:text-[#C6A66B] transition-colors mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#BDB7AB] font-sans leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#23221C]">
                  <Link
                    to={exp.id === 'chef-signature' ? '/menu' : '/reservations'}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#C6A66B] group-hover:text-[#DFC493] font-medium transition-colors"
                  >
                    <span>{exp.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURED DISHES ===================== */}
      <section className="py-24 bg-[#0E0E0C] border-y border-[#1D1D19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-2">
                Seasonal Highlights
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight">
                Featured Signature Dishes
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A66B] hover:text-[#DFC493] transition-colors font-medium"
            >
              <span>Explore Complete Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="group cursor-pointer bg-[#151512] border border-[#23221C] hover:border-[#C6A66B]/50 rounded-sm overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Media */}
                <div className="relative h-56 overflow-hidden bg-[#0B0B0A]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151512] via-transparent to-black/20" />
                  
                  {dish.isChefRecommendation && (
                    <span className="absolute top-3 left-3 bg-[#0B0B0A]/90 border border-[#C6A66B]/50 text-[#C6A66B] text-[10px] uppercase tracking-wider px-2 py-0.5">
                      Chef's Selection
                    </span>
                  )}
                  
                  <div className="absolute bottom-3 right-3 bg-[#0B0B0A]/85 px-2.5 py-1 text-xs font-serif text-[#C6A66B] tabular-nums border border-[#23221C]">
                    ₹{dish.price.toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#8E7C57] uppercase tracking-wider mb-1">
                      <span>{dish.category}</span>
                      <span>·</span>
                      <span>{dish.dietary.includes('veg') ? 'Vegetarian' : 'Specialty'}</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#F5F0E8] group-hover:text-[#C6A66B] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#BDB7AB] line-clamp-2 mt-1.5 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#23221C] flex items-center justify-between text-[11px] text-[#C6A66B]">
                    <span>View Ingredients & Pairing</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OUR PHILOSOPHY ===================== */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#23221C] shadow-2xl">
              <img
                src="/src/assets/images/executive_chef_craft_1791889815822.jpg"
                alt="Executive Chef Julian Varma crafting a dish at NOIRÉ"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] md:h-[540px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent" />
            </div>

            {/* Overlaid Quote Plaque */}
            <div className="mt-4 md:mt-0 md:absolute -bottom-8 -right-6 md:max-w-xs bg-[#151512] border border-[#23221C] p-6 shadow-2xl rounded-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-1">
                Culinary Directive
              </span>
              <p className="font-serif text-sm italic text-[#F5F0E8] leading-relaxed">
                “Every plate must tell the truth of its soil, its season, and the hands that nurtured it.”
              </p>
              <span className="text-[11px] text-[#8E7C57] block mt-2 font-sans">
                — Julian Varma, Executive Chef
              </span>
            </div>
          </div>

          {/* Editorial Philosophy Column */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight text-balance">
              Where Ancient Terroir Meets Modern Technique
            </h2>
            <p className="text-sm md:text-base text-[#BDB7AB] font-sans leading-relaxed">
              At NOIRÉ, we reject the artifice of culinary excess in favor of deep ingredient purity. We source our cold-pressed oils from family presses, wild morels from Kashmir valleys, and line-caught seafood from trusted coastal collectives.
            </p>
            <p className="text-sm md:text-base text-[#BDB7AB] font-sans leading-relaxed">
              Our kitchen operates on the quiet rhythm of slow braising, gentle smoke, and precise fermentations. Each course reflects an unhurried dedication to balance, aroma, and memories carved into taste.
            </p>

            {/* 3 Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#23221C]">
              <div>
                <h4 className="font-serif text-base text-[#F5F0E8] mb-1">Seasonal Integrity</h4>
                <p className="text-xs text-[#8E7C57]">
                  Micro-seasonal menus refreshed every lunar cycle to honor nature's prime.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-base text-[#F5F0E8] mb-1">Thoughtful Hospitality</h4>
                <p className="text-xs text-[#8E7C57]">
                  Discreet, intuitive service tailored to each guest's private rhythm.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/reservations#story"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A66B] hover:text-[#DFC493] font-medium transition-colors"
              >
                <span>Read Full Chronicle</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-24 bg-[#0E0E0C] border-t border-[#1D1D19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-2">
              Patron Impressions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight">
              Words From Our Table
            </h2>
            <p className="text-xs text-[#8E7C57] mt-3 font-sans">
              Illustrative critical reflections & private client notes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#151512] border border-[#23221C] p-8 rounded-sm flex flex-col justify-between space-y-6 hover:border-[#C6A66B]/40 transition-colors"
              >
                <div className="space-y-4">
                  <span className="font-serif text-4xl text-[#C6A66B] leading-none block select-none">
                    “
                  </span>
                  <p className="font-serif text-base text-[#F5F0E8] leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#23221C]">
                  <span className="font-sans text-xs uppercase tracking-wider text-[#F5F0E8] font-medium block">
                    {t.author}
                  </span>
                  <span className="text-[11px] text-[#8E7C57] block">
                    {t.role} · {t.publication}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Dish Details */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};
