import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Wine, ArrowUpRight } from 'lucide-react';
import { TASTING_MENU } from '../data/restaurantData';

export const TastingMenuSection: React.FC = () => {
  return (
    <section id="tasting" className="py-20 bg-[#0E0E0C] border-y border-[#1D1D19]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151512] border border-[#C6A66B]/30 text-[#C6A66B] text-xs uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Special Progression</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight mb-4 text-balance">
            The Chef's 7-Course Tasting Menu
          </h2>
          <p className="text-sm md:text-base text-[#BDB7AB] leading-relaxed">
            An evening journey through micro-seasonal harvests, rare mountain herbs, and time-honored artisanal slow cooking. Prepared nightly for limited seatings.
          </p>

          {/* Pricing Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-6 py-2.5 px-6 bg-[#151512] border border-[#23221C] rounded-sm text-xs">
            <div className="text-[#F5F0E8]">
              <span className="text-[#8E7C57] uppercase tracking-wider block text-[10px]">Tasting Progression</span>
              <span className="font-serif text-lg text-[#C6A66B] font-medium tabular-nums">₹4,800</span>
              <span className="text-[#BDB7AB] ml-1">/ guest</span>
            </div>
            <div className="h-6 w-px bg-[#23221C] hidden sm:block" />
            <div className="text-[#F5F0E8]">
              <span className="text-[#8E7C57] uppercase tracking-wider block text-[10px]">Sommelier Wine Flight</span>
              <span className="font-serif text-lg text-[#C6A66B] font-medium tabular-nums">+ ₹2,500</span>
              <span className="text-[#BDB7AB] ml-1">/ guest</span>
            </div>
          </div>
        </div>

        {/* 7 Courses List */}
        <div className="max-w-4xl mx-auto divide-y divide-[#1D1D19] border-y border-[#1D1D19]">
          {TASTING_MENU.map((course) => (
            <div
              key={course.courseNumber}
              className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-[#151512]/50 transition-colors px-4 rounded-sm"
            >
              {/* Course Number & Label */}
              <div className="md:col-span-3 flex items-baseline gap-3">
                <span className="font-serif text-sm text-[#8E7C57] tabular-nums">
                  0{course.courseNumber}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-medium">
                  {course.title}
                </span>
              </div>

              {/* Course Dish & Story */}
              <div className="md:col-span-6 space-y-1">
                <h3 className="font-serif text-lg md:text-xl text-[#F5F0E8] font-normal">
                  {course.dish}
                </h3>
                <p className="text-xs text-[#BDB7AB] font-sans leading-relaxed">
                  {course.notes}
                </p>
              </div>

              {/* Sommelier Note */}
              <div className="md:col-span-3 text-left md:text-right">
                <div className="inline-flex md:flex items-center md:justify-end gap-1.5 text-[11px] text-[#8E7C57]">
                  <Wine className="w-3 h-3 text-[#C6A66B]" />
                  <span className="truncate">{course.winePairing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Notice */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-xs text-[#8E7C57] mb-6">
            Vegetarian, vegan, and pescatarian adaptations are gladly honored with advance notice upon reservation.
          </p>
          <Link
            to="/reservations"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-all shadow-lg"
          >
            <span>Reserve Tasting Experience</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
