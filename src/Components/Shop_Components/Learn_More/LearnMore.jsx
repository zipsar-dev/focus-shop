import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const subjects = [
  {
    paper: "",
    title: "Efficient Learning for Maximum Impact",
    description: [
      "With the Last Attempt Kit, dive straight into solving targeted questions, organized by chapters and topics. This method allows you to identify your weak points early, so you can focus your efforts where it matters most. Save time, study smarter, and be ready for any exam challenge."
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-blue-800",
  },
  {
    paper: "",
    title: "Business LawsConfidence that Builds Over Time",
    description: [
      "No more waiting until the last minute. With our practice-focused approach, you start solving ICAIgrade questions from day one. Practice with questions formatted just like the exam to gain the confidence you need to approach your exams without fear. "
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-red-500",
  },
  {
    paper: "",
    title: "A Customized Approach to Success ",
    description: [
      "Each section of the Last Attempt Kit is structured to maximize your learning. With detailed solutions, certified evaluations, and personalized strategies, you’ll strengthen your skills and prepare efficiently. Stay ahead of the curve by revisiting and reinforcing your weak areas for an all-rounded preparation. "
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "public/Images/book-card-sample.jpg",
    color: "border-yellow-400",
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
          Last Attempt Kit 
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
