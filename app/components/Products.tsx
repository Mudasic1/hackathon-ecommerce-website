"use client";

import { useCart } from "@/app/context/page";
import { FaHeart } from "react-icons/fa";
import { CiShare2, CiSliderVertical } from "react-icons/ci";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn/cards";
import Link from "next/link";

export const Product = [
  { id: 1, title: "Syltherine", desc: "Stylish cafe chair", Price: "Rp 2.500.000", img: "/assets/product1.png" },
  { id: 2, title: "Leviosa", desc: "Stylish cafe chair", Price: "Rp 2.500.000", img: "/assets/product2.png" },
  { id: 3, title: "Lolito", desc: "Luxury big sofa", Price: "Rp 7.000.000", img: "/assets/product3.jpg" },
  { id: 4, title: "Respira", desc: "Outdoor bar table and stool", Price: "Rp 500.000", img: "/assets/product4.png" },
];

const Products = () => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

  const handleAddToCart = (item: typeof Product[0]) => {
    addToCart(item);
    toast.success(`${item.title} added to cart!`, {
      duration: 2000,
      position: 'top-center',
    });
  };

  const handleWishlist = (item: typeof Product[0]) => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
      toast.success(`${item.title} removed from wishlist`);
    } else {
      addToWishlist(item);
      toast.success(`${item.title} added to wishlist`);
    }
  };

  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Product.map((item) => (
          <Card key={item.id} className="relative group">
            <Link href={`/product/${item.id}`}>
              <CardHeader className="relative">
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleWishlist(item);
                    }}
                    className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-md"
                  >
                    <FaHeart className={`${isInWishlist(item.id) ? 'text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-md">
                    <CiShare2 className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-md">
                    <CiSliderVertical className="text-gray-600" />
                  </button>
                </div>
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-lg" />
                <CardTitle className="text-base font-bold mt-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{item.desc}</CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-between py-2">
                <span className="text-red-500 font-bold">{item.Price}</span>
              </CardContent>
            </Link>

            <CardFooter className="text-center py-2">
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Add to Cart
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
