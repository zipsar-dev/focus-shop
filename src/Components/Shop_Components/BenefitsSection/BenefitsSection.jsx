import React from "react";
import {
  BookOpenCheck,
  BrainCircuit,
  PencilLine,
  MessageSquareMore,
} from "lucide-react";

export default function BenefitsSection() {
  return (
    <div className="bg-white border border-black rounded-[12px] p-6 md:p-10  max-w-[76%] mx-auto my-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left: Logo + Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Benefits of using the</h2>
          <h3 className="text-2xl font-bold text-blue-600">Focus Reviewer</h3>
          <img
            src="public\Images\logo.png"
            alt="Vivitsu Logo"
            className="w-40 mx-auto md:mx-0 mt-4"
          />
        </div>

        {/* Right: Text block */}
        <div className="text-gray-800 text-[15px] leading-relaxed">
          <p className="font-semibold mb-2">
            Wondering how it will benefit you?
          </p>
          <p className="mb-4">
            CA Foundation has become tougher than ever. With passing percentage
            at around 15%, it is very crucial to study from the right material
            and clear in the 1st attempt.
          </p>
          <p className="font-semibold">
            Hence, we present the CA Foundation Reviewer. Ultimate CA Foundation
            Question Bank features modified RTP, MTP, PYP questions, ensuring
            conceptual clarity and exam readiness. Your essential guide to acing
            your first professional exam.
          </p>
        </div>
      </div>

      {/* Bottom: Icons row */}
      <div className="mt-8">
        <p className="text-base font-semibold text-gray-800 mb-4">
          Problems we target to solve:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <BookOpenCheck className="w-7 h-7 mb-2 text-gray-800" />
            <p className="text-sm">Helps you revise.</p>
          </div>
          <div className="flex flex-col items-center">
            <BrainCircuit className="w-7 h-7 mb-2 text-gray-800" />
            <p className="text-sm">Helps in conceptual clarity</p>
          </div>
          <div className="flex flex-col items-center">
            <PencilLine className="w-7 h-7 mb-2 text-gray-800" />
            <p className="text-sm">Helps in writing answers in exam</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageSquareMore className="w-7 h-7 mb-2 text-gray-800" />
            <p className="text-sm">Unique Question and Answer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
