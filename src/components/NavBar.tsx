'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/products';
import { Menu, Zap, Sparkles, Tag, ShieldCheck, Flame, Gift } from 'lucide-react';

export default function NavBar() {
  const { selectedCategory, setSelectedCategory, showToast } = useCart();
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <nav className="sub-nav">
      <div className="container sub-nav-inner">
        <div className="sub-nav-left">
          {/* Mega Menu Toggle */}
          <button 
            className="all-menu-btn"
            onClick={() => setShowMegaMenu(!showMegaMenu)}
          >
            <Menu size={18} />
            <span>All Categories</span>
          </button>

          {/* Direct Category Links */}
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`sub-nav-link ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}

          {/* Promotional Links */}
          <button 
            className="sub-nav-link sub-nav-highlight"
            onClick={() => {
              const el = document.getElementById('flash-sale-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Flame size={15} color="#febd69" />
            <span>Flash Deals</span>
          </button>

          <button 
            className="sub-nav-link"
            onClick={() => showToast('Filtering for Official DarazMall Brands!')}
          >
            <ShieldCheck size={14} color="#00d26a" />
            <span>MadhuMall Official</span>
          </button>
        </div>

        {/* Right Promo Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span 
            style={{
              background: 'linear-gradient(90deg, #ff4d4f 0%, #f85606 100%)',
              color: '#ffffff',
              fontSize: '0.74rem',
              fontWeight: 800,
              padding: '0.25rem 0.65rem',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              letterSpacing: '0.3px',
              cursor: 'pointer'
            }}
            onClick={() => showToast('Coupon code AUSSIE20 applied: 20% OFF!')}
          >
            <Sparkles size={13} />
            🇦🇺 Use Code: AUSSIE20 for 20% OFF
          </span>
        </div>
      </div>

      {/* Floating Mega Menu Dropdown */}
      {showMegaMenu && (
        <div 
          style={{
            position: 'absolute',
            left: '5%',
            zIndex: 99,
            background: '#ffffff',
            color: '#111',
            borderRadius: '12px',
            padding: '1.5rem',
            width: '90%',
            maxWidth: '920px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            border: '1px solid #e5e7eb',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem'
          }}
        >
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap size={16} /> Consumer Electronics
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#4b5563' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Wireless Headphones & Earbuds</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Smart Watches & Fitness Bands</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Mirrorless & DSLR Cameras</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Gaming Laptops & Accessories</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Tag size={16} /> Fashion & Apparel
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#4b5563' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Fashion'); setShowMegaMenu(false); }}>• Luxury & Automatic Watches</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Fashion'); setShowMegaMenu(false); }}>• Polarized Sunglasses</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Fashion'); setShowMegaMenu(false); }}>• Leather Travel Bags & Backpacks</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Sports'); setShowMegaMenu(false); }}>• Sports Shoes & Athletic Sneakers</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Gift size={16} /> Home, Living & Beauty
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#4b5563' }}>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Home & Living'); setShowMegaMenu(false); }}>• Smart Barista Espresso Machines</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Home & Living'); setShowMegaMenu(false); }}>• Ergonomic Mesh Office Chairs</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Beauty'); setShowMegaMenu(false); }}>• Organic Facial Serums & Skincare</span>
              <span style={{ cursor: 'pointer' }} onClick={() => { setSelectedCategory('Sports'); setShowMegaMenu(false); }}>• Pro Yoga & Workout Mats</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
