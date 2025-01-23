"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../components/Products';

type ProductType = typeof Product[0];

interface CartContextType {
  cart: (ProductType & { quantity: number })[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (productId: number) => void;
  cartCount: number;
  wishlist: ProductType[];
  addToWishlist: (item: ProductType) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<(ProductType & { quantity: number })[]>([]);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  const addToCart = (item: ProductType) => {
    setCart(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const addToWishlist = (item: ProductType) => {
    setWishlist(prev => [...prev, item]);
  };

  const removeFromWishlist = (productId: number) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      cartCount: cart.length,
      wishlist,
      addToWishlist,
      removeFromWishlist,
      isInWishlist,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
