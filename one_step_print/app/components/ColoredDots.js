import React from "react";

const ColoredDots = ({ color, style }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: color,
      position: "fixed",
      opacity: 1,
      zIndex: -1,
      mixBlendMode: "multiply",
      ...style,
    }}
  />
);

export default ColoredDots;
