'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  DollarSign, 
  Users, 
  ShoppingBag, 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Check, 
  Search, 
  Filter, 
  BarChart3, 
  Globe, 
  Sparkles,
  Server,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface PlatformTransaction {
  id: string;
  merchant: string;
  buyer: string;
  amount: number;
  commission: number;
  time: string;
  paymentMethod: string;
  status: 'Settled' | 'Processing' | 'Held';
}

interface PendingMerchant {
  id: string;
  storeName: string;
  category: string;
  contactEmail: string;
  submittedDate: string;
  status: 'Pending Review' | 'Approved' | 'Declined';
  kycDoc: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'transactions' | 'merchants' | 'performance'>('transactions');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Platform transactions across merchants
  const [transactions, setTransactions] = useState<PlatformTransaction[]>([
    {
      id: 'TXN-90412',
      merchant: 'Apex Flagship Store',
      buyer: 'Sarah Jenkins',
      amount: 298.00,
      commission: 37.25,
      time: '2 mins ago',
      paymentMethod: 'Credit Card (Visa)',
      status: 'Settled'
    },
    {
      id: 'TXN-90411',
      merchant: 'Zenith Watches Official',
      buyer: 'Marcus Thorne',
      amount: 189.50,
      commission: 23.68,
      time: '14 mins ago',
      paymentMethod: 'Apple Pay',
      status: 'Settled'
    },
    {
      id: 'TXN-90410',
      merchant: 'Apex Flagship Store',
      buyer: 'David Miller',
      amount: 329.00,
      commission: 41.12,
      time: '38 mins ago',
      paymentMethod: 'MasterCard',
      status: 'Settled'
    },
    {
      id: 'TXN-90409',
      merchant: 'Luxe Living Appliances',
      buyer: 'Elena Rostova',
      amount: 249.99,
      commission: 31.24,
      time: '1 hour ago',
      paymentMethod: 'PayPal',
      status: 'Processing'
    },
    {
      id: 'TXN-90408',
      merchant: 'Nordic Shoes & Apparel',
      buyer: 'Chris Evans',
      amount: 79.99,
      commission: 9.99,
      time: '2 hours ago',
      paymentMethod: 'Cash On Delivery',
      status: 'Settled'
    }
  ]);

