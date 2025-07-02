import React, { memo, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MetaMaskConnect from "./MetaMaskConnect";
import { HEADER_NAV_ITEMS } from "../constants";
import { measureRenderTime } from "../utils/performance";

/**
 * The main header component for the application.
 *
 * It displays the application logo, navigation links, and the MetaMask connect button.
 * The active navigation link is highlighted based on the current URL.
 * Optimized with React.memo to prevent unnecessary re-renders.
 *
 * @returns {React.ReactElement} The header component.
 */
const Header: React.FC = () => {
  const location = useLocation();

  // In development, measure render time
  useEffect(() => {
    measureRenderTime("Header");
  }, []);

  // Create optimized isActive check
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  return (
    <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <Link 
        to="/" 
        className="text-2xl font-extrabold text-white tracking-tight drop-shadow"
        aria-label="DeviMarket Zero Home"
      >
        DeviMarket Zero
      </Link>
      
      <nav aria-label="Main Navigation">
        <ul className="flex gap-6 ml-auto">
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
      
      <div className="flex items-center ml-8">
        <MetaMaskConnect />
      </div>
    </header>
  );
};

/**
 * Custom comparison function for Header
 * Only re-render when the path changes, ignoring other props
 */
const areEqual = () => true; // We use useLocation inside, so memo only helps with parent re-renders

export default memo(Header, areEqual); 