"use client";

import { useCart } from "@/app/context/page";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart: cartItems, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + parseInt(item.Price.replace(/[^\d]/g, "")) * (item.quantity || 1),
    0
  );
  const shipping = 50000;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show success toast
    toast.success("Your order is being processed!", {
      duration: 3000,
      position: "top-center",
    });

    // Clear cart items
    cartItems.forEach(item => removeFromCart(item.id));

    // Redirect to shop page
    router.push('/shop');
  };

  return (
    <div className="py-10 px-5 lg:px-20">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                required
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity || 1}</p>
                </div>
                <p className="font-medium">{item.Price}</p>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>Rp {subtotal.toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Rp {shipping.toLocaleString()}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>Rp {total.toLocaleString()}</p>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors mt-6"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
