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
import managment from "../../assets/managment.png";

import ReactHtmlParser from "react-html-parser";
import Abouts from "../Home/components/About";
import bodyone from "../../assets/LeftFrame.png";
import bodytwo from "../../assets/RightFrame.png";
const CompanyOverview = () => {
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

  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${companyProfile})`,
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
            {isAmh ? "የድርጅት መዋቅር" : "Company Profile"}
          </h1>
          <p className="text-lg font-light text-white w-[40%]">
            {isAmh
              ? "ቤት/ስለ እኛ"
              : "NIB Insurance - where expertise meets integrity, and where our commitment to your security and success is at the heart of everything we do. Explore our journey, values, and unwavering dedication in our company profile."}
          </p>
        </div>
      </div>

      {/*  */}
      <Abouts />

      <div className="py-2 mx-44">
        <div className="">
          <h1 className="font-medium text-xl pt-2 text-[#661F00]">
            {isAmh ? "ተልዕኮ" : "General Company Information"}
          </h1>
          <div className="w-10 bg-[#FFB300] h-[2px]" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            {" "}
            <img src={capital} alt="img" />
          </div>
          <div className="">
            {" "}
            <img src={managment} alt="img" />
          </div>
        </div>
      </div>

      {/* message */}
      {chairmanMessageData.isFetched ? (
        <div className="relative p-3 pt-20">
          <div className="absolute left-0 top-0 bottom-0 h-full z-40  hidden md:flex">
            {/* <img
            src={chairmanMessageData?.data?.data?.data?.media[0]?.original_url }
            alt=""
            className="h-full object-contain  object-cover"
          /> */}
          </div>
          <div className="absolute right-0 top-0 bottom-0 h-full z-40  hidden md:flex">
            {/* <img src={bodytwo} alt="" className="h-full object-contain" /> */}
          </div>
          <h1 className="font-medium text-[#661F00] text-4xl text-center pb-10">
            {isAmh ? "መልእክት ከቦርድ ሰብሳቢ" : "MESSAGE FROM BOARD CHAIRMAN"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-1  max-w-6xl mx-auto items-start">
            <div className="flex items-right justify-start">
              <div className="md:flex">
                <div className="flex justify-start md:w-[200%]  ">
                  <img
                    src={
                      chairmanMessageData?.data?.data?.data?.media[0]
                        ?.original_url
                    }
                    alt=""
                    className="h-[390px] "
                  />
                </div>
                <div className="">
                  <h1 className="font-semiBold text-xl  ">
                    {isAmh
                      ? null
                      : chairmanMessageData?.data?.data?.data?.title?.english}
                  </h1>
                  <p className="text-sm">
                    {ReactHtmlParser(
                      isAmh
                        ? null
                        : chairmanMessageData?.data?.data?.data?.description?.english.slice(
                            0,
                            1780
                          )
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* second grid */}
            <div className="flex flex-col text-start space-y-3">
              <h1 className="font-semiBold text-xl  ">
                {isAmh
                  ? chairmanMessageData?.data?.data?.data?.title?.amharic
                  : null}
              </h1>
              <p className="text-sm">
                {ReactHtmlParser(
                  isAmh
                    ? chairmanMessageData?.data?.data?.data?.description
                        ?.amharic
                    : chairmanMessageData?.data?.data?.data?.description?.english.slice(
                        1780
                      )
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full py-10">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#a27128"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

export default CompanyOverview;
