import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Shared/Service/Service";

const Products = () => {
  const [Products, setServices] = useState([]);
  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div
      className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="Products"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d9d7687a-355f-4502-8ec4-7945db034688"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Products</span>
          </span>{" "}
          from Alex Johnson
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Alex Johnson provides various courses. Here are some of them :
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2">
        {Products.slice(0, 4).map((service) => (
          <Service key={service.id} data={service}></Service>
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/Products"
          className="inline-flex items-center justify-center h-12 mt-4 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-700 hover:bg-gray-600 focus:shadow-outline focus:outline-none active:scale-90"
        >
          View All
        </Link>
      </div>
    </div>
  );
};
export default Products;
