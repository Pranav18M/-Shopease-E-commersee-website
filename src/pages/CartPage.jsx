// src/pages/CartPage.jsx

import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import PageHeader from '../components/layout/PageHeader';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';

const CartPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      {/* Page Header */}
      <PageHeader
        title="Shopping Cart"
        subtitle="Review your selected items"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Cart' },
        ]}
      />

      {/* Cart Content */}
      <section className="py-12">
        <div className="container">
          {cart.length === 0 ? (
            // Empty Cart State
            <div className="text-center py-20">
              <div className="text-8xl mb-6 opacity-40">🛒</div>
              <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                Your cart is empty
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Add some products to get started
              </p>
              <Button
                onClick={() => navigate('/products')}
                variant="primary"
                size="large"
                icon="→"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            // Cart with Items
            <div className="grid lg:grid-cols-[1fr_400px] gap-8">
              {/* Cart Items */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Cart Summary */}
              <CartSummary />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;