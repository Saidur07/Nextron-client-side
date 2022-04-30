import React from "react";
import Header from "../../components/Banner/Banner";
import Banner from "../../components/Stats/States";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Skills></Skills>
    </div>
  );
};

export default Home;
