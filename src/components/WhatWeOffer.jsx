import React, { useState } from "react";

import offerings from "../assets/what-we-offer.png";
import { IconChevronDown } from "@tabler/icons-react";

const offeringsList = [
  {
    heading: "Overcome Language Barriers. Elevate Patient Care.",
    body: `Clear communication is essential in healthcare, yet existing language barriers can result in ineffective care, unnecessary costs, significant health complications. Alitas AI eliminates these challenges by providing accurate, real-time translations—24/7.
    <br/>Engineered to secure healthcare communication and make it seamless, Alitas prioritises patient care and privacy like never before. Experience its faster and high-quality care—right at your fingertips.`,
  },
  {
    heading: "Internationally Compliant Security and Privacy Standards",
    body: `<b>At Alitas</b>, patient privacy is at the core of everything we do. Our platform values patient
privacy by adhering to global data protection protocols, alongside meeting regional
healthcare privacy regulations. Knowing how sensitive a patient’s healthcare data is, Alitas
does not store any patient data—commanding the trust of patient and healthcare providers
across the globe. With Alias, patient-provider interaction remains private and secure around
the clock.`,
  },
  {
    heading: "Ensuring Accuracy in Patient-Provider Communication",
    body: `Miscommunication or lack of clarity in medical exchange between the healthcare provider
and the patient is a key factor in thousands of preventable deaths annually. Alitas AI
resolves these challenges with its in-built specialized medical vocabulary to ensure accurate
and context-driven translation in patient-provider communication. This helps Alitas in
bridging language gaps between healthcare providers and patients and minimising scope of
diagnostic errors—providing safer and high-quality care.
`,
  },
  {
    heading: "Seamless and Instant Language Support, Anytime, Anywhere",
    body: `Medical emergencies can happen anytime, anywhere but language barriers create a gap in
the patient-provider communication. Alitas AI addresses the need for instant language
translation by providing round-the-clock multilingual support. With Alitas, communication
between healthcare providers and patients is instant and effortless. Language is no longer a
barrier to timely and effective treatment—enabling healthcare providers to render superior
and inclusive care anytime, anywhere.
`,
  },
  {
    heading: "Eliminating Distractions, Enhancing Patient Care",
    body: `By eliminating language barriers, Alitas AI enables healthcare providers to concentrate fully
on diagnosis and treating patients, improving provider-patient communication. Distractions
during care can result in misdiagnosis and affect patient experiences—Alitas helps mitigate
such errors by streamlining consultations and generating instant summaries quickly within
the app. With instant accessibility to these notes at all times, providers can deliver seamless,
high-quality care.`,
  },
];

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
          {offeringsList.map((item, index) => {
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
                  {item.heading}
                  <IconChevronDown className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                </h3>
                <div // Container for the content with max-height
                  className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
                >
                  <p className="lg:text-lg text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }}></p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Image Section */}
        <div className="lg:w-[55%] w-full transition-transform duration-300">
          <img src={offerings} alt="Overcoming Language Barriers" className="w-full object-contain z-10 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
