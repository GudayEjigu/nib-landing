import React from "react";
import { LangContext } from "../../../context/LangContext";
import { useContext } from "react";

import travel from "../../../assets/travel.png";
import travel1 from "../../../assets/travel1.png";
import travel2 from "../../../assets/travel2.png";
import { useNavigate } from "react-router-dom";

const TravelInsurance = () => {
  const { isAmh } = useContext(LangContext);

  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url(${travel})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "800px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 " />
        <div className="flex flex-col items-left absolute w-full text-left  justify-start z-30 top-1/3 pl-44">
          <h1 className="text-white text-left font-semiBold text-2xl py-5 md:text-6xl">
            {isAmh ? "የድርጅት መዋቅር" : "Travel Insurance"}
          </h1>
          <p className="text-lg font-light text-white w-[40%]">
            {isAmh
              ? "ቤት/ስለ እኛ"
              : "Travel with confidence, knowing you're protected wherever your adventures take you. Our Travel Insurances are designed to offer you peace of mind while exploring the world. We're here to ensure you enjoy worry-free travels. Explore our travel insurance options and embark on your journeys with confidence."}
          </p>
        </div>
      </div>
      <div className="py-2 mx-44">
        <div className="">
          <h1 className="font-medium text-xl pt-2 text-[#661F00]">
            {isAmh ? "ተልዕኮ" : "Travel Insurance"}
          </h1>
          <div className="w-10 bg-[#FFB300] h-[2px]" />
          <p className="my-2">
            Discover our comprehensive range of travel insurance plans, each
            tailored to suit your specific needs.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            {" "}
            <img src={travel1} alt="img" />
          </div>
          <div className="">
            {" "}
            <img src={travel2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;