  // Pending merchant applications
  const [merchants, setMerchants] = useState<PendingMerchant[]>([
    {
      id: 'MER-501',
      storeName: 'Sony Authorized Direct',
      category: 'Electronics & Audio',
      contactEmail: 'partner@sonydirect.com',
      submittedDate: 'Today, 09:15',
      status: 'Pending Review',
      kycDoc: 'Brand Trademark & Business Tax Certificate #US-9821'
    },
    {
      id: 'MER-502',
      storeName: 'Aura Skincare Labs',
      category: 'Health & Beauty',
      contactEmail: 'sales@aurabotanics.com',
      submittedDate: 'Yesterday, 16:30',
      status: 'Pending Review',
      kycDoc: 'FDA Compliance & Cosmetic Safety Registry'
    },
    {
      id: 'MER-503',
      storeName: 'Velocity Sports Apparel',
      category: 'Athletics & Footwear',
      contactEmail: 'contact@velocityfit.com',
      submittedDate: '23 Oct 2026',
      status: 'Approved',
      kycDoc: 'Merchant Chamber of Commerce License'
    }
  ]);

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3200);
  };

  const handleApproveMerchant = (id: string) => {
    setMerchants((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: 'Approved' } : m))
    );
    notify(`Merchant application ${id} approved! Storefront access granted.`);
  };

  const handleDeclineMerchant = (id: string) => {
    setMerchants((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: 'Declined' } : m))
    );
    notify(`Merchant application ${id} declined with feedback request.`);
  };

  const totalGMV = transactions.reduce((acc, t) => acc + t.amount, 148290.00);
  const totalCommission = transactions.reduce((acc, t) => acc + t.commission, 18536.00);

  return (
    <div style={{ background: '#0b0f19', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Operations Header */}
      <header style={{ background: '#111827', borderBottom: '1px solid #1f2937', padding: '0.9rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={22} color="#ffffff" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>Madhu Mart Australia Operations</span>
                <span style={{ background: '#7c3aed', color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                  AUSTRALIA & APAC HUB
                </span>
              </div>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                Cloud Cluster: AWS ap-southeast-2 (Sydney, Australia) • 99.98% System Uptime
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '0.35rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', color: '#4ade80', fontWeight: 700 }}>
              <Activity size={14} />
              <span>All Microservices Healthy</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.8rem' }}>
              <Globe size={15} /> Global Network
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '1.5rem', flex: 1 }}>
        {/* KPI Metrics Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          <div style={{ background: '#131c2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Marketplace GMV</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.15)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f8fafc' }}>
              A${totalGMV.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
            </div>
            <div style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.35rem' }}>
              <TrendingUp size={14} /> +22.4% MoM platform volume
            </div>
          </div>

          <div style={{ background: '#131c2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Platform Take Rate (Revenue)</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f8fafc' }}>
              A${totalCommission.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.35rem' }}>
              Avg commission take rate: 12.5%
            </div>
          </div>

          <div style={{ background: '#131c2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Active Merchant Stores</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f8fafc' }}>1,428 Sellers</div>
            <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600, marginTop: '0.35rem' }}>
              ⚡ 2 new seller applications awaiting review
            </div>
          </div>

          <div style={{ background: '#131c2e', padding: '1.25rem', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 600 }}>Total Completed Orders</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(249, 115, 22, 0.15)', color: '#fb923c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShoppingBag size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f8fafc' }}>18,942 Orders</div>
            <div style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 600, marginTop: '0.35rem' }}>
              99.8% on-time delivery dispatch
            </div>
          </div>
        </div>

        {/* Admin Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #1f2937', marginBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch' }}>
          <button
            onClick={() => setActiveTab('transactions')}
            style={{
              padding: '0.75rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'transactions' ? '#a855f7' : '#94a3b8',
              borderBottom: activeTab === 'transactions' ? '3px solid #7c3aed' : '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
          >
            <Activity size={17} /> Live Platform Transactions
          </button>

          <button
            onClick={() => setActiveTab('merchants')}
            style={{
              padding: '0.75rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'merchants' ? '#a855f7' : '#94a3b8',
              borderBottom: activeTab === 'merchants' ? '3px solid #7c3aed' : '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
          >
            <Users size={17} /> Merchant Approvals ({merchants.filter(m => m.status === 'Pending Review').length} Pending)
          </button>

          <button
            onClick={() => setActiveTab('performance')}
            style={{
              padding: '0.75rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'performance' ? '#a855f7' : '#94a3b8',
              borderBottom: activeTab === 'performance' ? '3px solid #7c3aed' : '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
          >
            <BarChart3 size={17} /> Category Share & Analytics
          </button>
        </div>

        {/* TAB 1: TRANSACTIONS STREAM */}
        {activeTab === 'transactions' && (
          <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #1f2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Real-time Marketplace Settlement Stream</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Auto-refreshes with client demo purchases</div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#0f172a', color: '#94a3b8', borderBottom: '1px solid #1f2937' }}>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Txn ID</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Merchant Store</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Buyer</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Gross Total</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Commission (Take)</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Payment Gateway</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Settlement</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} style={{ borderBottom: '1px solid #1f2937' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: '#a855f7' }}>{tx.id}</td>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 600, color: '#f8fafc' }}>{tx.merchant}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#cbd5e1' }}>{tx.buyer}</td>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 800, color: '#f8fafc' }}>${tx.amount.toFixed(2)}</td>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 800, color: '#4ade80' }}>+${tx.commission.toFixed(2)}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#94a3b8' }}>{tx.paymentMethod}</td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <span style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          background: tx.status === 'Settled' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                          color: tx.status === 'Settled' ? '#4ade80' : '#facc15'
                        }}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: MERCHANT ONBOARDING */}
        {activeTab === 'merchants' && (
          <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #1f2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Merchant Verification & Brand Licensing Queue</div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#0f172a', color: '#94a3b8', borderBottom: '1px solid #1f2937' }}>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Merchant ID</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Store Brand</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Category</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Verified Credentials</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Status</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Admin Decision</th>
                  </tr>
                </thead>
                <tbody>
                  {merchants.map((m) => (
                    <tr key={m.id} style={{ borderBottom: '1px solid #1f2937' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: '#94a3b8' }}>{m.id}</td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <div style={{ fontWeight: 700, color: '#f8fafc' }}>{m.storeName}</div>
                        <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{m.contactEmail}</div>
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#cbd5e1' }}>{m.category}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#94a3b8', fontSize: '0.8rem' }}>{m.kycDoc}</td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <span style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          background: 
                            m.status === 'Approved' ? 'rgba(34, 197, 94, 0.15)' :
                            m.status === 'Declined' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                          color:
                            m.status === 'Approved' ? '#4ade80' :
                            m.status === 'Declined' ? '#f87171' : '#facc15'
                        }}>
                          {m.status}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        {m.status === 'Pending Review' ? (
                          <div style={{ display: 'flex', gap: '0.4rem' }}>
                            <button
                              onClick={() => handleApproveMerchant(m.id)}
                              style={{
                                background: '#16a34a',
                                color: '#ffffff',
                                fontSize: '0.74rem',
                                fontWeight: 700,
                                padding: '0.35rem 0.7rem',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}
                            >
                              <Check size={13} /> Approve
                            </button>
                            <button
                              onClick={() => handleDeclineMerchant(m.id)}
                              style={{
                                background: 'rgba(239, 68, 68, 0.2)',
                                border: '1px solid rgba(239, 68, 68, 0.4)',
                                color: '#f87171',
                                fontSize: '0.74rem',
                                fontWeight: 600,
                                padding: '0.35rem 0.6rem',
                                borderRadius: '4px'
                              }}
                            >
                              Decline
                            </button>
                          </div>
                        ) : (
                          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Decision finalized</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CATEGORY SHARE */}
        {activeTab === 'performance' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', color: '#f8fafc' }}>
                Department GMV Distribution
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Consumer Electronics (Phones, Audio, Laptops)</span>
                    <span style={{ fontWeight: 800, color: '#f8fafc' }}>$62,400 (42%)</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#1f2937', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '42%', height: '100%', background: '#7c3aed', borderRadius: '4px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Fashion & Watches</span>
                    <span style={{ fontWeight: 800, color: '#f8fafc' }}>$41,600 (28%)</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#1f2937', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '28%', height: '100%', background: '#0284c7', borderRadius: '4px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Home & Kitchen Living</span>
                    <span style={{ fontWeight: 800, color: '#f8fafc' }}>$26,800 (18%)</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#1f2937', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '18%', height: '100%', background: '#f85606', borderRadius: '4px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Beauty & Personal Care</span>
                    <span style={{ fontWeight: 800, color: '#f8fafc' }}>$17,490 (12%)</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#1f2937', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '12%', height: '100%', background: '#10b981', borderRadius: '4px' }} />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#111827', borderRadius: '12px', border: '1px solid #1f2937', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '1.25rem', color: '#f8fafc' }}>
                Operational Infrastructure Status
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: '#1a2333', borderRadius: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Payment Gateway (Stripe/PayPal/COD)</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>● Online (100%)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: '#1a2333', borderRadius: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Australia Post Express Tracking API</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>● Connected (Sydney 18ms)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: '#1a2333', borderRadius: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Database Replicas & Search Engine</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>● Synchronized</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0.8rem', background: '#1a2333', borderRadius: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Fraud Detection & Shield Engine</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>● Active & Guarding</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Admin Toast */}
      {toastMsg && (
        <div className="toast-notice" style={{ background: '#111827', borderColor: '#7c3aed' }}>
          <CheckCircle2 size={18} color="#a855f7" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
