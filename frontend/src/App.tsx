import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
