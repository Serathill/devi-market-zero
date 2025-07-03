import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Web3Provider } from "./contexts/Web3Context";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import ErrorBoundary from './components/ErrorBoundary';

// Lazily load page components for code splitting
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductListPage = lazy(() => import("./pages/ProductListPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const ScanProductPage = lazy(() => import("./pages/ScanProductPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

/**
 * The main application component.
 *
 * It sets up the main layout with a header and footer,
 * and defines the application's routes using code splitting
 * for improved performance.
 *
 * @returns {React.ReactElement} The root application component.
 */
function App() {
  return (
    <ErrorBoundary>
      <Web3Provider>
        <ProductProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
              <Header />
              <main className="flex-1">
                <Suspense fallback={
                  <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductListPage />} />
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/scan" element={<ScanProductPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </ProductProvider>
      </Web3Provider>
    </ErrorBoundary>
  );
}

export default App;
