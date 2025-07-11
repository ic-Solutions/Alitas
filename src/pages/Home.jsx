import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import LivePreview from "../components/LivePreview";
import WhatWeOffer from "../components/WhatWeOffer";
import IndustriesWeServe from "../components/IndustriesWeServe";
import Faqs from "../components/Faqs";
import Platforms from "../components/Platforms";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
};

export default Home;
