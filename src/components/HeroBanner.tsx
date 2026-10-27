'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/products';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Headphones, 
  Watch, 
  Coffee, 
  ArrowRight,
  TrendingUp,
  Percent
} from 'lucide-react';

interface SlideData {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  category: string;
  imageUrl: string;
  discountTag: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    badge: '🇦🇺 AUSTRALIA-WIDE TECH GALA',
    title: 'Up to 50% Off Top Audio, Apple & Smart Electronics',
    subtitle: 'Direct dispatch from Sydney & Melbourne hubs. Australia Post Express delivery nationwide.',
    ctaText: 'Explore Tech Deals',
    category: 'Electronics',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
    discountTag: 'SAVE UP TO 50%'
  },
  {
    id: 2,
    badge: 'LUXURY & ATHLETICS',
    title: 'Aussie Lifestyle, High Performance & Timeless Luxury',
    subtitle: 'Mechanical luxury timepieces, cloud-cushion runners, and leather travel gear. Pay with Afterpay & Zip.',
    ctaText: 'Shop Fashion & Sports',
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
    discountTag: 'EXTRA 35% OFF'
  },
  {
    id: 3,
    badge: 'MODERN LIVING & CARE',
    title: 'Barista Espresso Machines & Clean Botanical Skincare',
    subtitle: 'Italian 15-bar coffee makers and organic serums with full Australian Consumer Law warranties.',
    ctaText: 'Upgrade Your Home',
    category: 'Home & Living',
    imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=1200&q=80',
    discountTag: 'LIMITED QUANTITIES'
  }
];

export default function HeroBanner() {
  const { selectedCategory, setSelectedCategory, showToast } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto carousel rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="hero-grid">
          {/* Daraz-style Category sidebar navigation */}
          <aside className="category-sidebar">
            <div style={{ padding: '0.4rem 1rem 0.6rem', fontSize: '0.78rem', fontWeight: 800, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Explore Departments
            </div>

            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className={`category-item ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  showToast(`Filtered by ${cat}`);
                }}
              >
                <span>{cat}</span>
                <ChevronRight size={14} color="#888" />
              </div>
            ))}

            <div style={{ margin: '0.75rem 1rem 0.25rem', padding: '0.75rem', background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', borderRadius: '8px', border: '1px dashed #fdba74' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#c2410c', fontWeight: 800, fontSize: '0.78rem' }}>
                <Percent size={14} /> Flash Voucher
              </div>
              <div style={{ fontSize: '0.72rem', color: '#7c2d12', marginTop: '2px' }}>
                Collect A$20 voucher for any order over A$120 today!
              </div>
            </div>
          </aside>

          {/* Main Hero Slider */}
          <div className="hero-banner-card">
            <div 
              className="hero-banner-bg" 
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
            <div className="hero-banner-overlay" />

            {/* Slider Contents */}
            <div className="hero-content">
              <span className="hero-tag">
                <Sparkles size={13} /> {slide.badge}
              </span>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>

              <div className="hero-actions-row">
                <button 
                  className="hero-btn"
                  onClick={() => {
                    setSelectedCategory(slide.category);
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight size={16} />
                </button>

                <div className="hero-discount-pill">
                  🏷️ {slide.discountTag}
                </div>
              </div>
            </div>

            {/* Carousel navigation buttons */}
            <button 
              className="carousel-nav-btn carousel-prev" 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button 
              className="carousel-nav-btn carousel-next" 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>

            {/* Indicator dots */}
            <div className="carousel-dots">
              {SLIDES.map((_, idx) => (
                <div 
                  key={idx}
                  className={`carousel-dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
