import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const productDetails = {
  "Combo – All Subjects": { price: 1800, image: "public/Images/book-card-sample.jpg" },
  Accounting: { price: 500, image: "public/Images/book-card-sample.jpg" },
  "Business Laws": { price: 400, image: "public/Images/book-card-sample.jpg" },
  "Quantitative Aptitude": { price: 500, image: "public/Images/book-card-sample.jpg" },
};

export default function CartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || {};
  const cartItems = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const subtotal = cartItems.reduce((sum, [title, qty]) => sum + (productDetails[title].price * qty), 0);
  const shipping = 180;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="min-h-screen bg-[#FAFBFFFF] font-sans text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl p-6 border border-black border-b-[6px] shadow">
            <p className="text-md font-semibold">
              📖 You have opted for <span className="text-blue-600">PAPER BOOKS</span>.
            </p>
            <hr className="my-4" />
            <p className="text-[15px] text-gray-700 mb-2">
              Discover a wide range of essential <span className="text-blue-600 font-medium">paperback</span> compilers in format tailored specifically to make your next attempt the last attempt.
            </p>
            <ul className="text-sm space-y-1 text-gray-800 font-medium">
              <li>✔ Delivered in 5–7 working days</li>
              <li>✔ Non Refundable</li>
              <li>✔ 2 color format</li>
            </ul>
            <p className="mt-4 font-semibold text-[15px]">Choose Delivery Address</p>
            <p className="text-xs text-right text-blue-600 font-semibold cursor-pointer">[+] Add New Address</p>
          </div>

          {/* Cart Items */}
          <div className="bg-white rounded-xl p-6 border border-black border-b-[6px] shadow">
            <h3 className="text-xl font-semibold mb-4">Items in cart ({cartItems.length})</h3>
            {cartItems.map(([title, qty]) => (
              <div key={title} className="flex items-center gap-4 border-b py-4">
                <img src={productDetails[title].image} alt={title} className="w-20 h-24 object-cover rounded-lg border" />
                <div className="flex-1">
                  <p className="font-bold text-sm">{title}</p>
                  <p className="text-xs text-blue-600">PRINTED BOOK</p>
                  <div className="mt-2 bg-gray-100 px-4 py-1 inline-block rounded-full text-sm">{qty}</div>
                </div>
                <p className="text-sm font-bold">₹ {productDetails[title].price * qty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-xl p-6 border border-black border-b-[6px] shadow space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="text-sm font-medium space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  Shipping at <span className="text-red-600">Coimbatore, 641001</span>
                </span>
                <span>₹ {shipping}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  Coupon Code{" "}
                  <span className="text-blue-600 underline cursor-pointer">View Offers</span>
                </span>
                <span>- ₹ {discount}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹ {total}</span>
              </div>
            </div>
            <button
              className="mt-5 bg-[#f2558f] hover:bg-pink-600 text-white py-3 w-full rounded-full font-semibold"
              onClick={() => alert("Proceeding to checkout soon!")}
            >
              PROCEED TO PAY
            </button>
            <p className="text-xs text-center text-gray-600 mt-2">
              You saved ₹{discount} on this order!
            </p>
          </div>

          {/* Promo Codes */}
          <div>
            <h4 className="font-bold text-sm mb-2">Promo Codes</h4>
            {["COMBO", "BULKDISCOUNT", "FREEDEL"].map((code) => (
              <label key={code} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg mb-2 cursor-pointer">
                <input type="radio" name="promo" className="mt-1" />
                <div>
                  <p className="font-semibold text-sm">{code}</p>
                  <p className="text-xs text-gray-600">
                    Save on buying groups + Free Delivery!
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Button Style Continue Shopping */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-white border border-black border-b-[5px] rounded-full px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition"
        >
          ← Continue Shopping
        </button>
      </div>
    </div>
  );
}
