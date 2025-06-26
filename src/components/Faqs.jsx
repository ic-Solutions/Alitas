import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const faqs = [
  {
    question: "1. How long does it take to onboard an organisation?",
    answer: `<b>Alitas AI</b> is simple and easy to navigate. With <b>Single Sign-On (SSO)</b> support, healthcare
providers and clinicians can seamlessly connect the app with their existing systems.
Designed with a user-friendly approach, the onboarding process is <b>simple and
hassle-free,</b> requiring no complex configuration or lengthy installation process.<br/>
Traditional software rollouts can take weeks or months to set up and function fully. With
<b>Alitas AI</b>, healthcare providers and clinicians can use the app within a few days. Our
experienced support team ensures that users have a seamless experience, providing
hands-on assistance every step of the way to help you utilise the app to its fullest potential
from day one.<br/>
Experience faster deployment, limited downtime, and instant access to real-time language
support and communication tools, supported by <b>Alitas AI’s streamlined onboarding
process</b>.`,
  },
  {
    question: "2. Is there any training for the organisation to make the usage of this tool seamless?",
    answer: `<b>Absolutely!</b> We ensure that users have a smooth onboarding process, providing extensive
training for both end users and administrators. This enables users to possess the required
knowledge and skills to use Alitas AI to its fullest potential.`,
  },
  {
    question: "3. Do healthcare providers have the flexibility to store patients’ data?",
    answer: `We do not save any health information of the patients on the platform. But meetings
summaries are stored for reporting purposes. All information is securely kept within the
region, meeting the highest data protection and security standards.`,
  },
  {
    question: "4. How does this tool help in reducing wait time?",
    answer: `Receiving prompt medical care remains a challenge for non-native speakers, asylum
seekers, and refugees. Traditional consultations frequently create a need for availability of
interpreters, resulting in delay in diagnosis, treatment, and unexpected wait times, more so
in emergencies when every second counts.<br/>
With <b>Alitas AI</b>, patients can get diagnosed and treated round-the-clock without waiting for a
third-party interpreter. Our instant language translation platform enables clear
communication between providers and patients, ensuring that diagnosis and treatment can
begin without any hassle. Be it a routine check-up or a critical emergency, Alitas ensures
direct communication, making healthcare accessibility faster for everyone at all times,
regardless of the patient's linguistic background.`,
  },
  {
    question: "5. Is there a way to record satisfaction levels of the patient at the end of the medical consultation?",
    answer: `Once the consultation is over, patients have the flexibility to express their satisfaction levels
instantly through the app. Besides that, they are also free to to contact our support team for
sharing feedback, enabling us to enhance our healthcare services.`,
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected FAQ
  };
  return (
    <div className="font-[SF-Pro-Display]" id="faqs">
      <div className="text-center lg:px-4 lg:pb-16 pb-12">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Frequently Asked Questions</h1>
        <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[80%] mx-auto">
          Scan through our <b>FAQs</b> to gain clarity and thorough understanding of how <b>Alitas AI</b> can help you lower wait times, improve patient health outcomes, and overcome language
          barriers. Know more about the ways in which our app enables healthcare providers to deliver seamless, high-quality care, at all times. <br />
          <b>Learn how we can make a difference — have a look at our FAQs now!</b>
        </p>
      </div>
      {/* very simple collection of divs that applies open styling only to the div with the active index */}
      <div>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg mb-4 border-1 border-gray-200 shadow-sm transition-all duration-300 ${
              item.answer ? "text-black text-lg" : "bg-white text-black"
            } hover:bg-(--color-primary) hover:text-white ${activeIndex === index ? "bg-(--color-primary) text-white" : ""}`}
          >
            <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
              <h3 className="text-base sm:text-lg">{item.question}</h3>
              <span className={`text-xl sm:text-2xl transition-transform duration-300 ${activeIndex === index ? "transform rotate-45" : ""}`}>
                <IconPlus />
              </span>
            </div>
            <div className={`px-4 text-sm sm:text-base overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-[100%] opacity-100 mt-1 pb-4" : "max-h-0 opacity-0 mt-0 pb-0"}`}>
              {/* needs to be dangerously set to retain text formatting as defined in the string value itself */}
              <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
