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
    <div className="bg-white rounded-[32px] p-8 md:p-10 border max-w-[90rem] mx-auto border-b-4 border-r-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Learn more about each subject</h2>
        <span className="text-lg font-medium text-gray-600">{index + 1}/{subjects.length}</span>
      </div>

      <div className="relative flex items-center border-t pt-6">
        <button onClick={goPrev} className="absolute left-0 ml-2 z-10">
          <ChevronLeft className="w-9 h-9 text-gray-600 hover:text-black" />
        </button>

        <div className="flex flex-col md:flex-row w-full justify-between gap-10 px-6 md:px-16">
          {/* Left Info */}
          <div className="flex-1 text-gray-800 pl-10 pr-4">
            <p className="text-sm font-semibold text-gray-500">{subject.paper}</p>
            <h3 className="text-2xl font-semibold mb-4">{subject.title}</h3>
            <ul className="list-disc ml-6 space-y-3 mb-6 leading-relaxed text-lg">
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
          <div className="flex-1 text-center flex flex-col items-center justify-center">
            <img
              src={subject.image}
              alt={subject.title}
              className="w-52 md:w-64 lg:w-72 mx-auto mb-4 rounded-md shadow-md"
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

        <button onClick={goNext} className="absolute right-0 mr-2 z-10">
          <ChevronRight className="w-9 h-9 text-gray-600 hover:text-black" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-end mt-6 space-x-2">
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
