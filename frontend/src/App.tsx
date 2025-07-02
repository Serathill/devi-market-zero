import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScanProductPage from "./pages/ScanProductPage";
import MetaMaskConnect from "./components/MetaMaskConnect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const AboutPage = () => (
  <section className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 py-16 px-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 mb-8 drop-shadow-lg text-center">
      Despre noi
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl">
      Suntem DeviMarket Zero, marketplace-ul tău de încredere pentru produse de calitate, inovație și experiență modernă de cumpărături.
    </p>
  </section>
);

// În JSX-ul header-ului sau navbar-ului
<MetaMaskConnect />

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Header />
      <main className="flex-1">
      <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/scan-product" element={<ScanProductPage />} />
          <Route path="/about" element={<AboutPage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
