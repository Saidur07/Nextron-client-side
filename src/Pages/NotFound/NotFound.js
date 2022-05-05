import React from "react";
import { Link } from "react-router-dom";
import bar from "../../components/Shared/Progress/Progress";
import "./NotFound.css";

const NotFound = () => {
  bar();
  return (
    <div>
      <div className="not-found parallax">
        <div className="sky-bg"></div>
        <div className="wave-7"></div>
        <div className="wave-6"></div>
        <Link className="wave-island" to="/">
          <img
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
            alt="Island"
          />
        </Link>
        <div className="wave-5"></div>
        <div className="wave-lost wrp">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <div className="wave-4"></div>
        <div className="wave-boat">
          <img
            className="boat"
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg"
            alt="Boat"
          />
        </div>
        <div className="wave-3"></div>
        <div className="wave-2"></div>
        <div className="wave-1"></div>
        <div className="wave-message">
          <p>OOPs! You're lost 🥴</p>
          <p>Find The Island Avobe 🧐</p>
          <p>and Click on it to return 🤫</p>
        </div>
      </div>
      <div className="mobile-msg">
        <h3 className="text-3xl text-center text-slate-500 my-6">
          Ahh shit! here we go again!!
        </h3>
        <h1 className="text-6xl my-6 text-center text-cyan-800">404</h1>

        <div className="flex items-center justify-center">
          <Link
            data-mdb-ripple="true"
            data-mdb-ripple-color="white"
            to="/"
            type="button"
            className=" my-6 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
          >
            Go Back
          </Link>
        </div>
        <Link className="wave-island" to="/">
          <img
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
            alt="Island"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
