'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { Home, Flame, Grid, Heart, ShoppingBag } from 'lucide-react';

export default function MobileBottomNav() {
  const { cartCount, openCart, wishlist, showToast, setSelectedCategory } = useCart();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDealsClick = () => {
    const el = document.getElementById('flash-sale-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCatalogClick = () => {
    const el = document.getElementById('catalog-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWishlistClick = () => {
    showToast(`You have ${wishlist.length} item(s) in your Wishlist`);
  };

  return (
    <nav aria-label="Mobile Navigation Bar" className="mobile-bottom-nav">
      <button className="mobile-nav-item" onClick={handleHomeClick}>
        <Home size={20} />
        <span>Home</span>
      </button>

      <button className="mobile-nav-item" onClick={handleDealsClick}>
        <Flame size={20} color="#f85606" />
        <span style={{ color: '#f85606', fontWeight: 700 }}>Deals</span>
      </button>

      <button className="mobile-nav-item" onClick={handleCatalogClick}>
        <Grid size={20} />
        <span>Catalog</span>
      </button>

      <button className="mobile-nav-item" onClick={handleWishlistClick}>
        <div style={{ position: 'relative' }}>
          <Heart size={20} color={wishlist.length > 0 ? '#ff4d4f' : 'currentColor'} fill={wishlist.length > 0 ? '#ff4d4f' : 'none'} />
          {wishlist.length > 0 && <span className="mobile-nav-badge">{wishlist.length}</span>}
        </div>
        <span>Saved</span>
      </button>

      <button className="mobile-nav-item" onClick={openCart}>
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={20} color="var(--primary)" />
          {cartCount > 0 && <span className="mobile-nav-badge" style={{ background: 'var(--primary)' }}>{cartCount}</span>}
        </div>
        <span style={{ color: 'var(--primary)', fontWeight: 700 }}>Cart</span>
      </button>
    </nav>
  );
}
