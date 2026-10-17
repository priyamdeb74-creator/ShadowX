import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Calendar,
  Clock,
  Users,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Info,
  RotateCcw,
} from 'lucide-react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';

interface ReservationFormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  guestCount: string;
  occasion: string;
  specialRequests: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  timeSlot?: string;
  guestCount?: string;
}

export const ReservationsPage: React.FC = () => {
  const location = useLocation();

  // Scroll to #story or #faq if anchored in URL
  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Today's date in YYYY-MM-DD for min date picker
  const todayDateString = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    email: '',
    phone: '',
    date: todayDateString,
    timeSlot: '19:30',
    guestCount: '2',
    occasion: 'None',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    referenceCode: string;
    details: ReservationFormData;
    bookedAt: string;
  } | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const availableTimeSlots = [
    { label: 'Lunch — 12:30 PM', value: '12:30' },
    { label: 'Lunch — 01:00 PM', value: '13:00' },
    { label: 'Lunch — 01:30 PM', value: '13:30' },
    { label: 'Lunch — 02:00 PM', value: '14:00' },
    { label: 'Dinner — 07:00 PM', value: '19:00' },
    { label: 'Dinner — 07:30 PM', value: '19:30' },
    { label: 'Dinner — 08:00 PM', value: '20:00' },
    { label: 'Dinner — 08:30 PM', value: '20:30' },
    { label: 'Dinner — 09:00 PM', value: '21:00' },
    { label: 'Dinner — 09:30 PM', value: '21:30' },
  ];

  const occasions = [
    'Casual Fine Dining',
    'Anniversary Celebration',
    'Birthday Evening',
    'Business / Executive Dinner',
    'Chef’s Tasting Experience',
    'Special Romantic Evening',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address for reservation confirmation.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a telephone number for booking verification.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    } else if (formData.date < todayDateString) {
      newErrors.date = 'Reservation date cannot be in the past.';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred seating time.';
    }

    if (!formData.guestCount) {
      newErrors.guestCount = 'Please indicate party size.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous verification latency
    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `NR-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmedBooking({
        referenceCode: randomCode,
        details: { ...formData },
        bookedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }, 850);
  };

  const handleResetForm = () => {
    setConfirmedBooking(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: todayDateString,
      timeSlot: '19:30',
      guestCount: '2',
      occasion: 'Casual Fine Dining',
      specialRequests: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F5F0E8] pt-24 pb-20">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative px-6 md:px-10 py-16 max-w-7xl mx-auto border-b border-[#1D1D19]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151512] border border-[#C6A66B]/30 rounded-sm text-[#C6A66B] text-[11px] font-sans uppercase tracking-[0.25em]">
              <Sparkles className="w-3 h-3 text-[#C6A66B]" />
              <span>Hospitality & Reservations</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F0E8] text-balance">
              Make It an Evening to Remember.
            </h1>
            <p className="text-sm md:text-base text-[#BDB7AB] font-sans leading-relaxed max-w-2xl">
              We welcome guests to our main dining salon and the private Obsidian Salon for an immersive culinary progression. Every seating is prepared with personalized attention to detail.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-[#8E7C57]">
              <span>Table hold grace: 15 minutes</span>
              <span aria-hidden="true">·</span>
              <span>Smart Elegant dress attire</span>
              <span aria-hidden="true">·</span>
              <span>Valet service included</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden border border-[#23221C] shadow-2xl">
              <img
                src="/src/assets/images/private_dining_room_1791889815887.jpg"
                alt="NOIRÉ Dining Salon Ambience"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#151512] border border-[#23221C] px-4 py-2 rounded-sm shadow-xl hidden sm:block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A66B] block">
                Intimate Setting
              </span>
              <span className="font-serif text-xs text-[#F5F0E8]">
                The Obsidian Salon & Main Gallery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESERVATION FORM & CONFIRMATION ===================== */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        {confirmedBooking ? (
          /* Polished Confirmation State */
          <div className="bg-[#151512] border border-[#C6A66B]/50 p-8 md:p-12 rounded-sm shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#1b2b1b] border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-1">
                Reservation Confirmed
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0E8] font-normal">
                We Look Forward to Welcoming You
              </h2>
              <p className="text-xs text-[#8E7C57] mt-1">
                Confirmation Ref: <strong className="text-[#C6A66B] font-mono text-sm tracking-wider">{confirmedBooking.referenceCode}</strong>
              </p>
            </div>

            {/* Summary Plaque */}
            <div className="bg-[#0B0B0A] border border-[#23221C] p-6 rounded-sm text-left max-w-lg mx-auto space-y-3 text-xs">
              <div className="flex justify-between py-1 border-b border-[#1D1D19]">
                <span className="text-[#8E7C57]">Guest Name</span>
                <span className="text-[#F5F0E8] font-medium">{confirmedBooking.details.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1D1D19]">
                <span className="text-[#8E7C57]">Date & Time</span>
                <span className="text-[#F5F0E8] font-medium">
                  {confirmedBooking.details.date} at {confirmedBooking.details.timeSlot}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1D1D19]">
                <span className="text-[#8E7C57]">Party Size</span>
                <span className="text-[#F5F0E8] font-medium">{confirmedBooking.details.guestCount} Guests</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1D1D19]">
                <span className="text-[#8E7C57]">Occasion</span>
                <span className="text-[#F5F0E8] font-medium">{confirmedBooking.details.occasion}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1D1D19]">
                <span className="text-[#8E7C57]">Contact</span>
                <span className="text-[#F5F0E8] font-medium">{confirmedBooking.details.email}</span>
              </div>
              {confirmedBooking.details.specialRequests && (
                <div className="pt-2">
                  <span className="text-[#8E7C57] block mb-1">Special Requests:</span>
                  <p className="text-[#BDB7AB] italic bg-[#151512] p-2.5 rounded border border-[#23221C]">
                    "{confirmedBooking.details.specialRequests}"
                  </p>
                </div>
              )}
            </div>

            {/* Demo Notice */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#8E7C57] bg-[#151512] max-w-lg mx-auto py-2 px-4 rounded border border-[#23221C]">
              <Info className="w-4 h-4 text-[#C6A66B] shrink-0" />
              <span>
                Demonstration Notice: This is a client portfolio prototype. No credit card was charged and no live booking server was contacted.
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Book Another Table</span>
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Form */
          <div className="bg-[#151512] border border-[#23221C] p-8 md:p-12 rounded-sm shadow-2xl">
            <div className="mb-8 border-b border-[#23221C] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0E8] font-normal">
                    Reserve Your Table
                  </h2>
                  <p className="text-xs text-[#BDB7AB] mt-1 font-sans">
                    Please provide your details below. Tables are held for 15 minutes past scheduled seating.
                  </p>
                </div>
                {/* Demo Badge */}
                <span className="self-start sm:self-center text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#0B0B0A] border border-[#C6A66B]/30 text-[#C6A66B] font-medium">
                  Portfolio Booking Demo
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                    Full Name <span className="text-[#C6A66B]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Priyam Deb"
                    className={`w-full px-4 py-3 bg-[#0B0B0A] border text-xs text-[#F5F0E8] rounded-sm placeholder-[#6E685C] focus:outline-none transition-colors ${
                      errors.fullName ? 'border-rose-500' : 'border-[#23221C] focus:border-[#C6A66B]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                    Email Address <span className="text-[#C6A66B]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. priyam@example.com"
                    className={`w-full px-4 py-3 bg-[#0B0B0A] border text-xs text-[#F5F0E8] rounded-sm placeholder-[#6E685C] focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-[#23221C] focus:border-[#C6A66B]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                    Telephone Number <span className="text-[#C6A66B]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-3 bg-[#0B0B0A] border text-xs text-[#F5F0E8] rounded-sm placeholder-[#6E685C] focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-[#23221C] focus:border-[#C6A66B]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="guestCount" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                    Party Size <span className="text-[#C6A66B]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0B0A] border border-[#23221C] focus:border-[#C6A66B] text-xs text-[#F5F0E8] rounded-sm focus:outline-none appearance-none"
                    >
                      <option value="1">1 Guest (Chef’s Counter)</option>
                      <option value="2">2 Guests (Intimate Dining)</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 to 10 Guests (Large Table)</option>
                      <option value="12">12 to 14 Guests (The Obsidian Salon)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#8E7C57] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 3: Date & Time Slot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                    Reservation Date <span className="text-[#C6A66B]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="date"
                      type="date"
                      min={todayDateString}
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: undefined });
                      }}
                      className={`w-full px-4 py-3 bg-[#0B0B0A] border text-xs text-[#F5F0E8] rounded-sm focus:outline-none transition-colors ${
                        errors.date ? 'border-rose-500' : 'border-[#23221C] focus:border-[#C6A66B]'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="mt-1.5 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                    Seating Time <span className="text-[#C6A66B]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0B0A] border border-[#23221C] focus:border-[#C6A66B] text-xs text-[#F5F0E8] rounded-sm focus:outline-none appearance-none"
                    >
                      {availableTimeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#8E7C57] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 4: Occasion */}
              <div>
                <label htmlFor="occasion" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                  Special Occasion (Optional)
                </label>
                <div className="relative">
                  <select
                    id="occasion"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0B0A] border border-[#23221C] focus:border-[#C6A66B] text-xs text-[#F5F0E8] rounded-sm focus:outline-none appearance-none"
                  >
                    {occasions.map((occ) => (
                      <option key={occ} value={occ}>
                        {occ}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#8E7C57] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 5: Dietary Notes & Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-xs uppercase tracking-wider text-[#8E7C57] mb-2 font-medium">
                  Dietary Preferences or Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Vegetarian tasting progression, shellfish allergy, quiet table preference..."
                  className="w-full px-4 py-3 bg-[#0B0B0A] border border-[#23221C] focus:border-[#C6A66B] text-xs text-[#F5F0E8] rounded-sm placeholder-[#6E685C] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C6A66B] hover:bg-[#DFC493] text-[#0B0B0A] text-xs uppercase tracking-[0.22em] font-semibold rounded-sm transition-all shadow-xl disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0B0B0A] border-t-transparent rounded-full animate-spin" />
                      <span>Verifying Availability...</span>
                    </>
                  ) : (
                    <span>Confirm Table Reservation</span>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-[#8E7C57]">
                By requesting a reservation, you agree to our 24-hour cancellation charter and smart elegant dress guideline.
              </p>
            </form>
          </div>
        )}
      </section>

      {/* ===================== OUR STORY SECTION ===================== */}
      <section id="story" className="py-24 bg-[#0E0E0C] border-t border-[#1D1D19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-2">
              The Genesis of NOIRÉ
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight">
              Our Story & Culinary Heritage
            </h2>
            <p className="text-xs text-[#8E7C57] mt-3">
              An unyielding pursuit of terroir purity, artisanal craft, and sensory memories
            </p>
          </div>

          {/* Editorial Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl text-[#F5F0E8]">
                Born from Reverence for the Earth
              </h3>
              <p className="text-sm text-[#BDB7AB] leading-relaxed">
                Founded by Executive Chef Julian Varma and Creative Director Priya Sengupta, NOIRÉ emerged from a shared desire to strip away pretentious theatricality and reconnect fine dining with its true heartbeat: honest, extraordinary ingredients.
              </p>
              <p className="text-sm text-[#BDB7AB] leading-relaxed">
                Every root, herb, and grain featured on our tasting menu travels a deliberate path. We work directly with smallholder biodynamic growers in the Nilgiris, foraged fungal harvesters across Kashmir pine forests, and third-generation cold-press millers.
              </p>
              <div className="border-l-2 border-[#C6A66B] pl-4 italic font-serif text-base text-[#F5F0E8] my-4">
                “Modern gastronomy is not about imposing human vanity upon food. It is about listening so deeply that the ingredient reveals its own transcendence.”
              </div>
              <p className="text-sm text-[#BDB7AB] leading-relaxed">
                Our kitchen treats time itself as an ingredient. Sauces undergo patient reductions over gentle embers, vinegars ferment in charred teak barrels for seasons, and broths simmer overnight until crystalline.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-sm overflow-hidden border border-[#23221C] shadow-2xl">
                <img
                  src="/src/assets/images/executive_chef_craft_1791889815822.jpg"
                  alt="Executive Chef crafting in NOIRÉ kitchen"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#151512]/90 backdrop-blur-sm p-4 border border-[#23221C] rounded-sm">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A66B] block">
                    Leadership
                  </span>
                  <span className="font-serif text-base text-[#F5F0E8] block">
                    Chef Julian Varma & The Brigade
                  </span>
                  <span className="text-xs text-[#8E7C57]">
                    Championing sustainable provenance & contemporary Indian haute cuisine
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline / Milestones */}
          <div className="pt-8 border-t border-[#1D1D19]">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium text-center mb-12">
              Chronicle of Milestones
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { year: '2021', title: 'The Vision', desc: 'Conception of NOIRÉ during Chef Julian’s expeditions across Kashmir and Himalayan orchards.' },
                { year: '2023', title: 'The Sourcing Pact', desc: 'Direct contracts established with 18 biodynamic family farms and heritage spice growers.' },
                { year: '2024', title: 'Grand Opening', desc: 'NOIRÉ opens its doors on The Heritage Promenade, introducing The Obsidian Salon.' },
                { year: '2025', title: 'Global Acclaim', desc: 'Featured in leading international gastronomic journals and awarded top accolades.' },
              ].map((m) => (
                <div key={m.year} className="bg-[#151512] border border-[#23221C] p-6 rounded-sm space-y-2">
                  <span className="font-serif text-2xl text-[#C6A66B] tabular-nums block font-medium">
                    {m.year}
                  </span>
                  <h5 className="font-serif text-lg text-[#F5F0E8]">{m.title}</h5>
                  <p className="text-xs text-[#BDB7AB] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VISIT US SECTION ===================== */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block">
              Directions & Hospitality
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight">
              Visit NOIRÉ
            </h2>
            <p className="text-sm text-[#BDB7AB] leading-relaxed">
              Conveniently located atop the high-ceilinged atrium of The Heritage Promenade, overlooking the historic central avenue.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0E8] block mb-0.5">Physical Address</strong>
                  <span className="text-[#BDB7AB]">{RESTAURANT_INFO.address}, {RESTAURANT_INFO.city} — {RESTAURANT_INFO.postalCode}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0E8] block mb-0.5">Service Hours</strong>
                  <span className="text-[#BDB7AB] block">Lunch: {RESTAURANT_INFO.lunchHours}</span>
                  <span className="text-[#BDB7AB] block">Dinner: {RESTAURANT_INFO.dinnerHours}</span>
                  <span className="text-[#8E7C57] block mt-0.5">{RESTAURANT_INFO.closedDays}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0E8] block mb-0.5">Direct Line & Concierge</strong>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#BDB7AB] hover:text-[#C6A66B]">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F0E8] block mb-0.5">Electronic Inquiries</strong>
                  <a href={`mailto:${RESTAURANT_INFO.reservationEmail}`} className="text-[#BDB7AB] hover:text-[#C6A66B]">
                    {RESTAURANT_INFO.reservationEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#151512] hover:bg-[#23221C] border border-[#23221C] hover:border-[#C6A66B] text-[#F5F0E8] text-xs uppercase tracking-[0.18em] font-medium rounded-sm transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C6A66B]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7">
            <div className="bg-[#151512] border border-[#23221C] rounded-sm p-6 space-y-4">
              <div className="relative h-80 rounded-sm overflow-hidden bg-[#0B0B0A] border border-[#1D1D19] flex items-center justify-center">
                {/* Architectural Dark Map Representation */}
                <div className="absolute inset-0 bg-[radial-gradient(#23221C_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                
                {/* Subtle map road grid lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-[#23221C]" />
                  <div className="h-full w-[1px] bg-[#23221C] absolute" />
                  <div className="w-3/4 h-[1px] bg-[#23221C] rotate-45 absolute" />
                </div>

                {/* Center Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                  <div className="w-10 h-10 bg-[#C6A66B] text-[#0B0B0A] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#0B0B0A]">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="mt-2 bg-[#0B0B0A]/95 border border-[#C6A66B]/50 px-3 py-1 rounded-sm shadow-xl text-center">
                    <span className="font-serif text-xs text-[#F5F0E8] font-medium block">NOIRÉ</span>
                    <span className="text-[10px] text-[#C6A66B] block">Level 4, Grand Atrium</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-[#0B0B0A]/80 px-2.5 py-1 text-[10px] text-[#8E7C57] rounded border border-[#23221C]">
                  The Heritage Promenade · Valet Portico Entrance
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#8E7C57] pt-1">
                <span>Coordinates: 28.6139° N, 77.2090° E</span>
                <span className="text-[#C6A66B]">Complimentary Private Valet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ACCORDION SECTION ===================== */}
      <section id="faq" className="py-24 bg-[#0E0E0C] border-t border-[#1D1D19]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium block mb-2">
              Common Curiosities
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#F5F0E8] font-normal tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#8E7C57] mt-2">
              Everything you need to know before your evening at NOIRÉ
            </p>
          </div>

          <div className="divide-y divide-[#1D1D19] border-y border-[#1D1D19]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] py-1"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg md:text-xl text-[#F5F0E8] hover:text-[#C6A66B] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C6A66B] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-3 pb-2 text-xs md:text-sm text-[#BDB7AB] leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
