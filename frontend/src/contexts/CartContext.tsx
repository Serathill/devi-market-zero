import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/product';
import { EXCHANGE_RATES } from '../constants';

// Tipul pentru un element din coș
export type CartItem = {
  product: Product;
  quantity: number;
};

// Tipul pentru contextul coșului
type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  totalsByRate: Record<string, number>;
};

// Creăm contextul
const CartContext = createContext<CartContextType | undefined>(undefined);

// Numele cheii pentru localStorage
const CART_STORAGE_KEY = 'devi_market_cart';

// Provider-ul pentru context
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Calculăm numărul total de articole
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculăm prețul total în RON, convertind prețurile în EUR
  const totalPrice = items.reduce((sum, item) => {
    // Convertim prețul în RON în funcție de valută
    const priceInRon = item.product.currency === 'EUR' 
      ? item.product.price * EXCHANGE_RATES.EUR_TO_RON 
      : item.product.price;
    
    return sum + (priceInRon * item.quantity);
  }, 0);

  // Totalizăm separat pentru fiecare valută (pentru afișare)
  const totalsByRate = items.reduce((acc, item) => {
    const currency = item.product.currency;
    if (!acc[currency]) {
      acc[currency] = 0;
    }
    acc[currency] += item.product.price * item.quantity;
    return acc;
  }, {} as Record<string, number>);
  
  // Încarcă coșul din localStorage la inițializare
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      } catch (e) {
        console.error('Eroare la încărcarea coșului din localStorage:', e);
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
  }, []);
  
  // Salvează coșul în localStorage de fiecare dată când se schimbă
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  
  // Adaugă un produs în coș
  const addToCart = (product: Product, quantity: number = 1) => {
    setItems(prevItems => {
      // Verificăm dacă produsul este deja în coș
      const existingItemIndex = prevItems.findIndex(
        item => String(item.product.id) === String(product.id)
      );
      
      if (existingItemIndex >= 0) {
        // Dacă produsul este deja în coș, actualizăm cantitatea
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Dacă produsul nu este în coș, îl adăugăm
        return [...prevItems, { product, quantity }];
      }
    });
  };
  
  // Elimină un produs din coș
  const removeFromCart = (productId: string | number) => {
    setItems(prevItems => 
      prevItems.filter(item => String(item.product.id) !== String(productId))
    );
  };
  
  // Actualizează cantitatea unui produs
  const updateQuantity = (productId: string | number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        String(item.product.id) === String(productId) 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Golește coșul
  const clearCart = () => {
    setItems([]);
  };
  
  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    totalsByRate
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook pentru a folosi contextul coșului
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 