import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://wallpapersmug.com/large/3bcbc6/digital-art-neon-bubbles.jpg)",
          minHeight: "70vh",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col  lg:flex-row-reverse">
          <div
            id="carouselDarkVariant"
            className="carousel slide carousel-fade carousel-dark relative lg:w-1/2 sm:w-2/3 w-full rounded-xl animate-wiggle "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item relative active float-left w-full">
                <img
                  src="https://i.pinimg.com/originals/ab/5f/d9/ab5fd955d44104d1d4d1ed588d3a977c.gif"
                  className="block w-full h-96 hover:scale-125  transition-all"
                  alt=""
                />
              </div>
              <div className="carousel-item relative  float-left w-full">
                <img
                  src="https://cdn.dribbble.com/users/24011/screenshots/4219260/thunderly_intro_dribbble2.gif"
                  className="block w-full h-96 hover:scale-125 scale-110 transition-all"
                  alt=""
                />
              </div>
              <div className="carousel-item  relative float-left w-full">
                <img
                  src="https://miro.medium.com/max/1400/1*Ppchri1j6T4Vtg7r7o4oNA.gif"
                  className="block w-full h-96 hover:scale-125 scale-125 transition-all"
                  alt=""
                />
              </div>
            </div>

            {/* <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselDarkVariant"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
          <div className="lg:w-1/2 sm:w-2/3 w-full animate-open">
            <h1 className="md:text-5xl text-4xl font-bold text-white font-sans tracking-widest md:italic sm:text-center">
              Nextron!
            </h1>
            <h3 className="md:text-3x text-2xl  font-bold text-slate-300 font-serif sm:text-center">
              The Next Generation Warehouse.
            </h3>
            <p className="py-6 text-slate-200 text-lg">
              Nextron is a Warehouse based on electrical products. You can add,
              manage, remove products here. Nextron provides customizing your
              products option for free. It is so popular that it's used by 9.83B
              Humans and 1.27B Aliens.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <Link
              to="/about"
              data-mdb-ripple="true"
              data-mdb-ripple-color="white"
              className="text-white bg-darkBlue p-5 rounded-2xl md:ml-48 shadow-lg  hover:text-gray-300 transition-all"
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
