import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-semibold inline-flex items-center justify-center rounded focus:outline-none transition ease-in-out duration-150";

  const variantStyles = {
    primary: "bg-blue-1 text-white hover:bg-white hover:text-blue-1",
    secondary:
      "bg-white text-blue-1 hover:bg-blue-1 hover:text-white hover:border hover:border-blue-1",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  const combinedClassName = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={combinedClassName} {...props}>
      {Icon && iconPosition === "left" && <Icon className="mr-3" />}
      {children}
      {Icon && iconPosition === "right" && <Icon className="ml-3" />}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
};

export default Button;