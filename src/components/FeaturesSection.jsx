import feature1 from "../assets/Feature1.png";
import feature2 from "../assets/Feature2.png";
import feature3 from "../assets/Feature3.png";

const FeaturesSection = () => {
  return (
    <section id="featuresSection" className="lg:my-40 my-20 flex flex-col justify-center items-center gap-20 md:gap-40 font-[SF-Pro-Display]">
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
        <div className="rounded-[36px] lg:w-1/2 w-full">
          <img src={feature1} alt="Device" className="object-contain max-w-[90%] mx-auto" />
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
        <div className="rounded-[36px] lg:w-1/2 w-full">
          <img src={feature2} alt="Device" className="object-contain max-w-[90%] mx-auto" />
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
        <div className="rounded-[36px] lg:w-1/2 w-full">
          <img src={feature3} alt="Device" className="object-contain max-w-[90%] mx-auto" />
        </div>
      </div>
    </section>
  );
};

export { FeaturesSection };
