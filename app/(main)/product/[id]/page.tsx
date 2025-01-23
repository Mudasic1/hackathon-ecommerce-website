"use client";

import { useCart } from "@/app/context/page";
import { Product } from "@/app/components/Products";
import { toast } from "sonner";
import { FaHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
import React from "react";

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

  // Unwrap params using React.use
  const [productId, setProductId] = React.useState<string | null>(null);
  React.useEffect(() => {
    params.then(({ id }) => setProductId(id));
  }, [params]);

  if (!productId) {
    return <div>Loading...</div>;
  }

  const product = Product.find((p) => p.id === parseInt(productId));
  const otherProducts = Product.filter((p) => p.id !== parseInt(productId));

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = (item: typeof Product[0]) => {
    addToCart(item);
    toast.success(`${item.title} added to cart!`, {
      duration: 2000,
      position: "top-center",
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
    <div className="py-10 px-5 lg:px-20">
      {/* Product Details Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="relative group">
          <img
            src={product.img}
            alt={product.title}
            className="w-full rounded-lg"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => handleWishlist(product)}
              className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-md"
            >
              <FaHeart
                className={`${
                  isInWishlist(product.id) ? "text-red-500" : "text-gray-600"
                }`}
              />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-gray-100 shadow-md">
              <CiShare2 className="text-gray-600" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl text-red-500 font-bold">{product.Price}</p>
          <p className="text-gray-600">{product.desc}</p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Description</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors text-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Other Products Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Other Products You Might Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProducts.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id}>
              <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <p className="text-red-500 font-bold mt-1">{item.Price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
