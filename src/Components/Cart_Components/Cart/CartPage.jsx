import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Trash2 } from "lucide-react";
import CartNav from "../../Common/CartNav/CartNav";
import products from "../../../data/products"; // 👈 Make sure this path is correct

export default function CartPage() {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const cartItems = Object.entries(cart)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id === parseInt(id));
      return {
        ...product,
        quantity: qty,
      };
    });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 180;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-gray-100 min-h-screen">
      <CartNav />

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
          <div className="flex flex-col gap-8 items-center lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
            {/* Cart Items */}
            <div className="w-[90%] lg:w-full col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">
                  Items in cart ({cartItems.length})
                </h3>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 mb-6 border-b pb-4"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-24 object-cover rounded-lg border shrink-0"
                    />

                    {/* Right Content */}
                    <div className="flex-1 flex flex-col justify-between gap-2">
                      {/* Name + Price */}
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-sm text-gray-700 mt-1">₹ {item.price}</p>
                      </div>

                      {/* Quantity and Delete */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            const newQty = item.quantity - 1;
                            if (newQty <= 0) {
                              deleteFromCart(item.id);
                            } else {
                              removeFromCart(item.id);
                            }
                          }}
                          className="px-2 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="px-2 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => deleteFromCart(item.id)}
                          className="ml-2 text-red-500 hover:underline"
                          title="Remove Item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-[90%] lg:w-full bg-white p-6 rounded-xl shadow space-y-6">
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
                  Coupon Code{" "}
                  <span className="text-blue-600 underline ml-1 cursor-pointer">
                    View Offers
                  </span>
                </span>
                <span>- ₹ {discount}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹ {total}</span>
              </div>
              <button
                disabled
                className="w-full mt-4 bg-gray-300 text-white py-3 rounded-full font-semibold cursor-not-allowed"
              >
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
