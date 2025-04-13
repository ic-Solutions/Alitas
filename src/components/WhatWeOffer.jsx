import React, { useState } from "react";

import offerings from "../assets/what-we-offer.png";
import { IconChevronDown } from "@tabler/icons-react";

function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <div className="flex flex-col md:flex-row justify-between items-center my-1 gap-14">
        {" "}
        {/* Changed items-center to items-start */}
        {/* Accordion Section */}
        <div className="w-full lg:w-[45%] transition-all">
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
                className={`transition-all lg:p-10 lg:pt-10 p-3 duration-300 border-b border-gray-300 ${isActive ? "bg-[#F5F3FF] border-b-0" : ""}`}
              >
                <h3
                  className="lg:text-xl text-lg font-semibold flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  {title}
                  <IconChevronDown className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                </h3>
                <div // Container for the content with max-height
                  className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
                >
                  <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Image Section */}
        <div className="lg:w-[55%] w-full transition-transform duration-300">
          <img
            src={offerings}
            alt="Overcoming Language Barriers"
            className="w-full object-contain z-10 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
