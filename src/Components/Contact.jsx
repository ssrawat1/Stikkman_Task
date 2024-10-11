import React, { useEffect, useState } from "react";
import contactImage from "../contact-images/contact-image.png";
import line from "../contact-images/contact-line-image.png";
import button from "../contact-images/button-icon.png";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[88vh] w-full bg-[#212D2D] text-white md:bg-transparent">
      <div className="flex h-full items-center justify-center">
        <img
          className={`absolute -top-24 z-0 max-h-[600px] w-full object-cover sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] ${
            isVisible ? "animate-slideUp-image" : ""
          }`}
          src={contactImage}
          alt="Testimonials"
        />
        <div className="z-10 mt-96 flex items-center gap-8">
          <div className="flex flex-col text-sm font-bold">
            <p>Lorem</p>
            <p>In</p>
            <p>Ipsum</p>
          </div>
          <div className="h-[76px] w-[0.5px]">
            <img src={line} alt="straight-line image" />
          </div>
          <div className="flex flex-col text-sm">
            <p>Lorem lorem</p>
            <p>Lorem lorem</p>
            <p>Lorem lorem</p>
            <p>Lorem lorem</p>
          </div>
          <div className="absolute bottom-10 right-10 h-[40px] w-[83px]">
            <img src={button} alt="button icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
