[1mdiff --git a/frontend/src/components/PaginationControls.tsx b/frontend/src/components/PaginationControls.tsx[m
[1mindex e69de29..cc8f1ca 100644[m
[1m--- a/frontend/src/components/PaginationControls.tsx[m
[1m+++ b/frontend/src/components/PaginationControls.tsx[m
[36m@@ -0,0 +1,47 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m
[32m+[m[32minterface PaginationControlsProps {[m
[32m+[m[32m  currentPage: number;[m
[32m+[m[32m  totalPages: number;[m
[32m+[m[32m  onPageChange: (page: number) => void;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst PaginationControls: React.FC<PaginationControlsProps> = ({[m
[32m+[m[32m  currentPage,[m
[32m+[m[32m  totalPages,[m
[32m+[m[32m  onPageChange,[m
[32m+[m[32m}) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="flex justify-center gap-2 mt-6">[m
[32m+[m[32m      <button[m
[32m+[m[32m        onClick={() => onPageChange(currentPage - 1)}[m
[32m+[m[32m        disabled={currentPage === 1}[m
[32m+[m[32m        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"[m
[32m+[m[32m      >[m
[32m+[m[32m        Previous[m
[32m+[m[32m      </button>[m
[32m+[m
[32m+[m[32m      {Array.from({ length: totalPages }, (_, i) => ([m
[32m+[m[32m        <button[m
[32m+[m[32m          key={i}[m
[32m+[m[32m          onClick={() => onPageChange(i + 1)}[m
[32m+[m[32m          className={`px-3 py-1 rounded ${[m
[32m+[m[32m            currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'[m
[32m+[m[32m          }`}[m
[32m+[m[32m        >[m
[32m+[m[32m          {i + 1}[m
[32m+[m[32m        </button>[m
[32m+[m[32m      ))}[m
[32m+[m
[32m+[m[32m      <button[m
[32m+[m[32m        onClick={() => onPageChange(currentPage + 1)}[m
[32m+[m[32m        disabled={currentPage === totalPages}[m
[32m+[m[32m        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"[m
[32m+[m[32m      >[m
[32m+[m[32m        Next[m
[32m+[m[32m      </button>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default PaginationControls;[m
[1mdiff --git a/frontend/src/components/ProductCard.tsx b/frontend/src/components/ProductCard.tsx[m
[1mindex e69de29..8b59335 100644[m
[1m--- a/frontend/src/components/ProductCard.tsx[m
[1m+++ b/frontend/src/components/ProductCard.tsx[m
[36m@@ -0,0 +1,27 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m
[32m+[m[32minterface ProductCardProps {[m
[32m+[m[32m  id: string;[m
[32m+[m[32m  name: string;[m
[32m+[m[32m  price: number;[m
[32m+[m[32m  currency: string;[m
[32m+[m[32m  image?: string;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mconst ProductCard: React.FC<ProductCardProps> = ({ name, price, currency, image }) => {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="bg-white shadow p-4 rounded text-center">[m
[32m+[m[32m      <img[m
[32m+[m[32m        src={image || 'https://via.placeholder.com/300x200?text=No+Image'}[m
[32m+[m[32m        alt={name}[m
[32m+[m[32m        className="w-full h-40 object-cover mb-4"[m
[32m+[m[32m      />[m
[32m+[m[32m      <h2 className="font-semibold text-lg">{name}</h2>[m
[32m+[m[32m      <p className="text-blue-600 font-bold">[m
[32m+[m[32m        {price} {currency}[m
[32m+[m[32m      </p>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  );[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default ProductCard;[m
[1mdiff --git a/frontend/src/pages/ProductListPage.tsx b/frontend/src/pages/ProductListPage.tsx[m
[1mindex 2ae818d..74f1a24 100644[m
[1m--- a/frontend/src/pages/ProductListPage.tsx[m
[1m+++ b/frontend/src/pages/ProductListPage.tsx[m
[36m@@ -24,13 +24,34 @@[m [mconst ProductListPage: React.FC = () => {[m
     setLoading(true);[m
     setError('');[m
     try {[m
[31m-      const response = await axios.get('/api/marketplace/products', {[m
[31m-        params: { page, limit },[m
[31m-      });[m
[32m+[m[32m      await new Promise((res) => setTimeout(res, 500)); // simulează delay[m
 [m
[31m-      setProducts(response.data.items); // adaptează dacă API-ul returnează alt format[m
[31m-      setTotalPages(response.data.totalPages || 1);[m
[31m-      setTotalCount(response.data.totalCount || 0);[m
[32m+[m[32mconst fakeData = {[m
[32m+[m[32m  items: [[m
[32m+[m[32m    { id: '1', name: 'Laptop Dell XPS 13', price: 4500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Dell+XPS+13' },[m
[32m+[m[32m    { id: '2', name: 'Telefon iPhone 14', price: 5200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=iPhone+14' },[m
[32m+[m[32m    { id: '3', name: 'Căști Bose QC35', price: 1200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Bose+QC35' },[m
[32m+[m[32m    { id: '4', name: 'Smartwatch Samsung Galaxy', price: 900, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Samsung+Watch' },[m
[32m+[m[32m    { id: '5', name: 'Monitor LG UltraFine', price: 1700, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=LG+UltraFine' },[m
[32m+[m[32m    { id: '6', name: 'Tablet iPad Pro', price: 3500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=iPad+Pro' },[m
[32m+[m[32m    { id: '7', name: 'Laptop ASUS ZenBook', price: 4000, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=ASUS+ZenBook' },[m
[32m+[m[32m    { id: '8', name: 'Telefon Google Pixel 6', price: 3000, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Pixel+6' },[m
[32m+[m[32m    { id: '9', name: 'Cameră GoPro Hero 9', price: 1400, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=GoPro+Hero+9' },[m
[32m+[m[32m    { id: '10', name: 'Boxe JBL Charge 5', price: 600, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=JBL+Charge+5' },[m
[32m+[m[32m  ],[m
[32m+[m[32m  totalPages: 2,[m
[32m+[m[32m  totalCount: 20,[m
[32m+[m[32m};[m
[32m+[m
[32m+[m
[32m+[m[32msetProducts(fakeData.items);[m
[32m+[m[32msetTotalPages(fakeData.totalPages);[m
[32m+[m[32msetTotalCount(fakeData.totalCount);[m
[32m+[m
[32m+[m
[32m+[m[32m    //  setProducts(response.data.items); // adaptează dacă API-ul returnează alt format[m
[32m+[m[32m    //  setTotalPages(response.data.totalPages || 1);[m
[32m+[m[32m    //  setTotalCount(response.data.totalCount || 0);[m
     } catch (err: any) {[m
       setError('A apărut o eroare la încărcarea produselor.');[m
     } finally {[m
