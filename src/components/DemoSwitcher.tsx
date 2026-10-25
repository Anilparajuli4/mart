'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Store, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function DemoSwitcher() {
  const pathname = usePathname();

  return (
    <aside aria-label="Demo Role Switcher" style={{
      background: 'linear-gradient(90deg, #111827 0%, #1f2937 100%)',
      color: '#ffffff',
      padding: '0.45rem 1rem',
      fontSize: '0.78rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
      position: 'relative',
      zIndex: 120
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          background: 'linear-gradient(135deg, #f85606 0%, #ff833e 100%)',
          color: '#ffffff',
          fontWeight: 800,
          padding: '0.15rem 0.45rem',
          borderRadius: '4px',
          fontSize: '0.68rem',
          letterSpacing: '0.5px'
        }}>
          CLIENT PRESENTATION MODE
        </span>
        <span style={{ color: '#9ca3af' }}>Switch active perspective:</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        {/* Customer Storefront */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'all 0.2s',
            background: pathname === '/' ? '#f85606' : 'rgba(255, 255, 255, 0.08)',
            color: pathname === '/' ? '#ffffff' : '#d1d5db',
            border: pathname === '/' ? '1px solid #f85606' : '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <ShoppingBag size={13} />
          <span>Customer Store</span>
        </Link>

        {/* Seller Center */}
        <Link
          href="/seller"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'all 0.2s',
            background: pathname === '/seller' ? '#0284c7' : 'rgba(255, 255, 255, 0.08)',
            color: pathname === '/seller' ? '#ffffff' : '#d1d5db',
            border: pathname === '/seller' ? '1px solid #0284c7' : '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <Store size={13} />
          <span>Seller Center</span>
        </Link>

        {/* Admin Dashboard */}
        <Link
          href="/admin"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            fontWeight: 700,
            transition: 'all 0.2s',
            background: pathname === '/admin' ? '#7c3aed' : 'rgba(255, 255, 255, 0.08)',
            color: pathname === '/admin' ? '#ffffff' : '#d1d5db',
            border: pathname === '/admin' ? '1px solid #7c3aed' : '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <ShieldCheck size={13} />
          <span>Super Admin</span>
        </Link>
      </div>
    </aside>
  );
}
