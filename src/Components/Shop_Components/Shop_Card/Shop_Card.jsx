import React from "react";
import { Minus, Plus } from "lucide-react";

const products = [
  {
    title: "Combo – All Subjects",
    price: 1800,
    description:
      "Get your basics tested for the stepping stones of CA journey. Get all 4 reviewers and practice exam grade questions. These question banks have ICAI study materials and RTPs, MTPs and PYPs.",
    tag: "Recommended",
    offer: "Use code COMBO during checkout to get 17% off!",
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Accounting",
    price: 500,
    description:
      "Master the language of business! From basics to company accounts, practice questions and get familiar with Accounting Standards.",
    bulletPoints: [
      "1100+ questions",
      "ICAI SM questions",
      "RTPs, MTPs and PYPs",
    ],
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Business Laws",
    price: 400,
    description:
      "Understand how laws shape business decisions. Practice theory questions and learn to write answers using the right legal language.",
    bulletPoints: [
      "1400+ questions",
      "ICAI SM questions",
      "RTPs, MTPs and PYPs",
    ],
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Quantitative Aptitude",
    price: 500,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: [
      "2200+ MCQs",
      "ICAI SM questions",
      "RTPs, MTPs and PYPs",
    ],
    image: "public/Images/book-card-sample.jpg",
  },
  {
    title: "Quantitative Aptitude",
    price: 500,
    description:
      "Numbers, logic, and patterns! Sharpen your skills with MCQs – practice is the only key here.",
    bulletPoints: [
      "2200+ MCQs",
      "ICAI SM questions",
      "RTPs, MTPs and PYPs",
    ],
    image: "public/Images/book-card-sample.jpg",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl bg-white p-4 flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-[160px] shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-50 rounded-xl"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          {product.bulletPoints && (
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
              {product.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
          {product.tag && (
            <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 mt-2 rounded">
              {product.tag}
            </span>
          )}
          {product.offer && (
            <p className="text-red-500 text-xs mt-1">{product.offer}</p>
          )}
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">₹ {product.price}</span>
          <div className="flex items-center border rounded-full px-2 py-1 w-[90px] justify-between">
            <button className="text-gray-500 hover:text-black">
              <Minus size={16} />
            </button>
            <span className="text-sm">0</span>
            <button className="text-gray-500 hover:text-black">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ShopCard() {
  return (
    <div className="p-6">
      <div
        className="bg-[#f8f9fa] border border-black rounded-[16px] p-6 w-full max-w-[90rem] mx-auto mb-12"
        style={{
          borderBottomWidth: "6px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
