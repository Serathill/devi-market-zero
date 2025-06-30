import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScanProductPage from "./pages/ScanProductPage";
import MetaMaskConnect from "./components/MetaMaskConnect";

// În JSX-ul header-ului sau navbar-ului
<MetaMaskConnect />


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/scan-product" element={<ScanProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
