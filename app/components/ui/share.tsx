"use client"

import Image from "next/image";

const FuniroFurniture = () => {
  const images = [
    "/assets/share.png", // Replace with actual paths
    "/assets/share1.png",
    "/assets/share2.png",
    "/assets/share3.png",
    "/assets/share4.png",
    "/assets/share5.png",
    "/assets/share6.png",
    "/assets/share7.png",
  ];

  return (
    <div className="flex flex-col justify-center text-center gap-[20px]">
      <h1 className="text-2xl">Share your setup with</h1>
      <h2 >#FuniroFurniture</h2>
      <div className="flex justify-center">
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Furniture setup ${index + 1}`}
              layout="responsive"
              width={100}
              height={100}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FuniroFurniture
