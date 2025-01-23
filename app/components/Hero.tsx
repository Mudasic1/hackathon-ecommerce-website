"use client";

import Image from "next/image";
import poster from "@/public/assets/poster.png";
import abs from "@/public/assets/abs.png";
import Link from "next/link";
import Products from "./Products";
import ImageSlider from "./ui/Imageswiper";
import FuniroFurniture from "./ui/share";

const rang = [
  { id: 1, title: "Dining", link: "#", img: "/assets/img1.png" },
  { id: 2, title: "Living", link: "#", img: "/assets/img2.png" },
  { id: 3, title: "Bedroom", link: "#", img: "/assets/img3.png" },
];

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
        <Products />
      </div>

      <div className="w-full flex justify-center p-4">
        <Link href="/shop">
          <button className="border border-yellow-600 p-4 w-[200px] text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-500">Show more</button>
        </Link>
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
