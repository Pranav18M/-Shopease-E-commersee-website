// src/pages/HomePage.jsx

import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Newsletter from '../components/home/Newsletter';
import ProductGrid from '../components/products/ProductGrid';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Button from '../components/common/Button';
import { useProducts } from '../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { products, loading, error } = useProducts(6); // Featured: 6 products
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Featured Products Section */}
      <section className="py-16" id="featured">
        <div className="container">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12 flex-wrap gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">
                Featured Picks
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Handpicked products just for you
              </p>
            </div>
            <Button
              onClick={() => navigate('/products')}
              variant="ghost"
              size="large"
              className="uppercase tracking-wider"
              icon="→"
            >
              View All
            </Button>
          </div>

          {/* Products Grid */}
          {loading ? (
            <LoadingSpinner size="large" text="Loading featured products..." />
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600 dark:text-red-400 text-lg">
                Failed to load products. Please try again.
              </p>
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default HomePage;