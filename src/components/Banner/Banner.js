import React from "react";
import { Link } from "react-router-dom";
import bubbles from "../../assets/images/bubbles.jpg";
import thunderly from "../../assets/images/thunderly.gif";
import logo from "../../assets/images/bolt.gif";

const Header = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${bubbles})`,
          minHeight: "70vh",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div className="lg:w-1/2 sm:w-2/3 w-full animate-wiggle">
            <img src={thunderly} className="rounded-2xl w-2/3 mx-auto" alt="" />
          </div>
          <div className="lg:w-1/2 sm:w-2/3 w-full animate-open px-4 my-3 ">
            <h1 className="md:text-5xl text-3xl text-center md:text-justify font-bold text-white font-sans tracking-widest md:italic">
              Nextron!
              <span>
                <img src={logo} alt="" className="inline w-1/5" />
              </span>
            </h1>
            <h3 className=" md:text-2xl text-xl  font-bold text-slate-300 font-serif">
              The Next Gen Warehouse.
            </h3>
            <p className="py-3 md:py-6 mb-4 text-slate-200 md:text-lg ">
              Nextron is a Warehouse based on electrical products. You can add,
              manage, remove products here. Nextron provides customizing your
              products option for free. It is so popular that it's used by 9.2B
              Humans and 1.8B Aliens.
            </p>

            <Link
              to="/about"
              data-mdb-ripple="true"
              data-mdb-ripple-color="white"
              className="text-white bg-darki py-4 px-8 rounded-lg md:ml-48 shadow-lg active:scale-90 hover:text-gray-300 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
