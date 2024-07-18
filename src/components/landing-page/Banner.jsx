import React from "react";
import image from "../../assets/landingPage/desktop.svg";
import icons from "../../assets/landingPage/Icons.svg";

const Banner = () => {
  return (
    <div className="relative w-full py-10 lg:py-20 border-y border-blue-3">
      <div className="md:flex md:justify-between items-center w-[90%] mx-auto space-y-5 lg:space-y-0">
        <div className="space-y-4 md:w-[45%]">
          <h1 className="text-4xl md:text-6xl font-extrabold .roboto-regular text-blue-1">
            Your Gateway to Career Success!
          </h1>
          <p className="text-black-2 text-lg">
            Unlock Opportunities, Empower Your Career Journey. Welcome to the
            ultimate platform designed for both employers and job seekers.
            Discover a world of possibilities and take control of your
            professional future.
          </p>
        </div>

        <div className="md:w-[45%]">
          <img
            src={image}
            alt="image of a desktop computer"
            className="hover:scale-100 hover:delay-100 hover:duration-100 cursor-pointer"
          />
        </div>
      </div>
      <img
        src={icons}
        alt="glazing stars"
        className="absolute bottom-4 right-0 -z-10"
      />
    </div>
  );
};

export default Banner;
