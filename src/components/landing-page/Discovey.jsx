import React from "react";
import discovery from "../../assets/landingPage/possibilities.svg";
import Button from "../reusables/Button";
import { FaArrowRight } from "react-icons/fa";

const Discovey = () => {
  return (
    <div className="">
      <div className="grid md:flex md:justify-between items-center gap-y-5 lg:gap-y-0 gap-x-8 w-[90%] mx-auto py-10 md:py-20">
        <div className="md:w-1/2">
          <img src={discovery} alt="image of communities of users" />
        </div>

        <div className="md:w-1/2 grid gap-y-4 md:gap-y-8">
          <h1 className="text-blue-1 font-extrabold text-4xl md:text-6xl">
            Discover Endless Possibilities
          </h1>
          <p className="text-black-2 text-lg">
            Explore our comprehensive job database where possibilities are
            limitless. Connect instantly with employers or job seekers who align
            with your goals and aspirations. Find the perfect match for your
            career advancement.
          </p>
          <Button
            className="w-fit pl-0 hover:pl-4"
            variant="secondary"
            size="medium"
            icon={FaArrowRight}
            iconPosition="right"
          >
            Explore Job Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Discovey;
