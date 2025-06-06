import React from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/aboutUs/heroImage.png";

import trustworthy from "../assets/aboutUs/values/trustworthy.svg";
import innovation from "../assets/aboutUs/values/innovation.svg";
import empathetic from "../assets/aboutUs/values/empathetic.svg";
import professional from "../assets/aboutUs/values/professional.svg";

import healthcare from "../assets/aboutUs/industries/healthcare.png";
import immigration from "../assets/aboutUs/industries/immigration.png";
import tourism from "../assets/aboutUs/industries/tourism.png";
import finance from "../assets/aboutUs/industries/finance.png";
import manufacturing from "../assets/aboutUs/industries/manufacturing.png";

import { IconArrowRight } from "@tabler/icons-react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop";

const coreValues = [
  {
    title: "Trustworthy",
    icon: trustworthy,
    body: "We ensure every interaction is secure, accurate, and dependable — because clarity builds confidence.",
  },
  {
    title: "Innovation",
    icon: innovation,
    body: "We ensure every interaction is secure, accurate, and dependable — because clarity builds confidence.",
  },
  { title: "Empathetic", icon: empathetic, body: "We design with people in mind, putting human understanding at the heart of every experience." },
  {
    title: "Professional",
    icon: professional,
    body: "We ensure every interaction is secure, accurate, and dependable — because clarity builds confidence.",
  },
];
const industriesWeServe = [
  {
    title: "Healthcare",
    icon: healthcare,
    body: "With real-time, medically accurate translation, healthcare providers can focus on what matters most — delivering exceptional care and enhancing patient experiences.",
  },
  {
    title: "Immigration",
    icon: immigration,
    body: "Real-time translation lets immigration officials focus on what matters — providing personalized, high-quality guidance to every applicant.",
  },
  {
    title: "Tourism",
    icon: tourism,
    body: "Seamless communication enables tourism enterprises to focus on what matters most — delivering authentic experiences that deepen travellers’ appreciation of local culture.",
  },
  {
    title: "Finance",
    icon: finance,
    body: "Real-time translation empowers financial institutions to connect globally, simplify complex information, and support faster, informed decisions tailored to each client’s financial goals.",
  },
  {
    title: "Manufacturing",
    icon: manufacturing,
    body: "With real-time, precise translation available at all times, manufacturers can optimise global supply chains, fueling innovation and competitiveness.",
  },
];

function About() {
  const navigate = useNavigate();
  const onClick = (industry) => {
    navigate(`/?tab=${encodeURIComponent(industry)}#solutions`);
  };

  return (
    <div className="font-[SF-Pro-Display]">
      <div className="bg-[linear-gradient(90deg,#AC73D966_0%,#4A00C966_100%)] lg:m-10 lg:pt-4 lg:p-8 m-4 pt-1 p-2 rounded-3xl">
        <nav className="bg-white lg:bg-transparent my-6 font-[SF-Pro-Display] w-full lg:rounded-3xl rounded-full" style={{ paddingInline: "0.02rem" }} id="nav">
          <Navbar />
        </nav>
        <div className="flex flex-col md:flex-row justify-between lg:p-12 lg:px-24 gap-10 pb-8">
          <div className="flex-1/2 flex flex-col text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-[700] font-[SF Pro Display] leading-[138%] text-[#1F1F1F] mb-8">
              Empowering Connection. <br />
              Anywhere. Anytime.
            </h1>
            <span className="lg:text-lg text-sm/6 lg:max-w-[80%] leading-[148%]">
              Alitas AI is a voice translation platform for high-stakes environments, offering real-time, domain-specific translation to help frontline teams communicate without language barriers.
            </span>
          </div>
          <div className="flex-1/2 justify-center flex">
            <img className="" src={heroImage} />
          </div>
        </div>
      </div>
      <div className="lg:mx-[140px] mx-[16px]">
        <div className="flex flex-col gap-8 text-center lg:px-14 py-16 font-[SF-Pro-Display]">
          <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Why Choose Us?</h1>
          <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[80%] mx-auto">
            Founded to serve the growing demand for seamless virtual interactions, Alitas bridges the gap between technology and human connection. Whether it’s a doctor conducting a life-saving
            consultation, a team collaborating across continents, or a family staying in touch, Alitas provides a platform that is secure, reliable, and intuitive.
          </p>
        </div>
        <div className="flex flex-col gap-8 text-center lg:px-14 py-16 font-[SF-Pro-Display]">
          <h2 className="text-2xl px-4 lg:px-0 pb-8 lg:text-5xl/16 font-bold leading-tight text-gray-900">Our Core Values</h2>
          <div className="flex justify-between flex-wrap">
            {coreValues.map(({ title, icon, body }) => (
              <span className="flex flex-col w-[45%] lg:w-1/4 lg:px-8 lg:text-lg text-sm/6 lg:mx-auto leading-[148%] justify-start items-center" key={title}>
                <img src={icon} className="h-[35px] w-[35px] lg:h-[72px] lg:w-[72px] mb-2 lg:mb-8" />
                <span className="font-[600] text-2xl">{title}</span>
                <br />
                <span className="text-gray-600 lg:text-center text-justify mb-8">{body}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 text-center lg:px-14 py-16 font-[SF-Pro-Display]">
          <h2 className="text-2xl px-4 lg:px-0 pb-8 lg:text-5xl/16 font-bold leading-tight text-gray-900">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center">
            {industriesWeServe.map(({ title, icon, body }, index) => (
              <span
                className="w-full lg:w-1/3 lg:text-lg text-sm/6 leading-[148%] relative lg:p-8 mb-16 items-center text-center flex flex-col lg:items-start lg:text-left justify-between"
                key={title}
              >
                {[0, 1, 3].includes(index) ? <div className="lg:flex border-4 border-black rounded-full w-[30px] h-[30px] hidden absolute right-0 bottom-0 " /> : ""}
                {[0, 1, 3].includes(index) ? <div className="lg:flex border-2 border-black h-[calc(100%-60px)] hidden absolute right-[13px] top-[15px] " /> : ""}
                {[0, 1, 2, 3, 4].includes(index) ? <div className="lg:flex border-2 border-black w-[calc(100%-60px)] hidden absolute left-[15px] bottom-[15px] " /> : ""}
                <div className="flex flex-col items-center lg:items-start">
                  <img src={icon} className="h-[60px] w-[60px] lg:h-[50px] lg:w-[50px] lg:mb-8" />
                  <span className="font-[600] text-2xl">{title}</span>
                  <br />
                  <span className="text-gray-700">{body}</span>
                </div>
                <span className="flex w-max-fit items-center gap-2 hover:text-gray-600 hover:cursor-pointer pt-4" onClick={()=>onClick(title)}>
                  Read Mode <IconArrowRight size={24} />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default About;
