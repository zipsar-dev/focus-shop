import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const subjects = [
  {
    paper: "",
    title: "Efficient Learning for Maximum Impact",
    description: [
      "With the Last Attempt Kit, dive straight into solving targeted questions, organized by chapters and topics. This method allows you to identify your weak points early, so you can focus your efforts where it matters most. Save time, study smarter, and be ready for any exam challenge.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "/Images/book-card-sample.jpg",
    color: "border-blue-800",
  },
  {
    paper: "",
    title: "Business Laws — Confidence that Builds Over Time",
    description: [
      "No more waiting until the last minute. With our practice-focused approach, you start solving ICAI-grade questions from day one. Practice with questions formatted just like the exam to gain the confidence you need to approach your exams without fear.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "/Images/book-card-sample.jpg",
    color: "border-red-500",
  },
  {
    paper: "",
    title: "A Customized Approach to Success",
    description: [
      "Each section of the Last Attempt Kit is structured to maximize your learning. With detailed solutions, certified evaluations, and personalized strategies, you’ll strengthen your skills and prepare efficiently. Stay ahead of the curve by revisiting and reinforcing your weak areas for all-rounded preparation.",
    ],
    shopLink: "#",
    samplePDF: "#",
    image: "/Images/book-card-sample.jpg",
    color: "border-yellow-400",
  },
];

export default function LearnMoreSlider() {
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  const subject = subjects[index];
  const containerRef = useRef(null);

  const goNext = () => setIndex((prev) => (prev + 1) % subjects.length);
  const goPrev = () =>
    setIndex((prev) => (prev - 1 + subjects.length) % subjects.length);

  // Auto-scroll every 5 seconds on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(goNext, 5000);
      return () => clearInterval(interval);
    }
  }, [index, isMobile]);

  return (
    <div className="bg-white shadow-lg rounded-[24px] p-6 md:p-10 max-w-[80%] md:max-w-[76%] mx-auto mt-10 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Last Attempt Kit</h2>
        <span className="text-sm font-medium text-gray-500">
          {index + 1}/{subjects.length}
        </span>
      </div>

      {/* Content */}
      <div className="relative min-h-[280px]">
        {/* Slider wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
          ref={containerRef}
        >
          {subjects.map((subject, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row w-full flex-shrink-0 px-4 sm:px-6 md:px-12 gap-6"
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
                <p className="text-lg text-gray-400 mb-2">{subject.paper}</p>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  {subject.title}
                </h3>
                {subject.description.map((line, i) => (
                  <p key={i} className="text-gray-700 mb-3 text-base leading-relaxed">
                    {line}
                  </p>
                ))}
                <a
                  href={subject.shopLink}
                  className="inline-block text-sm font-semibold text-blue-600 hover:underline mt-1"
                >
                  SHOP NOW
                </a>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="w-52 sm:w-60 md:w-72 rounded-lg shadow-md mb-2"
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
          ))}
        </div>

        {/* Arrows (Only on Desktop) */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 hidden md:block"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 hidden md:block"
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
              i === index ? `${sub.color} bg-opacity-80` : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
