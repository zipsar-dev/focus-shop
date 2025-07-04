import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const subjects = [
  {
    paper: "PAPER 1",
    title: "Accounting",
    description: [
      "Learn basics and test your conceptual knowledge.",
      "Start right as your building base to the CA journey.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-blue-800",
  },
  {
    paper: "PAPER 2",
    title: "Business Laws",
    description: [
      "Understand basic business laws through Q&A.",
      "Learn to write answers in a structured way.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-red-500",
  },
  {
    paper: "PAPER 3",
    title: "Quantitative Aptitude",
    description: [
      "Sharpen your logic and MCQ solving speed.",
      "Practice-based learning using past year Qs.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-yellow-400",
  },
  {
    paper: "PAPER 4",
    title: "Business Economics",
    description: [
      "Understand market behavior with concept clarity.",
      "Practice numerical and theory questions.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-pink-500",
  },
];

export default function LearnMoreSlider() {
  const [index, setIndex] = useState(0);
  const subject = subjects[index];

  const goNext = () => setIndex((prev) => (prev + 1) % subjects.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + subjects.length) % subjects.length);

  return (
    <div className="bg-white shadow-lg rounded-[24px] p-6 md:p-10 max-w-[76%] mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Learn more about each subject
        </h2>
        <span className="text-sm font-medium text-gray-500">
          {index + 1}/{subjects.length}
        </span>
      </div>

      <div className="relative flex items-center min-h-[280px]">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-0 -ml-2 z-10 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row w-full items-center gap-8 px-6 md:px-12">
          {/* Text Content */}
          <div className="flex-1 w-full ml-15">
            <p className="text-[24px] font-semibold text-gray-400 mb-1">
              {subject.paper}
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {subject.title}
            </h3>
            <ul className="list-disc ml-4 mb-4 space-y-2 text-gray-700 text-[18px]">
              {subject.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <a
              href={subject.shopLink}
              className="inline-block text-sm font-semibold text-blue-600 hover:underline"
            >
              SHOP NOW
            </a>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center mr-15">
            <img
              src={subject.image}
              alt={subject.title}
              className="w-60 md:w-72 rounded-lg shadow-md mb-2"
            />
            <a
              href={subject.samplePDF}
              className="text-sm text-gray-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View Sample PDF
            </a>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-0 -mr-2 z-10 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {subjects.map((sub, i) => (
          <span
            key={i}
            className={`w-4 h-2 rounded-full transition-all duration-300 ${
              i === index ? `${sub.color} bg-blue-400` : "bg-blue-300"
            }`}
            style={{ backgroundColor: i === index ? undefined : "#e5e7eb" }}
          />
        ))}
      </div>
    </div>
  );
}
