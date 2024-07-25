import React from "react";
import "./CustomButton.css";

function CustomButton({
  type,
  className,
  onClick,
  children,
  color,
  textColor,
  style,
  disabled = false,
  title = "",
}) {
  return (
    <div className="custom-button-container">
      <button
        disabled={disabled}
        type={type}
        className={`custom-button-main ${className}`}
        onClick={onClick}
        style={{ backgroundColor: color, color: textColor, ...style }} // Setting button color using inline style
      >
        {title}
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
