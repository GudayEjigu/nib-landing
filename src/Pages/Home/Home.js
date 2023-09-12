import React from "react";
import Client from "./components/Client";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Why from "./components/Why";
import Contact from './components/Contact'
import Insurances from "./components/Insurances";
import Dashboard from "./components/Dashboard";
import Faq from "../Other/Faq";
const Home = () => {
  return (
    <>
      
     <Banner />
      {/* <Client /> */}
      <About />
      <Dashboard/>
      <Services />
      <Blog />
      <Insurances />
      <Faq/>
      <Why />
      <Contact />
    </>
  );
};

export default Home;
