export interface Product {
  id: string;
  name: string;
  category: 'Electronics' | 'Fashion' | 'Home & Living' | 'Beauty' | 'Sports';
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  isFlashDeal?: boolean;
  isBestSeller?: boolean;
  isOfficial?: boolean;
  stockSoldPercent?: number;
  stockLeft?: number;
  description: string;
  features: string[];
  colors?: string[];
  sizes?: string[];
}

export const CATEGORIES = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Beauty',
  'Sports',
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones',
    category: 'Electronics',
    price: 298.00,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.8,
    reviewCount: 3420,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    ],
    isFlashDeal: true,
    isBestSeller: true,
    isOfficial: true,
    stockSoldPercent: 84,
    stockLeft: 12,
    description: 'Industry-leading noise cancellation with two processors and 8 microphones. Exceptional sound quality with newly developed driver unit.',
    features: ['30-hour battery life with quick charging', 'Ultra-comfortable lightweight design', 'Crystal clear hands-free calling with 4 beamforming mics', 'Multi-device pairing'],
    colors: ['Silver White', 'Midnight Black', 'Navy Blue']
  },
  {
    id: 'prod-2',
    name: 'Apple Watch Series 9 GPS + Cellular Smartwatch - Starlight',
    category: 'Electronics',
    price: 329.00,
    originalPrice: 429.00,
    discount: 23,
    rating: 4.9,
    reviewCount: 5120,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80',
    ],
    isFlashDeal: true,
    isBestSeller: true,
    isOfficial: true,
    stockSoldPercent: 92,
    stockLeft: 4,
    description: 'Powerful S9 SiP chip, double tap gesture, brighter display, and carbon neutral case & band combinations.',
    features: ['Always-On Retina display (2000 nits)', 'Advanced health sensors (ECG, Blood Oxygen)', 'Crash Detection & Fall Detection', 'Water resistant up to 50m'],
    colors: ['Starlight', 'Midnight', 'Product(RED)']
  },
  {
    id: 'prod-3',
    name: 'Minimalist Titanium Mechanical Automatic Watch',
    category: 'Fashion',
    price: 189.50,
    originalPrice: 289.00,
    discount: 34,
    rating: 4.7,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    ],
    isFlashDeal: false,
    isBestSeller: true,
    isOfficial: false,
    description: 'Precision Japanese automatic movement with genuine Italian leather strap and scratch-resistant sapphire crystal.',
    features: ['42-hour power reserve', '5 ATM Water resistance', 'Surgical grade 316L stainless steel case', 'Handcrafted leather band'],
    colors: ['Onyx Black', 'Rose Gold', 'Silver Matte']
  },
  {
    id: 'prod-4',
    name: 'Ultra-Comfort Cloud Cushion Running Shoes',
    category: 'Sports',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 4.6,
    reviewCount: 1820,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
    ],
    isFlashDeal: true,
    isBestSeller: false,
    isOfficial: true,
    stockSoldPercent: 67,
    stockLeft: 18,
    description: 'Engineered breathable mesh upper with responsive carbon-infused foam sole for marathon performance and all-day comfort.',
    features: ['Shock-absorbent impact cushioning', 'Breathable aerodynamic knit', 'Anti-slip rubber outsole', 'Orthopedic arch support'],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: ['Crimson Red', 'Stealth Black', 'Glacier White']
  },
  {
    id: 'prod-5',
    name: 'Smart Barista Espresso Machine with Steam Wand',
    category: 'Home & Living',
    price: 249.99,
    originalPrice: 349.99,
    discount: 29,
    rating: 4.8,
    reviewCount: 890,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    ],
    isFlashDeal: false,
    isBestSeller: true,
    isOfficial: true,
    description: 'Commercial-grade 15-bar Italian pressure pump delivers barista-quality espresso, velvety cappuccinos and lattes at home.',
    features: ['ThermoBlock rapid heating system', 'Stainless steel microfoam milk wand', 'Precision digital temperature control', 'Removable 1.8L water tank'],
    colors: ['Brushed Steel', 'Matte Charcoal']
  },
  {
    id: 'prod-6',
    name: 'Luxury Botanical Hydrating Face Serum & Cream Kit',
    category: 'Beauty',
    price: 45.00,
    originalPrice: 75.00,
    discount: 40,
    rating: 4.9,
    reviewCount: 2140,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80',
    ],
    isFlashDeal: true,
    isBestSeller: true,
    isOfficial: true,
    stockSoldPercent: 79,
    stockLeft: 22,
    description: 'Clean organic formulation packed with Hyaluronic Acid, Vitamin C, Niacinamide, and soothing chamomile extract.',
    features: ['Deep 24h intense moisture barrier', '100% cruelty-free & vegan certified', 'Dermatologist tested & hypoallergenic', 'Brightens uneven tone'],
  },
  {
    id: 'prod-7',
    name: 'Sony Alpha 4K Mirrorless Digital Camera + 28-70mm Lens',
    category: 'Electronics',
    price: 899.00,
    originalPrice: 1199.00,
    discount: 25,
    rating: 4.9,
    reviewCount: 1420,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80',
    ],
    isFlashDeal: false,
    isBestSeller: true,
    isOfficial: true,
    description: 'Full-frame 24.2MP Exmor R CMOS sensor, 4K HDR movie recording, real-time Eye AF for humans and animals.',
    features: ['5-axis in-body optical image stabilization', 'Up to 10fps continuous shooting', 'Dual SD card slots', 'Weather-sealed magnesium body'],
  },
  {
    id: 'prod-8',
    name: 'Vintage Distressed Leather Travel Backpack (Waterproof)',
    category: 'Fashion',
    price: 68.50,
    originalPrice: 110.00,
    discount: 38,
    rating: 4.7,
    reviewCount: 1250,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    isFlashDeal: false,
    isBestSeller: false,
    isOfficial: false,
    description: 'Rugged full-grain leather backpack with dedicated padded 16-inch laptop compartment and anti-theft back pocket.',
    features: ['Fits up to 16" MacBook Pro', 'Water-repellent waxed canvas & leather', 'Ergonomic breathable padded shoulder straps', 'TSA-friendly luggage strap'],
    colors: ['Vintage Saddle Tan', 'Espresso Brown', 'Charcoal Slate']
  },
  {
    id: 'prod-9',
    name: 'Ergonomic Mesh Office Chair with Lumbar Support',
    category: 'Home & Living',
    price: 159.00,
    originalPrice: 229.00,
    discount: 31,
    rating: 4.6,
    reviewCount: 3890,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&q=80',
    ],
    isFlashDeal: true,
    isBestSeller: true,
    isOfficial: true,
    stockSoldPercent: 73,
    stockLeft: 15,
    description: 'Designed for 8+ hour work sessions. 3D adjustable armrests, dynamic adaptive lumbar cushion, and recline lock.',
    features: ['High-density breathable mesh back', 'BIFMA-certified heavy duty gas cylinder', '360° smooth silent PU casters', 'Adjustable headrest & tilt tension'],
    colors: ['Cool Grey', 'Stealth Black']
  },
  {
    id: 'prod-10',
    name: 'Professional Yoga & Fitness Mat with Alignment Lines',
    category: 'Sports',
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    rating: 4.8,
    reviewCount: 1670,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    ],
    isFlashDeal: false,
    isBestSeller: false,
    isOfficial: false,
    description: 'Eco-friendly non-slip TPE yoga mat with laser-etched posture alignment guidelines and free carry strap.',
    features: ['6mm extra thick dual-layer cushioning', 'Laser alignment marking system', '100% Non-toxic & odorless TPE', 'Includes premium carrying sling'],
    colors: ['Forest Emerald', 'Ocean Teal', 'Sunset Coral']
  },
  {
    id: 'prod-11',
    name: 'Smart Ceramic Aromatherapy Diffuser with Ambient LED',
    category: 'Home & Living',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    rating: 4.7,
    reviewCount: 2310,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    ],
    isFlashDeal: true,
    isBestSeller: true,
    isOfficial: true,
    stockSoldPercent: 88,
    stockLeft: 9,
    description: 'Handmade matte ceramic ultrasonic diffuser. Whisper-quiet mist dispersal and warm ambient glow for relaxation.',
    features: ['Ultrasonic 2.4MHz vibration', 'Auto shut-off when dry', '7 soothing ambient LED mood colors', 'Covers up to 400 sq. ft.'],
    colors: ['Natural Terracotta', 'Sand White', 'Basalt Black']
  },
  {
    id: 'prod-12',
    name: 'Polarized UV400 Aviator Sunglasses - Gold Frame',
    category: 'Fashion',
    price: 38.00,
    originalPrice: 70.00,
    discount: 46,
    rating: 4.5,
    reviewCount: 1100,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
    ],
    isFlashDeal: false,
    isBestSeller: false,
    isOfficial: false,
    description: 'Classic teardrop aviator silhouette engineered with military-grade stainless steel frames and 9-layer TAC polarized lenses.',
    features: ['100% UV400 Protection (UVA & UVB)', 'Anti-glare scratch resistant coating', 'Adjustable silicone nose pads', 'Hard protective leather case included'],
    colors: ['Gold / G-15 Green', 'Silver / Smoke', 'Gunmetal / Gradient Blue']
  }
];
