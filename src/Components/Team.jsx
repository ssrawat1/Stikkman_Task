import React from "react";
import button from "../team-images/button.png";
import teamImage from "../team-images/team-img.png";

const Team = () => {
  return (
    <div className="relative flex h-[88vh] flex-col items-center overflow-hidden bg-[#212D2D] px-5 pt-10 text-white">
      <div className="flex flex-col items-center">
        <p className="text-center">LOREM OF</p>
        <p className="text-center text-[22px] leading-8">
          LOREM <em>of</em> IPSUM
        </p>
      </div>
      <div className="flex flex-col items-center px-5">
        <div className="mt-5 flex flex-col items-center justify-center px-4 text-[14px]">
          <p>A Lorem for the ipsum, A lorem for the ipsum, A</p>
          <p>lorem for the ipsum, A lorem for the ipsum, A</p>
          <p>Lorem for the ipsum, A lorem for the ipsum.</p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center px-5 text-[14px]">
          <p>A Lorem for the ipsum, A lorem for the ipsum, A</p>
          <p>lorem for the ipsum, A lorem for the ipsum, A</p>
          <p>Lorem for the ipsum, A lorem for the ipsum.</p>
        </div>
        <div className="absolute -bottom-10 flex flex-col items-center pt-5">
          <div className="px-5">
            <img
              className="min-h-[200px] w-[248px]"
              src={teamImage}
              alt="Team members image"
            />
          </div>
        </div>
        <div className="absolute bottom-5 right-5 z-10 text-center">
          <img
            className="h-10 w-[84px] object-contain"
            src={button}
            alt="button icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
