import React from "react";
import footerinks from "../../data/landing-page/footerinks";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="grid gap-y-3 md:gap-y-0 md:flex md:justify-between items-center w-[90%] mx-auto py-10 md:py-20">
        <div className="flex justify-between lg:justify-normal items-center gap-x-2">
          <p className="font-bold text-black-1">Swift select</p>
          <span className="text-black-2">@ 2023. All rights reserved.</span>
        </div>

        <nav className="">
          <ul className="grid grid-cols-3 gap-y-2 md:gap-y-0 md:flex space-x-4 text-gray-700">
            {footerinks.map((item) => (
              <li key={item.id} className="text-black-2">
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
