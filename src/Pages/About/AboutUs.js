import aboutUs from "../../assets/aboutUs.png";
import story from "../../assets/story.png";
import directors from "../../assets/directors.png";
import message from "../../assets/message.png";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import { LangContext } from "../../context/LangContext";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Abouts from "../Home/components/About";
import bodyone from "../../assets/bodyone.png";
import bodytwo from "../../assets/bodytwo.png";
const AboutUs = () => {
  const navigate = useNavigate();
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  return (
    <div className="pt-20">
      <div
        style={{
          backgroundImage: `url(${aboutUs})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "600px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 " />
        <div className="flex flex-col items-left absolute w-full text-left  justify-start z-30 top-1/3 pl-44">
          <h1 className="text-white text-left font-semiBold text-2xl py-5 md:text-6xl">
            {isAmh ? "የድርጅት መዋቅር" : "About us"}
          </h1>
          <p className="text-lg font-light text-white w-[40%]">
            {isAmh
              ? "ቤት/ስለ እኛ"
              : "As Ethiopia's top insurance choice, NIB Insurance has a long history of great service and new ideas. We've had the honor of helping lots of different people, from small business owners and individuals to big companies and banks. What makes us special is that we're dedicated to finding the right solutions that fit your needs and keep your future safe."}
          </p>
        </div>
      </div>
      {/*  */}

      {/* ORGANIZATIONAL STRUCTURE */}
      <div className="relative p-3">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-medium  text-[#661F00] text-4xl text-center py-6">
            {isAmh ? "ድርጅታዊ መዋቅር" : " Our Story"}
          </h1>
          <div className="flex flex-col items-center    ">
            <h3 className="w-[70%] text-center mb-10">
              {isAmh
                ? "የኩባንያው መዋቅር"
                : "From Humble Beginnings to Insurance Excellence: A Journey Marked by Dedication, Innovation, and Unwavering Commitment to Our Customers' Peace of Mind."}
            </h3>

            <img className="my-10" src={story} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
