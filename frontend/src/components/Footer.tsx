import React from "react";

/**
 * The main footer component for the application.
 *
 * It displays company information such as working hours and copyright details.
 *
 * @returns {React.ReactElement} The footer component.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 w-full mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-pink-400">DeviMarket Zero</h3>
          <p className="text-gray-400 text-sm">
            O platformă demonstrativă pentru un magazin online modern,
            construită cu tehnologii de ultimă generație.
          </p>
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-pink-400">Contact</h3>
          <div className="text-gray-300 text-sm">
            <div>Telefon: <a href="tel:+40721000000" className="hover:text-pink-400">+40 721 000 000</a></div>
            <div>Email: <a href="mailto:contact@devimarket.ro" className="hover:text-pink-400">contact@devimarket.ro</a></div>
          </div>
        </div>

        {/* Program */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-pink-400">Program</h3>
          <div className="text-gray-300 text-sm">
            <div>Luni - Vineri: 09:00 - 18:00</div>
            <div>Sâmbătă: 10:00 - 14:00</div>
            <div>Duminică: Închis</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="md:text-right">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} DeviMarket Zero</p>
          <p className="text-xs text-gray-500">Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 