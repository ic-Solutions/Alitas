import feature1 from "../assets/Feature1.png";
import feature2 from "../assets/Feature2.png";
import feature3 from "../assets/Feature3.png";

const FeaturesSection = () => {
  return (
    <section id="featuresSection" className="lg:my-40 my-20 flex flex-col justify-center items-center gap-20 md:gap-40 font-[SF-Pro-Display]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-left">
        <div className="lg:w-1/2">
          {/* <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5 px-4 lg:px-0">
            25 million Australians, 490 languages <br />
            healthcare accessible in only 1 language?
          </p> */}
          <p className="text-2xl px-4 lg:px-0 lg:text-[2.75rem]/16 font-bold leading-tight text-gray-900">
            Real-time, Precise Language Translation – Available around-the-clock, Anywhere, At Your Fingertips
          </p>
          <p className="text-sm/6 lg:text-base/7 mt-6 text-gray-500 max-w-xl px-4 lg:px-0 lg:text-left text-justify">
            <b>Alitas AI</b> provides effortless and uninterrupted, instant translation on-the-spot 24/7 to facilitate seamless communication between
            healthcare providers and patients. Fuelled by cutting-edge AI, the platform offers accurate translations of words, sentences, and
            full-fledged conversations—guaranteeing seamless and confident conversations on both ends.
            <br />
            Improve patient satisfaction, significantly decrease wait time, and ensure high-quality care with 24/7 accurate medical translation.{" "}
            <br />
            Begin enhancing your communication today.
          </p>
        </div>
        <div className="rounded-[36px] lg:w-1/2 w-full">
          <img src={feature1} alt="Device" className="object-contain max-w-[90%] mx-auto" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 text-left lg:text-left">
        <div className="lg:w-1/2">
          {/* <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5 px-4 lg:px-0">
            140,000 incidents of misdiagnosis in Australia <br />
            80% attributed to communication issues
          </p> */}
          <p className="text-2xl px-4 lg:px-0 lg:text-[2.75rem]/16 font-bold leading-tight text-gray-900">
            Efficient Communication Through Context-Driven Medical Terminology
          </p>
          <p className="text-sm/6 lg:text-base/7 mt-6 text-gray-500 max-w-xl px-4 lg:px-0 lg:text-left text-justify">
            Alitas AI enables clear and effective communication, between healthcare providers and patients, owing to a thorough knowledge of medical
            terminology, providing superior-quality and culturally-appropriate care to patients from diverse linguistic backgrounds.
            <br />
            By breaking language barriers, Alitas AI enables healthcare providers to make high-quality, compassionate care more accessible.
            <br />
            Take your patient care to the next level by breaking down communication barriers<b>—witness the power of Alitas today.</b>
          </p>
        </div>
        <div className="rounded-[36px] lg:w-1/2 w-full">
          <img src={feature2} alt="Device" className="object-contain max-w-[90%] mx-auto" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-left lg:text-left">
        <div className="lg:w-1/2">
          {/* <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5 px-4 lg:px-0">
            millions of individuals medical history exposed <br />
            Is the patient's data secure?
          </p> */}
          <p className="text-2xl px-4 lg:px-0 lg:text-[2.75rem]/16 font-bold leading-tight text-gray-900">
            Protecting Every Conversation – Privacy-Driven Communication in Healthcare
          </p>
          <p className="text-sm/6 lg:text-base/6.25 mt-6 text-gray-500 max-w-xl px-4 lg:px-0 lg:text-left text-justify">
            <b>Alitas AI</b> places security at the forefront, ensuring every communication between healthcare provider and patient remains
            confidential. By removing the need for third-party presence during medical consultations between patients and providers, Alitas enables a
            seamless and secure mode of communication.
            <br />
            Designed to comply with highest security standards and healthcare regulations, Alitas allows healthcare providers to build and maintain
            trust through safe and efficient care round-the-clock.
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
