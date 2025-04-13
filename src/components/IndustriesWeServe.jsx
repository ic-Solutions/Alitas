import { useState } from "react";

import dImage from "../assets/doc.png";

function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState("Healthcare");

  return (
    <div className="lg:my-40 my-20 font-[SF-Pro-Display]">
      <div className="text-center mt-12 px-4 sm:px-8">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Industries we serve</h1>
        <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br className="hidden sm:block" /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
      </div>

      <div className="lg:mt-16 mt-4 lg:px-4">
        <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 whitespace-nowrap no-scrollbar">
          {["Healthcare", "Immigration", "Tourism", "Finance", "Manufacturing"].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-lg font-medium pb-2 lg:px-15 px-5 border-b-4 border-gray-300 hover:cursor-pointer ${
                activeTab === tab ? "border-b-4 border-purple-600" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:my-10 my-5">
          <div className="lg:w-1/2">
            <img src={dImage} alt="Industry Example" className="rounded-[20px] shadow-md w-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 pt-8 lg:text-left text-center">
            <h2 className="text-2xl font-bold">How Alitas AI is changing lifes?</h2>
            <p className="lg:text-md text-sm mt-4 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "No language barriers in communication",
                "Flawless communication between doctors & patients",
                "Instant communication in real time",
                "No need for a translator anymore",
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">{txt}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeServe;
