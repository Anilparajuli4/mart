'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Store, ShieldCheck, Layers, X, ChevronRight } from 'lucide-react';

export default function DemoSwitcher() {
  const pathname = usePathname();
  const [minimized, setMinimized] = useState(false);

  return (
    <aside aria-label="Role Switcher" className={`floating-role-dock ${minimized ? 'minimized' : ''}`}>
      {minimized ? (
        <button 
          className="role-dock-min-btn" 
          onClick={() => setMinimized(false)}
          title="Switch Demo Role (Store / Seller / Admin)"
          aria-label="Open role switcher"
        >
          <Layers size={16} />
          <span className="role-dock-min-label">Roles</span>
        </button>
      ) : (
        <div className="role-dock-card">
          <div className="role-dock-header">
            <span className="role-dock-title">
              <Layers size={13} color="var(--primary)" /> Demo Perspective
            </span>
            <button 
              className="role-dock-close-btn" 
              onClick={() => setMinimized(true)}
              title="Minimize widget"
              aria-label="Minimize role widget"
            >
              <X size={13} />
            </button>
          </div>

          <div className="role-dock-buttons">
            {/* Customer Storefront */}
            <Link
              href="/"
              className={`role-dock-link ${pathname === '/' ? 'active-store' : ''}`}
              title="Customer Storefront"
            >
              <ShoppingBag size={14} />
              <span>Store</span>
            </Link>

            {/* Seller Center */}
            <Link
              href="/seller"
              className={`role-dock-link ${pathname === '/seller' ? 'active-seller' : ''}`}
              title="Merchant Seller Center"
            >
              <Store size={14} />
              <span>Seller</span>
            </Link>

            {/* Admin Dashboard */}
            <Link
              href="/admin"
              className={`role-dock-link ${pathname === '/admin' ? 'active-admin' : ''}`}
              title="Super Admin Dashboard"
            >
              <ShieldCheck size={14} />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      )}
    </aside>
  );
}
