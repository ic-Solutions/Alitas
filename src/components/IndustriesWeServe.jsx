import { useState, useRef, useEffect } from "react";
import dImage from "../assets/doc.png";

function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState("Healthcare");
  const tabIndicatorRef = useRef(null);
  const tabsContainerRef = useRef(null);

  const industries = ["Healthcare", "Immigration", "Tourism", "Finance", "Manufacturing"];

  useEffect(() => {
    const activeTabElement = tabsContainerRef.current.querySelector(`.tab-button.active`);
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
      default:
        return (
          <>
            <h2 className="text-2xl font-bold text-left">Alitas AI bridges the gap. </h2>
            <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[80%] text-left">
              With real-time, medically precise translation available at all times, healthcare providers and clinicians can prioritise the ultimate
              goal—providing superior care and improving patient experiences.
            </p>
            <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 text-left">With Alitas, you get:</p>
            <ul className="mt-6 space-y-2">
              {[
                "No more interrupted access to superior care – Real-time language support eliminates the wait for interpreter availability.".split(
                  " – "
                ),
                "Hesitation-free communication of health concerns – Language is not a hurdle to describing symptoms and receiving effective treatment.".split(
                  " – "
                ),
                "Precise and specialised medical terminology – Specialised translations for eliminating scope of misdiagnosis.".split(" – "),
                "Increased data privacy and security – Eliminating the requirement of third-party interpreters when discussing sensitive health conditions.".split(
                  " – "
                ),
                "Strengthened provider-patient relationships – Direct communication regardless of patient’s linguistic background, building trust and confidence on mutual ends.".split(
                  " – "
                ),
                "Single-minded focus from your doctor – Eliminating disruptions, providing high-quality care.".split(" – "),
                "Lowering scope of misdiagnosis – Instant and precise translation results in effective clinical treatment.".split(" – "),
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">
                    <b>{txt[0]}</b> - {txt[1]}
                  </p>
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
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Industries We Serve</h1>
        <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 lg:max-w-[80%] mx-auto">
          Alitas AI is presently accessible by healthcare providers and clinicians, providing instant and accurate language support—strengthening
          doctor-patient communication. Moving forward, we are working towards extending our platform’s capabilities to diverse industries—namely,
          legal, immigration, and customer support—where precision in multilingual interaction is just as crucial.
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
          <div ref={tabIndicatorRef} className="absolute bottom-0 left-0 h-1 bg-purple-600 transition-all duration-300 z-10 hidden lg:block"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:my-10 my-5">
          <div className="lg:w-1/2">
            <img src={dImage} alt="Industry Example" className="rounded-[20px] shadow-md w-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 pt-8 lg:text-left text-center">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeServe;
