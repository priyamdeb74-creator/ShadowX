import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  ArrowUpRight,
  Filter,
  Check,
  RotateCcw,
} from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { DishDetailModal } from '../components/DishDetailModal';
import { TastingMenuSection } from '../components/TastingMenuSection';

type CategoryFilter = 'all' | 'starters' | 'mains' | 'vegetarian' | 'desserts' | 'beverages';

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [glutenFreeOnly, setGlutenFreeOnly] = useState(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Dishes' },
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Main Course' },
    { key: 'vegetarian', label: 'Vegetarian' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'beverages', label: 'Beverages' },
  ];

  // Instant client-side filtering
  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'vegetarian') {
          if (!item.dietary.includes('veg') && !item.dietary.includes('vegan')) {
            return false;
          }
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Dietary filters
      if (vegOnly && !item.dietary.includes('veg') && !item.dietary.includes('vegan')) {
        return false;
      }
      if (glutenFreeOnly && !item.dietary.includes('gluten-free')) {
        return false;
      }

      // Search query match (name, description, ingredients)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIngredients = item.ingredients.some((ing) =>
          ing.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, vegOnly, glutenFreeOnly]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setVegOnly(false);
    setGlutenFreeOnly(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F5F0E8] pt-24 pb-20">
      {/* ===================== MENU HERO ===================== */}
      <section className="relative px-6 md:px-10 py-16 max-w-7xl mx-auto border-b border-[#1D1D19]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151512] border border-[#C6A66B]/30 rounded-sm text-[#C6A66B] text-[11px] font-sans uppercase tracking-[0.25em]">
              <Sparkles className="w-3 h-3 text-[#C6A66B]" />
              <span>Autumn – Winter Gastronomy</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F0E8] text-balance">
              A Menu Inspired by the Seasons.
            </h1>
            <p className="text-sm md:text-base text-[#BDB7AB] font-sans leading-relaxed max-w-2xl">
              Each dish reflects an intimate dialogue between time-honored Indian culinary tradition and avant-garde technique. Sourced with uncompromised integrity from organic high-altitude growers and sustainable coastal harvesters.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#8E7C57]">
              <span>Sample Prices in INR (Inclusive of taxes)</span>
              <span aria-hidden="true">·</span>
              <span>Daily mise-en-place prepared fresh</span>
              <span aria-hidden="true">·</span>
              <a href="#tasting" className="text-[#C6A66B] hover:underline">
                View 7-Course Tasting
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden border border-[#23221C] shadow-2xl">
              <img
                src="/src/assets/images/chef_signature_dish_1791889814938.jpg"
                alt="NOIRÉ Signature Plated Dish"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#151512] border border-[#23221C] px-4 py-2.5 rounded-sm shadow-xl hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A66B] block">
                Featured Plating
              </span>
              <span className="font-serif text-xs text-[#F5F0E8]">
                Truffled Himalayan Morel Risotto
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INTERACTIVE CONTROLS & SEARCH ===================== */}
      <section className="px-6 md:px-10 py-10 max-w-7xl mx-auto sticky top-[68px] z-30 bg-[#0B0B0A]/95 backdrop-blur-md border-b border-[#1D1D19]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none" role="tablist">
            {categories.map((cat) => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium rounded-sm whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#C6A66B] text-[#0B0B0A] shadow-md font-semibold'
                      : 'bg-[#151512] text-[#BDB7AB] hover:text-[#F5F0E8] hover:bg-[#1D1D19] border border-[#23221C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Filters */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Input */}
            <div className="relative min-w-[240px] flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-[#8E7C57] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish or ingredient..."
                aria-label="Search dishes by name or ingredients"
                className="w-full pl-9 pr-3 py-2 bg-[#151512] border border-[#23221C] focus:border-[#C6A66B] rounded-sm text-xs text-[#F5F0E8] placeholder-[#6E685C] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8E7C57] hover:text-[#F5F0E8]"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Dietary Toggles */}
            <div className="flex items-center gap-2 text-xs">
              <button
                type="button"
                onClick={() => setVegOnly(!vegOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-sm border transition-colors ${
                  vegOnly
                    ? 'bg-[#182618] border-emerald-600/60 text-emerald-300'
                    : 'bg-[#151512] border-[#23221C] text-[#BDB7AB] hover:text-[#F5F0E8]'
                }`}
                aria-pressed={vegOnly}
              >
                <span className={`w-2 h-2 rounded-full ${vegOnly ? 'bg-emerald-400' : 'bg-neutral-600'}`} />
                <span>Veg Only</span>
              </button>

              <button
                type="button"
                onClick={() => setGlutenFreeOnly(!glutenFreeOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-sm border transition-colors ${
                  glutenFreeOnly
                    ? 'bg-[#262419] border-amber-600/60 text-amber-300'
                    : 'bg-[#151512] border-[#23221C] text-[#BDB7AB] hover:text-[#F5F0E8]'
                }`}
                aria-pressed={glutenFreeOnly}
              >
                <span className={`w-2 h-2 rounded-full ${glutenFreeOnly ? 'bg-amber-400' : 'bg-neutral-600'}`} />
                <span>Gluten-Free</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DISH GRID ===================== */}
      <section className="px-6 md:px-10 py-12 max-w-7xl mx-auto">
        {/* Results metadata strip */}
        <div className="flex items-center justify-between mb-8 text-xs text-[#8E7C57]">
          <span>
            Showing <strong className="text-[#F5F0E8]">{filteredDishes.length}</strong> culinary creations
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.key === selectedCategory)?.label}`}
          </span>
          {(searchQuery || vegOnly || glutenFreeOnly || selectedCategory !== 'all') && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 text-[#C6A66B] hover:underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredDishes.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto space-y-4 bg-[#151512] border border-[#23221C] p-8 rounded-sm">
            <Filter className="w-8 h-8 text-[#8E7C57] mx-auto opacity-60" />
            <h3 className="font-serif text-xl text-[#F5F0E8]">No Dishes Found</h3>
            <p className="text-xs text-[#BDB7AB] leading-relaxed">
              We could not find any culinary selections matching "{searchQuery || 'the current filter criteria'}". Try broadening your selection.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A66B] text-[#0B0B0A] text-xs uppercase tracking-wider font-medium rounded-sm"
            >
              <span>View All Dishes</span>
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className="group cursor-pointer bg-[#151512] border border-[#23221C] hover:border-[#C6A66B]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300"
              >
                {/* Media */}
                <div className="relative h-64 overflow-hidden bg-[#0B0B0A]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151512] via-transparent to-black/20" />

                  {/* Chef Recommendation Tag */}
                  {dish.isChefRecommendation && (
                    <span className="absolute top-3 left-3 bg-[#0B0B0A]/90 border border-[#C6A66B]/50 text-[#C6A66B] text-[10px] uppercase tracking-wider px-2 py-0.5 font-sans">
                      Chef's Choice
                    </span>
                  )}

                  {/* Price Tag in INR */}
                  <div className="absolute bottom-3 right-3 bg-[#0B0B0A]/90 px-3 py-1 font-serif text-sm md:text-base text-[#C6A66B] tabular-nums border border-[#23221C]">
                    ₹{dish.price.toLocaleString('en-IN')}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Unboxed Metadata with · separator */}
                    <div className="flex items-center gap-2 text-[11px] text-[#8E7C57] uppercase tracking-wider mb-1.5 font-sans">
                      <span>{dish.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>
                        {dish.dietary.includes('veg')
                          ? 'Vegetarian'
                          : dish.dietary.includes('vegan')
                          ? 'Vegan'
                          : 'Specialty'}
                      </span>
                      {dish.dietary.includes('gluten-free') && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>Gluten-Free</span>
                        </>
                      )}
                    </div>

                    <h3 className="font-serif text-xl text-[#F5F0E8] group-hover:text-[#C6A66B] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#BDB7AB] font-sans leading-relaxed mt-2 line-clamp-2">
                      {dish.description}
                    </p>
                  </div>

                  {/* Quick Card Footer */}
                  <div className="pt-4 border-t border-[#23221C] flex items-center justify-between text-xs">
                    <span className="text-[#C6A66B] group-hover:underline text-[11px] uppercase tracking-wider">
                      View Tasting Details
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===================== CHEF'S TASTING MENU SECTION ===================== */}
      <TastingMenuSection />

      {/* ===================== BOTTOM RESERVATION CTA ===================== */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block">
          A Seat at the Table
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight">
          Ready to Savor the Experience?
        </h2>
        <p className="text-sm md:text-base text-[#BDB7AB] max-w-xl mx-auto leading-relaxed">
          Bookings are welcomed up to thirty days in advance. We accommodate private salon gatherings, anniversaries, and dietary preferences.
        </p>
        <div className="pt-2">
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all shadow-xl"
          >
            <span>Reserve Your Table</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Dish Details Modal */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};
