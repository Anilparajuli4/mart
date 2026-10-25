'use client';

import React from 'react';
import { ChevronUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Back to top strip */}
      <div className="footer-back-to-top" onClick={scrollToTop}>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
          <ChevronUp size={18} /> Back to Top
        </span>
      </div>

      <div className="main-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1 */}
            <div>
              <h4 className="footer-col-title">Customer Care</h4>
              <ul className="footer-links">
                <li><a href="#help">Help Center & FAQ</a></li>
                <li><a href="#orders">How to Buy</a></li>
                <li><a href="#shipping">Shipping & Delivery</a></li>
                <li><a href="#returns">Returns & Refunds</a></li>
                <li><a href="#contact">Contact Support</a></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="footer-col-title">Madhu Mart Store</h4>
              <ul className="footer-links">
                <li><a href="#about">About Madhu Mart</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#darazmall">MadhuMall Official</a></li>
                <li><a href="#terms">Terms & Privacy Policy</a></li>
                <li><a href="#press">Digital Payments</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="footer-col-title">Make Money With Us</h4>
              <ul className="footer-links">
                <li><a href="#sell">Sell on Madhu Mart</a></li>
                <li><a href="#affiliate">Join Affiliate Program</a></li>
                <li><a href="#hub">MadhuMart Logistics Partner</a></li>
                <li><a href="#advertise">Advertise Your Products</a></li>
                <li><a href="#brand">Brand Protection Hub</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="footer-col-title">Australian Payment Gateways</h4>
              <p style={{ fontSize: '0.82rem', color: '#9ca3af', marginBottom: '0.8rem', lineHeight: 1.4 }}>
                100% secure checkout compliant with Australian privacy & banking standards.
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                <span style={{ background: '#232f3e', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#fff', fontWeight: 700 }}>VISA</span>
                <span style={{ background: '#232f3e', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#fff', fontWeight: 700 }}>MasterCard</span>
                <span style={{ background: '#000000', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#bbf7d0', fontWeight: 800 }}>afterpay</span>
                <span style={{ background: '#2563eb', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#fff', fontWeight: 800 }}>zip</span>
                <span style={{ background: '#ffcc00', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#111', fontWeight: 800 }}>CommBank</span>
                <span style={{ background: '#232f3e', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#fff', fontWeight: 700 }}>Apple Pay</span>
                <span style={{ background: '#232f3e', border: '1px solid #37475a', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', color: '#fff', fontWeight: 700 }}>PayPal</span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                Logistics: <b>Australia Post Express</b> • <b>StarTrack</b>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              🇦🇺 © 2026 <b>Madhu Mart Australia Pty Ltd</b> (ABN: 48 123 456 789). Regulated under Australian Consumer Law (ACL).
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Built with Next.js & React 19 • <Heart size={14} color="#f85606" fill="#f85606" /> Sydney, Australia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
