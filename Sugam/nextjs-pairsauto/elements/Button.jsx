import React from "react";
import { Link } from "next/link";

const styles = ["btn--primary", "btn--outline"];
const sizes = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonstyle, buttonSize }) => {
  const checkButtonStyle = styles.includes(buttonstyle)
    ? buttonstyle
    : styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link href="/" className="btn-mobile">
      <button
        className={`btns  ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
