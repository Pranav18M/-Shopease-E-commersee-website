// src/components/cart/CartItem.jsx

import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/formatters';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="grid grid-cols-[100px_1fr_auto] md:grid-cols-[100px_1fr_auto] gap-6 p-6 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain rounded-lg bg-gray-100 dark:bg-gray-800 p-2"
      />

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-[17px] text-gray-900 dark:text-white mb-1 leading-snug">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-[15px]">
            {formatPrice(item.price)} each
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => updateQuantity(item.id, -1)}
            className="w-9 h-9 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold text-lg"
          >
            −
          </button>
          <span className="font-bold text-[17px] min-w-[2.5rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, 1)}
            className="w-9 h-9 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold text-lg"
          >
            +
          </button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="ml-2 text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 font-semibold text-[15px] hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Item Total */}
      <div className="flex flex-col items-end justify-between">
        <div className="text-2xl font-black text-black dark:text-white">
          {formatPrice(item.price * item.quantity)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;