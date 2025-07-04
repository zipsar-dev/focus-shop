import React, { useState } from "react";
import { BookOpen, FileLock2, PackageCheck, Truck } from "lucide-react";

export default function Selected_Hero({ debug = false }) {
  const [selectedFormat, setSelectedFormat] = useState("Lite Kit");

  const border = (cmd) =>
    debug ? `border border-dashed border-red-400 p-2 rounded` : "";

  return (
    <div className="relative bg-[#fffafc] min-h-screen overflow-hidden font-sans text-gray-800">
      {/* Grid Background Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(79, 123, 248, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(79, 123, 248, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 p-6 md:p-12">
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

          <div className={`flex-1 w-full ${border("CMD-TEXT-CONTENT")}`}>
  <h1 className="text-4xl sm:text-5xl font-bold mb-4">Last Attempt Kit</h1>
  <p className="text-blue-600 font-semibold text-lg mb-6">Sept'25 & Jan'26</p>

  <ul className={`space-y-6 mb-10 leading-relaxed ${border("CMD-BULLET-POINTS")}`}>
    <li className="flex gap-4 items-start">
      <BookOpen className="mt-1 text-blue-500 w-6 h-6" />
      <div className="w-full">
        <span className="font-bold text-[20px] text-gray-800">
          Smart Study
        </span>{" "}
        <span className="font-medium text-[18px] text-gray-600">› Hard Study</span>
        <br />
        <span className="text-[17px] text-gray-700">
          Solve more questions in less time with our chapter-wise and topic-wise bifurcation.
        </span>
      </div>
    </li>

    <li className="flex gap-4 items-start">
      <FileLock2 className="mt-1 text-red-500 w-6 h-6" />
      <div className="w-full">
        <span className="text-green-600 font-bold text-[20px]">
          Build your confidence
        </span>{" "}
        <span className="font-medium text-[18px] text-gray-600">from day 1</span>
        <br />
        <span className="text-[17px] text-gray-700">
          Start solving ICAI-grade questions right from the beginning.
        </span>
      </div>
    </li>

    <li className="flex gap-4 items-start">
      <PackageCheck className="mt-1 text-black w-6 h-6" />
      <div className="w-full">
        <span className="text-pink-500 font-bold text-[20px]">
          A better way
        </span>{" "}
        <span className="font-medium text-[18px] text-gray-600">to learn</span>
        <br />
        <span className="text-[17px] text-gray-700">
          Refresh essential concepts before each chapter and build your skills efficiently.
        </span>
      </div>
    </li>
  </ul>
</div>

        </div>

        {/* Format Section */}
        <div className={`mt-12 ${border("CMD-MATERIAL-FORMAT")}`}>
          <div className="text-center mb-4 flex items-left ml-45">
            <h2 className="text-1xl font-semibold">CHOOSE MATERIAL FORMAT</h2>
          </div>

          <div className="flex flex-col items-center gap-4">
            {/* Responsive Button Group */}
            <div className="w-full sm:w-[80%]">
              <div className="flex flex-col sm:flex-row justify-between gap-2 p-1 rounded-[16px] border border-t-[1px] border-l-[1px] border-r-[4px] border-black border-b-[6px] bg-white h-auto sm:h-20">
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
    </div>
  );
}
