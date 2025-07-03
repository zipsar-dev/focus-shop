import React from "react";
import { BookOpen, FileLock2, PackageCheck, Truck } from "lucide-react";

export default function Selected_Hero() {
  return (
    <div className="bg-[#fffafc] min-h-screen p-6 md:p-12 font-sans text-gray-800">
      {/* CMD-BREADCRUMB */}
      <div className="text-sm text-gray-500 mb-6 border border-blue-300 p-2 rounded">
        Home / Shop Study Material /{" "}
        <span className="text-black">CA Foundation Reviewer</span>
      </div>

      {/* CMD-HERO-SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 border border-green-300 p-4 rounded">
        {/* CMD-IMAGE-SECTION */}
        <div className="flex-1 flex justify-center items-center border border-yellow-400 p-2 rounded">
          <img
            src="/path/to/your/image.png" // Replace with actual image path
            alt="CA Foundation Reviewer"
            className="w-[90%] max-w-[500px] drop-shadow-xl"
          />
        </div>

        {/* CMD-TEXT-CONTENT */}
        <div className="flex-1 border border-purple-300 p-4 rounded">
          <h1 className="text-3xl font-semibold mb-2">Last Attempt Kit </h1>
          <p className="text-red-500 font-medium mb-4">Sept'25 & Jan'26</p>

          {/* CMD-BULLET-POINTS */}
          <ul className="space-y-4 mb-10 border border-gray-300 p-4 rounded">
            <li className="flex gap-3 items-start">
              <BookOpen className="mt-1 text-blue-500" />
              <div>
                <span className="font-semibold text-gray-700">Smart Study</span>{" "}
                › Hard Study
                <br />
                <span className="text-sm text-gray-600">
                  Solve more questions in less time with our chapter-wise and
                  topic-wise bifurcation. Focus on key areas, identify your weak
                  spots, and strengthen them with targeted practice. Efficient
                  and effective, every step of the way.
                </span>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <FileLock2 className="mt-1 text-red-400" />
              <div>
                <span className="text-red-500 font-medium">
                  Build your confidence
                </span>{" "}
                from day 1<br />
                <span className="text-sm text-gray-600">
                  Start solving ICAI-grade questions right from the beginning,
                  formatted as they will appear on the exam. This strategy
                  builds confidence and ensures you're ready for any challenge
                  on exam day.
                </span>
              </div>
            </li>

            <li className="flex gap-3 items-start">
              <PackageCheck className="mt-1 text-black" />
              <div>
                <span className="text-pink-500 font-medium">A better way</span>{" "}
                to learn
                <br />
                <span className="text-sm text-gray-600">
                  Refresh essential concepts before each chapter. Tackle
                  questions with confidence and build your skills efficiently,
                  saving time and optimizing your learning process.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* CMD-MATERIAL-FORMAT */}
      <div className="mt-12 border border-orange-300 p-6 rounded">
        <h2 className="text-lg font-semibold mb-3">CHOOSE MATERIAL FORMAT</h2>

        {/* CMD-FORMAT-BUTTONS */}
        <div className="flex flex-wrap gap-4 border border-indigo-300 p-4 rounded">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-300 to-purple-400 text-white font-medium shadow-md">
            📘 Paper Books
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 font-medium hover:bg-gray-100">
            🔒 Secure PDF
          </button>
          <button className="px-6 py-3 rounded-lg border border-pink-400 text-pink-600 font-medium bg-pink-50 shadow-sm">
            📦 Bundle (Secure PDF + Paper Book){" "}
            <span className="ml-2 text-xs bg-pink-400 text-white px-2 py-0.5 rounded">
              Recommended
            </span>
          </button>
        </div>

        {/* CMD-DELIVERY-INFO */}
        <div className="flex items-center gap-2 mt-6 text-blue-600 border border-cyan-300 p-2 rounded">
          <Truck className="w-5 h-5" />
          <span className="text-sm">Delivered in 5–7 Days</span>
        </div>
      </div>
    </div>
  );
}

//File structure and component tags for reference:

// | CMD Tag               | Section                  |
// | --------------------- | ------------------------ |
// | `CMD-BREADCRUMB`      | Top navigation path      |
// | `CMD-HERO-SECTION`    | Full layout container    |
// | `CMD-IMAGE-SECTION`   | Left image section       |
// | `CMD-TEXT-CONTENT`    | Right content section    |
// | `CMD-BULLET-POINTS`   | Bullet explanation list  |
// | `CMD-MATERIAL-FORMAT` | Choose material section  |
// | `CMD-FORMAT-BUTTONS`  | Button group for options |
// | `CMD-DELIVERY-INFO`   | Delivery timing & icon   |
