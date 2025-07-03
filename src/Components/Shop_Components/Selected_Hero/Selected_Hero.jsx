import React, { useState } from "react";
import { BookOpen, FileLock2, PackageCheck, Truck } from "lucide-react";

export default function Selected_Hero({ debug = false }) {
  const [selectedFormat, setSelectedFormat] = useState("paper");

  // Dev border toggler
  const border = (cmd) =>
    debug ? `border border-dashed border-red-400 p-2 rounded` : "";

  return (
    <div className="bg-[#fffafc] min-h-screen p-6 md:p-12 font-sans text-gray-800">
      {/* CMD-BREADCRUMB */}
      <div className={`text-sm text-gray-500 mb-9 mt-6 ml-12 ${border("CMD-BREADCRUMB")}`}>
        Home / Shop Study Material /{" "}
        <span className="text-black">CA Foundation Reviewer</span>
      </div>

      {/* CMD-HERO-SECTION */}
      <div className={`flex flex-col lg:flex-row gap-10 ${border("CMD-HERO-SECTION")}`}>
        {/* CMD-IMAGE-SECTION */}
        <div className={`flex-1 flex justify-center items-center ${border("CMD-IMAGE-SECTION")}`}>
          <img
            src="/public/Images/books-hero-sample.jpg"
            alt="CA Foundation Reviewer"
            className="w-[90%] max-w-[500px] drop-shadow-xl"
          />
        </div>

        {/* CMD-TEXT-CONTENT */}
        <div className={`flex-1 ${border("CMD-TEXT-CONTENT")}`}>
          <h1 className="text-3xl font-semibold mb-2">Last Attempt Kit</h1>
          <p className="text-red-500 font-medium mb-4">Sept'25 & Jan'26</p>

          {/* CMD-BULLET-POINTS */}
          <ul className={`space-y-4 mb-10 ${border("CMD-BULLET-POINTS")}`}>
            <li className="flex gap-3 items-start">
              <BookOpen className="mt-1 text-blue-500" />
              <div>
                <span className="font-semibold text-gray-700">Smart Study</span> › Hard Study
                <br />
                <span className="text-sm text-gray-600">
                  Solve more questions in less time with our chapter-wise and topic-wise bifurcation.
                  Focus on key areas, identify your weak spots, and strengthen them with targeted practice.
                  Efficient and effective, every step of the way.
                </span>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <FileLock2 className="mt-1 text-red-400" />
              <div>
                <span className="text-red-500 font-medium">Build your confidence</span> from day 1
                <br />
                <span className="text-sm text-gray-600">
                  Start solving ICAI-grade questions right from the beginning, formatted as they will appear on the exam.
                  This strategy builds confidence and ensures you're ready for any challenge on exam day.
                </span>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <PackageCheck className="mt-1 text-black" />
              <div>
                <span className="text-pink-500 font-medium">A better way</span> to learn
                <br />
                <span className="text-sm text-gray-600">
                  Refresh essential concepts before each chapter. Tackle questions with confidence and build your skills efficiently,
                  saving time and optimizing your learning process.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* CMD-MATERIAL-FORMAT */}
      <div className={`mt-12 ${border("CMD-MATERIAL-FORMAT")}`}>
        {/* Title Centered */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold">CHOOSE MATERIAL FORMAT</h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* CMD-FORMAT-BUTTONS */}
          <div className={`w-full sm:w-[80%] ${border("CMD-FORMAT-BUTTONS")}`}>
            <div className="flex flex-col sm:flex-row justify-between gap-2 p-1 rounded-full border border-gray-300 bg-gray-100 w-full h-18">
              {/* Paper Books */}
              <button
                onClick={() => setSelectedFormat("paper")}
                className={`flex-1 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all justify-center ${
                  selectedFormat === "paper"
                    ? "bg-gradient-to-r from-blue-400 to-pink-400 text-white shadow"
                    : "text-gray-800 hover:bg-white"
                }`}
              >
                📘 <span>Paper Books</span>
              </button>

              {/* Secure PDF */}
              <button
                onClick={() => setSelectedFormat("pdf")}
                className={`flex-1 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all justify-center ${
                  selectedFormat === "pdf"
                    ? "bg-gradient-to-r from-blue-400 to-pink-400 text-white shadow"
                    : "text-gray-800 hover:bg-white"
                }`}
              >
                📄 <span>Secure PDF</span>
              </button>

              {/* Bundle */}
              <button
                onClick={() => setSelectedFormat("bundle")}
                className={`flex-1 flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all justify-center ${
                  selectedFormat === "bundle"
                    ? "bg-gradient-to-r from-blue-400 to-pink-400 text-white shadow"
                    : "text-gray-800 hover:bg-white"
                }`}
              >
                📦 <span>Bundle (Secure PDF + Paper Book)</span>
                <span className="ml-1 text-[10px] bg-red-400 text-white px-1.5 py-[1px] rounded-full leading-tight">
                  Recommended
                </span>
              </button>
            </div>
          </div>

          {/* CMD-DELIVERY-INFO */}
          <div
            className={`flex items-center gap-2 text-blue-600 ${border("CMD-DELIVERY-INFO")}`}
          >
            <Truck className="w-6 h-6" />
            <span className="text-sm">Delivered in 5–7 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
