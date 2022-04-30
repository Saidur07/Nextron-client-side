import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-center text-cyan-700 my-12">
        UwU. Its not the page that you are looking for!
      </h1>
      <img className="mx-auto my-12" src={NotFoundImg} alt="" />
      <h3 className="md:text-4xl text-2xl text-center text-yellow-500">
        AWW... Dont't Cry!
      </h3>
      <h4 className="md:text-6xl text-4xl text-center text-zinc-300 my-6">
        Its just a <span className="text-8xl text-indigo-500">404</span> error
      </h4>
      <h5 className="md:text-4xl text-3xl text-center text-zinc-500 my-6">
        But ! You Have an option to revive yourself from here{" "}
        <span className="text-4xl md:text-6xl text-cyan-400 font-serif">
          Yet! 🤫🤫
        </span>
      </h5>
      <br />
      <div className="flex justify-center items-center">
        <Link
          to={"/"}
          className=" inline-flex items-center justify-center h-16 px-32 font-medium tracking-wide text-white transition duration-200 rounded-xl md:px-96 shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline active:scale-90 focus:outline-none"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
