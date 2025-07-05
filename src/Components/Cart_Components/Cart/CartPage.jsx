import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Trash2 } from "lucide-react";

const productDetails = {
  "Combo – All Subjects": {
    price: 1800,
    image: "/Images/book-card-sample.jpg",
  },
  Accounting: { price: 500, image: "/Images/book-card-sample.jpg" },
  "Business Laws": { price: 400, image: "/Images/book-card-sample.jpg" },
  "Quantitative Aptitude": {
    price: 500,
    image: "/Images/book-card-sample.jpg",
  },
};

export default function CartPage() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const cartItems = Object.entries(cart).filter(([_, qty]) => qty > 0);

  const subtotal = cartItems.reduce(
    (sum, [title, qty]) => sum + productDetails[title].price * qty,
    0
  );
  const shipping = 180;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="w-full flex items-center justify-between py-4 px-4 sm:px-12 bg-white shadow-sm">
        <img src="/Images/logo.png" alt="Logo" className="w-24 sm:w-28" />
        <div className="flex items-center gap-2 text-sm sm:text-base font-semibold">
          <span>PRODUCTS</span>
          <span className="text-gray-500">-----</span>
          <span className="text-blue-500 underline">CART</span>
          <span className="text-gray-500">-----</span>
          <span>PAYMENT</span>
        </div>
        <div className="text-xs sm:text-sm text-green-600 font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-5 h-5 text-green-500">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          100% SECURE
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-xl shadow text-center">
            <img src="/Images/cart.svg" alt="Empty Cart" className="w-48 sm:w-64 mb-6" />
            <h3 className="text-xl font-semibold mb-2">Hey, it feels so light!</h3>
            <p className="text-gray-500 mb-4">There is nothing in your cart. Let’s add some items.</p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 border border-pink-500 border-b-4 border-r-4 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              ADD ITEMS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Items in cart ({cartItems.length})
                </h3>
                {cartItems.map(([title, qty]) => (
                  <div key={title} className="flex items-center gap-4 mb-4 border-b pb-4">
                    <img
                      src={productDetails[title].image}
                      alt={title}
                      className="w-20 h-24 object-cover rounded-lg border"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-blue-500 mt-1">PRINTED BOOK</p>
                      <div className="flex items-center mt-2 gap-2">
                        <button
                          onClick={() => {
                            const newQty = qty - 1;
                            if (newQty <= 0) {
                              deleteFromCart(title);
                            } else {
                              removeFromCart(title);
                            }
                          }}
                          className="px-2 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 cursor-pointer"
                        >
                          −
                        </button>
                        <span className="text-sm">{qty}</span>
                        <button
                          onClick={() => addToCart(title)}
                          className="px-2 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 cursor-pointer"
                        >
                          +
                        </button>
                        <button
                          onClick={() => deleteFromCart(title)}
                          className="ml-4 text-red-500 text-sm hover:underline cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">
                      ₹ {productDetails[title].price * qty}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white p-6 rounded-xl shadow space-y-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  Shipping at <span className="text-red-600">Coimbatore, 641001</span>
                </span>
                <span>₹ {shipping}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>
                  Coupon Code <span className="text-blue-600 underline ml-1 cursor-pointer">View Offers</span>
                </span>
                <span>- ₹ {discount}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹ {total}</span>
              </div>
              <button disabled className="w-full mt-4 bg-gray-300 text-white py-3 rounded-full font-semibold cursor-not-allowed">
                Payment Coming Soon
              </button>
              <div className="text-xs text-center mt-2 text-gray-500">
                You saved ₹{discount} on this order!
              </div>
            </div>
          </div>
        )}

        {/* Back Navigation */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-white border border-black border-b-[4px] rounded-full px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
