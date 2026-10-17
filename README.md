# NOIRÉ — Modern Fine Dining

A luxury restaurant website designed and built as a production-grade portfolio showcase for fine dining clients. 

## Brand Identity & Aesthetic Direction
- **Brand Name**: NOIRÉ — Modern Fine Dining
- **Palette**:
  - Dominant Neutral: `#0B0B0A` (Deep Charcoal Canvas)
  - Secondary Surface: `#151512` & `#1D1D19` (Textured Obsidian & Slate)
  - Text: `#F5F0E8` (Warm Ivory) & `#BDB7AB` (Muted Warm Gray)
  - Accent Gold: `#C6A66B` & `#DFC493` (Restrained Champagne / Muted Gold)
- **Typography**:
  - Display / Headings: `Cormorant Garamond` (High-contrast editorial serif)
  - Body & UI Controls: `Plus Jakarta Sans` (Clean geometric sans-serif)

---

## Architecture & Multi-Page Routes

1. **Page 1 — Home (`/`)**:
   - Cinematic hero section with custom fine dining photography and balanced typography.
   - Accolades & trust strip (Michelin Guide selection, biodynamic provenance, grand cru cellar).
   - Signature Experiences spotlighting *The Chef's Signature*, *The Art of Pairing*, and *The Obsidian Salon*.
   - Four featured signature dishes with sample pricing in INR (₹), dietary indicators, and quick ingredient modal preview.
   - Our Philosophy split layout highlighting Executive Chef Julian Varma's culinary ethos.
   - Curated patron impressions & critical reflections.
   - Striking "Your Table Awaits" invitation and full footer.

2. **Page 2 — Dedicated Menu (`/menu`)**:
   - Seasonal menu hero with culinary introduction.
   - Real-time interactive category filters: *All Dishes*, *Starters*, *Main Course*, *Vegetarian*, *Desserts*, *Beverages*.
   - Instant search input matching dish names and ingredients.
   - Instant dietary toggles (*Vegetarian Only*, *Gluten-Free*).
   - 14 realistic sample dishes with INR prices, ingredient breakdowns, and allergen notes.
   - Interactive *View Details* modal with sommelier wine pairings and dietary badges.
   - Special feature: *The Chef's 7-Course Tasting Menu* (₹4,800 / guest, optional wine pairing +₹2,500).
   - Dedicated reservation CTA.

3. **Page 3 — Reservations & Our Story (`/reservations`)**:
   - Interactive table reservation booking system.
   - Complete client-side validation (name, email format, phone, party size, occasion, past-date prohibition).
   - Polished simulated confirmation state with generated booking reference code (`NR-XXXXX`), booking summary, and reset trigger.
   - Deep-dive *Our Story & Culinary Heritage* section with timeline of milestones from 2021 to 2025.
   - *Visit NOIRÉ* section featuring opening hours, direct lines, concierge contact, and dark architectural map styling.
   - Accessible *Frequently Asked Questions* accordion covering dress code, dietary adaptations, private events, children guidance, and valet parking.

---

## Technical Stack
- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with custom color and font theme variables
- **Routing**: React Router (`react-router-dom`) with `ScrollToTop` handling
- **Icons**: Lucide React
- **Build Tool**: Vite

---

## Setup & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---

## Demo-Only Features & Integration Roadmap

This application is built as a realistic client showcase. The following demo-only aspects are clearly indicated in the UI:
- **Simulated Reservation System**: The booking form performs client-side validation and generates a formatted reservation reference slip with simulated latency. For production deployment, connect to OpenTable, SevenRooms, Resy API, or a custom PostgreSQL/Firebase reservations database.
- **Payment & Tasting Deposits**: Sample prices in INR are illustrative for demo purposes; an integrated Stripe or Razorpay gateway can be attached for prepaid tasting reservations.
- **Interactive Map**: Styled with an architectural dark vector theme with an external link to Google Maps; can be replaced with an active Google Maps JavaScript API key when provisioned.
