import React from "react";
const Buttons = ({ label, color, click }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        outline: "none",
        border: "none",
        borderRadius: "999px",
        padding: "12px 32px",
        fontSize: "1rem",
        fontWeight: "600",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        cursor: "pointer",
        transition: "background 0.2s, transform 0.1s",
      }}
      onClick={click}
    >
      {label}
    </button>
  );
};
export default Buttons;
