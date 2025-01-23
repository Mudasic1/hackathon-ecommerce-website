import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

export default function FeatureIcons() {
  return (
    <div className="bg-[#f5f0eb] py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* High Quality */}
        <div className="flex flex-col items-center">
          <FaTrophy className="text-3xl text-black mb-2" />
          <h4 className="text-lg font-semibold">High Quality</h4>
          <p className="text-sm text-gray-600">crafted from top materials</p>
        </div>

        {/* Warranty Protection */}
        <div className="flex flex-col items-center">
          <FaShieldAlt className="text-3xl text-black mb-2" />
          <h4 className="text-lg font-semibold">Warranty Protection</h4>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>

        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <FaShippingFast className="text-3xl text-black mb-2" />
          <h4 className="text-lg font-semibold">Free Shipping</h4>
          <p className="text-sm text-gray-600">Order over 150 $</p>
        </div>

        {/* 24 / 7 Support */}
        <div className="flex flex-col items-center">
          <FaHeadset className="text-3xl text-black mb-2" />
          <h4 className="text-lg font-semibold">24 / 7 Support</h4>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
