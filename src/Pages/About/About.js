import React from "react";
import sr from "../../assets/images/sr.png";

const About = () => {
  return (
    <div className="bg-realBlack py-6">
      <div className="p-4 w-full md:w-2/3 bg-realBlack rounded-lg shadow md:px-6 md:py-8  container mx-auto">
        <img src={sr} className="mx-auto my-4 rounded-xl" alt="" />
        <h1 className="text-center text-4xl font-serif text-white">
          <span className="text-3xl font-sans font-light text-slate-300">
            Created by :{" "}
          </span>{" "}
          Saidur Rahman
        </h1>
        <p className="md:w-2/4 mx-auto mt-8 font-sans text-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          architecto dignissimos itaque alias neque nulla minus aliquam illo,
          maxime harum explicabo quos, necessitatibus, incidunt sapiente facere
          sequi ut ullam nam illum minima accusamus numquam at quis provident.
          Debitis est dolorem asperiores quam laborum, labore, cum cupiditate,
          autem excepturi sapiente voluptatum illum consectetur aperiam corrupti
          commodi rem ullam quis! Voluptates tempore exercitationem tenetur,
          neque explicabo nulla alias. Voluptatibus, expedita? Quam harum saepe
          natus optio hic quae officiis unde fugiat? Possimus quibusdam ducimus
          similique ab repellendus nostrum ex maxime porro sequi veritatis
          officiis provident, aperiam quas? Eligendi labore et iste nemo quo!
        </p>
      </div>
    </div>
  );
};

export default About;
