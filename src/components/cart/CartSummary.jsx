// src/components/cart/CartSummary.jsx

import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';
import Button from '../common/Button';

const CartSummary = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { subtotal, shipping, total } = getCartTotal();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    if (window.confirm(`Proceed to checkout for ${formatPrice(total)}?`)) {
      clearCart();
      alert('Order placed successfully! 🎉');
    }
  };

  return (
    <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Order Summary
      </h3>

      <div className="space-y-4 mb-6">
        {/* Subtotal */}
        <div className="flex justify-between items-center text-base">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {formatPrice(subtotal)}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center text-base">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {shipping === 0 ? (
              <span className="text-green-600 dark:text-green-500">FREE</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">Total</span>
            <span className="text-2xl font-black text-black dark:text-white">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        variant="primary"
        size="large"
        fullWidth
        icon="→"
      >
        Proceed to Checkout
      </Button>

      {/* Free Shipping Notice */}
      {shipping > 0 && (
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-4">
          Add {formatPrice((1500 / 85) - subtotal)} more for free shipping
        </p>
      )}
    </div>
  );
};

export default CartSummary;