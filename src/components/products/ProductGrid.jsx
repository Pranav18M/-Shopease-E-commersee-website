// src/components/products/ProductGrid.jsx

import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4 opacity-40">🔍</div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          No products found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductGrid;