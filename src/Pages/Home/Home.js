import React from "react";
import Header from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
// import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Stats></Stats>
      <Services></Services>
      <Contact></Contact>
      {/* <Products></Products> */}
    </div>
  );
};

export default Home;
