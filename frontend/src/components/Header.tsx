import React from "react";
import { Link, useLocation } from "react-router-dom";
import MetaMaskConnect from "./MetaMaskConnect";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Produse", to: "/products" },
  { label: "Despre noi", to: "/about" },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 shadow-lg py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow">DeviMarket Zero</span>
      <nav className="flex gap-6 ml-auto">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`px-4 py-2 rounded-xl font-semibold transition-all text-white hover:bg-white/20 hover:scale-105 ${location.pathname === item.to ? 'bg-white/30 shadow-lg' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center ml-8">
        <MetaMaskConnect />
      </div>
    </header>
  );
};

export default Header; 