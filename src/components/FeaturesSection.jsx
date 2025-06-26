import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import bg1 from "../assets/features/bg1.png";
import s1mobile from "../assets/features/section1mob.png";

import bg2 from "../assets/features/bg2.png";
import s2mobile from "../assets/features/section2mob.png";
import s2tab from "../assets/features/section2tab.png";

import bg3 from "../assets/features/bg3.png";
import s3mobile from "../assets/features/section3mob.png";
import s3tab from "../assets/features/section3tab.png";

const featureImages1 = [{ src: s1mobile, orientation: "portrait" }]; // add more images as needed, make sure to add a duplicate of first image at the end
const featureImages2 = [
  { src: s2mobile, orientation: "portrait" },
  { src: s2tab, orientation: "landscape" },
  { src: s2mobile, orientation: "portrait" },
];
const featureImages3 = [
  { src: s3mobile, orientation: "portrait" },
  { src: s3tab, orientation: "landscape" },
  { src: s3mobile, orientation: "portrait" },
];
// Simple run down of scroll effect
// Each carousel has n elements followed by a copy of the first element (in a row of divs)
// upon reaching the second last element, the slide scrolls to last element and immediately snaps back to the first element
// the loop then continues

// similar logic to carousels in LivePreview
const FeaturesSection = () => {
  // refs to control each carousel
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  // maintains the list of carousel scroll timeouts that'll be cleared upon component dismount
  const timeouts = useRef([]);

  // sets timeouts for each carousel to scroll to next element
  useEffect(() => {
    // wrapper function for setTimeout that adds the timeout to an array for clearing upon dismount
    function setTrackedTimeout(fn, delay) {
      const id = window.setTimeout(fn, delay);
      timeouts.current.push(id);
      return id;
    }

    // wrapper function that updates transition properties and sets a timeout
    const goto = async (location, speed, ref) => {
      ref.current.style.transitionDuration = speed;
      void ref.current.offsetWidth; // DO NOT REMOVE - mandatory query to pull property, otherwise style properties are bundled and applied together (as opposed to one after the other)
      ref.current.style.transform = `translateX(-${location * 100}%)`;

      const durationInMs = parseInt(speed);
      await new Promise((resolve) => setTrackedTimeout(resolve, durationInMs));
    };

    // applies a transition then snaps back to start based on whether the current element is the last element or not
    const shiftSlide = async (currentIndex, images, ref) => {
      currentIndex = (currentIndex + 1) % images.length;
      // got to next element with a transition that takes 500ms
      await goto(currentIndex, "500ms", ref);
      // if this new element is the last element, go to the first element with a 0ms transition, then make recursive call to this function
      if (currentIndex === images.length - 1) {
        await goto(0, "0ms", ref);
        setTrackedTimeout(() => {
          shiftSlide(currentIndex, images, ref);
        }, 0);
        // if this new element is not the last element, make recursive call to this function
      } else {
        setTrackedTimeout(() => {
          shiftSlide(currentIndex, images, ref);
        }, 3000);
      }
    };
    // array of all carousels all initialized on mount
    const carousels = [
      { images: featureImages1, ref: sliderRef1 },
      { images: featureImages2, ref: sliderRef2 },
      { images: featureImages3, ref: sliderRef3 },
    ].map((set) => {
      setTrackedTimeout(() => shiftSlide(0, set.images, set.ref), 3000);
    });
    return () => {
      // clean up all timeouts upon unmount
      timeouts.current.forEach((id) => clearTimeout(id));
      timeouts.current = [];
    };
  }, []);

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
            <b>Alitas AI</b> provides effortless and uninterrupted, instant translation on-the-spot 24/7 to facilitate seamless communication between healthcare providers and patients. Fuelled by
            cutting-edge AI, the platform offers accurate translations of words, sentences, and full-fledged conversations, guaranteeing seamless and confident conversations on both ends.
            <br />
            Improve patient satisfaction, significantly decrease wait time, and ensure high-quality care with 24/7 accurate medical translation. <br />
            Begin enhancing your communication today.
          </p>
        </div>
        <div className="rounded-[36px] lg:w-1/2 w-full overflow-hidden" style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}>
          <div className="relative w-full aspect-square bg-cover">
            <div className="absolute top-0 left-0 w-full h-full">
              <div ref={sliderRef1} className="flex transition-transform duration-500 items-center" style={{ width: `100%`, height: "100%" }}>
                {featureImages1.map((image, index) => (
                  <motion.div // temporary scale animation, since there's only one image, REMOVE ONCE UPDATED WITH MULTIPLE IMAGES
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, transition: { duration: 0.3, ease: "easeOut" } }}
                    key={index}
                    className="flex w-[100%] h-[100%] flex-shrink-0 items-center justify-center p-8"
                  >
                    <img src={image.src} alt={`Device ${index + 1}`} className={`object-contain ${image.orientation === "portrait" ? "h-full" : "w-full"}`} style={{ objectPosition: "top" }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 text-left">
        <div className="lg:w-1/2">
          {/* <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5 px-4 lg:px-0">
            140,000 incidents of misdiagnosis in Australia <br />
            80% attributed to communication issues
          </p> */}
          <p className="text-2xl px-4 lg:px-0 lg:text-[2.75rem]/16 font-bold leading-tight text-gray-900">Efficient Communication Through Context-Driven Medical Terminology</p>
          <p className="text-sm/6 lg:text-base/7 mt-6 text-gray-500 max-w-xl px-4 lg:px-0 lg:text-left text-justify">
            Alitas AI enables clear and effective communication, between healthcare providers and patients, owing to a thorough knowledge of medical terminology, providing superior-quality and
            culturally-appropriate care to patients from diverse linguistic backgrounds.
            <br />
            By breaking language barriers, Alitas AI enables healthcare providers to make high-quality, compassionate care more accessible.
            <br />
            Take your patient care to the next level by breaking down communication barriers, <b>witnessing the power of Alitas today.</b>
          </p>
        </div>
        <div className="rounded-[36px] lg:w-1/2 w-full overflow-hidden" style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover" }}>
          <div className="relative w-full aspect-square bg-cover">
            <div className="absolute top-0 left-0 w-full h-full">
              <div ref={sliderRef2} className="flex transition-transform duration-500 items-center" style={{ width: `100%`, height: "100%" }}>
                {/* creates a contiguous row of divs with iamges that are programatically translated(along X axis) to create a sliding effect */}
                {featureImages2.map((image, index) => (
                  <div key={index} className="flex w-[100%] h-[100%] flex-shrink-0 items-center justify-center p-8">
                    <img src={image.src} alt={`Device ${index + 1}`} className={`object-contain ${image.orientation === "portrait" ? "h-full" : "w-full"}`} style={{ objectPosition: "top" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-left">
        <div className="lg:w-1/2">
          {/* <p className="text-(--color-section-heading) lg:text-sm text-xs font-bold uppercase mb-5 px-4 lg:px-0">
            millions of individuals medical history exposed <br />
            Is the patient's data secure?
          </p> */}
          <p className="text-2xl px-4 lg:px-0 lg:text-[2.75rem]/16 font-bold leading-tight text-gray-900">Protecting Every Conversation – Privacy-Driven Communication in Healthcare</p>
          <p className="text-sm/6 lg:text-base/6.25 mt-6 text-gray-500 max-w-xl px-4 lg:px-0 lg:text-left text-justify">
            <b>Alitas AI</b> places security at the forefront, ensuring every communication between healthcare provider and patient remains confidential. By removing the need for third-party presence
            during medical consultations between patients and providers, Alitas enables a seamless and secure mode of communication.
            <br />
            Designed to comply with highest security standards and healthcare regulations, Alitas allows healthcare providers to build and maintain trust through safe and efficient care
            round-the-clock.
          </p>
        </div>
        <div className="rounded-[36px] lg:w-1/2 w-full overflow-hidden" style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover" }}>
          <div className="relative w-full aspect-square bg-cover">
            <div className="absolute top-0 left-0 w-full h-full">
              <div ref={sliderRef3} className="flex transition-transform duration-500 items-center" style={{ width: `100%`, height: "100%" }}>
                {featureImages3.map((image, index) => (
                  <div key={index} className="flex w-[100%] h-[100%] flex-shrink-0 items-center justify-center p-8">
                    <img src={image.src} alt={`Device ${index + 1}`} className={`object-contain ${image.orientation === "portrait" ? "h-full" : "w-full"}`} style={{ objectPosition: "top" }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
