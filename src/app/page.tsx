'use client';

import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import FlashDeals from '../components/FlashDeals';
import ProductGrid from '../components/ProductGrid';
import TrustBanner from '../components/TrustBanner';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';
import CartDrawer from '../components/CartDrawer';
import CheckoutModal from '../components/CheckoutModal';
import { useCart } from '../context/CartContext';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const { toastMessage } = useCart();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header & Navigation */}
      <Header />
      <NavBar />

      {/* Main Storefront Body */}
      <main style={{ flex: 1 }}>
        {/* Hero Slider & Departments */}
        <HeroBanner />

        <div className="container">
          {/* Flash Deals Section (Amazon Lightning / Daraz Flash Sale) */}
          <FlashDeals />

          {/* Full Catalog with Tabs and Filters */}
          <ProductGrid />

          {/* Customer Trust Guarantees */}
          <TrustBanner />
        </div>
      </main>

      {/* Interactive Overlays */}
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />

      {/* Toast Notification Pill */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={18} color="var(--primary)" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
