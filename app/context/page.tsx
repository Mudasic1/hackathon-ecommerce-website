// context/CartContext.js
"use client";

import { createContext, useContext, useState } from "react";

interface Product {
  id: number;
  title: string;
  desc: string;
  Price: string;
  img: string;
  quantity?: number;
}

interface CartContextType {
  cartItems: Product[];
  wishlistItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

// Create the CartContext with initial value
const CartContext = createContext<CartContextType>({
  cartItems: [],
  wishlistItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
});

// Provide the CartContext to the entire app
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // Update quantity if the product is already in the cart
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      // Add a new product to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToWishlist = (product: Product) => {
    const exists = wishlistItems.find(item => item.id === product.id);
    if (!exists) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const isInWishlist = (id: number) => {
    return wishlistItems.some(item => item.id === id);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        wishlistItems,
        addToCart, 
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
