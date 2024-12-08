"use client";

import Image from "next/image";
import poster from "@/public/assets/poster.png";
import abs from "@/public/assets/abs.png";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { CiShare2, CiSliderVertical } from "react-icons/ci";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/shadcn/cards";
import ImageSlider from "./ui/Imageswiper";
import FuniroFurniture from "./ui/share";

const rang = [
  { id: 1, title: "Dining", link: "#", img: "/assets/img1.png" },
  { id: 2, title: "Living", link: "#", img: "/assets/img2.png" },
  { id: 3, title: "Bedroom", link: "#", img: "/assets/img3.png" },
];

const Product = [
  { id: 1, title: "Syltherine", desc: "Stylish cafe chair", Price: "Rp 2.500.000", discount: "Rp 3.500.000", img: "/assets/product1.png" },
  { id: 2, title: "Leviosa", desc: "Stylish cafe chair", Price: "Rp 2.500.000", img: "/assets/product2.png" },
  { id: 3, title: "Lolito", desc: "Luxury big sofa", Price: "Rp 7.000.000", discount: "Rp 14.000.000", img: "/assets/product3.jpg" },
  { id: 4, title: "Respira", desc: "Outdoor bar table and stool", Price: "Rp 500.000", img: "/assets/product4.png" },
  { id: 5, title: "Grifo", desc: "Night lamp", Price: "Rp 1.500.000", img: "/assets/product5.png" },
  { id: 6, title: "Muggo", desc: "Small mug", Price: "Rp 150.000", img: "/assets/product6.png" },
  { id: 7, title: "Pingky", desc: "Cute bed set", Price: "Rp 7.000.000", discount: "Rp 14.000.000", img: "/assets/product7.png" },
  { id: 8, title: "Potty", desc: "Minimalist flower pot", Price: "Rp 500.000", img: "/assets/product8.png" }
];

const discounts = [50, 30, 20, 50, 30, 20, 50, 30];

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Poster */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[716px]">
        <Image src={poster} alt="poster" fill priority className="object-cover" />
      </div>

      {/* Box Image (abs.png) */}
      <div className="absolute top-[50px] right-[10px] md:top-[100px] md:right-[50px] lg:right-[100px]">
        <Image src={abs} alt="box" width={400} height={400} className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] object-contain" />
      </div>

      {/* Browse Range Section */}
      <div className="py-[50px] px-[20px] sm:px-[50px] md:px-[100px] flex flex-col items-center">
        <div className="text-center w-full mb-10">
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Browse The Range</h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Range Items */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-10 pt-10">
          {rang.map((item) => (
            <div key={item.id} className="text-center w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px]">
              <Link href={item.link}>
                <div className="relative w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px]">
                  <Image src={item.img} alt={item.title} fill className="object-cover rounded-md" />
                </div>
                <span className="block font-bold text-sm sm:text-base lg:text-lg mt-2">{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="py-[50px] px-5">
        <div className="text-center mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Our Products</h1>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 justify-items-center">
          {/* Rendered Product Cards */}
          {Product.map((item, index) => (
            <Card key={item.id} className="max-w-[300px] w-full bg-white shadow-md rounded-lg group relative">
              {/* Discount Badge */}
              {item.discount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                  {discounts[index]}% OFF
                </div>
              )}

              <CardHeader>
                <img src={item.img} alt="product" />
                <CardTitle className="text-base font-bold mt-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{item.desc}</CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-between py-2 px-4">
                <span className="text-red-500 font-bold">{item.Price}</span>
                {item.discount && (
                  <span className="line-through text-sm text-gray-400">{item.discount}</span>
                )}
              </CardContent>

              <CardFooter className="text-center py-2">
                <button className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700">
                  Add to Cart
                </button>
              </CardFooter>

              {/* Hover Action Icons */}
              <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FaHeart />
                </button>
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <CiShare2 />
                </button>
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <CiSliderVertical />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center p-4">
        <button className="border border-yellow-600 p-4 w-[200px] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-500">Show more</button>
      </div>

      {/* Swiper */}
      <div className="pt-[50px] pb-[50px] flex justify-center items-center">
        <ImageSlider />
      </div>

      {/* Share  */}
      <div className="pt-[50px] pb-[50px] flex justify-center items-center">
              <FuniroFurniture />
      </div>
    </div>
  );
};

export default Hero;
