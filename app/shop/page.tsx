/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Shop = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const products = [
    { id: "1", name: "Syltherine", price: "Rp 2,000,000", img: "/assets/product1.png" },
    // Add remaining products...
  ];

  const addToCart = (product: any) => setCart((prevCart) => [...prevCart, product]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-700">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.price}</p>
                <Link href="/cart">
                  <a>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-2 w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500"
                    >
                      Add to Cart
                    </button>
                  </a>
                </Link>
                <Link href={`/shop/${product.id}`}>
                  <a>
                    <button className="mt-2 w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300">
                      View Details
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {isClient && cart.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">Cart ({cart.length})</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
