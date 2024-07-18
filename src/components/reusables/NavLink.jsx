import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({
  to,
  exact,
  children,
  activeClassName = "active",
  className = "",
  ...props
}) => {
  return (
    <RouterNavLink
      to={to}
      exact={exact}
      className={({ isActive }) => (isActive ? activeClassName : "")}
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};

export default NavLink;
