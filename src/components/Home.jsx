import React from "react";

import Footer from "./Footer";
import Faqs from "./Faqs";

import LivePreview from "./LivePreview";
import { FeaturesSection } from "./FeaturesSection";
import HeroSection from "./HeroSection";
import WhatWeOffer from "./WhatWeOffer";
import IndustriesWeServe from "./IndustriesWeServe";
import Platforms from "./Platforms";

const Home = () => {
  return (
    <div className="y-10">
      <HeroSection />
      <div className="lg:mx-[140px] mx-[16px]">
        <FeaturesSection />
        <LivePreview />
        <WhatWeOffer />
        <IndustriesWeServe />
        <Faqs />
        <Platforms />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
