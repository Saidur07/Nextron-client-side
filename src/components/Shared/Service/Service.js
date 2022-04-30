import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { img, title, description, price } = props.data;
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 hover:-rotate-1 hover:shadow-stone-300 transition-all">
      <img
        className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mx-2"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <br />
        <p className="mb-3 border-2 rounded-full text-gray-700 dark:text-gray-400 font-semibold text-center">
          {price}$
        </p>
        <Link
          to={"/checkout"}
          className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Service;
