import React from "react";
import { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected FAQ
  };
  return (
    <>
      <div className="text-center mt-12 px-4 sm:px-8 md:px-20 lg:mx-40 font-[SF-Pro-Display]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mt-5 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
          <br className="hidden sm:block" /> standard dummy text ever since the
          1500s, when an
        </p>
      </div>

      <div className="px-4 sm:px-8 md:px-20 lg:mx-40 my-20 font-[SF-Pro-Display]">
        {[
          {
            question: "How Can It Help Hospitals?",
            answer: "",
          },
          {
            question: "How Accurate Is Alitas AI With Translation?",
            answer:
              "We do not recommend the general internal use of essential oils. Essential oils are highly concentrated and have the capacity to cause serious damage if used internally without the necessary expertise required in administering them. We do have customers who choose to use our oils internally.",
          },
          {
            question: "How Can It Help Hospitals?",
            answer: "",
          },
          {
            question: "How Can It Help Hospitals?",
            answer: "",
          },
          {
            question: "How Can It Help Hospitals?",
            answer: "",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-lg mb-4 ${
              item.answer ? " text-black text-lg" : "bg-white text-black"
            } hover:bg-purple-600 hover:text-white`}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-base sm:text-lg">{item.question}</h3>
              <span className="text-xl sm:text-2xl">
                {activeIndex === index ? "✖" : "+"}
              </span>
            </div>
            {activeIndex === index && item.answer && (
              <div className="p-4 text-sm sm:text-base">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqs;
