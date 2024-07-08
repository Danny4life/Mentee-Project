import React from "react";
import Banner from "../components/landing-page/Banner";
import Features from "../components/landing-page/Features";
import Discovey from "../components/landing-page/Discovey";
import ChooseUs from "../components/landing-page/ChooseUs";
import Footer from "../components/reusables/Footer";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Banner />
      <Features />
      <Discovey />
      <ChooseUs />
    </div>
  );
};

export default LandingPage;
