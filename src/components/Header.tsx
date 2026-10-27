'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES } from '../data/products';
import { 
  Search, 
  ShoppingCart, 
  MapPin, 
  Heart, 
  User, 
  Globe, 
  ChevronDown, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Flame,
  Truck
} from 'lucide-react';

interface HeaderProps {
  onOpenLocationModal?: () => void;
}

export default function Header({ onOpenLocationModal }: HeaderProps) {
  const { 
    cartCount, 
    cartTotal, 
    openCart, 
    wishlist, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory,
    showToast 
  } = useCart();

  const [deliveryLocation, setDeliveryLocation] = useState('Sydney, NSW 2000');
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showMobileDrawer, setShowMobileDrawer] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      showToast(`Showing results for "${searchQuery}"`);
      const el = document.getElementById('catalog-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const locations = [
    'Sydney, NSW 2000',
    'Melbourne, VIC 3000',
    'Brisbane, QLD 4000',
    'Perth, WA 6000',
    'Adelaide, SA 5000',
    'Gold Coast, QLD 4217',
    'Canberra, ACT 2600'
  ];

  return (
    <header className="main-header">
      {/* Top micro strip */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-left">
            <span className="top-strip-highlight">
              <Zap size={13} fill="#ffb703" /> 🇦🇺 Mega Aussie Sale 2026: Up to 70% Off Today!
            </span>
            <span className="top-strip-divider">|</span>
            <span className="top-strip-secondary">
              <ShieldCheck size={13} /> 100% Aussie Owned & ACL Protected
            </span>
          </div>

          <div className="top-strip-links">
            <a href="#darazmall" className="top-strip-link">MadhuMall Official</a>
            <a href="#help" className="top-strip-link" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <HelpCircle size={12} /> Aussie Support (AEST)
            </a>
            <button 
              className="top-strip-link" 
              onClick={() => showToast('Currency set to Australian Dollar (AUD A$)')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#c9d1d9' }}
            >
              <Globe size={12} /> 🇦🇺 EN / AUD (A$)
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="container">
        <div className="header-inner">
          {/* Mobile hamburger menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setShowMobileDrawer(true)}
            aria-label="Open mobile navigation menu"
          >
            <Menu size={22} color="#ffffff" />
          </button>

          {/* Brand Logo */}
          <a href="#" className="brand-logo" onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); }}>
            <span style={{ color: '#ffffff' }}>Madhu</span>
            <span style={{ color: 'var(--primary)' }}>Mart</span>
            <span className="brand-logo-badge">EXPRESS</span>
          </a>

          {/* Location Delivery Selector (Desktop / Tablet) */}
          <div className="header-location-wrap" style={{ position: 'relative' }}>
            <button 
              className="location-btn"
              onClick={() => setShowLocationPopup(!showLocationPopup)}
              title="Change Delivery Destination"
            >
              <MapPin size={18} color="#febd69" />
              <div>
                <span className="location-small">Deliver to</span>
                <span className="location-bold">{deliveryLocation.split(',')[0]}</span>
              </div>
            </button>

            {showLocationPopup && (
              <div className="location-dropdown-panel">
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}>
                  Choose delivery location:
                </div>
                {locations.map((loc) => (
                  <div
                    key={loc}
                    onClick={() => {
                      setDeliveryLocation(loc);
                      setShowLocationPopup(false);
                      showToast(`Delivery location set to: ${loc}`);
                    }}
                    className={`location-dropdown-item ${deliveryLocation === loc ? 'active' : ''}`}
                  >
                    📍 {loc}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar */}
          <form className="header-search" onSubmit={handleSearch}>
            <select 
              className="search-category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter search by category"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input 
              type="text"
              className="search-input"
              placeholder="Search in Madhu Mart (Sony, Apple, shoes, coffee...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" className="search-btn" title="Search">
              <Search size={18} />
            </button>
          </form>

          {/* Action buttons */}
          <div className="header-actions">
            {/* Account hover/dropdown (Desktop) */}
            <div className="desktop-account-wrap" style={{ position: 'relative' }}>
              <button 
                className="header-action-item"
                onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              >
                <span className="action-top-text">Hello, Sign In</span>
                <span className="action-bot-text">
                  Account & Lists <ChevronDown size={14} />
                </span>
              </button>

              {showAccountDropdown && (
                <div className="account-dropdown-panel">
                  <button 
                    onClick={() => {
                      setShowAccountDropdown(false);
                      showToast('Welcome to Demo Account! Signed in as VIP Customer');
                    }}
                    className="account-signin-btn"
                  >
                    Sign In / Register
                  </button>
                  <div style={{ fontSize: '0.78rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '0.6rem' }}>
                    <div style={{ padding: '0.35rem 0', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setShowAccountDropdown(false); showToast('Opening Order History (Demo)'); }}>
                      📦 Your Orders & Tracking
                    </div>
                    <div style={{ padding: '0.35rem 0', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setShowAccountDropdown(false); showToast(`Wishlist items: ${wishlist.length}`); }}>
                      ❤️ Your Wishlist ({wishlist.length})
                    </div>
                    <div style={{ padding: '0.35rem 0', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setShowAccountDropdown(false); showToast('Vouchers: $25 welcome coupon active!'); }}>
                      🎟️ My Coupons & Rewards
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist quick trigger */}
            <button 
              className="header-action-item header-wishlist-btn"
              onClick={() => showToast(`You have ${wishlist.length} item(s) in your Wishlist`)}
              title="Wishlist"
            >
              <div className="mobile-icon-badge-wrap">
                <Heart size={20} color={wishlist.length > 0 ? '#ff4d4f' : '#ffffff'} fill={wishlist.length > 0 ? '#ff4d4f' : 'none'} />
                {wishlist.length > 0 && <span className="wishlist-badge">{wishlist.length}</span>}
              </div>
              <div className="desktop-only-action-text">
                <span className="action-top-text">Favorite</span>
                <span className="action-bot-text">
                  Wishlist ({wishlist.length})
                </span>
              </div>
            </button>

            {/* Shopping Cart button */}
            <button 
              className="cart-header-btn" 
              onClick={openCart}
              title="Open Shopping Cart"
            >
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={22} color="#febd69" />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </div>
              <div className="cart-btn-text">
                <span className="location-small" style={{ color: '#adb5bd' }}>Cart</span>
                <span className="location-bold" style={{ color: '#febd69' }}>
                  A${cartTotal.toFixed(2)}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Side Menu */}
      {showMobileDrawer && (
        <div className="overlay-backdrop" onClick={() => setShowMobileDrawer(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div className="mobile-drawer-header">
              <div className="brand-logo" style={{ fontSize: '1.3rem' }}>
                <span style={{ color: '#ffffff' }}>Madhu</span>
                <span style={{ color: 'var(--primary)' }}>Mart</span>
                <span className="brand-logo-badge">EXPRESS</span>
              </div>
              <button 
                className="mobile-drawer-close"
                onClick={() => setShowMobileDrawer(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* User Greeting & Sign In */}
            <div className="mobile-drawer-user">
              <div className="user-avatar-circle">
                <User size={20} color="#ffffff" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f8fafc' }}>
                  Hello, Aussie Shopper!
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                  Member Status: VIP Demo Guest
                </div>
              </div>
            </div>

            {/* Mobile Drawer Body */}
            <div className="mobile-drawer-body">
              {/* Delivery Selector in Drawer */}
              <div className="mobile-drawer-section">
                <div className="drawer-section-title">
                  <MapPin size={15} color="var(--primary)" /> Delivery Destination
                </div>
                <select 
                  className="mobile-location-select"
                  value={deliveryLocation}
                  onChange={(e) => {
                    setDeliveryLocation(e.target.value);
                    showToast(`Delivery location set to: ${e.target.value}`);
                  }}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Browse Categories */}
              <div className="mobile-drawer-section">
                <div className="drawer-section-title">
                  <Sparkles size={15} color="var(--primary)" /> Shop By Department
                </div>
                <div className="mobile-cat-list">
                  {CATEGORIES.map((cat) => (
                    <div 
                      key={cat}
                      className={`mobile-cat-item ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowMobileDrawer(false);
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                        showToast(`Filtered by ${cat}`);
                      }}
                    >
                      <span>{cat}</span>
                      <ChevronRight size={15} color="#9ca3af" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Features & Links */}
              <div className="mobile-drawer-section">
                <div className="drawer-section-title">Highlights & Customer Care</div>
                <div className="mobile-quick-links">
                  <div 
                    className="mobile-quick-link" 
                    onClick={() => {
                      setShowMobileDrawer(false);
                      const el = document.getElementById('flash-sale-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Flame size={16} color="#f85606" />
                    <span>Lightning Flash Deals</span>
                  </div>
                  <div 
                    className="mobile-quick-link"
                    onClick={() => {
                      setShowMobileDrawer(false);
                      openCart();
                    }}
                  >
                    <ShoppingCart size={16} color="#0284c7" />
                    <span>My Shopping Cart ({cartCount})</span>
                  </div>
                  <div 
                    className="mobile-quick-link"
                    onClick={() => {
                      setShowMobileDrawer(false);
                      showToast(`Wishlist contains ${wishlist.length} item(s)`);
                    }}
                  >
                    <Heart size={16} color="#d9383a" />
                    <span>My Saved Wishlist ({wishlist.length})</span>
                  </div>
                  <div 
                    className="mobile-quick-link"
                    onClick={() => {
                      setShowMobileDrawer(false);
                      showToast('Aussie Support hotline: 1800 623 486 (Mon-Fri 9am-6pm AEST)');
                    }}
                  >
                    <HelpCircle size={16} color="#16a34a" />
                    <span>Aussie Help & Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

