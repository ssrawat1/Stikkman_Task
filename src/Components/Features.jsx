import React, { useEffect, useState } from "react";
import straightLine from "../images/features-straight-line.png";
import button from "../images/features-button.png";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="relative flex h-[88vh] flex-col items-center justify-center overflow-hidden bg-[#212D2D]">
        <div className="z-10 -mt-56">
          <img
            className="w-[6px] text-[#4d5757]"
            src={straightLine}
            alt="straight-line image"
          />
        </div>
        <div className="mt-36 flex flex-col justify-center text-white">
          <p className="text-[21px] font-normal text-[#4d5757]">
            LOREM INTO IPSUM
          </p>
          <p className="text-[21px] font-normal text-[#4d5757]">
            A LOREM <em>in</em> THE IPSUM
          </p>
        </div>
        <div
          className={`-mt-[58px] flex h-[380px] w-[380px] items-center justify-center rounded-none bg-[url('./images/about-image.png')] bg-contain bg-no-repeat ${isVisible ? "animate-slideUpImage" : ""}`}
        ></div>
        <div className="absolute bottom-8 flex h-[42px] w-[200px] justify-between">
          <img src={button} alt="button icon" />
        </div>
      </div>
    </>
  );
};

export default Features;
