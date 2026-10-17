export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'vegetarian' | 'desserts' | 'beverages';
  description: string;
  price: number; // in INR
  image: string;
  dietary: ('veg' | 'non-veg' | 'vegan' | 'gluten-free')[];
  isChefRecommendation?: boolean;
  ingredients: string[];
  pairing?: string;
  allergenNote?: string;
}

export interface TastingCourse {
  courseNumber: number;
  title: string;
  dish: string;
  notes: string;
  winePairing: string;
}

export const SIGNATURE_EXPERIENCES = [
  {
    id: 'chef-signature',
    title: "The Chef's Signature",
    subtitle: 'Avant-Garde Terroir',
    description: 'A multi-sensory progression of seasonal dishes celebrating hyper-local Indian provenance and progressive French culinary architecture.',
    image: '/src/assets/images/chef_signature_dish_1791889814938.jpg',
    actionText: 'Explore Gastronomy',
  },
  {
    id: 'art-of-pairing',
    title: 'The Art of Pairing',
    subtitle: 'Cellar & Alchemy',
    description: 'Rare biodynamic vintages, grand cru champagnes, and hand-foraged botanical reductions curated by Head Sommelier to elevate every nuance.',
    image: '/src/assets/images/wine_pairing_experience_1791889816027.jpg',
    actionText: 'Discover Cellar',
  },
  {
    id: 'private-dining',
    title: 'The Obsidian Salon',
    subtitle: 'Intimate Celebrations',
    description: 'An exclusive private dining enclave for up to fourteen guests, featuring customized multi-course menus and dedicated discreet service.',
    image: '/src/assets/images/private_dining_room_1791889815887.jpg',
    actionText: 'Reserve Salon',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-1',
    name: 'Truffled Himalayan Morel Risotto',
    category: 'mains',
    description: 'Carnaroli reserve rice, hand-foraged Kashmir morels, aged Parmigiano Reggiano crisp, black summer truffle emulsion.',
    price: 1450,
    image: '/src/assets/images/chef_signature_dish_1791889814938.jpg',
    dietary: ['veg', 'gluten-free'],
    isChefRecommendation: true,
    ingredients: ['Carnaroli Rice', 'Kashmiri Morel Mushrooms', 'Aged 36-Month Parmigiano', 'Perigord Black Truffle', 'Chervil'],
    pairing: 'Barolo DOCG, Piedmont 2018',
    allergenNote: 'Contains dairy. Gluten-free.',
  },
  {
    id: 'dish-2',
    name: 'Herb-Crusted Artisanal Malai Paneer',
    category: 'vegetarian',
    description: 'Organic single-dairy cottage cheese steak, charred leek velouté, cold-pressed cold mustard drizzle, micro-sorrel.',
    price: 1250,
    image: '/src/assets/images/herb_crusted_paneer_1791890019380.jpg',
    dietary: ['veg'],
    isChefRecommendation: true,
    ingredients: ['Organic Malai Paneer', 'Garden Fresh Herb Crust', 'Charred Baby Leek', 'Cold-Pressed Mustard Oil', 'Edible Borage'],
    pairing: 'Domaine Leflaive Puligny-Montrachet 2020',
    allergenNote: 'Contains dairy & traces of sesame.',
  },
  {
    id: 'dish-3',
    name: 'Saffron Sphere & Pistachio Mille-Feuille',
    category: 'desserts',
    description: 'Pure Pampore saffron mousse sphere, caramelized layered tuile, Bronte pistachio praline, wild forest honey nectar, edible 24k gold.',
    price: 950,
    image: '/src/assets/images/saffron_dessert_1791890019191.jpg',
    dietary: ['veg'],
    isChefRecommendation: true,
    ingredients: ['Pampore Grade-A Saffron', 'Sicilian Pistachio', 'Wild Raw Honey', 'Caramelized Butter Phyllo', '24k Gold Leaf'],
    pairing: 'Château d’Yquem Sauternes 2016',
    allergenNote: 'Contains dairy, tree nuts & gluten.',
  },
  {
    id: 'dish-4',
    name: 'Wood-Fired Heirloom Root Vegetables',
    category: 'starters',
    description: 'Baby purple carrots, roman cauliflower, silky parsnip purée, pomegranate molasses drizzle, toasted pine nut dust.',
    price: 1100,
    image: '/src/assets/images/chef_signature_dish_1791889814938.jpg',
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['Heirloom Baby Carrots', 'Romanesco', 'Parsnip Silk', 'Wild Pomegranate Molasses', 'Pine Nuts'],
    pairing: 'Sancerre Blanc, Henri Bourgeois 2022',
    allergenNote: 'Contains pine nuts. 100% vegan & gluten-free.',
  },
  {
    id: 'dish-5',
    name: 'Smoked Oak Smoked Old Fashioned',
    category: 'beverages',
    description: 'Charred French oak infusion, roasted orange peel mist, clarified Medjool date nectar, hand-carved crystal ice sphere.',
    price: 750,
    image: '/src/assets/images/craft_botanical_cocktail_1791890019910.jpg',
    dietary: ['vegan', 'gluten-free'],
    isChefRecommendation: true,
    ingredients: ['French Oak Smoke', 'Organic Medjool Date Syrup', 'Citrus Peel Bitters', 'Dehydrated Orange Wheel'],
    pairing: 'Pairs exquisitely with decadent desserts or rich mains',
    allergenNote: 'Alcohol-free and artisanal craft variants available upon request.',
  },
  {
    id: 'dish-6',
    name: 'Hibiscus Rose & Sparkling Botanical Tonic',
    category: 'beverages',
    description: 'Cold-extracted wild Himalayan rose petal infusion, tart pink peppercorn cordial, clarified Key lime, botanical sparkling water.',
    price: 650,
    image: '/src/assets/images/craft_botanical_cocktail_1791890019910.jpg',
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['Wild Himalayan Rose', 'Hibiscus Calyx', 'Clarified Lime', 'Pink Peppercorn', 'Fever-Tree Soda'],
    pairing: 'Ideal palate cleanser or light starter accompaniment',
    allergenNote: 'Free of all common allergens.',
  },
  {
    id: 'dish-7',
    name: 'Slow-Braised Ghee Lamb Shank',
    category: 'mains',
    description: '18-hour cooked milk-fed lamb in copper vessel, rogan glaze reduction, pickled baby shallots, crisp saffron lavash.',
    price: 1950,
    image: '/src/assets/images/executive_chef_craft_1791889815822.jpg',
    dietary: ['non-veg'],
    isChefRecommendation: true,
    ingredients: ['Grass-fed Lamb Shank', 'Cultured A2 Ghee', 'Kashmiri Ratanjot', 'Shallots', 'Saffron Lavash'],
    pairing: 'Châteauneuf-du-Pape, Château de Beaucastel 2017',
    allergenNote: 'Contains dairy & gluten.',
  },
  {
    id: 'dish-8',
    name: 'Pan-Seared Chilean Seabass',
    category: 'mains',
    description: 'Crisp skin sea bass, Malabar kokum and tender coconut beurre blanc, fennel pollen, butter-poached tender asparagus.',
    price: 2350,
    image: '/src/assets/images/hero_fine_dining_1791889783863.jpg',
    dietary: ['non-veg', 'gluten-free'],
    ingredients: ['Chilean Seabass', 'Fresh Kokum Extract', 'Coconut Velouté', 'Wild Fennel Pollen', 'Asparagus'],
    pairing: 'Meursault Premier Cru, Burgundy 2019',
    allergenNote: 'Contains fish & dairy.',
  },
  {
    id: 'dish-9',
    name: 'Smoked Cauliflower & Truffle Velouté',
    category: 'starters',
    description: 'Applewood smoked brassica, aeration of white truffle, toasted Piedmont hazelnut crumb, cold-pressed chive oil.',
    price: 850,
    image: '/src/assets/images/chef_signature_dish_1791889814938.jpg',
    dietary: ['veg', 'gluten-free'],
    ingredients: ['Smoked Cauliflower', 'White Truffle Foam', 'Piedmont Hazelnuts', 'Chive Oil'],
    pairing: 'Chablis Premier Cru, Louis Jadot 2021',
    allergenNote: 'Contains dairy and tree nuts.',
  },
  {
    id: 'dish-10',
    name: 'Spiced Charcoal Asparagus & Burrata',
    category: 'starters',
    description: 'Robata-grilled green asparagus, hand-pulled Pugliese stracciatella, slow-roasted heirloom tomato oil, roasted cumin crumb.',
    price: 1150,
    image: '/src/assets/images/herb_crusted_paneer_1791890019380.jpg',
    dietary: ['veg', 'gluten-free'],
    ingredients: ['Robata Asparagus', 'Fresh Stracciatella Burrata', 'Heirloom Tomato Concasse', 'Toasted Jeera Oil'],
    pairing: 'Sauvignon Blanc, Cloudy Bay Marlborough 2023',
    allergenNote: 'Contains dairy.',
  },
  {
    id: 'dish-11',
    name: 'Single-Origin Mysore Cacao Ganache',
    category: 'desserts',
    description: '72% estate dark chocolate quenelle, flaky sea salt, smoked palm jaggery caramel, house-churned green cardamom gelato.',
    price: 1050,
    image: '/src/assets/images/saffron_dessert_1791890019191.jpg',
    dietary: ['veg'],
    ingredients: ['Mysore 72% Dark Cacao', 'Smoked Palm Jaggery', 'Maldon Flaky Salt', 'Organic Jersey Milk Cream', 'Green Cardamom'],
    pairing: 'Taylor’s 20-Year-Old Tawny Port',
    allergenNote: 'Contains dairy.',
  },
  {
    id: 'dish-12',
    name: 'Crisp Wild Mushroom Galauti Tartlet',
    category: 'starters',
    description: 'Melt-in-mouth smoked portobello & walnut pâté, delicate saffron phyllo shell, emulsified mint-coriander labneh.',
    price: 1050,
    image: '/src/assets/images/chef_signature_dish_1791889814938.jpg',
    dietary: ['veg'],
    ingredients: ['Wild Portobello Mushrooms', 'Toasted Walnuts', 'Saffron Phyllo', 'Cultured Labneh', 'Micro Mint'],
    pairing: 'Pinot Noir, Domaine Serene Oregon 2019',
    allergenNote: 'Contains gluten, dairy & tree nuts.',
  },
  {
    id: 'dish-13',
    name: 'Charred Portobello & Black Garlic Steak',
    category: 'vegetarian',
    description: 'Prime portobello cap basted in fermented black garlic butter, smoked parsnip cream, braised baby turnips, port wine reduction.',
    price: 1350,
    image: '/src/assets/images/chef_signature_dish_1791889814938.jpg',
    dietary: ['veg', 'gluten-free'],
    ingredients: ['Giant Portobello Mushroom', 'Fermented Black Garlic', 'Parsnip Puree', 'Glazed Turnips', 'Ruby Port Glaze'],
    pairing: 'Syrah, Guigal Côte-Rôtie 2018',
    allergenNote: 'Contains dairy.',
  },
  {
    id: 'dish-14',
    name: 'Himalayan Juniper & Citrus Shrub',
    category: 'beverages',
    description: 'High-altitude wild juniper berry extract, fermented yuzu citrus reduction, sparkling spring water, fragrant rosemary sprig.',
    price: 680,
    image: '/src/assets/images/craft_botanical_cocktail_1791890019910.jpg',
    dietary: ['vegan', 'gluten-free'],
    ingredients: ['Foraged Juniper Berries', 'Japanese Yuzu', 'Organic Cane Shrub', 'Sparkling Mineral Spring Water'],
    pairing: 'Crisp refreshing aperitif before starters',
    allergenNote: 'Free of all major allergens.',
  },
];

