import { ArrowRight } from "lucide-react";
import React from "react";
import book from "../../../../public/Images/books.png";

const Metrials_Cards = ({ data }) => {
  return (
    <div className="w-[90%] font-body">
      <div className="border h-[450px] border-red-500 bg-gray-400/50"></div>
      <div className="flex-between w-full">
        <h1 className="mt-2 font-semibold text-lg">{data.title}</h1>
        <ArrowRight color="#517ef1" />
      </div>
      <div className="w-full border border-red-500">
        <h3 className="text-xs text-[#517ef1]">{data.date}</h3>
        <div className="flex">
          <img src={book} alt="Image" className="w-[25px] h-[25px]" />
          <p className="text-sm text-gray-700 font-medium">{data.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default Metrials_Cards;
