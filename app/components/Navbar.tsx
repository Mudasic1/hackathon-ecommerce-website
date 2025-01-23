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
  { id: 3, icon: wishlistIcon, alt: "Wishlist", link: "/wishlist" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isSearchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

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
        <div className="hidden lg:flex gap-7 items-center justify-center relative">
          {Navicons.map((icon) => (
            <div key={icon.id} className="relative flex items-center justify-center">
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
                <Link href={icon.link} className="flex items-center justify-center">
                  <Image
                    src={icon.icon}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="hover:opacity-80 transition"
                  />
                </Link>
              )}
              {/* Search dropdown */}
              {icon.alt === "Search" && isSearchDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full p-2 pr-10 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      onClick={() => setSearchDropdownOpen(false)}
                      aria-label="Close search"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Cart Icon */}
          <Link href="/cart" className="relative flex items-center justify-center">
            <Image
              src={cartIcon}
              alt="Cart"
              width={24}
              height={24}
              className="hover:opacity-80 transition"
            />
          </Link>
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

      {/* Mobile Menu with full-screen transition */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button for hamburger menu */}
          <button
            className="absolute top-5 right-5 p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Search Bar with close button */}
          {isMobileSearchOpen && (
            <div className="px-4 py-3 relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 pr-10 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  autoFocus
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setMobileSearchOpen(false)}
                  aria-label="Close search"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Navigation Items */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 py-4">
            {Navitems.map((item) => (
              <Link
                href={item.link}
                key={item.id}
                className="text-xl text-gray-700 hover:text-blue-500 font-medium transition"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSearchOpen(false);
                }}
              >
                {item.title}
              </Link>
            ))}
            
            {/* Icons */}
            <div className="flex gap-8 items-center justify-center w-full mt-8">
              {Navicons.map((icon) => (
                <div key={icon.id} className="relative flex items-center justify-center">
                  {icon.alt === "Search" ? (
                    <button
                      onClick={() => {
                        setMobileSearchOpen(!isMobileSearchOpen);
                        setSearchDropdownOpen(false);
                      }}
                      className="focus:outline-none flex items-center justify-center"
                    >
                      <Image
                        src={icon.icon}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className="hover:opacity-80 transition"
                      />
                    </button>
                  ) : (
                    <Link 
                      href={icon.link} 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileSearchOpen(false);
                      }}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={icon.icon}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className="hover:opacity-80 transition"
                      />
                    </Link>
                  )}
                </div>
              ))}
              {/* Add Cart Icon */}
              <Link 
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center"
              >
                <Image
                  src={cartIcon}
                  alt="Cart"
                  width={28}
                  height={28}
                  className="hover:opacity-80 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
