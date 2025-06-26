import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import PaginationControls from '../components/PaginationControls';

interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image?: string;
}

const allProducts: Product[] = [
  { id: '1', name: 'Laptop Dell XPS 13', price: 4500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Dell+XPS+13' },
  { id: '2', name: 'Telefon iPhone 14', price: 5200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=iPhone+14' },
  { id: '3', name: 'Căști Bose QC35', price: 1200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Bose+QC35' },
  { id: '4', name: 'Smartwatch Samsung Galaxy', price: 900, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Samsung+Watch' },
  { id: '5', name: 'Monitor LG UltraFine', price: 1700, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=LG+UltraFine' },
  { id: '6', name: 'Tabletă iPad Pro', price: 3500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=iPad+Pro' },
  { id: '7', name: 'Laptop ASUS ZenBook', price: 4000, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=ASUS+ZenBook' },
  { id: '8', name: 'Telefon Google Pixel 6', price: 3000, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Pixel+6' },
  { id: '9', name: 'Cameră GoPro Hero 9', price: 1400, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=GoPro+Hero+9' },
  { id: '10', name: 'Boxe JBL Charge 5', price: 600, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=JBL+Charge+5' },
  { id: '11', name: 'Mouse Logitech MX Master 3', price: 450, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Logitech+MX+Master+3' },
  { id: '12', name: 'Tastatură Mechanical Corsair', price: 700, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Corsair+Keyboard' },
  { id: '13', name: 'SSD Samsung 1TB', price: 800, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Samsung+SSD' },
  { id: '14', name: 'Căști Sony WH-1000XM4', price: 1300, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Sony+WH1000XM4' },
  { id: '15', name: 'Monitor BenQ 27"', price: 1500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=BenQ+27inch' },
  { id: '16', name: 'Laptop HP Spectre x360', price: 4800, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=HP+Spectre+x360' },
  { id: '17', name: 'Telefon OnePlus 9', price: 3200, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=OnePlus+9' },
  { id: '18', name: 'Tabletă Samsung Galaxy Tab S7', price: 2900, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Galaxy+Tab+S7' },
  { id: '19', name: 'Router Netgear Nighthawk', price: 850, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Netgear+Nighthawk' },
  { id: '20', name: 'Boxă inteligentă Amazon Echo', price: 400, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Amazon+Echo' },
  { id: '21', name: 'Imprimantă HP LaserJet', price: 900, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=HP+LaserJet' },
  { id: '22', name: 'Webcam Logitech C920', price: 350, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Logitech+C920' },
  { id: '23', name: 'Hard Disk WD 2TB', price: 500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=WD+2TB' },
  { id: '24', name: 'Placă video NVIDIA RTX 3060', price: 2500, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=RTX+3060' },
  { id: '25', name: 'Placă de bază ASUS', price: 800, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=ASUS+Motherboard' },
  { id: '26', name: 'Sursă Corsair 650W', price: 400, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Corsair+650W' },
  { id: '27', name: 'Cooler Noctua NH-D15', price: 450, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Noctua+NH-D15' },
  { id: '28', name: 'Carcasă NZXT H510', price: 600, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=NZXT+H510' },
  { id: '29', name: 'Monitor Philips 24"', price: 800, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=Philips+24inch' },
  { id: '30', name: 'Mousepad SteelSeries', price: 120, currency: 'RON', image: 'https://via.placeholder.com/300x200?text=SteelSeries+Mousepad' },
];

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async (page: number = 1, limit: number = 12) => {
    setLoading(true);
    setError('');
    try {
      await new Promise((res) => setTimeout(res, 500)); // simulare delay

      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedItems = allProducts.slice(start, end);

      setProducts(paginatedItems);
      setTotalPages(Math.ceil(allProducts.length / limit));
      setTotalCount(allProducts.length);
    } catch (err: any) {
      setError('A apărut o eroare la încărcarea produselor.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = 'DeviMarket Zero';
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <div className="container max-w-7xl mx-auto px-6 py-12 bg-white rounded-lg shadow-lg">
      {/* Mesaj de bun venit stilizat */}
      <section className="mb-16 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-12 rounded-lg text-white shadow-lg">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Bine ai venit la DeviMarket Zero
        </h1>
        <p className="max-w-4xl mx-auto text-xl leading-relaxed font-light drop-shadow-md">
          Explorează cele mai bune produse din marketplace-ul nostru, cu oferte speciale și selecții atent alese doar pentru tine.
        </p>
      </section>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center my-12">
          <svg
            className="animate-spin h-12 w-12 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Loading spinner"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      )}

      {/* Mesaj de eroare */}
      {error && (
        <p className="text-center text-red-600 font-semibold text-lg mb-8">
          {error}
        </p>
      )}

      {/* Lista produse */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Paginare */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductListPage;
