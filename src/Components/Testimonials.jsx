import React, { useEffect, useState } from "react";
import testimonialImage from "../testimonials-images/hero-image.png";
import straightLine from "../testimonials-images/line.png";
import buttonIcon from "../testimonials-images/button.png";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[88vh] overflow-x-hidden bg-[url('./testimonials-images/bg-image.png')] bg-cover bg-no-repeat">
      <div className="flex h-full items-center justify-center">
        <img
          className={`absolute top-0 max-h-[539px] w-full object-cover sm:w-full md:w-[90%] lg:w-[80%] xl:w-[70%]  ${
            isVisible ? "animated-from-bottom" : ""
          }`}
          src={testimonialImage}
          alt="testimonial Image"
        />
        <div className="mt-80 flex h-[64px] w-[476px] items-center justify-center">
          <div className="mr-4 flex flex-col justify-center px-5 text-sm font-bold">
            <p>A Lorem for</p>
            <p>The ipsum</p>
          </div>
          <div>
            <img className="h-[60px]" src={straightLine} alt="straight line" />
          </div>
          <div className="flex flex-col justify-center px-5 text-sm">
            <p>A Lorem for the ipsum, A lorem</p>
            <p>for the ipsum, A lorem for the</p>
            <p>ipsum</p>
          </div>
        </div>
      </div>
      <div>
        <img
          className={`absolute bottom-5 right-5 h-[40px] sm:bottom-10 sm:right-10 ${
            isVisible ? "animated-button" : ""
          }`}
          src={buttonIcon}
          alt="button icon"
        />
      </div>
    </div>
  );
};

export default Testimonials;
