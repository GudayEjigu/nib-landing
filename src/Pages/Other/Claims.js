import { useEffect, useState, useContext } from "react";
import { urlFor, client } from "../../utils/client";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Spinner } from "@chakra-ui/react";
import bodyone from "../../assets/LeftFrame.png";
import bodytwo from "../../assets/RightFrame.png";
import car from "../../assets/car.png";
import two from "../../assets/five.png";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import { Tab } from "@headlessui/react";
import AddisAbeba from "./AddisAbeba";
import MainBranch from "./MainBranch";
import OutlyingBranches from "./OutlyingBranches";
import { LangContext } from "../../context/LangContext";

const Claims = () => {
  const { isAmh } = useContext(LangContext);

  return (
    <div>
      {" "}
      <div className="absolute left-0 top-0 bottom-0 h-full z-40 hidden md:flex ">
        <img src={bodyone} alt="" className="h-full object-contain" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 h-full z-40 hidden md:flex ">
        <img src={bodytwo} alt="" className="h-full object-contain" />
      </div>
      <div
        style={{
          backgroundImage: `url(${two})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "350px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 " />
        <div className="flex flex-col items-center absolute w-full text-center justify-center z-30 top-1/2">
          <h1 className="text-white text-center font-semiBold text-2xl py-5 md:text-4xl">
            {isAmh ? "የይገባኛል ጥያቄዎች" : "Claims"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/የይገባኛል ጥያቄዎች" : "HOME/Claims"}
          </p>
        </div>
      </div>
      <div className="h-44"></div>
    </div>
  );
};

export default Claims;
