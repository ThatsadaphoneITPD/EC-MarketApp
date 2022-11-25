import React from "react";
import Moment from "moment";

export default function index({ M, Top }) {
  const Day = Moment(M).format("DD");
  const Month = Moment(M).format("MMM");
  const Year = Moment(M).format("YYYY");
  return (
    <div
      style={{ width: "2rem", height: "0.5rem", top: `${Top}` }}
      className="coolDate1"
    >
      <div style={{ fontSize: "0.7rem" }} className="Year">
        {Year}
      </div>
      <div style={{ fontSize: "1.3rem" }} className="Day">
        {Day}
      </div>
      <div style={{ fontSize: "0.7rem" }} className="Month">
        {Month}
      </div>
    </div>
  );
}
