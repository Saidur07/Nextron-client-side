import React from "react";
const Banner = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Users
          </p>
        </div>
        <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">72.9K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Students
          </p>
        </div>
        <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">60K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Succesful Students
          </p>
        </div>
        <div className="text-center border-b pb-3 mx-2 md:border-b-0 md:mx-0  ">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">5K</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
