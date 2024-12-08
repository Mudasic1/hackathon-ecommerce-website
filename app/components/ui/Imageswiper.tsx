/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/assets/slider.jpg", "/assets/slider1.jpg"];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle swipe gesture
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchStartPosition = e.touches[0].clientX;
    setTouchStart(touchStartPosition);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchMovePosition = e.touches[0].clientX;
    setTouchEnd(touchMovePosition);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide(); // Swipe left
    }
    if (touchStart - touchEnd < -50) {
      prevSlide(); // Swipe right
    }
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Auto-change the slide every 5 seconds
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <div
        className="w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full inline-block">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              layout="intrinsic" // To maintain aspect ratio
              width={1200} // Set a fixed width
              height={500} // Set a fixed height
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
        >
          &#8249;
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="p-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
        >
          &#8250;
        </button>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
