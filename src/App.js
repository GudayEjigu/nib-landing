import React from "react";
import { Navbar, Footer } from "./components";

import { Routes, Route } from "react-router-dom";
import {
  Home,
  Blog,
  Detail,
  Services,
  Faq,
  Contact,
  About,
  Vacancy,
  VacancyDetails,
  Publication,
  Branches,
  ServiceDetail,
} from "./Pages";
import "./App.css";
import { useLang } from "./context/lang";
import { LangContext } from "./context/LangContext";
const App = () => {
  const { isAmh, changeLang } = useLang();
  return (
    <LangContext.Provider value={{ isAmh, changeLang }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<Detail />} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/vacancies" element={<Vacancy />} />
        <Route path="/vacancies/:id" element={<VacancyDetails />} />
        <Route path="/services/detail/:id" element={<ServiceDetail />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/branches" element={<Branches />} />
      </Routes>
      <Footer />
    </LangContext.Provider>
  );
};

export default App;