export const TASTING_MENU: TastingCourse[] = [
  {
    courseNumber: 1,
    title: 'Amuse-Bouche',
    dish: 'Golden Beet & Kokum Tartlet with Wild Celery Dew',
    notes: 'Single-bite awakening of acidity and earthy sweetness.',
    winePairing: 'Champagne Billecart-Salmon Brut Rosé NV',
  },
  {
    courseNumber: 2,
    title: 'First Course',
    dish: 'Charred Asparagus, Burrata Silk & Cold-Pressed Jeera Essence',
    notes: 'Contrast of flame-licked freshness and creamy velvet.',
    winePairing: 'Domaine Vacheron Sancerre 2022',
  },
  {
    courseNumber: 3,
    title: 'Ocean / Harvest',
    dish: 'Chilean Seabass or Herb-Crusted Artisanal Paneer in Coconut Kokum Velouté',
    notes: 'Delicate oceanic richness elevated by aromatic Malabar aromatics.',
    winePairing: 'Chassagne-Montrachet Premier Cru 2020',
  },
  {
    courseNumber: 4,
    title: 'Intermezzo',
    dish: 'Himalayan Seabuckthorn & Wild Mint Granite',
    notes: 'Pungent mountain citrus palate cleanser.',
    winePairing: 'Clear mineral herbal infusion',
  },
  {
    courseNumber: 5,
    title: 'Pièce de Résistance',
    dish: 'Truffled Morel Risotto with 18-Hour Braised Lamb Shank or Portobello Steak',
    notes: 'Deep umami richness paired with aged mountain cheese and black truffle.',
    winePairing: 'Tenuta San Guido Sassicaia Bolgheri 2018',
  },
  {
    courseNumber: 6,
    title: 'Pre-Dessert',
    dish: 'Clarified Green Cardamom & Lime Blossom Mousse',
    notes: 'Airy floral transition preparing the senses for confectionery.',
    winePairing: 'Moscato d’Asti, Vietti 2023',
  },
  {
    courseNumber: 7,
    title: 'Grand Finale',
    dish: 'Saffron Sphere with Mysore 72% Dark Cacao Ganache & Edible Gold',
    notes: 'Harmonious marriage of Kashmir saffron and rich South Indian cacao.',
    winePairing: 'Château d’Yquem 2016 Sauternes',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'NOIRÉ redefines contemporary fine dining with extraordinary restraint and palate precision. The Himalayan morel risotto is an absolute masterpiece of textures.',
    author: 'Ananya Roy',
    role: 'Gastronomy Essayist & International Critic',
    publication: 'Epicurean Chronicle',
  },
  {
    quote: 'The Obsidian Salon provided our celebration with the most seamless, discreet, and refined hospitality in the city. The wine cellar selection is unmatched.',
    author: 'Vikramaditya Singhania',
    role: 'Private Patron & Collector',
    publication: 'Private Dining Review',
  },
  {
    quote: 'Every plating at NOIRÉ arrives like an intimate gallery piece. Balanced, thoughtful, and deeply memorable from the first pour to the final petit four.',
    author: 'Elena Rostova',
    role: 'Global Culinary Curator',
    publication: 'The Haute Palate',
  },
];

