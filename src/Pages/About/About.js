import React from "react";
import sr from "../../assets/images/sr.png";
import bar from "../../components/Shared/Progress/Progress";

const About = () => {
  bar();
  return (
    <div className="bg-realBlack py-6 bg-[]">
      <div className="p-4 w-full md:w-2/3 bg-realBlack rounded-lg shadow-xl md:px-6 md:py-8  container mx-auto">
        <img src={sr} className="mx-auto my-4 rounded-xl" alt="" />
        <h1 className="text-center text-4xl font-serif text-white">
          <span className="text-3xl font-sans font-light text-slate-300">
            Created by :{" "}
          </span>{" "}
          Saidur Rahman
        </h1>
        <p className="md:w-2/4 mx-auto mt-8 font-sans text-gray-100">
          HI. I am Saidur, 14 y/o. I'm from Bangladesh. I am a Jr. full stack
          web developer. Currently working at Sofwid as a Jr. Front end web
          developer intern (remotely). And also I am a moderator at Programming
          Hero from 2 Years. I love learning new technologies every day.
          Currently I am learning the skill of web development.
        </p>
        <hr className="my-4 w-1/3 mx-auto" />
        <p className=" my-4 text-center font-sans text-gray-100">
          Wanna Listen a song which describe me most? 🙃
        </p>
        <iframe
          title="No Friends"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/4U7G8dgUodMEVSv96QRcDb?utm_source=generator"
          className="mx-auto"
          width="50%"
          height="80"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
