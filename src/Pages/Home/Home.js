import React from "react";
import Client from "./components/Client";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Why from "./components/Why";
import Contact from './components/Contact'
import Insurances from "./components/Insurances";
const Home = () => {
  return (
    <>
      
     <Banner />
      {/* <Client /> */}
      <About />
      <Services />
      <Blog />
      <Insurances />
      <Why />
      <Contact />
    </>
  );
};

export default Home;
