import yourBackgroundImage from "../assets/background_right.png";
import yourBgImage from "../assets/background_left.png";
import upcmoing from "../assets/upcoming.png";
import phone from "../assets/nfnf 1.png";
import trans from "../assets/1_(2).svg";
import realTime from "../assets/real_time.svg";
import tablet from "../assets/tablet.svg";
import quickAccess from "../assets/quick_access.png";
import technology from "../assets/technology.png";
import language from "../assets/language.png";
import choose from "../assets/choose.svg";
import phone3 from "../assets/phone3.png";
import chinese from "../assets/3_.png";

const FeaturesSection = () => {
  return (
    <section id="featuresSection" className="mt-80 flex flex-col justify-center items-center gap-20 md:gap-40 mx-20 sm:px-5 lg:px-32 font-[SF-Pro-Display]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-30">
        <div className="lg:w-1/2">
          <p className="text-[#4908C6] text-sm uppercase mb-2">
            Problem Statement Comes Here?
          </p>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Instant Real-Time Translation With No Delay Seamless & Accurate
          </h3>
          <p className="text-base mt-6 text-gray-500 max-w-xl">
            Avitas AI Translator utilizes advanced AI models, including ChatGPT
            and Gemini, to deliver precise translations for words, sentences,
            and paragraphs.
            <br /> It ensures high-quality, context-aware results for seamless
            communication Gemini, to deliver precise translations for words,
            sentences, and paragraphs.
          </p>
        </div>
        <div
          className="relative rounded-3xl h-[30rem] lg:w-1/2 w-full flex items-center justify-center object-cover overflow-hidden"
          style={{
            backgroundImage: `url(${yourBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={phone}
            alt="Device"
            className="absolute h-[100%] top-10 z-10"
          />
          <div className="absolute top-8 left-10 w-40 sm:w-60 z-20">
            <img src={trans} alt="Trans" className="w-full" />
          </div>
          <div className="absolute bottom-8 right-10 w-44 sm:w-64 z-20">
            <img src={realTime} alt="RealTime" className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-30 font-[SF-Pro-Display]">
        <div className="lg:w-1/2">
          <p className="text-[#4908C6] text-sm uppercase mb-2">
            Problem Statement Comes Here?
          </p>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Instant Real-Time Translation With No Delay Seamless & Accurate
          </h3>
          <p className="text-base mt-6 text-gray-500 max-w-xl">
            Avitas AI Translator utilizes advanced AI models, including ChatGPT
            and Gemini, to deliver precise translations for words, sentences,
            and paragraphs.
            <br /> It ensures high-quality, context-aware results for seamless
            communication Gemini, to deliver precise translations for words,
            sentences, and paragraphs.
          </p>
        </div>
        <div
          className="relative rounded-3xl h-[30rem] lg:w-1/2 w-full flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${yourBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Tablet */}
          <img
            src={tablet}
            alt="Device"
            className="absolute h-[120%] top-20 z-10"
          />

          {/* Quick Access Box */}
          <div className="absolute top-[30%] left-[6%] sm:left-[10%] w-[180px] sm:w-[230px] z-20">
            <img src={quickAccess} alt="Quick Access" className="w-full" />
          </div>

          {/* Technology Box */}
          <div className="absolute top-[5%] right-[3%] sm:right-[5%] w-[200px] sm:w-[250px] z-20">
            <img src={technology} alt="Technology" className="w-full" />
          </div>

          {/* Upcoming Appointment Box */}
          <div className="absolute bottom-[5%] left-[20%] sm:left-[25%] w-[300px] sm:w-[360px] z-20">
            {" "}
            {/* Adjusted left and size */}
            <img src={upcmoing} alt="Upcoming" className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-30 font-[SF-Pro-Display]">
        <div className="lg:w-1/2">
          <p className="text-[#4908C6] text-sm uppercase mb-2">
            Problem Statement Comes Here?
          </p>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Instant Real-Time Translation With No Delay Seamless & Accurate
          </h3>
          <p className="text-base mt-6 text-gray-500 max-w-xl">
            Avitas AI Translator utilizes advanced AI models, including ChatGPT
            and Gemini, to deliver precise translations for words, sentences,
            and paragraphs.
            <br /> It ensures high-quality, context-aware results for seamless
            communication Gemini, to deliver precise translations for words,
            sentences, and paragraphs.
          </p>
        </div>
        <div
          className="relative rounded-3xl h-[30rem] lg:w-1/2 w-full flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${yourBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={phone3}
            alt="Device"
            className="absolute h-[140%] top-10 z-10"
          />

          <div className="absolute top-[22%] left-[0%] sm:left-[5%] w-44 sm:w-52 z-20">
            <img src={choose} alt="Choose" className="w-full" />
          </div>

          <div className="absolute top-[22%] right-[0%] sm:right-[5%] w-44 sm:w-52 z-20">
            <img src={language} alt="Language" className="w-full" />
          </div>

          <div className="absolute bottom-[10%] left-[5%] sm:left-[10%] w-48 sm:w-56 z-20">
            <img src={chinese} alt="Chinese" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
