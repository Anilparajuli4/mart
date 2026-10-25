'use client';

import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Flame, Clock, ChevronRight } from 'lucide-react';

export default function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  // Ticking countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashProducts = PRODUCTS.filter((p) => p.isFlashDeal).slice(0, 6);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section id="flash-sale-section" className="flash-section">
      <div className="flash-header">
        <div className="flash-title-wrap">
          <h2 className="flash-title">
            <Flame size={24} fill="var(--primary)" /> Flash Sale Deals
          </h2>

          <div className="countdown-container">
            <span style={{ color: '#666', fontWeight: 600 }}>Ending in:</span>
            <span className="countdown-box">{formatNumber(timeLeft.hours)}</span> :
            <span className="countdown-box">{formatNumber(timeLeft.minutes)}</span> :
            <span className="countdown-box">{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>

        <a href="#catalog-section" className="flash-view-all">
          <span>Shop All Deals</span>
          <ChevronRight size={16} />
        </a>
      </div>

      <div className="products-grid">
        {flashProducts.map((product) => (
          <ProductCard key={product.id} product={product} showFlashBar={true} />
        ))}
      </div>
    </section>
  );
}
