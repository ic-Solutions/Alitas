import { useState, useRef, useEffect } from "react";
import dImage from "../assets/doc.png";

function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState("Healthcare");
  const tabIndicatorRef = useRef(null);
  const tabsContainerRef = useRef(null);

  const industries = ["Healthcare", "Immigration", "Tourism", "Finance", "Manufacturing"];

  useEffect(() => {
    const activeTabElement = tabsContainerRef.current.querySelector(
      `.tab-button.active`
    );
    if (activeTabElement && tabIndicatorRef.current) {
      tabIndicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
      tabIndicatorRef.current.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;
    } else if (tabIndicatorRef.current) {
      tabIndicatorRef.current.style.width = `0px`;
      tabIndicatorRef.current.style.transform = `translateX(0px)`;
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Healthcare":
        return (
          <>
            <h2 className="text-2xl font-bold">How Alitas AI is changing elsewhere?</h2>
            <p className="lg:text-md text-sm mt-4 text-gray-500">
              Alitas AI is revolutionizing the field by breaking down communication barriers and fostering seamless interaction between clients, regardless of language differences.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "No language barriers in communication",
                "Flawless communication between clients",
                "Instant communication in real time",
                "No need for a translator anymore",
                "Improved customer experience and outcomes",
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">{txt}</p>
                </li>
              ))}
            </ul>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-2xl font-bold">Streamlining Manufacturing Communication with AI</h2>
            <p className="lg:text-md text-sm mt-4 text-gray-500">
              Alitas AI optimizes communication in the manufacturing industry, ensuring smooth collaboration across diverse teams and international partners.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Effective communication across multilingual teams",
                "Clear instructions and documentation in various languages",
                "Improved collaboration in global supply chains",
                "Reduced errors due to miscommunication",
                "Enhanced efficiency in production processes",
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">{txt}</p>
                </li>
              ))}
            </ul>
          </>
        );
    }
  };

  return (
    <div className="lg:my-40 my-20 font-[SF-Pro-Display]">
      <div className="text-center mt-12 px-4 sm:px-8">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Industries we serve</h1>
        <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 lg:max-w-[80%] mx-auto">
          Explore how Alitas AI is transforming communication across various sectors, breaking down language barriers and fostering seamless interactions.
        </p>
      </div>

      <div className="lg:mt-16 mt-4 lg:px-4">
        <div ref={tabsContainerRef} className="relative flex sm:justify-around overflow-x-auto pb-4 whitespace-nowrap gap-4 flex-wrap justify-center">
          {industries.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`tab-button text-sm sm:text-lg font-medium pb-2 hover:cursor-pointer transition-all duration-300 border-b-2 border-transparent lg:border-b-2 ${
                activeTab === tab ? "active text-purple-600" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <div
            ref={tabIndicatorRef}
            className="absolute bottom-0 left-0 h-1 bg-purple-600 transition-all duration-300 z-10 hidden lg:block"
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:my-10 my-5">
          <div className="lg:w-1/2">
            <img src={dImage} alt="Industry Example" className="rounded-[20px] shadow-md w-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 pt-8 lg:text-left text-center">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeServe;