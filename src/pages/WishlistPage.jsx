import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import PageHeader from '../components/layout/PageHeader';
import Button from '../components/common/Button';
import { formatPrice } from '../utils/formatters';

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleMoveToCart = (item) => {
    addToCart(item);
    toggleWishlist(item);
  };

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Your Wishlist"
        subtitle="Items you've saved for later"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Wishlist' },
        ]}
      />

      {/* Wishlist Content */}
      <section className="py-12">
        <div className="container">
          {wishlist.length === 0 ? (
            // Empty State
            <div className="text-center py-20">
              <div className="text-8xl mb-6 opacity-40">💔</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                Your wishlist is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Start adding products you love to your wishlist
              </p>
              <Button
                onClick={() => navigate('/products')}
                variant="primary"
                size="large"
                icon="→"
              >
                Browse Products
              </Button>
            </div>
          ) : (
            // Wishlist Grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* Product Image */}
                  <div className="relative bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-contain p-8"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h3 className="text-[17px] font-semibold text-gray-900 dark:text-white line-clamp-2 min-h-[3em]">
                      {item.title}
                    </h3>

                    {/* Price */}
                    <div className="text-2xl font-bold text-black dark:text-white">
                      {formatPrice(item.price)}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-yellow-500">⭐</span>
                      <span className="font-medium">{item.rating?.rate || 4.2}</span>
                      <span>•</span>
                      <span>{item.rating?.count || 100} reviews</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        onClick={() => handleMoveToCart(item)}
                        variant="ghost"
                        className="flex-1"
                      >
                        Move to Cart
                      </Button>
                      <Button
                        onClick={() => toggleWishlist(item)}
                        variant="primary"
                        className="flex-1"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default WishlistPage;