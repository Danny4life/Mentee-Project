import React, { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Button from "./Button";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center py-2 px-3 md:p-6">
      <Logo />

      <button
        className="md:hidden text-black-1"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav
        className={`flex-col md:flex-row md:flex gap-x-5 items-center ${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:block`}
      >
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

      <div
        className={`flex-col md:flex-row md:flex gap-x-6 items-center ${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:block`}
      >
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
