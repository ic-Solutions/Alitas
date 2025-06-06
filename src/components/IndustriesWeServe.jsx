import { useState, useRef, useEffect } from "react";
import healthcareImg from "../assets/industries/medical.jpg";
import immigrationImg from "../assets/industries/immigration.jpg";
import tourismImg from "../assets/industries/tourism.jpg";
import financeImg from "../assets/industries/finance.jpg";
import manufacturingImg from "../assets/industries/manufacturing.jpg";
import { useLocation, useNavigate } from "react-router";

const industries = ["Healthcare", "Immigration", "Tourism", "Finance", "Manufacturing"];
const industriesImages = [healthcareImg, immigrationImg, tourismImg, financeImg, manufacturingImg];

function IndustriesWeServe() {
  const [activeTab, setActiveTab] = useState("Healthcare");
  const tabIndicatorRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.search && !location.hash) return;

    if (location.hash === "#solutions") {
      const tid = setTimeout(() => {
        navigate(location.pathname, { replace: true });
      }, 500);

      return () => clearTimeout(tid);
    }

    if (location.search) {
      const tid2 = setTimeout(() => {
        navigate(location.pathname, { replace: true });
      }, 500);

      return () => clearTimeout(tid2);
    }
  }, [location, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const requested = params.get("tab");
    if (requested && industries.includes(requested)) {
      setActiveTab(requested);
    }
    if (location.hash === "#solutions" && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.hash, location.search]);

  useEffect(() => {
    const activeEl = tabsContainerRef.current.querySelector(".tab-button.active");
    if (activeEl && tabIndicatorRef.current) {
      tabIndicatorRef.current.style.width = `${activeEl.offsetWidth}px`;
      tabIndicatorRef.current.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Healthcare":
        return (
          <>
            <h2 className="text-2xl font-bold text-left">Alitas AI bridges the gap. </h2>
            <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[90%] text-left">
              With real-time, medically precise translation available at all times, healthcare providers and clinicians can prioritise the ultimate goal—providing superior care and improving patient
              experiences.
            </p>
            <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 text-left">With Alitas, you get:</p>
            <ul className="mt-6 space-y-2">
              {[
                "No more interrupted access to superior care – Real-time language support eliminates the wait for interpreter availability.".split(" – "),
                "Hesitation-free communication of health concerns – Language is not a hurdle to describing symptoms and receiving effective treatment.".split(" – "),
                "Precise and specialised medical terminology – Specialised translations for eliminating scope of misdiagnosis.".split(" – "),
                "Increased data privacy and security – Eliminating the requirement of third-party interpreters when discussing sensitive health conditions.".split(" – "),
                "Strengthened provider-patient relationships – Direct communication regardless of patient’s linguistic background, building trust and confidence on mutual ends.".split(" – "),
                "Single-minded focus from your doctor – Eliminating disruptions, providing high-quality care.".split(" – "),
                "Lowering scope of misdiagnosis – Instant and precise translation results in effective clinical treatment.".split(" – "),
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">
                    <b>{txt[0]}</b> – {txt[1]}
                  </p>
                </li>
              ))}
            </ul>
          </>
        );
      case "Immigration":
        return (
          <>
            <h2 className="text-2xl font-bold text-left">Alitas AI bridges the gap. </h2>
            <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[90%] text-left">
              With real-time language translation, immigration officials can strategically focus on their core responsibility — delivering high-quality and personalised guidance to each applicant.
            </p>
            <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 text-left">With Alitas, you get:</p>
            <ul className="mt-6 space-y-2">
              {[
                "Reduced misunderstandings and errors – Real-time language support facilitates effortless communication between applicants and immigration officials.".split(" – "),
                "No more unaccountable delays in application process – Instant and precise translation reduces errors and delays in application process.".split(" – "),
                "Higher satisfaction rate among applicants – Language is not a barrier for applicants when communicating their concerns to immigration officials.".split(" – "),
                "Strengthened customer support – Real-time language translation facilitates timely resolution of queries of applicants by immigration officials.".split(" – "),
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">
                    <b>{txt[0]}</b> – {txt[1]}
                  </p>
                </li>
              ))}
            </ul>
          </>
        );
      case "Tourism":
        return (
          <>
            <h2 className="text-2xl font-bold text-left">Alitas AI bridges the gap. </h2>
            <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[90%] text-left">
              By enabling seamless communication, tourism enterprises can prioritise what truly matters — delivering authentic, transformative experiences that creates a newfound appreciation for
              local culture among travellers.
            </p>
            <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 text-left">With Alitas, you get:</p>
            <ul className="mt-6 space-y-2">
              {[
                "No more interrupted communication – Real-time language translation enables seamless communication between tourism officials and travellers.".split(" – "),
                "Enhanced customer support – Real-time language translation empowers tourism officials to provide timely resolution of queries.".split(" – "),
                "Greater ease of access – Instant and precise language translation makes it easier to serve international clients from multilingual backgrounds.".split(" – "),
                "Higher satisfaction rate among tourists – Providing enriching, immersive experiences to tourists, increasing your customer retention.".split(" – "),
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">
                    <b>{txt[0]}</b> – {txt[1]}
                  </p>
                </li>
              ))}
            </ul>
          </>
        );
      case "Finance":
        return (
          <>
            <h2 className="text-2xl font-bold text-left">Alitas AI bridges the gap. </h2>
            <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[90%] text-left">
              Real-time translation enables financial institutions to engage clients worldwide by breaking down language barriers, enhancing understanding of complex financial information, and
              expediting informed decision-making to achieve personalised financial goals.
            </p>
            <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 text-left">With Alitas, you get:</p>
            <ul className="mt-6 space-y-2">
              {[
                "Round-the-clock support – Real-time language translation empowers financial institutions to provide 24/7 support to customers across the globe.".split(" – "),
                "Hassle-free transactions – Language is no barrier to facilitate seamless transactions between financial institutions and clients across linguistic backgrounds.".split(" – "),
                "Increased customer retention – Instant and accurate language translations empowers financial institutions to provide timely assistance to clients.".split(" – "),
                "Business expansion at an unprecedented pace – Financial institutions can focus on market expansion and enter untapped business arenas.".split(" – "),
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">
                    <b>{txt[0]}</b> – {txt[1]}
                  </p>
                </li>
              ))}
            </ul>
          </>
        );
      case "Manufacturing":
        return (
          <>
            <h2 className="text-2xl font-bold text-left">Alitas AI bridges the gap. </h2>
            <p className="text-sm/6 lg:text-lg/7 mt-2 text-gray-500 lg:max-w-[90%] text-left">
              With real-time, precise translation available at all times, manufacturers can optimise global supply chains, fueling innovation and competitiveness.
            </p>
            <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 text-left">With Alitas, you get:</p>
            <ul className="mt-6 space-y-2">
              {[
                "Increased quality control – Instant and precise language translation empowers manufacturing teams to resolve quality issues and enhance product quality.".split(" – "),
                "Strengthened customer support – Real-time language translation enables manufacturing companies to provide support in customers’ native language.".split(" – "),
                "Less scope of errors and misunderstandings – Seamless communication among teams, suppliers, and customers globally by overcoming language barriers.".split(" – "),
                "Ease of compliance and regulations – Real-time language translations empowers manufacturing companies to meet regulatory requirements in diverse languages.".split(" – "),
              ].map((txt, i) => (
                <li key={i} className="flex items-center text-left">
                  <span className="text-purple-600 text-xl mr-4">✔</span>
                  <p className="text-sm text-gray-500">
                    <b>{txt[0]}</b> – {txt[1]}
                  </p>
                </li>
              ))}
            </ul>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="lg:my-40 my-20 font-[SF-Pro-Display]" id="solutions" ref={sectionRef}>
      <div className="text-center mt-12 px-4 sm:px-8">
        <h1 className="text-2xl px-4 lg:px-0 lg:text-5xl/16 font-bold leading-tight text-gray-900">Industries We Serve</h1>
        <p className="text-sm/6 lg:text-lg/7 mt-6 text-gray-500 lg:max-w-[80%] mx-auto">
          Alitas AI is presently accessible by healthcare providers and clinicians, providing instant and accurate language support—strengthening doctor-patient communication. Moving forward, we are
          working towards extending our platform’s capabilities to diverse industries—namely, legal, immigration, and customer support—where precision in multilingual interaction is just as crucial.
        </p>
      </div>

      <div className="lg:mt-16 mt-4 lg:px-4">
        <div ref={tabsContainerRef} className="relative flex sm:justify-around overflow-x-auto pb-4 whitespace-nowrap gap-4 flex-wrap justify-center">
          <div className="absolute bottom-0 left-[50%] w-[87%] h-[4px] translate-x-[-50%] bg-gray-400 z-0 hidden lg:block"></div>
          {industries.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`tab-button text-sm sm:text-lg font-medium pb-2 hover:cursor-pointer transition-all duration-300 border-b-2 border-transparent lg:border-b-2 ${
                activeTab === tab ? "active text-purple-600" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
          <div ref={tabIndicatorRef} className="absolute bottom-0 left-0 h-1 bg-purple-600 transition-all duration-300 z-10 hidden lg:block"></div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:my-10 my-5">
          <div className="lg:w-1/2">
            <img src={industriesImages[industries.findIndex((ele) => ele === activeTab)]} alt={`alitas in ${activeTab}`} className="rounded-[20px] shadow-md w-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 pt-8 lg:text-left text-center">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesWeServe;
