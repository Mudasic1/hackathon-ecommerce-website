"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    img: "/assets/product1.png",
    name: "Syltherine",
    price: "3,500.00",
  },
  {
    id: 2,
    img: "/assets/product2.png",
    name: "Leviosa",
    price: "1,800.00",
  },
  {
    id: 3,
    img: "/assets/product3.jpg",
    name: "Lolito",
    price: "7,000.00",
  },
  {
    id: 4,
    img: "/assets/product4.png",
    name: "Respira",
    price: "9,000.00",
  },
];

const AsgaardSofa = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>{" "}
          / Asgaard Sofa
        </nav>

        {/* Product Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/product4.png"
              alt="Asgaard Sofa"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-800">Asgaard Sofa</h1>
            <p className="text-2xl font-bold text-green-600 mt-2">
              Rp 250,000.00
            </p>

            {/* Rating */}
            <div className="flex items-center mt-4">
              <div className="flex gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">★</span>
              </div>
              <p className="ml-2 text-sm text-gray-600">(5 Customer Reviews)</p>
            </div>

            {/* Size */}
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-700">Size</h3>
              <div className="flex gap-2 mt-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  L
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  XL
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                  XS
                </button>
              </div>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={handleDecrement}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 text-gray-800">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700">
                Add to Cart
              </button>
            </div>

            {/* Product Description */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-700">Description</h3>
              <p className="mt-2 text-gray-600">
                Setting the bar as one of the loudest speakers in its class, the
                Asgaard Sofa is a compact, stout piece with well-balanced design
                and unmatched comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-500">Rp {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsgaardSofa;
