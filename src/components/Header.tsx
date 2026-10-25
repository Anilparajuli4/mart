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
  HelpCircle 
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      showToast(`Showing results for "${searchQuery}"`);
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#ffb703', fontWeight: 600 }}>
              <Zap size={13} fill="#ffb703" /> 🇦🇺 Mega Aussie Sale 2026: Up to 70% Off Today!
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#22c55e' }}>
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
          {/* Brand Logo */}
          <a href="#" className="brand-logo" onClick={() => { setSearchQuery(''); setSelectedCategory('All Categories'); }}>
            <span style={{ color: '#ffffff' }}>Madhu</span>
            <span style={{ color: 'var(--primary)' }}>Mart</span>
            <span className="brand-logo-badge">EXPRESS</span>
          </a>

          {/* Location Delivery Selector */}
          <div style={{ position: 'relative' }}>
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
              <div style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                width: '260px',
                background: '#ffffff',
                color: '#111',
                borderRadius: '8px',
                padding: '0.9rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                zIndex: 110,
                border: '1px solid #e5e7eb'
              }}>
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
                    style={{
                      padding: '0.45rem 0.6rem',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      borderRadius: '4px',
                      background: deliveryLocation === loc ? 'var(--primary-light)' : 'transparent',
                      color: deliveryLocation === loc ? 'var(--primary)' : '#333',
                      fontWeight: deliveryLocation === loc ? 700 : 500,
                      marginBottom: '0.25rem',
                      transition: 'background 0.15s'
                    }}
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
              placeholder="Search in Madhu Mart (e.g. Sony headphones, espresso machine, shoes...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" className="search-btn" title="Search">
              <Search size={20} />
            </button>
          </form>

          {/* Action buttons */}
          <div className="header-actions">
            {/* Account hover/dropdown */}
            <div style={{ position: 'relative' }}>
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
                <div style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  width: '240px',
                  background: '#ffffff',
                  color: '#111',
                  borderRadius: '8px',
                  padding: '1rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  zIndex: 110,
                  border: '1px solid #e5e7eb'
                }}>
                  <button 
                    onClick={() => {
                      setShowAccountDropdown(false);
                      showToast('Welcome to Demo Account! Signed in as VIP Customer');
                    }}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, var(--primary) 0%, #ff7020 100%)',
                      color: '#ffffff',
                      fontWeight: 700,
                      padding: '0.6rem',
                      borderRadius: '6px',
                      marginBottom: '0.8rem',
                      fontSize: '0.88rem'
                    }}
                  >
                    Sign In / Register
                  </button>
                  <div style={{ fontSize: '0.75rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '0.6rem' }}>
                    <div style={{ padding: '0.3rem 0', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setShowAccountDropdown(false); showToast('Opening Order History (Demo)'); }}>
                      📦 Your Orders & Tracking
                    </div>
                    <div style={{ padding: '0.3rem 0', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setShowAccountDropdown(false); showToast(`Wishlist items: ${wishlist.length}`); }}>
                      ❤️ Your Wishlist ({wishlist.length})
                    </div>
                    <div style={{ padding: '0.3rem 0', cursor: 'pointer', fontWeight: 600 }} onClick={() => { setShowAccountDropdown(false); showToast('Vouchers: $25 welcome coupon active!'); }}>
                      🎟️ My Coupons & Rewards
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist quick trigger */}
            <button 
              className="header-action-item"
              onClick={() => showToast(`You have ${wishlist.length} item(s) in your Wishlist`)}
              title="Wishlist"
            >
              <span className="action-top-text">Favorite</span>
              <span className="action-bot-text" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Heart size={16} color={wishlist.length > 0 ? '#ff4d4f' : '#ffffff'} fill={wishlist.length > 0 ? '#ff4d4f' : 'none'} />
                Wishlist ({wishlist.length})
              </span>
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
              <div>
                <span className="location-small" style={{ color: '#adb5bd' }}>Cart</span>
                <span className="location-bold" style={{ color: '#febd69' }}>
                  A${cartTotal.toFixed(2)}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
