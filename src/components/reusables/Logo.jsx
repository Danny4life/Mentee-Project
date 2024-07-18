import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className="hanalei-fill-regular font-semibold text-blue-1 text-4Xl px-4 py-2 md:px-12 md:py-4">
        SwiftSelect
      </div>
    </NavLink>
  );
};

export default Logo;
