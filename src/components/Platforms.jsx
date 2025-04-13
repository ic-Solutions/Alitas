import React from "react";

import deviceImage from "../assets/available.png";
import phones from "../assets/phones.png";

function Platforms() {
  return (
    <div className="lg:py-40 py-20 bg-white">
      <div className="mx-auto flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 flex justify-center align-center">
          <div className="relative bg-white rounded-3xl z-10">
            <img src={deviceImage} alt="devices illustration" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-10 font-[SF-Pro-Display] text-center lg:text-left lg:ps-24">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              App Works From
              <br /> Desktop, Tablet To Mobile
            </h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              IOS app for iPhone and iPad, Android app for mobile
              <br /> phones, IOS app for iPhone and iPad.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">All Your Data Is Safe & Secured</h3>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              IOS app for iPhone and iPad, Android app for mobile
              <br /> phones, IOS app for iPhone and iPad.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-purple-200 flex items-center justify-center p-3 md:p-6 rounded-xl mx-auto font-[SF-Pro-Display] mt-10 mb-10 max-w-7xl w-full">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">
              Try It Yourself
              <br />
              Get The App Now
            </h1>
            <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Alitas AI translator can translate up to 2,000 characters. Alitas Alitas AI translator can translate up to 2,000 characters. Alitas
              Alitas AI translator can translate up to 2,000 characters. Alitas
            </p>
            <div className="flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 hidden lg:flex">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 md:h-14"
                />
              </a>
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12 md:h-14"
                />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="p-5">
            <img src={phones} alt="Login Screen" />
          </div>
          <div className="flex flex-row items-center justify-center lg:justify-start gap-2 lg:hidden">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 md:h-14"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 md:h-14"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platforms;
