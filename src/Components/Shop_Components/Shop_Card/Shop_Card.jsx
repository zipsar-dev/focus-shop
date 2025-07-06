import React, { useContext } from "react";
import { Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import products from "../../../data/products";

const ProductCard = ({ product, quantity, onAdd, onRemove }) => (
  <div className="product-card rounded-[16px] bg-white shadow-md p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 border border-gray-200 transition hover:shadow-lg hover:scale-[1.01] duration-200">
    <div className="w-full sm:w-[160px] shrink-0">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
      />
    </div>
    <div className="flex-1 flex flex-col justify-between gap-2">
      <div>
        <h3
          className="text-lg font-semibold truncate overflow-hidden whitespace-nowrap max-w-[200px] sm:max-w-[300px]"
          title={product.title}
        >
          {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">{product.description}</p>

        {product.bulletPoints && (
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            {product.bulletPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}

        {product.tag && (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded mt-2">
            {product.tag}
          </span>
        )}

        {product.offer && (
          <p className="text-red-500 text-xs mt-1 font-medium">
            {product.offer}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold">₹ {product.price}</span>
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-[100px] justify-between">
          <button
            onClick={onRemove}
            disabled={quantity === 0}
            className="text-gray-500 hover:text-black disabled:opacity-40"
          >
            <Minus size={16} />
          </button>
          <span className="text-sm">{quantity}</span>
          <button onClick={onAdd} className="text-gray-500 hover:text-black">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function ShopCard() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/cart");
  };

  return (
    <div className="shop-card p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-[32px] p-6 md:p-12 max-w-[90%] md:max-w-[76%] mx-auto my-12">
        <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
          Shop Study Kits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              quantity={cart[product.id] || 0}
              onAdd={() => addToCart(product.id)}
              onRemove={() => removeFromCart(product.id)}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleBuy}
            className="bg-white border border-black border-b-[5px] rounded-full px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition w-full sm:w-auto text-center"
          >
            Review Cart & Buy →
          </button>
        </div>
      </div>
    </div>
  );
}
