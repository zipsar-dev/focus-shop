import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const subjects = [
  {
    paper: "PAPER 1",
    title: "Accounting",
    description: [
      "Learn Basics and test your conceptual knowledge.",
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

  const goNext = () => {
    setIndex((prev) => (prev + 1) % subjects.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + subjects.length) % subjects.length);
  };

  return (
    <div className="bg-white rounded-[12px] p-6 md:p-10 border max-w-[77%] mx-auto">
      <div className="flex justify-between items-center mb-6 h-1">
        <h2 className="text-2xl font-bold">Learn more about each subject</h2>
        <span className="text-lg font-medium text-gray-600">
          {index + 1}/{subjects.length}
        </span>
      </div>

      <div className="relative flex items-center border-t pt-6 min-h-[320px] mt-8">
        {/* Left Arrow */}
        <button onClick={goPrev} className="absolute left-0 ml-2 z-10">
          <ChevronLeft className="w-7 h-7 text-gray-600 hover:text-black" />
        </button>

        <div className="flex flex-col md:flex-row w-full justify-between gap-8 px-4 md:px-12">
          {/* Left Content */}
          <div className="flex-1 text-gray-800 px-2 md:px-6 pt-2 pb-4 flex flex-col justify-center">
            <p className="text-sm font-semibold text-gray-500 mb-1">{subject.paper}</p>
            <h3 className="text-2xl font-semibold mb-3">{subject.title}</h3>
            <ul className="list-disc ml-6 space-y-2 mb-5 leading-relaxed text-[17px]">
              {subject.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
            <a
              href={subject.shopLink}
              className="text-base underline font-semibold hover:text-blue-600"
            >
              SHOP NOW
            </a>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            <img
              src={subject.image}
              alt={subject.title}
              className="w-48 md:w-56 lg:w-64 mx-auto mb-3 rounded-md shadow-md"
            />
            <a
              href={subject.samplePDF}
              className="text-sm text-gray-700 underline"
              target="_blank"
              rel="noreferrer"
            >
              View Sample PDF
            </a>
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={goNext} className="absolute right-0 mr-2 z-10">
          <ChevronRight className="w-8 h-8 text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-end mt-2 space-x-2">
        {subjects.map((sub, i) => (
          <span
            key={i}
            className={`w-5 h-3 border-2 rounded-sm transition-all duration-200 ${
              i === index ? sub.color : "border-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