export const FAQS = [
  {
    question: 'What is the dress code at NOIRÉ?',
    answer: 'We observe a Smart Elegant dress code. We politely request that guests avoid athletic apparel, beachwear, flip-flops, and caps. Tailored trousers, collared shirts, jackets, and elegant evening attire are encouraged.',
  },
  {
    question: 'Can you accommodate dietary restrictions and allergies?',
    answer: 'Absolutely. We offer complete vegetarian, vegan, and gluten-free adaptations for both our à la carte and 7-course tasting menus. Please specify any severe allergies in the special requests section when booking so our kitchen can prepare custom mise-en-place.',
  },
  {
    question: 'What is your reservation and cancellation policy?',
    answer: 'Reservations open 30 days in advance. Tables are reserved for 2 hours for à la carte and 3 hours for the Tasting Menu. To ensure an uncompromised experience, we hold tables for 15 minutes past your reservation time. Cancellations made at least 24 hours in advance incur no penalty.',
  },
  {
    question: 'How does private dining in The Obsidian Salon work?',
    answer: 'The Obsidian Salon hosts up to 14 seated guests for bespoke dinners, corporate summits, or milestone celebrations. Private bookings include a dedicated culinary captain, bespoke sommelier pairing, and personalized engraved menus.',
  },
  {
    question: 'Are children accommodated in the dining room?',
    answer: 'To preserve the serene, multi-course sensory atmosphere of our main dining salon, we welcome guests aged 10 and above. For families with younger children, we gladly accommodate private lunch bookings in The Obsidian Salon upon request.',
  },
  {
    question: 'Is valet parking available?',
    answer: 'Yes, complimentary private valet parking is provided directly at our entrance portico on The Heritage Promenade. Chauffeur lounge facilities are also available on premises.',
  },
];

export const RESTAURANT_INFO = {
  name: 'NOIRÉ',
  tagline: 'Modern Fine Dining',
  address: 'The Heritage Promenade, 4th Floor, Grand Atrium, Central Boulevard',
  city: 'Metropolitan District',
  postalCode: '110001',
  phone: '+91 (011) 4892-7700',
  reservationEmail: 'reservations@noire-dining.com',
  pressEmail: 'concierge@noire-dining.com',
  lunchHours: 'Tuesday – Sunday: 12:30 PM – 3:30 PM',
  dinnerHours: 'Tuesday – Sunday: 7:00 PM – 11:30 PM',
  closedDays: 'Mondays (Kitchen R&D & Cellar Curation)',
};
