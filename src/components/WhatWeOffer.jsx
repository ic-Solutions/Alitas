import React, { useState } from "react";

import offerings from "../assets/Offerings.png";
import { IconChevronDown } from "@tabler/icons-react";

function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="lg:my-40 my-20 font-[SF-Pro-Display]">
      <div className="text-center px-4 lg:pb-24 pb-2">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">What we Offer ?</h1>
        <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          <br className="hidden sm:block" /> standard dummy text ever since the 1500s, when an
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start my-1 gap-14">
        {/* Accordion Section */}
        <div className="w-full md:w-1/2">
          {[
            `Overcoming Language Barriers in Healthcare`,
            "Overcoming Language Barriers",
            "Overcoming Language Barriers",
            "Overcoming Language Barriers",
          ].map((title, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`transition-all lg:p-10 lg:pt-10 p-3 duration-300 border-b border-gray-300 ${
                  isActive ? "bg-[#F5F3FF] h-[100%] border-b-0" : "h-[100%] border-b-1"
                }`}
              >
                <h3 className="lg:text-xl text-lg font-semibold flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                  {title}
                  <IconChevronDown className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                </h3>
                <p className={`lg:text-lg text-sm text-gray-600 mt-4 leading-relaxed transition-all duration-300 ${isActive ? "h-[100%] opacity-100" : "h-0 opacity-0"}`}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
              </div>
            );
          })}
        </div>

        {/* Image Section */}
        <div className="lg:w-3/4 w-full">
          <img src={offerings} alt="Overcoming Language Barriers" className="w-full mdobject-contain z-10" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
