import React from "react";
import {
  BookOpenCheck,
  BrainCircuit,
  PencilLine,
  MessageSquareMore,
} from "lucide-react";

export default function BenefitsSection() {
  return (
    <div className="bg-white shadow-lg rounded-[32px] p-6 md:p-12 max-w-[76%] mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Column: Logo + Heading */}
        <div className="w-full md:w-1/3 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Benefits of using the
            </h2>
            <h3 className="text-3xl font-bold text-blue-600 mt-1">
              Focus Reviewer
            </h3>
            <img
              src="public/Images/logo.png"
              alt="Vivitsu Logo"
              className="w-36 mt-6"
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-2/3 space-y-6 text-gray-800 text-[15px] leading-relaxed">
          <div>
            <p className="font-semibold mb-2">
              Wondering how it will benefit you?
            </p>
            <p className="mb-4">
              CA Foundation has become tougher than ever. With the passing
              percentage around 15%, it is crucial to study from the right
              material and clear in the first attempt.
            </p>
            <p className="font-semibold">
              That’s why we created the CA Foundation Reviewer—your essential
              guide to acing your first professional exam. It combines RTPs,
              MTPs, PYPs, and ICAI material with concept-based learning and
              focused practice.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-gray-800 mb-4">
              Problems we solve:
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
              <div className="flex items-center gap-3">
                <BookOpenCheck className="w-6 h-6 text-blue-600" />
                <p className="text-sm">Helps you revise</p>
              </div>
              <div className="flex items-center gap-3">
                <BrainCircuit className="w-6 h-6 text-blue-600" />
                <p className="text-sm">Conceptual clarity</p>
              </div>
              <div className="flex items-center gap-3">
                <PencilLine className="w-6 h-6 text-blue-600" />
                <p className="text-sm">Answer writing practice</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquareMore className="w-6 h-6 text-blue-600" />
                <p className="text-sm">Unique Q&A format</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
