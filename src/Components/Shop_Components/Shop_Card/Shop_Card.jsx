// ShopCard.jsx
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";


const products = [
  {
    title: "Combo – All Subjects",
    price: 1800,
    description: "Get your basics tested for the stepping stones of CA journey. Get all 4 reviewers and practice exam grade questions.",
    tag: "Recommended",
    offer: "Use code COMBO during checkout to get 17% off!",
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Accounting",
    price: 500,
    description: "Master the language of business! From basics to company accounts, practice questions and get familiar with Accounting Standards.",
    bulletPoints: ["1100+ questions", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Business Laws",
    price: 400,
    description: "Understand how laws shape business decisions. Practice theory questions and learn to write answers using the right legal language.",
    bulletPoints: ["1400+ questions", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Quantitative Aptitude",
    price: 500,
    description: "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: ["2200+ MCQs", "ICAI SM questions", "RTPs, MTPs and PYPs"],
    image: "public/Images/book-card-sample.jpg",
  },
];

const ProductCard = ({ product, quantity, onAdd, onRemove }) => (
  <div className="rounded-[16px] bg-white shadow-md p-4 flex flex-col sm:flex-row gap-6 border border-gray-200 transition hover:shadow-lg">
    <div className="w-full sm:w-[160px] shrink-0">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
    </div>
    <div className="flex-1 flex flex-col justify-between gap-2">
      <div>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        {product.bulletPoints && (
          <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
            {product.bulletPoints.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        )}
        {product.tag && (
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 mt-3 rounded">{product.tag}</span>
        )}
        {product.offer && <p className="text-red-500 text-xs mt-1">{product.offer}</p>}
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold">₹ {product.price}</span>
        <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 w-[100px] justify-between">
          <button onClick={onRemove} disabled={quantity === 0} className="text-gray-500 hover:text-black disabled:opacity-40"><Minus size={16} /></button>
          <span className="text-sm">{quantity}</span>
          <button onClick={onAdd} className="text-gray-500 hover:text-black"><Plus size={16} /></button>
        </div>
      </div>
    </div>
  </div>
);

export default function ShopCard() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const handleAdd = (title) => {
    setCart((prev) => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
  };

  const handleRemove = (title) => {
    setCart((prev) => ({ ...prev, [title]: Math.max((prev[title] || 0) - 1, 0) }));
  };

  const handleBuy = () => {
    const hasItems = Object.values(cart).some((qty) => qty > 0);
    if (!hasItems) return alert("Please add at least one item.");
    navigate("/cart", { state: { cart } });
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="bg-white shadow-md rounded-[32px] p-6 w-full max-w-[90%] sm:max-w-[77%] mx-auto mb-6">
        <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Shop Study Kits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              quantity={cart[product.title] || 0}
              onAdd={() => handleAdd(product.title)}
              onRemove={() => handleRemove(product.title)}
            />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleBuy}
            className="bg-white border border-black border-b-[5px] rounded-full px-6 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition"
          >
            Review Cart & Buy →
          </button>
        </div>
      </div>
    </div>
  );
}
