import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-6 px-4 shadow-inner w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="font-semibold">Program:</div>
          <div>Luni - Vineri: 09:00 - 18:00</div>
          <div>Sâmbătă: 10:00 - 14:00</div>
          <div>Duminică: Închis</div>
        </div>
        <div className="text-center">
          <span className="block font-bold text-lg">&copy; {new Date().getFullYear()} DeviMarket Zero</span>
          <span className="block text-xs opacity-80">Toate drepturile rezervate. Trademark &trade;.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 