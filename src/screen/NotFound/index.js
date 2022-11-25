import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <div className="notFound">
        <h1 className="notFound__text">404</h1>
        <div className="notFound__page">Page Not Found</div>
        <Link to="/home">
          <button className="notFound__button">
            {/* <a className="notFound__home">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current"> */}
            Go Home
            {/* </span>
          </a> */}
          </button>
        </Link>
      </div>
    </div>
  );
}
