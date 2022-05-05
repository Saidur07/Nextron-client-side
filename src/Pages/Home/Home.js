import React from "react";
import Header from "../../components/Banner/Banner";
import Stats from "../../components/Stats/Stats";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import bar from "../../components/Shared/Progress/Progress";

const Home = () => {
  bar();
  return (
    <div>
      <Header></Header>
      <Stats></Stats>
      <Products></Products>
      <Services></Services>
      <Newsletter></Newsletter>
      <Contact></Contact>
    </div>
  );
};

export default Home;
