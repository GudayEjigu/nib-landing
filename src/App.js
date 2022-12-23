import React from "react";
import { Navbar, Footer } from "./components";
import { IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
import { Routes, Route,Navigate } from "react-router-dom";
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
  Profile,
} from "./Pages";
import "./App.css";
import { useLang } from "./context/lang";
import { LangContext } from "./context/LangContext";
import { useAuth } from "./context/auth";
const App = () => {
  const { isAmh, changeLang } = useLang();
  const {user,token} = useAuth()
  return (
    <LangContext.Provider value={{ isAmh, changeLang }}>
      <div className="relative w-full  ">
        <div className=" fixed z-50 right-4 top-1/3 flex items-center  justify-center ">
        <div className="flex flex-col space-y-5 items-center space-x-2">
                <div onClick={()=>window.open('https://www.facebook.com/nibinsurance')}
                className="bg-[#FAD03C] p-2 rounded-full cursor-pointer">
                  <GrFacebookOption className="text-black text-2xl" />
                </div>
                <div onClick={()=>window.open('https://twitter.com/co_nib')}
                className="bg-[#FAD03C] p-2 rounded-full text-2xl cursor-pointer">
                  <IoLogoTwitter className="text-black text-2xl" />
                </div>
                <div 
                onClick={()=>window.open('https://www.youtube.com/watch?v=y11wlQ1zbzQ&feature=youtu.be')}
                className="bg-[#FAD03C] p-2 rounded-full text-2xl cursor-pointer">
                  <GrYoutube className="text-black" />
                </div>
                <div onClick={()=>window.open('https://www.linkedin.com/company/nib-insurance/')}
                className="bg-[#FAD03C] p-2 rounded-full text-2xl cursor-pointer">
                  <GrLinkedinOption className="text-black" />
                </div>
              </div>
        </div>
      <Navbar />
      {!user && !token ? 
      <Routes>
         <Route path="*" element={<Navigate to="/" />} />
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
    :
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
    <Route path="/profile" element={<Profile />} />
  </Routes>
}
      <Footer />
      </div>
    </LangContext.Provider>
  );
};

export default App;
