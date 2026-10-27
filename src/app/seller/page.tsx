'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Store, 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  Flame, 
  MessageSquare, 
  Star, 
  Layers, 
  Truck, 
  Settings, 
  X,
  FileText
} from 'lucide-react';

interface SellerOrder {
  id: string;
  customer: string;
  items: string;
  total: number;
  date: string;
  status: 'Pending' | 'Ready to Ship' | 'Shipped' | 'Delivered';
}

interface SellerProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  status: 'Active' | 'Low Stock';
}

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'promotions'>('orders');
  const [orderFilter, setOrderFilter] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Mock seller orders with interactive status updates
  const [orders, setOrders] = useState<SellerOrder[]>([
    {
      id: 'ORD-89421',
      customer: 'Sarah Jenkins',
      items: 'Sony WH-1000XM5 Headphones (Midnight Black)',
      total: 298.00,
      date: 'Today, 14:22',
      status: 'Pending'
    },
    {
      id: 'ORD-89420',
      customer: 'David Miller',
      items: 'Apple Watch Series 9 GPS + Starlight Band',
      total: 329.00,
      date: 'Today, 11:05',
      status: 'Ready to Ship'
    },
    {
      id: 'ORD-89419',
      customer: 'Elena Rostova',
      items: 'Smart Barista Espresso Machine',
      total: 249.99,
      date: 'Yesterday, 19:40',
      status: 'Shipped'
    },
    {
      id: 'ORD-89418',
      customer: 'Marcus Thorne',
      items: 'Titanium Mechanical Automatic Watch',
      total: 189.50,
      date: 'Yesterday, 15:10',
      status: 'Delivered'
    },
    {
      id: 'ORD-89417',
      customer: 'Rachel Green',
      items: 'Cloud Cushion Running Shoes (US 8)',
      total: 79.99,
      date: '24 Oct 2026',
      status: 'Delivered'
    }
  ]);

  // Mock inventory
  const [inventory, setInventory] = useState<SellerProduct[]>([
    {
      id: 'SKU-001',
      name: 'Sony WH-1000XM5 Wireless Headphones',
      category: 'Electronics',
      price: 298.00,
      stock: 12,
      sales: 1420,
      status: 'Low Stock'
    },
    {
      id: 'SKU-002',
      name: 'Apple Watch Series 9 GPS + Cellular',
      category: 'Electronics',
      price: 329.00,
      stock: 45,
      sales: 2190,
      status: 'Active'
    },
    {
      id: 'SKU-003',
      name: 'Titanium Mechanical Automatic Watch',
      category: 'Fashion',
      price: 189.50,
      stock: 64,
      sales: 850,
      status: 'Active'
    },
    {
      id: 'SKU-004',
      name: 'Smart Barista Espresso Machine',
      category: 'Home & Living',
      price: 249.99,
      stock: 8,
      sales: 420,
      status: 'Low Stock'
    }
  ]);

  // Form state for adding new product
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Electronics',
    price: '',
    stock: ''
  });

  const notify = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleUpdateOrderStatus = (id: string, newStatus: SellerOrder['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
    notify(`Order #${id} status updated to: ${newStatus}`);
  };

  const handleRestock = (sku: string) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.id === sku ? { ...item, stock: item.stock + 25, status: 'Active' } : item
      )
    );
    notify(`Restocked 25 units for ${sku}!`);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const created: SellerProduct = {
      id: 'SKU-00' + (inventory.length + 1),
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock) || 50,
      sales: 0,
      status: 'Active'
    };

    setInventory([created, ...inventory]);
    setShowAddModal(false);
    setNewProduct({ name: '', category: 'Electronics', price: '', stock: '' });
    notify(`Product "${created.name}" created and published to store!`);
  };

  const filteredOrders = orders.filter((o) => {
    if (orderFilter === 'All') return true;
    return o.status === orderFilter;
  });

  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Seller Header */}
      <header style={{ background: '#0f172a', color: '#ffffff', borderBottom: '1px solid #1e293b', padding: '0.9rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Store size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>Apex Digital Australia</span>
                  <span style={{ background: '#0284c7', color: '#fff', fontSize: '0.65rem', fontWeight: 800, padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                    MADHUMALL AUSTRALIA
                  </span>
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                  ABN: 82 918 273 645 • Seller ID: AU-99201 • AusPost Verified
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ textAlign: 'right', background: 'rgba(255, 255, 255, 0.06)', padding: '0.35rem 0.8rem', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Available Payout Balance</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#38bdf8' }}>A$12,450.00 AUD</div>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              style={{
                background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '0.55rem 1rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.3)'
              }}
            >
              <Plus size={16} /> Add New Product
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '1.5rem', flex: 1 }}>
        {/* Metric Cards Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Today's Revenue</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0f172a' }}>A$3,480.50 AUD</div>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
              <TrendingUp size={14} /> +18.4% compared to yesterday
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Orders Pending Dispatch</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0f172a' }}>19 Orders</div>
            <div style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 600, marginTop: '0.25rem' }}>
              ⚡ 5 orders need dispatch within 4 hours
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Store Visitors Today</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#faf5ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0f172a' }}>14,280</div>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600, marginTop: '0.25rem' }}>
              Conversion rate: 4.6% (Top 5% in category)
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Operational Quality</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={18} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0f172a' }}>98.6%</div>
            <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600, marginTop: '0.25rem' }}>
              Cancellation rate: 0.2% • Return rate: 0.7%
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #e2e8f0', marginBottom: '1.5rem', overflowX: 'auto', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch' }}>
          <button
            onClick={() => setActiveTab('orders')}
            style={{
              padding: '0.75rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'orders' ? '#0284c7' : '#64748b',
              borderBottom: activeTab === 'orders' ? '3px solid #0284c7' : '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
          >
            <Package size={17} /> Orders & Logistics ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('products')}
            style={{
              padding: '0.75rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'products' ? '#0284c7' : '#64748b',
              borderBottom: activeTab === 'products' ? '3px solid #0284c7' : '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
          >
            <Layers size={17} /> Product Catalog ({inventory.length})
          </button>

          <button
            onClick={() => setActiveTab('promotions')}
            style={{
              padding: '0.75rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: activeTab === 'promotions' ? '#0284c7' : '#64748b',
              borderBottom: activeTab === 'promotions' ? '3px solid #0284c7' : '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s'
            }}
          >
            <Flame size={17} /> Flash Sale Campaigns
          </button>
        </div>

        {/* TAB 1: ORDERS MANAGEMENT */}
        {activeTab === 'orders' && (
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {['All', 'Pending', 'Ready to Ship', 'Shipped', 'Delivered'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderFilter(status)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      background: orderFilter === status ? '#0284c7' : '#f1f5f9',
                      color: orderFilter === status ? '#ffffff' : '#475569'
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Showing <b>{filteredOrders.length}</b> customer orders
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Order ID</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Customer</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Items Description</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Amount</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Status</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: '#0284c7' }}>
                        {order.id}
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{order.customer}</div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{order.date}</div>
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#334155' }}>
                        {order.items}
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 800, color: '#0f172a' }}>
                        A${order.total.toFixed(2)}
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <span style={{
                          padding: '0.25rem 0.6rem',
                          borderRadius: '999px',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          background: 
                            order.status === 'Pending' ? '#fef3c7' :
                            order.status === 'Ready to Ship' ? '#e0f2fe' :
                            order.status === 'Shipped' ? '#ede9fe' : '#dcfce7',
                          color:
                            order.status === 'Pending' ? '#d97706' :
                            order.status === 'Ready to Ship' ? '#0369a1' :
                            order.status === 'Shipped' ? '#6d28d9' : '#15803d'
                        }}>
                          {order.status}
                        </span>
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          {order.status === 'Pending' && (
                            <button
                              onClick={() => handleUpdateOrderStatus(order.id, 'Ready to Ship')}
                              style={{ background: '#0284c7', color: '#fff', fontSize: '0.74rem', fontWeight: 700, padding: '0.3rem 0.6rem', borderRadius: '4px' }}
                            >
                              Pack & Ready
                            </button>
                          )}
                          {order.status === 'Ready to Ship' && (
                            <button
                              onClick={() => handleUpdateOrderStatus(order.id, 'Shipped')}
                              style={{ background: '#16a34a', color: '#fff', fontSize: '0.74rem', fontWeight: 700, padding: '0.3rem 0.6rem', borderRadius: '4px' }}
                            >
                              Hand to Courier
                            </button>
                          )}
                          <button
                            onClick={() => notify(`Shipping invoice downloaded for #${order.id}`)}
                            style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.74rem', fontWeight: 600, padding: '0.3rem 0.6rem', borderRadius: '4px' }}
                          >
                            Print Label
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS CATALOG */}
        {activeTab === 'products' && (
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 700, color: '#0f172a' }}>Current Store Inventory</div>
              <button
                onClick={() => setShowAddModal(true)}
                style={{ background: '#0284c7', color: '#fff', fontSize: '0.78rem', fontWeight: 700, padding: '0.4rem 0.8rem', borderRadius: '6px' }}
              >
                + Add Item
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>SKU</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Product Title</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Category</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Listing Price</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>In Stock</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Total Sold</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Restock Action</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: '#64748b' }}>{item.id}</td>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 600, color: '#0f172a' }}>{item.name}</td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#475569' }}>{item.category}</td>
                      <td style={{ padding: '0.85rem 1.25rem', fontWeight: 800, color: '#0f172a' }}>${item.price.toFixed(2)}</td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <span style={{ fontWeight: 700, color: item.stock < 15 ? '#dc2626' : '#15803d' }}>
                          {item.stock} units
                        </span>
                        {item.stock < 15 && (
                          <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '0.68rem', padding: '0.1rem 0.35rem', borderRadius: '4px', marginLeft: '0.4rem', fontWeight: 700 }}>
                            Low
                          </span>
                        )}
                      </td>
                      <td style={{ padding: '0.85rem 1.25rem', color: '#475569' }}>{item.sales} units</td>
                      <td style={{ padding: '0.85rem 1.25rem' }}>
                        <button
                          onClick={() => handleRestock(item.id)}
                          style={{
                            background: '#f0fdf4',
                            border: '1px solid #bbf7d0',
                            color: '#15803d',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            padding: '0.35rem 0.65rem',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          + Restock 25 Units
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PROMOTIONS */}
        {activeTab === 'promotions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Flame size={20} color="#f85606" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Daraz 11.11 Mega Sale Campaign</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                Join the highest-traffic campaign of the year. Sellers offering 25%+ discount get top frontpage placement.
              </p>
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: '#334155', marginBottom: '1rem' }}>
                Status: <span style={{ color: '#16a34a', fontWeight: 800 }}>Enrolled & Approved</span> • 4 Products Nominated
              </div>
              <button 
                onClick={() => notify('Campaign discount boosted by +5%!')}
                style={{ background: '#f85606', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '0.55rem 1rem', borderRadius: '6px' }}
              >
                Manage Nominated SKUs
              </button>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Flame size={20} color="#2563eb" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Weekend Tech Gala Flash Deals</h3>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                Featured in Electronics Lightning deals carousel for 48 hours. Minimum stock allocation: 20 units.
              </p>
              <div style={{ background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', fontSize: '0.8rem', color: '#334155', marginBottom: '1rem' }}>
                Status: <span style={{ color: '#0284c7', fontWeight: 800 }}>Active This Weekend</span>
              </div>
              <button 
                onClick={() => notify('Campaign status refreshed!')}
                style={{ background: '#0284c7', color: '#fff', fontWeight: 700, fontSize: '0.82rem', padding: '0.55rem 1rem', borderRadius: '6px' }}
              >
                View Analytics & Reach
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="overlay-backdrop" onClick={() => setShowAddModal(false)}>
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowAddModal(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#64748b' }}
            >
              <X size={20} />
            </button>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              Add New Product to Store
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '1.25rem' }}>
              List a new item directly on the Madhu Mart client demo storefront.
            </p>

            <form onSubmit={handleAddProduct}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                  Product Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Wireless RGB Mechanical Gaming Keyboard"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Category
                  </label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                  >
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                    Price ($ USD)
                  </label>
                  <input 
                    type="number" 
                    step="0.01"
                    required
                    placeholder="99.99"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '0.3rem' }}>
                  Initial Stock Quantity
                </label>
                <input 
                  type="number" 
                  placeholder="50"
                  value={newProduct.stock}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  style={{ width: '100%', padding: '0.6rem 0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem'
                }}
              >
                Publish Product to Store
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Seller Toast */}
      {toastMsg && (
        <div className="toast-notice" style={{ background: '#0f172a' }}>
          <CheckCircle size={18} color="#38bdf8" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
