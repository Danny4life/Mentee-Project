import React from "react";
import FeaturesCard from "../reusables/cards/FeaturesCard";
import chooseUs from "../../data/landing-page/chooseUs";
import yellowball from "../../assets/landingPage/yellowball.svg";

const ChooseUs = () => {
  return (
    <div className="">
      <div className="grid gap-y-12 w-[90%] mx-auto py-20">
        <div className="text-center grid gap-y-4 w-5/6 mx-auto">
          <div className="relative flex justify-between">
            <img
              src={yellowball}
              alt="yellow sphere shape"
              className="relative -top-1/2"
            />
            <h1 className="font-extrabold text-center text-blue-1 text-6xl">
              Why Choose Us?
            </h1>
            <div className=""></div>
          </div>
          <p className="text-black-2 text-xl leading-relaxed w-5/6 mx-auto">
            At Swift Select, we stand out as the premier platform for connecting
            employers and job seekers, offering a transformative experience that
            goes beyond the ordinary. Here's why you should choose us
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
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
