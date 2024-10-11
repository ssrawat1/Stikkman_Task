import React, { useEffect, useState } from "react";
import straightLine from "../images/straightLine.png";
import button from "../images/about-button.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false); // State for button visibility

  useEffect(() => {
    // Set timeout to trigger both animations
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsButtonVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative flex h-[88vh] flex-col items-center overflow-hidden bg-[#212D2D]">
        <div>
          <img
            className={`absolute -top-24 ${isVisible ? "animate-slideUp" : ""} z-10`}
            src={straightLine}
            alt="straight-line image"
          />
        </div>
        <div className="mt-36 flex flex-col items-center justify-center px-5 text-center text-white">
          <p className="text-[26px] font-normal">LOREM INTO IPSUM</p>
          <p className="text-[26px] font-normal">
            A LOREM <em>in</em> THE IPSUM
          </p>
        </div>
        <div className="absolute bottom-0 mt-[134px] flex h-[340px] w-[340px] items-center justify-center rounded-[16px] bg-[url('./images/about-image.png')] bg-contain bg-no-repeat">
          <div
            className={`absolute bottom-10 flex h-[42px] w-[190px] items-center justify-between rounded-[55px] ${isButtonVisible ? "animate-slideDown" : ""}`}
          >
            <img src={button} alt="button icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
