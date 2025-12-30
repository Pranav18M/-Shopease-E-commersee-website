// src/pages/ProductsPage.jsx

import { useState, useEffect, useMemo } from 'react';
import PageHeader from '../components/layout/PageHeader';
import ProductFilters from '../components/products/ProductFilters';
import ProductGrid from '../components/products/ProductGrid';
import InfiniteScroll from '../components/common/InfiniteScroll';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useProducts } from '../hooks/useProducts';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const ProductsPage = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'az':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'za':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy]);

  // Infinite scroll
  const { displayedItems, hasMore, loadMore } = useInfiniteScroll(filteredProducts);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortBy('');
  };

  if (loading) {
    return <LoadingSpinner fullScreen size="large" text="Loading amazing products..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 text-xl mb-4">
            Failed to load products
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="All Products"
        subtitle="Discover our complete collection of quality products"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products' },
        ]}
      />

      {/* Filters */}
      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onClearFilters={handleClearFilters}
      />

      {/* Products Section */}
      <section className="py-12">
        <div className="container">
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Showing <span className="font-bold text-gray-900 dark:text-white">
                {displayedItems.length}
              </span> of <span className="font-bold text-gray-900 dark:text-white">
                {filteredProducts.length}
              </span> products
            </p>
          </div>

          {/* Infinite Scroll Products */}
          <InfiniteScroll
            hasMore={hasMore}
            loadMore={loadMore}
            loading={false}
          >
            <ProductGrid products={displayedItems} />
          </InfiniteScroll>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;