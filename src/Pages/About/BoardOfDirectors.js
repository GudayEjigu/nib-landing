import two from "../../assets/five.png";
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
import bodyone from "../../assets/LeftFrame.png";
import bodytwo from "../../assets/RightFrame.png";
import BodyOne from "./components/BodyOne";
const BoardOfDirectors = () => {
  const navigate = useNavigate();
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const chairmanMessageData = useQuery(
    ["chairmanMessageDataApi"],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/chairman-messages`,
        {
          headers,
        }
      ),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {},
    }
  );
  const aboutDatas = useQuery(
    ["aboutDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/about`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {},
    }
  );

  const managementData = useQuery(
    ["managementDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/managments`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {},
    }
  );
  console.log(managementData?.data?.data);
  const orderTopManagment = managementData?.data?.data?.data?.filter(
    (item) => item.type === "Top Managment"
  );

  //directors
  const orderDirector = managementData?.data?.data?.data?.filter(
    (item) => item.type === "Director"
  );

  return (
    <div className="">
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
            {isAmh ? "የዳይሬክተሮች ቦርድ" : "Board Of Directors"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/ስለ እኛ" : "Home/About"}
          </p>
        </div>
      </div>
      {/*  */}

      {/* ORGANIZATIONAL STRUCTURE */}
      <div className=" p-3">
        <div className="absolute left-0 top-0 h-[87.7%]   z-40  hidden md:flex">
          <img src={bodyone} alt="" className="h-full object-contain  " />
        </div>

        <div className="absolute right-0 top-0  h-[87.7%]  hidden md:flex">
          <img src={bodytwo} alt="" className="h-full object-contain  " />
        </div>

        <div className="max-w-full mx-[4%]">
         

          {/* directors */}
          <h1 className="font-medium  text-[#661F00] text-3xl ">
            {" "}
            {isAmh ? "ዳይሬክተሮች" : "Directors"}
          </h1>
          <div>
            <div className="max-w-sm md:max-w-[100%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-5 items-center justify-center">
              {orderDirector?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center  shadow-2xl rounded-lg">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[300px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4   text-xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 pb-4 text-sm">
                    {isAmh ? item?.role?.amharic : item.role?.english}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
