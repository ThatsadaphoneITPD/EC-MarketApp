import React from "react";

export default function FloatigAdd({ action, iconAdd }) {
  return (
    <div className="positionStay containerFloat">
      <button
        className="addFloater"
        onClick={() => {
          action();
        }}
      >
        {iconAdd}
      </button>

      <p className="shadowFrame">
        <svg
          version="1.1"
          className="shadow"
          x="61px"
          y="20px"
          width="122.436px"
          height="39.744px"
          viewBox="0 0 122.436 39.744"
          enable-background="new 0 0 122.436 39.744"
        >
          <ellipse
            fill="#d9d9d9"
            cx="61.128"
            cy="19.872"
            rx="49.25"
            ry="8.916"
          />
        </svg>
      </p>
    </div>
  );
}
