"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import userIcon from "@/public/assets/user.png";
import searchIcon from "@/public/assets/search.png";
import wishlistIcon from "@/public/assets/wishlist.png";
import cartIcon from "@/public/assets/cart.png";

const Navitems = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Shop", link: "/shop" },
  { id: 3, title: "About", link: "/about" },
  { id: 4, title: "Contact", link: "/contact" },
];

const Navicons = [
  { id: 1, icon: userIcon, alt: "User Profile", link: "/" },
  { id: 2, icon: searchIcon, alt: "Search", link: "#search" },
  { id: 3, icon: wishlistIcon, alt: "Wishlist", link: "/" },
];

const cartItems = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: "250,000",
    quantity: 1,
    image: "/assets/product1.png",
  },
  {
    id: 2,
    name: "Casaliving Wood",
    price: "270,000",
    quantity: 1,
    image: "/assets/product2.png",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setSearchDropdownOpen] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => total + parseInt(item.price.replace(",", "")) * item.quantity,
    0
  );

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-[70px] px-4 lg:px-8">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={150} height={150} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 items-center">
          {Navitems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="text-gray-700 hover:text-black font-medium transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Icons with Cart and Search Dropdowns */}
        <div className="hidden lg:flex gap-7 items-center relative">
          {Navicons.map((icon) => (
            <div key={icon.id} className="relative">
              {icon.alt === "Search" ? (
                <button
                  onClick={() => setSearchDropdownOpen(!isSearchDropdownOpen)}
                  className="focus:outline-none"
                >
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition"
                  />
                </button>
              ) : (
                <Link href={icon.link}>
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition"
                  />
                </Link>
              )}
              {icon.alt === "Search" && isSearchDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Cart Icon */}
          <div className="relative">
            <button
              onClick={() => setCartDropdownOpen(!isCartDropdownOpen)}
              className="focus:outline-none"
            >
              <Image
                src={cartIcon}
                alt="Cart"
                width={24}
                height={24}
                className="hover:opacity-80 transition"
              />
            </button>
            {isCartDropdownOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700">Shopping Cart</h3>
                  <hr className="my-2" />
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between space-x-4 py-2"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {item.quantity} x Rp. {item.price}
                        </p>
                      </div>
                      <button
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => console.log(`Remove ${item.id}`)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  <hr className="my-2" />
                  <div className="flex justify-between items-center text-gray-800">
                    <span className="font-medium">Subtotal:</span>
                    <span className="font-bold text-green-600">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3 mt-4">
                    <Link href={"/cart"}>
                      <button className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                        Cart
                      </button>
                    </Link>

                    <Link href={"/checkout"}>
                      <button className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center text-gray-700"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white relative">
          <div className="flex flex-col items-center space-y-4 py-4">
            {Navitems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="text-gray-700 hover:text-blue-500 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex gap-5">
              {Navicons.map((icon) => (
                <div key={icon.id} className="relative">
                  {icon.alt === "Search" ? (
                    <button
                      onClick={() => setSearchDropdownOpen(!isSearchDropdownOpen)}
                      className="focus:outline-none"
                    >
                      <Image
                        src={icon.icon}
                        alt={icon.alt}
                        width={24}
                        height={24}
                        className="hover:opacity-80 transition"
                      />
                    </button>
                  ) : (
                    <Link
                      href={icon.link}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Image
                        src={icon.icon}
                        alt={icon.alt}
                        width={24}
                        height={24}
                        className="hover:opacity-80 transition"
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;