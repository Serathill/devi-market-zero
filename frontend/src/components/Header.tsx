import React, { memo, useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MetaMaskConnect from "./MetaMaskConnect";
import { HEADER_NAV_ITEMS } from "../constants";
import { useCart } from "../contexts/CartContext";

/**
 * Header component displaying navigation and branding.
 * Includes a search function that connects to the product search API.
 */
const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { totalItems } = useCart();

  // In development, measure render time
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Header rendered at path: ${location.pathname}`);
    }
  }, [location.pathname]);

  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg py-4 px-6 sticky top-0 z-50">
      <div className="container max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-white tracking-tight drop-shadow"
          aria-label="DeviMarket Zero Home"
        >
          DeviMarket Zero
        </Link>
        
        {/* Search Bar - Desktop */}
        <form 
          onSubmit={handleSearchSubmit}
          className="hidden md:flex relative mx-4 flex-1 max-w-md"
        >
          <input
            type="search"
            placeholder="Caută produse..."
            className="bg-white rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit"
            className="absolute left-0 top-0 mt-2 ml-3 text-indigo-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex gap-6">
            {HEADER_NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all text-white hover:bg-white/20 hover:scale-105 ${isActive(item.to) ? 'bg-white/30 shadow-lg' : ''}`}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        <div className="flex items-center ml-8 space-x-4">
          <MetaMaskConnect />
          
          <Link 
            to="/cart" 
            className="relative flex items-center justify-center p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Coș de cumpărături"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pt-2 pb-4">
          <form 
            onSubmit={handleSearchSubmit}
            className="mb-4 relative"
          >
            <input
              type="search"
              placeholder="Caută produse..."
              className="bg-white rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute left-0 top-0 mt-2 ml-3 text-indigo-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {HEADER_NAV_ITEMS.map((item) => (
              <Link 
                key={item.to}
                to={item.to}
                className={`px-4 py-2 rounded-xl font-semibold transition-all text-white hover:bg-white/20 ${isActive(item.to) ? 'bg-white/30 shadow-lg' : 'bg-indigo-700 bg-opacity-50'}`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.to) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Header); 