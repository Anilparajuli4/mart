# Madhu Mart E-Commerce Demo Platform (Amazon & Daraz Inspired)

A high-performance, full-featured modern e-commerce demo application built using **Next.js (App Router)** and **React 19**.

Includes three distinct perspectives specifically designed for client demonstration:
1. 🛒 **Customer Storefront** (`/`): High-conversion consumer shopping experience.
2. 🏪 **Seller Center Dashboard** (`/seller`): Merchant inventory, order fulfillment, and promotion portal (Daraz Seller Center & Amazon Seller Central inspired).
3. 🛡️ **Super Admin Operations Hub** (`/admin`): Marketplace-wide GMV analytics, commission tracking, and merchant KYC verification.

---

## 🚀 Live Demo URLs (Local Server)

- **Customer Storefront**: [http://localhost:3000/](http://localhost:3000/)
- **Seller Center**: [http://localhost:3000/seller](http://localhost:3000/seller)
- **Super Admin Hub**: [http://localhost:3000/admin](http://localhost:3000/admin)

> A persistent **Client Presentation Switcher Bar** is pinned to the top of all pages, allowing instant 1-click toggling between Customer, Seller, and Admin roles during your presentation.

---

## ✨ Feature Walkthrough for Client Presentation

### 1. Customer Storefront (`/`)
- **Header & Navigation**:
  - Live announcement ticker with authenticity guarantees & discount notices.
  - Interactive **Deliver To location switcher** (New York, London, Kathmandu, Toronto, Sydney).
  - Search bar with **Category Selector** and instant keyword filtering.
  - Interactive **Account & Lists menu** with VIP sign-in simulation.
  - Dynamic **Wishlist counter** with heart animation.
  - **Animated Cart counter** showing total price and item count.
- **Hero & Departments**:
  - Auto-advancing promotional carousel with high-impact sales banners.
  - Daraz-style departmental sidebar navigation.
- **Flash Sale (Amazon Lightning Deals / Daraz Flash Sale)**:
  - Real-time **countdown timer** ticking every second (Hours:Minutes:Seconds).
  - Stock scarcity progress bars ("84% Sold - Only 4 left!").
- **Product Catalog & Filtering**:
  - Interactive tabs: *All Items*, *🔥 Best Sellers*, *🛡️ Official Mall*, *💰 Under $100*.
  - Sort dropdown: *Price Low-High*, *Price High-Low*, *Top Rated*, *Featured*.
- **Quick View Modal**:
  - Multi-image thumbnail gallery zoom.
  - Color and size variant selectors.
  - Quantity adjuster and instant **Add to Cart** / **Buy Now** actions.
- **Cart Slide-Over Drawer**:
  - **Free Shipping Progress Meter** ("Add $15 more to unlock Free Express Delivery!").
  - Quantity controls and item removal.
  - Working **Coupon Voucher Code** input (Test with: `NOVADEAL` for 20% off or `FREE50` for $15 voucher).
- **Express Checkout Modal**:
  - Delivery address form.
  - Payment options: Credit/Debit Card, Digital Wallet, Cash on Delivery (COD).
  - Order placed celebration with auto-generated **Order ID (e.g. `NVM-849201`)**.

---

### 2. Seller Center Dashboard (`/seller`)
- **Key Seller KPIs**:
  - Today's Net Revenue with comparison growth rate.
  - Pending orders requiring fulfillment within dispatch window.
  - Store conversion rate and visitor metrics.
  - Operational health score (DarazMall Gold tier rating).
- **Interactive Order Management**:
  - Filter orders by status: *Pending*, *Ready to Ship*, *Shipped*, *Delivered*.
  - 1-click status advancement: *"Pack & Ready"*, *"Hand to Courier"*.
  - Print shipping label and invoice download.
- **Inventory & Restock Controls**:
  - SKU table with stock count, price, and sales volume.
  - 1-click **"+ Restock 25 Units"** button with immediate low-stock badge resolution.
- **Add Product Modal**:
  - Interactive form to create and publish new product listings to the demo store in real time.
- **Flash Campaigns**:
  - Campaign nomination cards (*11.11 Mega Sale*, *Weekend Tech Gala*).

---

### 3. Super Admin Operations Hub (`/admin`)
- **Executive Platform Metrics**:
  - Gross Merchandise Value (GMV): **$148,000+** with MoM growth.
  - Platform Commission Take Rate Revenue (12.5% marketplace cut).
  - Total active merchant stores across all regions.
  - Completed platform transactions count.
- **Real-Time Settlement Stream**:
  - Live marketplace transactions showing buyer, merchant, gross total, and platform fee.
- **Merchant Verification & KYC Queue**:
  - Review submitted brand licenses, FDA approvals, and business registrations.
  - 1-click **"Approve Merchant"** or **"Decline"** action.
- **Category GMV Distribution**:
  - Visual breakdown bars: Consumer Electronics (42%), Fashion (28%), Home & Living (18%), Beauty & Sports (12%).
- **Infrastructure Health Status**:
  - Payment gateway uptime, logistics tracking API latency, database replica sync.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.4.3 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Icons**: Lucide React
- **Styling**: Vanilla CSS Design System with CSS variables and responsive glassmorphism

---

## 💻 Running Locally

```bash
cd frontend
npm install
npm run dev
```

Server starts at: `http://localhost:3000`
