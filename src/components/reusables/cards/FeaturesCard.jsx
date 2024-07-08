import React from "react";

const FeaturesCard = ({ image, title, description }) => {
  return (
    <div className="">
      <div className="grid gap-4">
        <div className=" bg-white space-y-2">
          <img src={image} alt={`${title} image`} className="" />
          <h3 className="text-black-1 text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-lg text-black-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
