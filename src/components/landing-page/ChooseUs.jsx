import React from "react";
import FeaturesCard from "../reusables/cards/FeaturesCard";
import chooseUs from "../../data/landing-page/chooseUs";
import yellowball from "../../assets/landingPage/yellowball.svg";

const ChooseUs = () => {
  return (
    <div className="">
      <div className="grid gap-y-12 w-[90%] mx-auto py-10 md:py-20">
        <div className="text-center grid gap-y-4 md:w-5/6 mx-auto">
          <div className="relative md:flex md:justify-between">
            <img
              src={yellowball}
              alt="yellow sphere shape"
              className="relative -top-1/2 hidden md:block"
            />
            <h1 className="font-extrabold text-center text-blue-1 text-4xl md:text-6xl">
              Why Choose Us?
            </h1>
            <div className="hidden md:block"></div>
          </div>
          <p className="text-black-2 text-lg md:text-xl leading-relaxed w-[90%] md:w-5/6 mx-auto">
            At Swift Select, we stand out as the premier platform for connecting
            employers and job seekers, offering a transformative experience that
            goes beyond the ordinary. Here's why you should choose us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {chooseUs.map((items) => (
            <FeaturesCard
              image={items.image}
              description={items.description}
              title={items.title}
              key={items.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
