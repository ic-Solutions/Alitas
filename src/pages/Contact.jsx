import { useState } from "react";
import Navbar from "../components/Navbar";
import FormInput from "../components/FormInput";
import { IconMail, IconMapPin } from "@tabler/icons-react";
import Footer from "../components/Footer";

function Contact() {
  const [value, setValue] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const submitForm = ()=>{
    console.log(value)
    alert("Response Recorded")
    setValue({ name: "", email: "", phone: "", subject: "", message: "" })
  }
  return (
    <>
      <div className="lg:m-10 lg:pt-4 lg:p-8 m-4 pt-1 p-2 rounded-3xl font-[SF-Pro-Display]">
        <nav className="bg-[#AC73D950] my-6 font-[SF-Pro-Display] w-full lg:rounded-3xl rounded-full" style={{ paddingInline: "0.02rem" }} id="nav">
          <Navbar />
        </nav>
        <div className="text-center lg:w-1/2 mx-auto flex flex-col gap-8 lg:py-8 py-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl/22 font-[600] font-[SF Pro Display] leading-[138%] text-[#1F1F1F]">
            Connect with our Team
          </h2>
          <span className="lg:text-2xl text-sm/6 lg:mx-auto leading-[148%] text-gray-700 lg:w-full w-4/5 mx-auto">
            Whether you’re looking for support, partnerships, or general enquiries — we’re here to help.
          </span>
        </div>
        <div className="flex flex-wrap lg:w-3/4 mx-auto">
          <div className="w-full lg:w-1/2 lg:p-12 lg:py-12 py-4">
            <FormInput label="Name" placeholder="Input your text" value={value} setValue={setValue} index="name" />
          </div>
          <div className="w-full lg:w-1/2 lg:p-12 lg:py-12 py-4">
            <FormInput label="Email" placeholder="Input your text" value={value} setValue={setValue} index="email" />
          </div>
          <div className="w-full lg:w-1/2 lg:p-12 lg:py-12 py-4">
            <FormInput label="Phone Number" placeholder="Input your text" value={value} setValue={setValue} index="phone" />
          </div>
          <div className="w-full lg:w-1/2 lg:p-12 lg:py-12 py-4">
            <FormInput label="Subject" placeholder="Input your text" value={value} setValue={setValue} index="subject" />
          </div>
          <div className="w-full lg:p-12 lg:py-12 py-4 pb-12">
            <FormInput label="Message" placeholder="Input your text" value={value} setValue={setValue} index="message" />
          </div>
          <div className="flex lg:justify-end justify-center w-full lg:p-8 lg:py-0">
            <button className="bg-[#AC73D950] text-xl text-black py-4 px-8 rounded-full hover:bg-[#AC73D9] cursor-pointer duration-300" onClick={submitForm}>Send Message</button>
          </div>
        </div>
        <div className="text-center lg:w-1/2 mx-auto flex flex-col gap-4 lg:py-16 py-16 pb-8">
          <h2 className="text-3xl lg:text-5xl/22 font-[600] font-[SF Pro Display] leading-[138%] text-[#1F1F1F]">
            Get in Touch
          </h2>
          <span className="lg:text-2xl text-lg/6 lg:mx-auto leading-[148%] text-gray-700 pb-8 w-3/4 mx-auto">
            We’re here to listen, help, and connect — reach out anytime
          </span>
          <div className="flex mx-auto justify-between">
            <div className="flex flex-col w-1/2 items-center">
              <span>
                <IconMapPin className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]" stroke={1.5} />
              </span>
              <span className="font-[600] text-xl lg:pb-8 pb-4">Address</span>
              <span className="text-gray-700 text-base/6 lg:text-lg">Alitas AI Pty Ltd, Level 17, Tower 4, 727 Collins street, Docklands. VIC-3008</span>
            </div>
            <div className="flex flex-col w-1/2 items-center">
              <span>
                <IconMail className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]" stroke={1.5} />
              </span>
              <span className="font-[600] text-xl lg:pb-8 pb-4">Email</span>
              <span className="text-gray-700 text-base/6 lg:text-lg">contact@alitas.ai</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-4xl overflow-hidden lg:mx-8 mx-6 mb-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.256034831251!2d144.94864202256596!3d-37.82041728079252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a0b11b26d%3A0x558f312ba6ce5067!2sCollins%20Square!5e0!3m2!1sen!2sin!4v1748619661132!5m2!1sen!2sin"
          width="100%"
          className="lg:h-[400px] h-[100vw]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
