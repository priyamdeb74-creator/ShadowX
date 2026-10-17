import React, { useEffect } from 'react';
import { X, Sparkles, Wine, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dish) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dish, onClose]);

  if (!dish) return null;

  const dietaryLabels: Record<string, { label: string; bg: string; text: string }> = {
    veg: { label: 'Vegetarian', bg: 'bg-[#1b2b1b]', text: 'text-emerald-400' },
    'non-veg': { label: 'Non-Vegetarian', bg: 'bg-[#2b1b1b]', text: 'text-rose-400' },
    vegan: { label: '100% Vegan', bg: 'bg-[#1b2b1b]', text: 'text-emerald-300' },
    'gluten-free': { label: 'Gluten-Free', bg: 'bg-[#262419]', text: 'text-amber-300' },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#0B0B0A]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#151512] border border-[#23221C] text-[#F5F0E8] w-full max-w-2xl rounded-sm overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-10 p-2 bg-[#0B0B0A]/80 hover:bg-[#C6A66B] text-[#F5F0E8] hover:text-[#0B0B0A] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]"
          aria-label="Close dish details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Media with fallback */}
        <div className="relative h-64 md:h-72 w-full bg-[#0B0B0A] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151512] via-transparent to-black/30" />

          {dish.isChefRecommendation && (
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#0B0B0A]/90 border border-[#C6A66B]/50 text-[#C6A66B] text-[11px] font-sans uppercase tracking-[0.18em]">
              <Sparkles className="w-3 h-3 text-[#C6A66B]" />
              <span>Chef's Recommendation</span>
            </div>
          )}

          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium">
              {dish.category}
            </span>
            <span className="font-serif text-2xl md:text-3xl font-medium text-[#C6A66B] tabular-nums">
              ₹{dish.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Dish Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 id="dish-modal-title" className="font-serif text-2xl md:text-3xl text-[#F5F0E8] font-normal mb-2">
              {dish.name}
            </h3>
            <p className="text-sm md:text-base text-[#BDB7AB] font-sans leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Dietary tags */}
          <div className="flex flex-wrap items-center gap-2">
            {dish.dietary.map((d) => (
              <span
                key={d}
                className={`text-[11px] font-sans uppercase tracking-wider px-2.5 py-1 rounded-sm border border-transparent ${dietaryLabels[d]?.bg} ${dietaryLabels[d]?.text}`}
              >
                {dietaryLabels[d]?.label}
              </span>
            ))}
          </div>

          {/* Ingredients Breakdown */}
          <div className="border-t border-[#23221C] pt-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#8E7C57] font-medium mb-2.5">
              Key Terroir Ingredients
            </h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs text-[#F5F0E8] bg-[#0B0B0A] px-3 py-1.5 rounded-sm border border-[#23221C]"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Sommelier Pairing & Allergen notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#23221C] pt-4 text-xs">
            {dish.pairing && (
              <div className="space-y-1">
                <span className="text-[#C6A66B] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Wine className="w-3.5 h-3.5" />
                  <span>Sommelier Pairing</span>
                </span>
                <p className="text-[#BDB7AB]">{dish.pairing}</p>
              </div>
            )}
            {dish.allergenNote && (
              <div className="space-y-1">
                <span className="text-[#BDB7AB] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                  <span>Dietary & Allergen Note</span>
                </span>
                <p className="text-[#8E7C57]">{dish.allergenNote}</p>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="pt-2 flex items-center justify-between border-t border-[#23221C]">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#BDB7AB] hover:text-[#F5F0E8] transition-colors"
            >
              Back to Menu
            </button>
            <Link
              to="/reservations"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.18em] font-medium rounded-sm transition-colors"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
