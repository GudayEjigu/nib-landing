import two from "../../assets/five.png";
import directors from "../../assets/directors.png";
import message from "../../assets/message.png";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import { LangContext } from "../../context/LangContext";
import axios from "axios";
import companyProfile from "../../assets/companyProfile.png";
import capital from "../../assets/capital.png";
import barChart from "../../assets/barChart.png";
import corporate from "../../assets/corporate.png";

import ReactHtmlParser from "react-html-parser";
import Abouts from "../Home/components/About";
import bodyone from "../../assets/LeftFrame.png";
import bodytwo from "../../assets/RightFrame.png";
const CorporatePerformance = () => {
  const navigate = useNavigate();
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${corporate})`,
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
            {isAmh ? "የድርጅት መዋቅር" : "Corporate Performance"}
          </h1>
          <p className="text-lg font-light text-white w-[40%]">
            {isAmh
              ? "ቤት/ስለ እኛ"
              : "Dive into our Corporate Performance and witness the numbers behind our success story. Explore the metrics, charts, and milestones that define our journey of excellence. At NIB Insurance, our commitment to transparency and results is a testament to our dedication in serving you better."}
          </p>
        </div>
      </div>

      {/*  */}

      <div className="pb-10 mx-20">
        <div className="py-10">
          <h1 className="font-medium text-xl  text-[#661F00]">
            {isAmh ? "ተልዕኮ" : "About Company Performance and Reports"}
          </h1>
          <div className="w-10 bg-[#FFB300] h-[2px]" />
        </div>
        <div className="flex  gap-4">
          <div className="w-[20%] flex flex-col justify-center ">
            {" "}
            <p className="p-4 text-center my-2 rounded-lg border border-[#661F00] text-lg text-[#661F00]">
              Gross Premium Income (ETB){" "}
            </p>
            <p className="p-4 text-center my-2 rounded-lg border border-[#661F00] text-lg text-[#661F00]">
              Total Assets (ETB){" "}
            </p>
            <p className="p-4 text-center my-2 rounded-lg border border-[#661F00] text-lg text-[#661F00]">
              Total Equity (ETB){" "}
            </p>
            <p className="p-4 text-center my-2 rounded-lg border border-[#661F00] text-lg text-[#661F00]">
              Gross Profit (ETB){" "}
            </p>
            <p className="p-4 text-center my-2 rounded-lg border border-[#661F00] text-lg text-[#661F00]">
              Paid Up Capital (ETB){" "}
            </p>
          </div>
          <div className="w-[75%] flex justify-center">
            {" "}
            <img src={barChart} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePerformance;
