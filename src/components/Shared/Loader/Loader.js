import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      {/* <div className="spinner mx-auto my-4">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="my-4">
        <svg
          className="pl mx-auto"
          width="128px"
          height="128px"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="pl__ring1"
            cx="64"
            cy="64"
            r="60"
            fill="none"
            // stroke="hsl(3,90%,55%)"
            stroke="#64dfdf"
            stroke-width="8"
            transform="rotate(-90,64,64)"
            stroke-linecap="round"
            stroke-dasharray="377 377"
            stroke-dashoffset="-376.4"
          ></circle>
          <circle
            className="pl__ring2"
            cx="64"
            cy="64"
            r="52.5"
            fill="none"
            // stroke="hsl(13,90%,55%)"
            stroke="#ff4d6d"
            stroke-width="7"
            transform="rotate(-90,64,64)"
            stroke-linecap="round"
            stroke-dasharray="329.9 329.9"
            stroke-dashoffset="-329.3"
          ></circle>
          <circle
            className="pl__ring3"
            cx="64"
            cy="64"
            r="46"
            fill="none"
            // stroke="hsl(23,90%,55%)"
            stroke="#90e0ef"
            stroke-width="6"
            transform="rotate(-90,64,64)"
            stroke-linecap="round"
            stroke-dasharray="289 289"
            stroke-dashoffset="-288.6"
          ></circle>
          <circle
            className="pl__ring4"
            cx="64"
            cy="64"
            r="40.5"
            fill="none"
            // stroke="hsl(33,90%,55%)"
            stroke="#f694c1"
            stroke-width="5"
            transform="rotate(-90,64,64)"
            stroke-linecap="round"
            stroke-dasharray="254.5 254.5"
            stroke-dashoffset="-254"
          ></circle>
          <circle
            className="pl__ring5"
            cx="64"
            cy="64"
            r="36"
            fill="none"
            // stroke="hsl(43,90%,55%)"
            stroke="#e2afff"
            stroke-width="4"
            transform="rotate(-90,64,64)"
            stroke-linecap="round"
            stroke-dasharray="226.2 226.2"
            stroke-dashoffset="-225.8"
          ></circle>
          <circle
            className="pl__ring6"
            cx="64"
            cy="64"
            r="32.5"
            fill="none"
            // stroke="hsl(53,90%,55%)"
            stroke="#f38375"
            stroke-width="3"
            transform="rotate(-90,64,64)"
            stroke-linecap="round"
            stroke-dasharray="204.2 204.2"
            stroke-dashoffset="-203.9"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
