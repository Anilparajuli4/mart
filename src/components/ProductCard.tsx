'use client';

import React from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Heart, Eye, ShoppingCart, ShieldCheck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  showFlashBar?: boolean;
}

export default function ProductCard({ product, showFlashBar }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted, openQuickView } = useCart();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="product-card">
      {/* Product Image & Overlays */}
      <div className="product-image-wrap">
        {/* Badges */}
        <div className="card-badge-container">
          <span className="card-badge badge-discount">-{product.discount}%</span>
          {product.isOfficial && (
            <span className="card-badge badge-official">Official</span>
          )}
          {product.isBestSeller && !product.isOfficial && (
            <span className="card-badge badge-bestseller">Best Seller</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          className={`card-wishlist-btn ${wishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={16} fill={wishlisted ? '#d9383a' : 'none'} />
        </button>

        {/* Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          loading="lazy"
        />

        {/* Quick View Hover Action */}
        <div className="card-quick-actions">
          <button 
            className="quick-view-btn"
            onClick={() => openQuickView(product)}
          >
            <Eye size={14} /> Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <span className="product-category-tag">{product.category}</span>
        
        <h3 
          className="product-title" 
          title={product.name}
          onClick={() => openQuickView(product)}
          style={{ cursor: 'pointer' }}
        >
          {product.name}
        </h3>

        {/* Ratings & reviews */}
        <div className="product-ratings">
          <div className="stars-wrap">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={13} 
                fill={i < Math.floor(product.rating) ? '#f59e0b' : 'none'} 
                stroke="#f59e0b"
              />
            ))}
          </div>
          <span className="rating-score">{product.rating}</span>
          <span className="review-count">({product.reviewCount.toLocaleString()})</span>
        </div>

        {/* Pricing */}
        <div className="product-pricing">
          <div className="price-row">
            <span className="current-price">A${product.price.toFixed(2)}</span>
            <span className="original-price">A${product.originalPrice.toFixed(2)}</span>
          </div>
          <div style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
            or 4x A${(product.price / 4).toFixed(2)} with <span style={{ color: '#000', fontWeight: 800 }}>afterpay</span>
          </div>

          {/* Flash Deal Progress Bar (Daraz/Amazon lightning style) */}
          {showFlashBar && product.stockSoldPercent && (
            <div className="stock-progress-wrap">
              <div className="stock-progress-bar">
                <div 
                  className="stock-progress-fill" 
                  style={{ width: `${product.stockSoldPercent}%` }} 
                />
              </div>
              <div className="stock-progress-text">
                <span>{product.stockSoldPercent}% Sold</span>
                <span style={{ color: '#d9383a', fontWeight: 700 }}>
                  Only {product.stockLeft || 5} left!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Add to Cart button */}
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={15} /> Add to Cart
        </button>
      </div>
    </div>
  );
}
