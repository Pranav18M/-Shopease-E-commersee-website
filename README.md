# 🛍️ ShopEase React - E-Commerce Application

A modern, fully-featured e-commerce application built with React, Tailwind CSS, and premium design.

## ✨ Features

### ✅ Implemented Features
- 🏠 **Home Page** with hero, features, and featured products
- 🛒 **Product Listing** with filtering and search
- 💖 **Wishlist** functionality with localStorage persistence
- 🛍️ **Shopping Cart** with quantity management
- 🌙 **Dark Mode** toggle
- 📱 **Fully Responsive** design
- 🖼️ **Image Zoom & Gallery** - Hover to zoom, multiple images per product
- ♾️ **Infinite Scroll** - Auto-load more products
- 🎨 **High-Quality Images** from Unsplash
- 🔔 **Toast Notifications**
- ⬆️ **Back to Top** button
- 💾 **LocalStorage** persistence

### 🎯 Design
- Premium **Black & Gold** color scheme
- Smooth animations and transitions
- Modern UI/UX patterns
- Same design as original vanilla JS version

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```

## 📁 Project Structure

```
shopease-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, PageHeader
│   │   ├── home/            # Hero, Features, Newsletter
│   │   ├── products/        # ProductCard, ProductGrid, ProductModal, ProductFilters
│   │   ├── cart/            # CartItem, CartSummary
│   │   └── common/          # Button, Toast, Loading, BackToTop, InfiniteScroll
│   ├── pages/               # HomePage, ProductsPage, WishlistPage, CartPage
│   ├── context/             # Theme, Cart, Wishlist contexts
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Helper functions, constants, image mapper
│   ├── services/            # API service
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Color Palette

```css
Primary Gold: #C9A05C
Primary Dark: #A88544
Primary Light: #E0B870
Accent Gold: #D4AF37
Burgundy: #8B0000
Black: #000000
```

## 🔧 Configuration Files

### tailwind.config.js
Already configured with custom colors and animations.

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🌐 API

Uses **FakeStore API**: https://fakestoreapi.com
- All products
- Categories
- Product details

## 💾 LocalStorage Keys

- `shopease-cart` - Shopping cart data
- `shopease-wishlist` - Wishlist data
- `shopease-theme` - Dark/light theme preference

## 🎯 New Features Added

### 1. Image Zoom & Gallery
- Hover over product images to zoom (2x)
- Multiple images per product in modal
- Thumbnail gallery navigation
- Smooth zoom transitions

### 2. Infinite Scroll
- Initial load: 12 products
- Load 8 more per scroll
- Intersection Observer API
- Load More button fallback
- End of list indicator

### 3. Better Product Images
- High-quality Unsplash images
- Category-based image mapping
- Optimized image loading
- Lazy loading support

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Dark Mode

Toggle between light and dark themes. Preference saved to localStorage.

## 🚀 Performance Optimizations

- Lazy loading images
- Code splitting with React Router
- Memoized filter/sort functions
- Optimized re-renders with Context API
- Intersection Observer for infinite scroll

## 🐛 Troubleshooting

### Issue: Products not loading
- Check internet connection
- FakeStore API might be down
- Check browser console for errors

### Issue: Dark mode not working
- Clear localStorage
- Check if theme toggle button works
- Verify Tailwind dark mode config

### Issue: Images not showing
- Check network tab for failed requests
- Verify image URLs are valid
- Check if Unsplash images are loading

## 📄 License

MIT License - Free to use for personal and commercial projects

## 🙏 Credits

- **API**: FakeStore API
- **Images**: Unsplash
- **Icons**: Unicode Emojis
- **Design**: Original ShopEase design
- **Framework**: React + Vite
- **Styling**: Tailwind CSS

## 🎉 You're All Set!

Run `npm run dev` and start shopping! 🛍️

---

**Built with ❤️ by ShopEase Team**