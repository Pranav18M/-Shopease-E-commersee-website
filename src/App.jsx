import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/common/Toast';
import BackToTop from './components/common/BackToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>

            <Footer />
            <Toast />
            <BackToTop />
          </div>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
