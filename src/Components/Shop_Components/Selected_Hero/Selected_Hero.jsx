import React, { useState } from "react";
import { BookOpen, FileLock2, PackageCheck, Truck } from "lucide-react";

export default function Selected_Hero({ debug = false }) {
  const [selectedFormat, setSelectedFormat] = useState("Lite Kit");

  const border = (cmd) =>
    debug ? `border border-dashed border-red-400 p-2 rounded` : "";

  return (
    <div className="bg-[#fffafc] min-h-screen p-6 md:p-12 font-sans text-gray-800">
      {/* Breadcrumb */}
      <div
        className={`text-sm text-gray-500 mb-9 mt-6 ml-12 ${border("CMD-BREADCRUMB")}`}
      >
        Shop / <span className="text-black">Last Attempt Kit</span>
      </div>

      {/* Hero Section */}
      <div className={`flex flex-col lg:flex-row gap-10 ${border("CMD-HERO-SECTION")}`}>
        {/* Image */}
        <div
          className={`flex-1 flex justify-center items-center ${border("CMD-IMAGE-SECTION")}`}
        >
          <img
            src="/public/Images/books-hero-sample.jpg"
            alt="CA Foundation Reviewer"
            className="w-[90%] max-w-[500px] drop-shadow-xl"
          />
        </div>

        {/* Text Content */}
        <div className={`flex-1 ${border("CMD-TEXT-CONTENT")}`}>
          <h1 className="text-3xl font-semibold mb-2">Last Attempt Kit</h1>
          <p className="text-blue-500 font-medium mb-4">Sept'25 & Jan'26</p>

          <ul className={`space-y-4 mb-10 ${border("CMD-BULLET-POINTS")}`}>
            <li className="flex gap-3 items-start">
              <BookOpen className="mt-1 text-blue-500" />
              <div>
                <span className="font-semibold text-gray-700">Smart Study</span> › Hard Study
                <br />
                <span className="text-sm text-gray-600">
                  Solve more questions in less time with our chapter-wise and topic-wise bifurcation. Focus on key areas, identify your weak spots, and strengthen them with targeted practice.
                </span>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <FileLock2 className="mt-1 text-red-400" />
              <div>
                <span className="text-green-500 font-medium">Build your confidence</span> from day 1
                <br />
                <span className="text-sm text-gray-600">
                  Start solving ICAI-grade questions right from the beginning, formatted as they will appear on the exam.
                </span>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <PackageCheck className="mt-1 text-black" />
              <div>
                <span className="text-pink-500 font-medium">A better way</span> to learn
                <br />
                <span className="text-sm text-gray-600">
                  Refresh essential concepts before each chapter. Tackle questions with confidence and build your skills efficiently.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Format Section */}
      <div className={`mt-12 ${border("CMD-MATERIAL-FORMAT")}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">CHOOSE MATERIAL FORMAT</h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Responsive Button Group (NO SCROLL) */}
          <div className="w-full sm:w-[80%]">
            <div className="flex flex-col sm:flex-row justify-between gap-2 p-1 rounded-[16px] border border-t-[1px] border-l-[1px] border-r-[4px] border-black border-b-[6px] bg-white h-auto sm:h-20">
              {/* Lite Kit */}
              <button
                onClick={() => setSelectedFormat("Lite Kit")}
                className={`w-full sm:w-1/3 flex items-center gap-2 px-4 py-3 rounded-[14px] font-medium transition-all justify-center ${
                  selectedFormat === "Lite Kit"
                    ? "bg-[#4F7BF8] text-white shadow border border-black text-2xl"
                    : "text-black"
                }`}
              >
                <span>Lite Kit</span>
              </button>

              {/* Essentials Kit */}
              <button
                onClick={() => setSelectedFormat("Essentials Kit")}
                className={`w-full sm:w-1/3 flex items-center gap-2 px-4 py-3 rounded-[14px] font-medium transition-all justify-center ${
                  selectedFormat === "Essentials Kit"
                    ? "bg-[#4F7BF8] text-white shadow border border-black text-2xl"
                    : "text-black"
                }`}
              >
                <span>Essentials Kit</span>
              </button>

              {/* Pro Kit */}
              <button
                onClick={() => setSelectedFormat("Pro Kit")}
                className={`w-full sm:w-1/3 flex items-center gap-2 px-4 py-3 rounded-[14px] font-medium transition-all justify-center ${
                  selectedFormat === "Pro Kit"
                    ? "bg-[#4F7BF8] text-white shadow border border-black text-2xl"
                    : "text-black"
                }`}
              >
                <span>Pro Kit</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-blue-600">
            <Truck className="w-6 h-6" />
            <span className="text-sm">Delivered in 5–7 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
