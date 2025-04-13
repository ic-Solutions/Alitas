import { IconPlus } from "@tabler/icons-react";
import React from "react";
import { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected FAQ
  };
  return (
    <div className="font-[SF-Pro-Display]">
      <div className="text-center lg:px-4 lg:pb-16 pb-12">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Frequently Asked Questions</h1>
        <p className="text-sm/6 lg:text-base/7 lg:mt-6 mt-3 text-gray-500 lg:px-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
      </div>

      <div>
        {[
          {
            question: "How Can It Help Hospitals?",
            answer:
              "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise required in administering them. We do have customers who choose to use our oils internally.",
          },
          {
            question: "How Accurate Is Alitas AI With Translation?",
            answer:
              "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise required in administering them. We do have customers who choose to use our oils internally.",
          },
          {
            question: "How Can It Help Hospitals?",
            answer:
              "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise required in administering them. We do have customers who choose to use our oils internally.",
          },
          {
            question: "How Can It Help Hospitals?",
            answer:
              "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise required in administering them. We do have customers who choose to use our oils internally.",
          },
          {
            question: "How Can It Help Hospitals?",
            answer:
              "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise required in administering them. We do have customers who choose to use our oils internally.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-lg mb-4 border-1 border-gray-200 shadow-sm ${item.answer ? " text-black text-lg" : "bg-white text-black"} hover:bg-(--color-primary) hover:text-white ${activeIndex === index ? "bg-(--color-primary) text-white" : ""}`}
          >
            <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
              <h3 className="text-base sm:text-lg">{item.question}</h3>
              <span className={`text-xl sm:text-2xltransition-all duration-300${activeIndex === index ? "transform rotate-45" : ""}`}><IconPlus/></span>
            </div>
            {activeIndex === index && item.answer && (
              <div className={`p-4 text-sm sm:text-base transform transition-all duration-300 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
