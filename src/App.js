import React from "react";
import { Navbar, Footer } from "./components";
import { IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
import { Routes, Route, Navigate } from "react-router-dom";
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
import CompanyOverview from "./Pages/About/CompanyOverview";
import OrganizationStructure from "./Pages/About/OrganizationStructure";
import ExecutiveManagment from "./Pages/About/ExecutiveManagment";
import BoardOfDirectors from "./Pages/About/BoardOfDirectors";
import Claims from "./Pages/Other/Claims";
import AboutUs from "./Pages/About/AboutUs";
import CorporatePerformance from "./Pages/About/CorporatePerformance";
import MicroInsurance from "./Pages/Services/components/MicroInsurance";
import ProposalForms from "./Pages/Services/components/ProposalForms";
import PolicyRenewal from "./Pages/Services/components/PolicyRenewal";
import TravelInsurance from "./Pages/Services/components/TravelInsurance";
import TakafulInsurance from "./Pages/Services/components/TakafulInsurance";
import UnderConstruction from "./components/UnderConstruction";
const App = () => {
  const { isAmh, changeLang } = useLang();
  const { user, token } = useAuth();
  //return
  return (
    <LangContext.Provider value={{ isAmh, changeLang }}>
      <div className="relative w-full   ">
        <div className=" fixed z-50 right-4 top-1/3 flex items-center  justify-center ">
          <div className="flex flex-col space-y-5 items-center space-x-2">
            <div
              onClick={() =>
                window.open("https://www.facebook.com/nibinsurance")
              }
              className="bg-[#FFB300] p-2 rounded-full cursor-pointer"
            >
              <GrFacebookOption className="text-[#661F00] text-2xl" />
            </div>
            <div
              onClick={() => window.open("https://twitter.com/co_nib")}
              className="bg-[#FFB300] p-2 rounded-full text-2xl cursor-pointer"
            >
              <IoLogoTwitter className="text-[#661F00] text-2xl" />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=y11wlQ1zbzQ&feature=youtu.be"
                )
              }
              className="bg-[#FFB300] p-2 rounded-full text-2xl cursor-pointer"
            >
              <GrYoutube className="text-[#661F00]" />
            </div>
            <div
              onClick={() =>
                window.open("https://www.linkedin.com/company/nib-insurance/")
              }
              className="bg-[#FFB300] p-2 rounded-full text-2xl cursor-pointer"
            >
              <GrLinkedinOption className="text-[#661F00]" />
            </div>
          </div>
        </div>
        <Navbar />
        {!user && !token ? (
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<Detail />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/micro" element={<MicroInsurance />} />
            <Route path="/takaful" element={<TakafulInsurance />} />
            <Route path="/travel" element={<TravelInsurance />} />
            <Route path="/policy_renewal" element={<PolicyRenewal />} />
            <Route path="/proposal_forms" element={<ProposalForms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/company_overview" element={<CompanyOverview />} />
            <Route path="/corporate_performance" element={<CorporatePerformance />} />
            <Route
              path="/organization_structure"
              element={<OrganizationStructure />}
            />
            <Route
              path="/executive_managment"
              element={<ExecutiveManagment />}
            />
             <Route
              path="/board-of-directors"
              element={<BoardOfDirectors />}
            />
            <Route path="/vacancies" element={<Vacancy />} />
            <Route path="/vacancies/:id" element={<VacancyDetails />} />
            <Route path="/services/detail/:id" element={<ServiceDetail />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/under_construction" element={<UnderConstruction />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<Detail />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/company_overview" element={<CompanyOverview />} />
            <Route
              path="/organization_structure"
              element={<OrganizationStructure />}
            />
            <Route
              path="/executive_managment"
              element={<ExecutiveManagment />}
            />
             <Route
              path="/board-of-directors"
              element={<BoardOfDirectors />}
            />
            <Route path="/vacancies" element={<Vacancy />} />
            <Route path="/vacancies/:id" element={<VacancyDetails />} />
            <Route path="/services/detail/:id" element={<ServiceDetail />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/claims" element={<Claims />} />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
        <Footer />
      </div>
    </LangContext.Provider>
  );
};

export default App;
