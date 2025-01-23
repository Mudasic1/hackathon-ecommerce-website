// /app/cart/page.js
"use client";

import { useCart } from "@/app/context/page";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1 mx-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-red-500 font-bold">{item.Price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Remove
                </button>
                <button 
                  onClick={() => alert('Checkout functionality coming soon!')}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-right">
            <button 
              onClick={() => alert('Checkout all items functionality coming soon!')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              Checkout All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
