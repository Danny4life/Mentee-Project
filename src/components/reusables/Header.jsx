import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-6">
      <Logo />
      <nav className="flex gap-x-5 .roboto-regular">
        <NavLink
          to="/products"
          activeClassName="text-blue-1 font-extrabold"
          className="text-black-1 hover:text-black-2 px-4 py-2 font-bold"
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="text-blue-1 font-extrabold"
          className="text-black-1 hover:text-black-2 px-4 py-2 font-bold"
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          activeClassName="text-blue-1 font-extrabold"
          className="text-black-1 hover:text-black-2 px-4 py-2 font-bold"
        >
          Services
        </NavLink>
        <NavLink
          to="/help-center"
          activeClassName="text-blue-1 font-extrabold"
          className="text-black-1 hover:text-black-2 px-4 py-2 font-bold"
        >
          Help Center
        </NavLink>
      </nav>

      <div className="flex gap-x-6 items-center">
        <Button variant="secondary" size="medium">
          Login
        </Button>
        <Button
          variant="primary"
          size="medium"
          icon={FaArrowRight}
          iconPosition="right"
        >
          Sign up Free
        </Button>
      </div>
    </header>
  );
};

export default Header;
