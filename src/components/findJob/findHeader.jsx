import React from "react";
import MessageIcon from "../../assets/image/messageIcon.png";
import Bell from "../../assets/image/Vector.png";
import Dp from "../../assets/image/imgIcon.png";
import SearchBar from "../../assets/image/search.png";
import LocationIcon from "../../assets/image/location.png";
import NavLink from "../reusables/NavLink";
import { useLocation } from "react-router";

const FindHeader = () => {
  const pathname = useLocation();
  return (
    <div className="cursor-default pt-5">
      <nav className="flex items-center justify-between mx-4 md:mx-8 my-4">
        <div className="font-hanalei text-customBlue text-lg md:text-xl">
          SWIFTSELECT
        </div>
        <div className="hidden md:flex items-center gap-x-5 justify-between font-inter w-1/6">
          <NavLink
            to="/find-jobs"
            activeclassName="text-customBlue font-semibold underline underline-offset-4"
            className="text-black-1 hover:text-black-2 px-4 py-2 font-bold"
          >
            Find Jobs
          </NavLink>
          <NavLink
            to="/profile"
            activeclassName="text-customBlue font-semibold underline underline-offset-4"
            className="text-black-1 hover:text-black-2 px-4 py-2 font-bold"
          >
            Profile
          </NavLink>
        </div>
        <div className="flex items-center justify-end md:justify-between w-1/6">
          <img
            src={MessageIcon}
            alt="MessageIcon"
            className="MessageIcon w-4 mr-2 md:mr-0 md:w-8"
          />
          <img src={Bell} alt="bell" className="bell w-4 mr-2 md:mr-0 md:w-6" />
          <img src={Dp} alt="DP" className="w-4 md:w-10" />
        </div>
      </nav>
      {pathname.pathname !== "/profile" && (
        <div className="bar flex flex-col md:flex-row items-center justify-around mb-2 mt-4 md:mt-8 mx-4 md:mx-64 text-xs text-customGray">
          <div className="flex items-center mb-2 md:mb-0">
            <h1 className="mr-2 md:mr-4">Job titles, Keyword and Company</h1>
            <img src={SearchBar} alt="Search bar" className="md:w-6" />
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <h1 className="mr-2 md:mr-4">City, Country or Remote</h1>
            <img src={LocationIcon} alt="Location Icon" className="md:w-6" />
          </div>
          <button
            type="submit"
            className="bg-customBlue text-white px-2 py-1 rounded-md hover:bg-blue-400"
          >
            Find Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FindHeader;
