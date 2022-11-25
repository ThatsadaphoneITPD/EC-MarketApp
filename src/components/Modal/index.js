import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, style }) {
  return (
    <div
      style={{
        zIndex: "1000",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100%",
        maxWidth: "820px",
        background: "transparent",
        ...style,
      }}
    >
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
