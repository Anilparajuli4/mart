'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';
import { SlidersHorizontal, ArrowUpDown, Check, Sparkles, Filter } from 'lucide-react';

type FilterTab = 'all' | 'bestsellers' | 'official' | 'under100';
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating';

export default function ProductGrid() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useCart();
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // Quick filter tabs
      if (activeTab === 'bestsellers' && !product.isBestSeller) return false;
      if (activeTab === 'official' && !product.isOfficial) return false;
      if (activeTab === 'under100' && product.price >= 100) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, activeTab, sortBy]);

  return (
    <section id="catalog-section" style={{ marginTop: '2.5rem' }}>
      {/* Section Header with Tabs and Sort */}
      <div className="section-header-wrap">
        <div>
          <h2 className="section-heading">
            <Sparkles size={22} color="var(--primary)" />
            {selectedCategory === 'All Categories' ? 'Just For You & Trending' : `${selectedCategory} Collection`}
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#6b7280', marginTop: '0.2rem' }}>
            {filteredProducts.length} curated products available with fast 2-day delivery
          </p>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Quick Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`filter-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Items
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'bestsellers' ? 'active' : ''}`}
              onClick={() => setActiveTab('bestsellers')}
            >
              🔥 Best Sellers
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'official' ? 'active' : ''}`}
              onClick={() => setActiveTab('official')}
            >
              🛡️ Official Mall
            </button>
            <button
              className={`filter-tab-btn ${activeTab === 'under100' ? 'active' : ''}`}
              onClick={() => setActiveTab('under100')}
            >
              💰 Under A$100
            </button>
          </div>

          {/* Sort Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#ffffff', border: '1px solid #d1d5db', borderRadius: '8px', padding: '0.35rem 0.65rem' }}>
            <ArrowUpDown size={14} color="#666" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              style={{ border: 'none', background: 'transparent', fontSize: '0.84rem', fontWeight: 600, color: '#333', cursor: 'pointer' }}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active filters notice if searching or filtering */}
      {(searchQuery || selectedCategory !== 'All Categories' || activeTab !== 'all') && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', color: '#666' }}>Active Filters:</span>
          {searchQuery && (
            <span style={{ background: '#e0e7ff', color: '#3730a3', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
              Search: "{searchQuery}"
            </span>
          )}
          {selectedCategory !== 'All Categories' && (
            <span style={{ background: '#fef3c7', color: '#92400e', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 600 }}>
              Category: {selectedCategory}
            </span>
          )}
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
              setActiveTab('all');
            }}
            style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '3rem 2rem',
          textAlign: 'center',
          border: '1px solid #e5e7eb',
          margin: '1.5rem 0'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>
            No matching products found
          </h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            We couldn't find anything matching your selected search query or category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Categories');
              setActiveTab('all');
            }}
            style={{
              background: 'var(--primary)',
              color: '#fff',
              fontWeight: 700,
              padding: '0.6rem 1.4rem',
              borderRadius: '8px'
            }}
          >
            Clear Filters & View All
          </button>
        </div>
      )}
    </section>
  );
}
