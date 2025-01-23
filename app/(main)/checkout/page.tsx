"use client";

import { useState } from "react";

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Order Placed", billingDetails);
  };

  const products = [
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
    },
  ];

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Billing Details */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Billing Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={billingDetails.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={billingDetails.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company Name (Optional)"
                value={billingDetails.company}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="country"
                placeholder="Country / Region"
                value={billingDetails.country}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={billingDetails.address}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="Town / City"
                  value={billingDetails.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={billingDetails.state}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={billingDetails.zip}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={billingDetails.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={billingDetails.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                name="additionalInfo"
                placeholder="Additional Information"
                value={billingDetails.additionalInfo}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Order Summary</h2>
            <ul className="divide-y divide-gray-200 mb-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center py-2"
                >
                  <span>{product.name}</span>
                  <span>Rs. {product.price.toLocaleString()}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-green-600">Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div className="mt-6">
              <label className="block text-sm text-gray-700 mb-2">Payment Method</label>
              <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Direct Bank Transfer</option>
                <option>Cash on Delivery</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-10 text-sm text-gray-600 flex justify-between">
          <div className="flex gap-6">
            <span>High Quality Materials</span>
            <span>Warranty Protection</span>
            <span>Free Shipping</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
