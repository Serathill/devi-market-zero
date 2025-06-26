import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import ProductListPage from './pages/ProductListPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<ProductListPage />} />
    <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
