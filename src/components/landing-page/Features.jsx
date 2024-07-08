import React from "react";
import features from "../../data/landing-page/features";
import FeaturesCard from "../reusables/cards/FeaturesCard";

const Features = () => {
  return (
    <div className="">
      <div className="grid gap-y-12 w-[90%] mx-auto py-20">
        <div className="text-center grid gap-y-4 w-4/6 mx-auto">
          <h1 className="font-extrabold text-blue-1 text-6xl">Key Features</h1>
          <p className="text-black-2 text-xl leading-relaxed">
            Explore the unique features and benefits of SwiftSelect, designed to
            help you build and maintain high-quality software; making
            recruitment easier.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-12">
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
