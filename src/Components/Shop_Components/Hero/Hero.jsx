import React from "react";

const Hero = () => {
  return (
    <div className="w-[80%] mx-auto h-screen flex-center mt-20">
      <div className="w-[30%] border-t border-gray-400/50 h-full">
        <h1 className="w-full h-[80px] border-b border-gray-400/50 flex-center justify-start text-gray-400 font-body text-lg px-5">
          Filtered by Course
        </h1>

        <div className="mt-5 font-body px-5">
          <h1 className="font-bold text-lg">Chartered Accountancy</h1>
          <ul className="px-3">
            <li className="text-base mt-3 text-stone-700">
              Foundation{" "}
              <span className="text-[8px] text-blue-400">SEPT'25 & JAN'26</span>
            </li>
            <li className="text-base mt-3 text-stone-700">
              Intermediate{" "}
              <span className="text-[8px] text-blue-400">SEPT'25 & JAN'26</span>
            </li>
            <li className="text-base mt-3 text-stone-700">
              Final{" "}
              <span className="text-[8px] text-blue-400">SEPT'25 & JAN'26</span>
            </li>
          </ul>
        </div>

        <div className="mt-10 font-body px-5">
          <h1 className="font-bold text-lg">Test Series</h1>
          <ul className="px-3">
            <li className="text-base mt-3 text-stone-700">
              Foundation{" "}
              <span className="text-[8px] text-red-400">SEPT'25 & JAN'26</span>
            </li>
            <li className="text-base mt-3 text-stone-700">
              Intermediate{" "}
              <span className="text-[8px] text-red-400">SEPT'25 & JAN'26</span>
            </li>
            <li className="text-base mt-3 text-stone-700">
              Final{" "}
              <span className="text-[8px] text-red-400">SEPT'25 & JAN'26</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[70%] border border-gray-400/50 border-r-transparent h-full font-body">
        <div className="w-full mt-15 col-center">
          <h1 className="text-xl font-semibold">CA Foundation</h1>
          <div className="w-[80%] mx-auto flex-center mt-10">
            <div className="w-1/2 flex-center">
              <div className="w-[80%] h-[450px] bg-gray-400"></div>
            </div>
            <div className="w-1/2 flex-center">
              <div className="w-[80%] h-[450px] bg-gray-400"></div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto mt-15 border border-red-500">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
