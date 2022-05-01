import React from "react";
import sr from "../../assets/images/sr.png";

const About = () => {
  return (
    <div className="bg-realBlack py-6">
      <div className="p-4 w-full md:w-2/3 bg-realBlack rounded-lg shadow-xl md:px-6 md:py-8  container mx-auto">
        <img src={sr} className="mx-auto my-4 rounded-xl" alt="" />
        <h1 className="text-center text-4xl font-serif text-white">
          <span className="text-3xl font-sans font-light text-slate-300">
            Created by :{" "}
          </span>{" "}
          Saidur Rahman
        </h1>
        <p className="md:w-2/4 mx-auto mt-8 font-sans text-gray-100">
          HI. I am Saidur. I'm 14. I'm from Bangladesh. I am a Jr. full stack
          web developer. And Currently working in a company as a Jr. Front end
          web developer intern (remotely). And also I am a moderator at
          Programming Hero from 1.5 Years. I love learning new technologies
          every day. Currently I am learning the skill of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
