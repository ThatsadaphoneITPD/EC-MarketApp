import React from "react";
import Spinerload from "./spinerload";

function Loading({ size = 100 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Spinerload></Spinerload>
    </div>
  );
}

export default Loading;
