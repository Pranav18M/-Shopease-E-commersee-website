// src/components/products/ProductFilters.jsx

import { CATEGORIES, SORT_OPTIONS } from '../../utils/constants';
import Button from '../common/Button';

const ProductFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  onClearFilters,
}) => {
  return (
    <section className="bg-white dark:bg-gray-800 py-10 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 min-w-[300px]">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-gray-400">
              🔍
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>

          {/* Filters Group */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium cursor-pointer focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            >
              {CATEGORIES.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-medium cursor-pointer focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Clear Filters Button */}
            <Button
              onClick={onClearFilters}
              variant="ghost"
              size="medium"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;