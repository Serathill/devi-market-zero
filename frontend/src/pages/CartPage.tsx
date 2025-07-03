import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { EXCHANGE_RATES } from '../constants';

/**
 * Pagina coșului de cumpărături
 * 
 * Afișează produsele adăugate în coș, permite modificarea cantităților,
 * eliminarea produselor și afișează totalul de plată.
 */
const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice, totalsByRate } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Coșul meu de cumpărături</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
          <svg
            className="w-20 h-20 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <h2 className="text-xl font-semibold mb-4">Coșul tău este gol</h2>
          <p className="text-gray-600 mb-6">
            Nu ai niciun produs în coșul tău de cumpărături.
            <br />
            Explorează produsele noastre și adaugă produsele care te interesează.
          </p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Vezi produse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8">Coșul meu de cumpărături</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preț
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cantitate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acțiuni
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={String(item.product.id)} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-16 w-16">
                        <img
                          src={item.product.image_url || 'https://via.placeholder.com/150'}
                          alt={item.product.name}
                          className="h-16 w-16 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/150?text=No+Image';
                          }}
                        />
                      </div>
                      <div className="ml-4">
                        <Link to={`/products/${item.product.id}`} className="text-lg font-semibold text-indigo-700 hover:text-indigo-900">
                          {item.product.name}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-semibold">
                      {item.product.price.toFixed(2)} {item.product.currency}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="bg-gray-200 px-3 py-1 rounded-l-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="bg-white px-3 py-1 border-t border-b min-w-[40px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="bg-gray-200 px-3 py-1 rounded-r-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-bold">
                      {(item.product.price * item.quantity).toFixed(2)} {item.product.currency}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-900 font-medium"
                    >
                      Elimină
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-900 font-medium flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Golește coșul
            </button>
            <Link
              to="/products"
              className="text-indigo-600 hover:text-indigo-900 font-medium flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Continuă cumpărăturile
            </Link>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            {/* Subtotal pe fiecare valută */}
            {Object.entries(totalsByRate).map(([currency, total]) => (
              <div key={currency} className="flex justify-between text-base font-medium text-gray-700 mb-1">
                <p>Subtotal {currency}</p>
                <p>{total.toFixed(2)} {currency}</p>
              </div>
            ))}
            
            {/* Conversii valutare */}
            {totalsByRate.EUR && (
              <div className="flex justify-between text-sm text-gray-500 mb-4 border-b border-gray-100 pb-2">
                <p>Conversie: {totalsByRate.EUR.toFixed(2)} EUR × {EXCHANGE_RATES.EUR_TO_RON}</p>
                <p>= {(totalsByRate.EUR * EXCHANGE_RATES.EUR_TO_RON).toFixed(2)} RON</p>
              </div>
            )}
            
            {/* Subtotal în RON */}
            <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
              <p>Subtotal ({totalItems} produse)</p>
              <p>{totalPrice.toFixed(2)} RON</p>
            </div>
            
            {/* Total final */}
            <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
              <p>Total</p>
              <p>{totalPrice.toFixed(2)} RON</p>
            </div>
            
            <div className="mt-6">
              <button 
                className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Finalizează comanda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 