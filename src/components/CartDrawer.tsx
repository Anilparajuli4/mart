'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, Truck, Tag, ShieldCheck } from 'lucide-react';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    updateQuantity, 
    removeFromCart, 
    cartTotal, 
    cartCount,
    openCheckout,
    showToast 
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [discountNotice, setDiscountNotice] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 75;
  const progressToFreeShipping = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountNeeded = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'AUSSIE20' || code === 'MADHUDEAL' || code === 'NOVADEAL' || code === 'SAVE20') {
      const discount = cartTotal * 0.20;
      setAppliedDiscount(discount);
      setDiscountNotice('Coupon AUSSIE20 applied! 20% discount granted.');
      showToast('Coupon AUSSIE20 applied: 20% OFF!');
    } else if (code === 'FREE50') {
      setAppliedDiscount(15);
      setDiscountNotice('Coupon FREE50 applied: A$15 voucher applied!');
      showToast('Coupon FREE50 applied: A$15 OFF!');
    } else {
      showToast('Invalid coupon. Try: AUSSIE20 or MADHUDEAL');
    }
  };

  const finalTotal = Math.max(0, cartTotal - appliedDiscount);

  return (
    <div className="overlay-backdrop" onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <ShoppingBag size={22} color="var(--primary)" />
            <span>Shopping Cart ({cartCount})</span>
          </div>
          <button onClick={closeCart} style={{ color: '#666', padding: '0.25rem' }}>
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress bar */}
        <div style={{ background: '#f8fafc', padding: '0.85rem 1.25rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 700, color: amountNeeded === 0 ? '#059669' : '#1e293b', marginBottom: '0.4rem' }}>
            <Truck size={16} color={amountNeeded === 0 ? '#059669' : 'var(--primary)'} />
            {amountNeeded === 0 ? (
              <span>🎉 You have unlocked <b>FREE AusPost Express Delivery</b>!</span>
            ) : (
              <span>Add <b>A${amountNeeded.toFixed(2)}</b> more for <b>FREE AusPost Delivery</b></span>
            )}
          </div>
          <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div 
              style={{
                width: `${progressToFreeShipping}%`,
                height: '100%',
                background: amountNeeded === 0 ? '#059669' : 'linear-gradient(90deg, #ff9900 0%, #f85606 100%)',
                borderRadius: '3px',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        {/* Cart items list */}
        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto 0', padding: '2rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <ShoppingBag size={28} color="#94a3b8" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.4rem' }}>
                Your cart is empty
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
                Looks like you haven't added anything to your cart yet.
              </p>
              <button
                onClick={closeCart}
                style={{
                  background: 'var(--primary)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '6px'
                }}
              >
                Start Shopping Now
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} className="cart-item-row">
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="cart-item-img" 
                />

                <div className="cart-item-details">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 className="cart-item-name">{item.product.name}</h4>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      style={{ color: '#94a3b8', padding: '0.2rem' }}
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="cart-item-meta">
                    {item.selectedColor && <span>Color: {item.selectedColor} • </span>}
                    {item.selectedSize && <span>Size: {item.selectedSize} • </span>}
                    <span style={{ color: '#059669', fontWeight: 600 }}>In Stock</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.4rem' }}>
                    <div className="cart-qty-ctrl">
                      <button 
                        className="qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0 0.4rem' }}>
                        {item.quantity}
                      </span>
                      <button 
                        className="qty-btn"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)' }}>
                        A${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                        A${item.product.price.toFixed(2)} each
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with totals & checkout */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Promo code form */}
            <form onSubmit={handleApplyCoupon} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <input 
                  type="text"
                  placeholder="Coupon code (e.g. AUSSIE20)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.55rem 0.75rem',
                    fontSize: '0.82rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    textTransform: 'uppercase'
                  }}
                />
              </div>
              <button 
                type="submit"
                style={{
                  background: '#131921',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  padding: '0.55rem 0.9rem',
                  borderRadius: '6px'
                }}
              >
                Apply
              </button>
            </form>

            {discountNotice && (
              <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 600, marginBottom: '0.6rem' }}>
                ✓ {discountNotice}
              </div>
            )}

            {/* Calculations summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                <span>Subtotal</span>
                <span>A${cartTotal.toFixed(2)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#dc2626', fontWeight: 600 }}>
                  <span>Discount</span>
                  <span>-A${appliedDiscount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                <span>AusPost Delivery</span>
                <span>{amountNeeded === 0 ? <b style={{ color: '#059669' }}>FREE</b> : 'A$7.95'}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 900, color: '#0f172a', borderTop: '1px solid #e2e8f0', paddingTop: '0.6rem', marginTop: '0.2rem' }}>
                <span>Total Amount (AUD)</span>
                <span style={{ color: 'var(--primary)' }}>A${(finalTotal + (amountNeeded === 0 ? 0 : 7.95)).toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button className="checkout-btn" onClick={openCheckout}>
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#64748b', marginTop: '0.75rem' }}>
              <ShieldCheck size={14} color="#059669" /> Safe & 256-bit Encrypted Checkout
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
