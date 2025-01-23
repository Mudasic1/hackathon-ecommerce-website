"use client";

import { useCart } from "@/app/context/page";
import { toast } from "sonner";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast.success(`${item.title} added to cart!`, {
      duration: 2000,
      position: 'top-center',
    });
  };

  return (
    <div className="py-10 px-5 lg:px-20">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Your wishlist is empty</p>
          <Link href="/shop" className="text-yellow-600 hover:underline mt-4 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md">
              <Link href={`/product/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="font-semibold mt-4">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <p className="text-red-500 font-bold mt-2">{item.Price}</p>
              </Link>
              
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    removeFromWishlist(item.id);
                    toast.success(`${item.title} removed from wishlist`);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 