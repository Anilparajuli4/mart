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
        <div className="sub-nav-promo-wrap">
          <span 
            className="sub-nav-promo-badge"
            onClick={() => showToast('Coupon code AUSSIE20 applied: 20% OFF!')}
          >
            <Sparkles size={13} />
            <span className="promo-text-desktop">🇦🇺 Use Code: AUSSIE20 for 20% OFF</span>
            <span className="promo-text-mobile">Code: AUSSIE20</span>
          </span>
        </div>
      </div>

      {/* Floating Mega Menu Dropdown */}
      {showMegaMenu && (
        <div className="mega-menu-dropdown">
          <div className="mega-menu-grid">
            <div className="mega-menu-col">
              <h4 className="mega-menu-heading">
                <Zap size={16} /> Consumer Electronics
              </h4>
              <div className="mega-menu-links">
                <span onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Wireless Headphones & Earbuds</span>
                <span onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Smart Watches & Fitness Bands</span>
                <span onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Mirrorless & DSLR Cameras</span>
                <span onClick={() => { setSelectedCategory('Electronics'); setShowMegaMenu(false); }}>• Gaming Laptops & Accessories</span>
              </div>
            </div>

            <div className="mega-menu-col">
              <h4 className="mega-menu-heading">
                <Tag size={16} /> Fashion & Apparel
              </h4>
              <div className="mega-menu-links">
                <span onClick={() => { setSelectedCategory('Fashion'); setShowMegaMenu(false); }}>• Luxury & Automatic Watches</span>
                <span onClick={() => { setSelectedCategory('Fashion'); setShowMegaMenu(false); }}>• Polarized Sunglasses</span>
                <span onClick={() => { setSelectedCategory('Fashion'); setShowMegaMenu(false); }}>• Leather Travel Bags & Backpacks</span>
                <span onClick={() => { setSelectedCategory('Sports'); setShowMegaMenu(false); }}>• Sports Shoes & Athletic Sneakers</span>
              </div>
            </div>

            <div className="mega-menu-col">
              <h4 className="mega-menu-heading">
                <Gift size={16} /> Home, Living & Beauty
              </h4>
              <div className="mega-menu-links">
                <span onClick={() => { setSelectedCategory('Home & Living'); setShowMegaMenu(false); }}>• Smart Barista Espresso Machines</span>
                <span onClick={() => { setSelectedCategory('Home & Living'); setShowMegaMenu(false); }}>• Ergonomic Mesh Office Chairs</span>
                <span onClick={() => { setSelectedCategory('Beauty'); setShowMegaMenu(false); }}>• Organic Facial Serums & Skincare</span>
                <span onClick={() => { setSelectedCategory('Sports'); setShowMegaMenu(false); }}>• Pro Yoga & Workout Mats</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
