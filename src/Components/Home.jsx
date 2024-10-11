import React from "react";
import bgVedio from "../images/bg-vedio.mp4";
import heroImage from "../images/heroImage.png";
import button from "../images/home-button.png";
import cloudIcon from "../images/cloud-icon.png";
import straigntLine from "../images/homeStraightLineImage.png";

const Home = () => {
  return (
    <>
      <video
        autoPlay
        src={bgVedio}
        loop
        muted
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
      ></video>
      <div className="flex min-h-[88vh] flex-col items-center justify-center text-white">
        <div className="font h-full w-full text-center text-[26px] font-normal">
          <p>A LOREM IPSUM </p>
          <em className="">in</em>
          <p className="inline-block px-2">LOREM IPSUM</p>
        </div>

        <div className="mt-32 flex flex-col items-center gap-3">
          <div className="h-12 w-12">
            <img src={heroImage} alt="hero image" />
          </div>
          <div className="text-center">
            <p>lorem by</p>
            <p>Lorem & ipsum lorem</p>
          </div>
        </div>

        <div className="my-8 flex items-center justify-between">
          <img className="h-12 w-[215px]" src={button} alt="button icon" />
        </div>

        <div className="mb-5 flex h-4 w-[65px] items-center gap-[6px]">
          <p className="text-[10px] font-medium">27</p>
          <div>
            <img className="h-3 w-3" src={cloudIcon} alt="cloud icon" />
          </div>
          <p className="text-[10px] font-medium">lorem</p>
        </div>
        <div>
          <img
            className="absolute bottom-0"
            src={straigntLine}
            alt="straightLine image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
