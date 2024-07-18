import React from "react";
import features from "../../data/landing-page/features";
import FeaturesCard from "../reusables/cards/FeaturesCard";

const Features = () => {
  return (
    <div className="">
      <div className="grid gap-y-12 w-[90%] mx-auto py-10 md:py-20">
        <div className="text-center grid gap-y-4 w-5/6 md:w-4/6 mx-auto">
          <h1 className="font-extrabold text-blue-1 text-4xl md:text-6xl">
            Key Features
          </h1>
          <p className="text-black-2 text-lg md:text-xl leading-relaxed">
            Explore the unique features and benefits of SwiftSelect, designed to
            help you build and maintain high-quality software; making
            recruitment easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {features.map((items) => (
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

export default Features;
