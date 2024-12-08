// app/shop/page.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";

const Shop = () => {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    {
      id: "1",
      name: "Syltherine",
      price: "Rp 2,000,000",
      img: "/assets/product1.png",
    },
    {
      id: "2",
      name: "Leviosa",
      price: "Rp 2,000,000",
      img: "/assets/product2.png",
      sale: true,
    },
    {
      id: "3",
      name: "Lolito",
      price: "Rp 2,000,000",
      img: "/assets/product3.jpg",
      sale: true,
    },
    {
      id: "4",
      name: "Respira",
      price: "Rp 500,000",
      img: "/assets/product4.png",
      new: true,
    },
    {
      id: "5",
      name: "Syltherine",
      price: "Rp 2,000,000",
      img: "/assets/product5.png",
    },
    {
      id: "6",
      name: "Leviosa",
      price: "Rp 2,000,000",
      img: "/assets/product6.png",
      sale: true,
    },
  ];

  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              {product.sale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </span>
              )}
              {product.new && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-700">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500">{product.price}</p>

                <Link href={"/cart"}>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500"
                  >
                    Add to Cart
                  </button>
                </Link>
                <Link href={`/shop/${product.id}`}>
                  <button className="mt-2 w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold">Cart ({cart.length})</h3>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2"
              >
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
