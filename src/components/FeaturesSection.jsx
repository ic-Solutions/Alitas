import yourBackgroundImage from "../assets/background_right.png";
import yourBgImage from "../assets/background_left.png";
import upcmoing from "../assets/upcoming.png";
import phone from "../assets/feature1.png";
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
    <section id="featuresSection" className="lg:my-40 my-10 flex flex-col justify-center items-center gap-20 md:gap-40 font-[SF-Pro-Display]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <div className="lg:w-1/2">
          <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5">Problem Statement Comes Here?</p>
          <p className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">
            Instant Real-Time Translation With No Delay Seamless & Accurate
          </p>
          <p className="text-sm/6 lg:text-base/7 mt-6 text-gray-500 max-w-xl">
            Avitas AI Translator utilizes advanced AI models, including ChatGPT and Gemini, to deliver precise translations for words, sentences, and
            paragraphs.
            <br /> It ensures high-quality, context-aware results for seamless communication Gemini, to deliver precise translations for words,
            sentences, and paragraphs.
          </p>
        </div>
        <div
          className="relative rounded-[36px] lg:h-[30rem] h-[20rem] lg:w-1/2 w-full flex items-center justify-center object-cover overflow-hidden"
          style={{
            backgroundImage: `url(${yourBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={phone} alt="Device" className="absolute lg:w-[50%] lg:top-13 w-[60%] top-5 z-10" />
          <div className="absolute lg:top-23 lg:left-12 lg:w-60 top-15 left-2 w-40 z-20">
            <img src={trans} alt="Trans" className="w-full" />
          </div>
          <div className="absolute lg:bottom-48 lg:right-0 lg:w-64 bottom-30 right-2 w-40 z-20">
            <img src={realTime} alt="RealTime" className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 text-center lg:text-left">
        <div className="lg:w-1/2">
          <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5">Problem Statement Comes Here?</p>
          <p className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">
            Instant Real-Time Translation With No Delay Seamless & Accurate
          </p>
          <p className="text-sm/6 lg:text-base/7 mt-6 text-gray-500 max-w-xl">
            Avitas AI Translator utilizes advanced AI models, including ChatGPT and Gemini, to deliver precise translations for words, sentences, and
            paragraphs.
            <br /> It ensures high-quality, context-aware results for seamless communication Gemini, to deliver precise translations for words,
            sentences, and paragraphs.
          </p>
        </div>
        <div
          className="relative rounded-[36px] lg:h-[30rem] h-[20rem] lg:w-1/2 w-full flex items-center justify-center object-cover overflow-hidden"
          style={{
            backgroundImage: `url(${yourBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Tablet */}
          <img src={tablet} alt="Device" className="absolute lg:h-[120%] lg:top-15 h-[110%] top-13 z-10" />

          {/* Quick Access Box */}
          <div className="absolute lg:top-[37%] lg:left-[9%] lg:w-[280px] top-30 left-3 w-[180px] z-20 drop-shadow-sm">
            <img src={quickAccess} alt="Quick Access" className="w-full" />
          </div>

          {/* Technology Box */}
          <div className="absolute lg:top-[2%] lg:right-[7%] lg:w-[200px] top-[-1%] right-[-2%] w-[160px] z-20 drop-shadow-sm">
            <img src={technology} alt="Technology" className="w-full" />
          </div>

          {/* Upcoming Appointment Box */}
          <div className="absolute lg:bottom-[3.5%] lg:right-[10%] lg:w-[300px] bottom-[7%] right-[5%] w-[200px] z-20 drop-shadow-sm">
            <img src={upcmoing} alt="Upcoming" className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
        <div className="lg:w-1/2">
          <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5">Problem Statement Comes Here?</p>
          <p className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">
            Instant Real-Time Translation With No Delay Seamless & Accurate
          </p>
          <p className="text-sm/6 lg:text-base/7 mt-6 text-gray-500 max-w-xl">
            Avitas AI Translator utilizes advanced AI models, including ChatGPT and Gemini, to deliver precise translations for words, sentences, and
            paragraphs.
            <br /> It ensures high-quality, context-aware results for seamless communication Gemini, to deliver precise translations for words,
            sentences, and paragraphs.
          </p>
        </div>
        <div
          className="relative rounded-[36px] lg:h-[30rem] h-[20rem] lg:w-1/2 w-full flex items-center justify-center object-cover overflow-hidden"
          style={{
            backgroundImage: `url(${yourBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={phone3} alt="Device" className="absolute lg:h-[125%] lg:top-10 h-[120%] top-7 z-10" />

          <div className="absolute lg:top-[15%] lg:left-[5%] lg:w-82 lg:z-20 top-12  left-3 w-48 z-12">
            <img src={choose} alt="Choose" className="w-full" />
          </div>

          <div className="absolute lg:bottom-[4%] lg:right-[7%] lg:w-52 lg:z-20 bottom-6 right-13 w-27 z-12">
            <img src={language} alt="Language" className="w-full" />
          </div>

          <div className="absolute lg:top-[38%] lg:left-[5%] lg:w-48 lg:z-20 top-30 left-8 w-30 z-12">
            <img src={chinese} alt="Chinese" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
