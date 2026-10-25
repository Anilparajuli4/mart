'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Star, Heart, ShoppingCart, ShieldCheck, Truck, RotateCcw, Check, Sparkles } from 'lucide-react';

export default function ProductModal() {
  const { 
    quickViewProduct, 
    closeQuickView, 
    addToCart, 
    toggleWishlist, 
    isWishlisted,
    openCheckout 
  } = useCart();

  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isWishlisted(product.id);
  const currentImage = product.images?.[selectedImgIdx] || product.image;
  const currentColor = selectedColor || product.colors?.[0];
  const currentSize = selectedSize || product.sizes?.[0];

  const handleAddToCart = () => {
    addToCart(product, quantity, currentColor, currentSize);
    closeQuickView();
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, currentColor, currentSize);
    closeQuickView();
    openCheckout();
  };

  return (
    <div className="overlay-backdrop" onClick={closeQuickView}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={closeQuickView} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Left: Product Images Gallery */}
        <div style={{ padding: '1.5rem', background: '#f8f9fa', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%', height: '360px', borderRadius: '12px', overflow: 'hidden', background: '#fff', border: '1px solid #e5e7eb', marginBottom: '1rem' }}>
            <img 
              src={currentImage} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIdx(idx)}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: selectedImgIdx === idx ? '2px solid var(--primary)' : '1px solid #d1d5db',
                    padding: '2px',
                    background: '#fff'
                  }}
                >
                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
                </button>
              ))}
            </div>
          )}

          {/* Trust points */}
          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#4b5563' }}>
              <ShieldCheck size={16} color="var(--primary)" /> 100% Authentic Australian Stock Guaranteed
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#4b5563' }}>
              <Truck size={16} color="#059669" /> Free Australia Post Express on orders over A$75
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#4b5563' }}>
              <RotateCcw size={16} color="#4f46e5" /> 30-Day Returns under Australian Consumer Law (ACL)
            </div>
          </div>
        </div>

        {/* Right: Product Details & Controls */}
        <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {/* Category & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
              {product.category}
            </span>
            {product.isOfficial && (
              <span style={{ background: '#131921', color: '#febd69', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                MadhuMall Flagship
              </span>
            )}
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.25, color: '#111', marginBottom: '0.6rem' }}>
            {product.name}
          </h2>

          {/* Ratings */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', color: '#f59e0b' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'} stroke="#f59e0b" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{product.rating}</span>
            <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>({product.reviewCount} customer reviews)</span>
          </div>

          {/* Pricing */}
          <div style={{ background: '#f8fafc', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 900, color: 'var(--primary)' }}>
                A${product.price.toFixed(2)}
              </span>
              <span style={{ fontSize: '1rem', color: '#9ca3af', textDecoration: 'line-through' }}>
                A${product.originalPrice.toFixed(2)}
              </span>
              <span style={{ background: '#fee2e2', color: '#dc2626', fontSize: '0.78rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                SAVE {product.discount}%
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700, marginTop: '0.35rem' }}>
              or 4 payments of A${(product.price / 4).toFixed(2)} with <span style={{ color: '#000', fontWeight: 900 }}>afterpay</span> or <span style={{ color: '#2563eb', fontWeight: 900 }}>zip</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600, marginTop: '0.25rem' }}>
              ✓ In Stock (Sydney Hub) • Ready for AusPost Express dispatch
            </div>
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.5, marginBottom: '1.25rem' }}>
            {product.description}
          </p>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem' }}>
                Color: <span style={{ color: 'var(--primary)' }}>{currentColor}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      border: currentColor === c ? '2px solid var(--primary)' : '1px solid #d1d5db',
                      background: currentColor === c ? 'var(--primary-light)' : '#ffffff',
                      color: currentColor === c ? 'var(--primary)' : '#374151',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', marginBottom: '0.4rem' }}>
                Select Size: <span style={{ color: 'var(--primary)' }}>{currentSize}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      padding: '0.35rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      border: currentSize === s ? '2px solid var(--primary)' : '1px solid #d1d5db',
                      background: currentSize === s ? 'var(--primary)' : '#ffffff',
                      color: currentSize === s ? '#ffffff' : '#374151',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & CTA Buttons */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#374151' }}>Quantity:</div>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '6px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  style={{ width: '32px', height: '32px', background: '#f3f4f6', fontWeight: 800, fontSize: '1rem' }}
                >
                  -
                </button>
                <span style={{ width: '36px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 700 }}>{quantity}</span>
                <button 
                  onClick={() => setQuantity((q) => q + 1)}
                  style={{ width: '32px', height: '32px', background: '#f3f4f6', fontWeight: 800, fontSize: '1rem' }}
                >
                  +
                </button>
              </div>

              {/* Wishlist Button */}
              <button 
                onClick={() => toggleWishlist(product.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  marginLeft: 'auto',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: wishlisted ? '#dc2626' : '#6b7280'
                }}
              >
                <Heart size={18} fill={wishlisted ? '#dc2626' : 'none'} color={wishlisted ? '#dc2626' : '#6b7280'} />
                {wishlisted ? 'Saved' : 'Wishlist'}
              </button>
            </div>

            {/* Action buttons row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button 
                onClick={handleAddToCart}
                style={{
                  background: 'var(--secondary)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.2s'
                }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button 
                onClick={handleBuyNow}
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, #ff7020 100%)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 12px rgba(248, 86, 6, 0.4)'
                }}
              >
                <Sparkles size={18} /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
