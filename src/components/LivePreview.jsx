import React from "react";
import phone0 from "../assets/phone.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";

const LivePreview = () => {
  return (
    <>
      <div className="text-center lg:my-40 my-10 lg:px-14">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">
          Alitas AI app preview
        </h1>
        <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
          <br className="hidden sm:block" />
          the industry's standard dummy text ever since the 1500s, when an
        </p>

        {/* Scrollable image container */}
        <div className="flex justify-start sm:justify-center mt-2 gap-10 sm:px-16 lg:py-10 lg:overflow-hidden overflow-auto scale-90 lg:scale-100">
          <img
            src={phone2}
            alt="Preview 1"
            className="w-[350px] object-cover"
          />
          <img
            src={phone0}
            alt="Preview 2"
            className="w-[350px] object-cover"
          />
          <img
            src={phone3}
            alt="Preview 3"
            className="w-[350px] object-cover"
          />
        </div>

        {/* Arrows and dots */}
        <div className="flex items-center justify-center space-x-5">
          <button
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></span>
            <span className="w-3.5 h-2.5 rounded-full bg-purple-600 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></span>
          </div>

          <button className="w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LivePreview;
