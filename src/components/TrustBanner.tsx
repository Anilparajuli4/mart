'use client';

import React from 'react';
import { ShieldCheck, RotateCcw, Truck, Headphones } from 'lucide-react';

export default function TrustBanner() {
  const benefits = [
    {
      icon: <ShieldCheck size={26} />,
      title: '100% Aussie Owned & Stocked',
      desc: 'Genuine Australian stock with full manufacturer warranties and ACL protection.',
    },
    {
      icon: <Truck size={26} />,
      title: 'Australia Post Express',
      desc: 'Fast express dispatch from Sydney & Melbourne. Free for orders over A$75.',
    },
    {
      icon: <RotateCcw size={26} />,
      title: '30-Day Easy Aussie Returns',
      desc: 'Hassle-free local returns under Australian Consumer Law guarantees.',
    },
    {
      icon: <Headphones size={26} />,
      title: 'Local Customer Care (AEST)',
      desc: 'Friendly Sydney-based support via live chat, phone, and email.',
    },
  ];

  return (
    <div className="trust-banner">
      <div className="trust-grid">
        {benefits.map((b, idx) => (
          <div key={idx} className="trust-item">
            <div className="trust-icon-box">{b.icon}</div>
            <div>
              <h4 className="trust-title">{b.title}</h4>
              <p className="trust-desc">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
