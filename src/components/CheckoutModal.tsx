'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle, CreditCard, Wallet, Truck, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, cart, cartTotal, clearCart, showToast } = useCart();
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'afterpay' | 'paypal'>('card');
  const [formData, setFormData] = useState({
    fullName: 'Liam Hemsworth',
    email: 'liam.hemsworth@aussie-mail.com.au',
    phone: '+61 412 345 678',
    address: '42 George Street',
    city: 'Sydney',
    state: 'NSW',
    zip: '2000',
    cardNumber: '•••• •••• •••• 4242',
  });
  const [orderId, setOrderId] = useState('');

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'MDH-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep('success');
    clearCart();
    showToast(`Order #${generatedId} successfully placed! 🎉`);
  };

  const handleFinish = () => {
    setStep('details');
    closeCheckout();
  };

  return (
    <div className="overlay-backdrop" onClick={closeCheckout}>
      <div 
        className="checkout-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeCheckout}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#64748b', padding: '0.25rem' }}
        >
          <X size={20} />
        </button>

        {step === 'details' ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
                EXPRESS CHECKOUT
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
              Shipping & Payment Details
            </h2>

            <form onSubmit={handlePlaceOrder}>
              {/* Shipping info */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Truck size={16} color="var(--primary)" /> 1. Delivery Address
                </h4>

                <div className="checkout-grid-2" style={{ marginBottom: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.fullName} 
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>Phone Number</label>
                    <input 
                      type="text" 
                      required
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '0.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>Street Address</label>
                  <input 
                    type="text" 
                    required
                    value={formData.address} 
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                  />
                </div>

                <div className="checkout-grid-3">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>Suburb / City</label>
                    <input 
                      type="text" 
                      required
                      value={formData.city} 
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>State</label>
                    <input 
                      type="text" 
                      required
                      value={formData.state} 
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#475569', marginBottom: '0.25rem' }}>Postcode</label>
                    <input 
                      type="text" 
                      required
                      value={formData.zip} 
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      style={{ width: '100%', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} 
                    />
                  </div>
                </div>
              </div>

              {/* Payment methods */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CreditCard size={16} color="var(--primary)" /> 2. Payment Method
                </h4>

                <div className="checkout-payment-grid">
                  <div 
                    onClick={() => setPaymentMethod('card')}
                    className={`checkout-method-box ${paymentMethod === 'card' ? 'active-card' : ''}`}
                  >
                    <CreditCard size={20} color={paymentMethod === 'card' ? 'var(--primary)' : '#64748b'} style={{ margin: '0 auto 0.25rem' }} />
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>Credit / Debit</div>
                  </div>

                  <div 
                    onClick={() => setPaymentMethod('afterpay')}
                    className={`checkout-method-box ${paymentMethod === 'afterpay' ? 'active-afterpay' : ''}`}
                  >
                    <Sparkles size={20} color={paymentMethod === 'afterpay' ? '#000' : '#64748b'} style={{ margin: '0 auto 0.25rem' }} />
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0f172a' }}>Afterpay / Zip</div>
                  </div>

                  <div 
                    onClick={() => setPaymentMethod('paypal')}
                    className={`checkout-method-box ${paymentMethod === 'paypal' ? 'active-paypal' : ''}`}
                  >
                    <Wallet size={20} color={paymentMethod === 'paypal' ? 'var(--primary)' : '#64748b'} style={{ margin: '0 auto 0.25rem' }} />
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>PayPal & Apple Pay</div>
                  </div>
                </div>
              </div>

              {/* Order total banner */}
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b', marginBottom: '0.3rem' }}>
                  <span>Items count:</span>
                  <span>{cart.reduce((s, i) => s + i.quantity, 0)} products</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 900, color: '#0f172a' }}>
                  <span>Total Due (AUD):</span>
                  <span style={{ color: 'var(--primary)' }}>A${cartTotal.toFixed(2)} (Inc. 10% GST)</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, var(--primary) 0%, #ff7020 100%)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1rem',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(248, 86, 6, 0.4)'
                }}
              >
                <span>Confirm & Place Order (A${cartTotal.toFixed(2)} AUD)</span>
              </button>
            </form>
          </div>
        ) : (
          /* Order Success screen */
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle size={42} />
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              Order Placed Successfully!
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Thank you for shopping with Madhu Mart! We have received your order.
            </p>

            <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'left', maxWidth: '420px', margin: '0 auto 1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#64748b' }}>Order Number:</span>
                <span style={{ fontWeight: 800, color: 'var(--primary)' }}>{orderId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#64748b' }}>Delivery Address:</span>
                <span style={{ fontWeight: 600, color: '#0f172a' }}>{formData.address}, {formData.city} {formData.state} {formData.zip}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#64748b' }}>Carrier & Arrival:</span>
                <span style={{ fontWeight: 600, color: '#16a34a' }}>Australia Post Express (1-2 Days)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ color: '#64748b' }}>Payment Mode:</span>
                <span style={{ fontWeight: 600, color: '#0f172a', textTransform: 'uppercase' }}>{paymentMethod}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              style={{
                background: 'var(--primary)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.92rem',
                padding: '0.75rem 2rem',
                borderRadius: '8px'
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
