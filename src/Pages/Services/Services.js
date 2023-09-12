import { useEffect, useState, useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { urlFor, client } from "../../utils/client";
import two from "../../assets/five.png";
import { CgCalendarDates } from "react-icons/cg";
import { Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import BlockContent from "@sanity/block-content-to-react";
import { useHomeContext } from "../../context/HomeContext";
import bodyone from "../../assets/LeftFrame.png";
import life from "../../assets/lifeInsurance.png";
import nonLife from "../../assets/nonLifeInsurance.png";
import bodytwo from "../../assets/RightFrame.png";
import { useLang } from "../../context/lang";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import ReactHtmlParser from "react-html-parser";
const Services = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const servicesData = useQuery(
    ["servicesDataApi", id],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/service/${id}`,
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
  console.log(servicesData?.data?.data?.data[0]?.category?.name?.english);
  return (
    <div>
      {servicesData?.data?.data?.data[0]?.category?.name?.english ==
      "Non-Life Insurance" ? (
        <div
          style={{
            backgroundImage: `url(${nonLife})`,
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
              {isAmh ? "የድርጅት መዋቅር" : "General Insurance (Non-Life)"}
            </h1>
            <p className="text-lg font-light text-white w-[40%]">
              {isAmh
                ? "ቤት/ስለ እኛ"
                : "Discover the array of non-life insurance solutions we offer at NIB Insurance. From safeguarding your assets to protecting against unexpected challenges, our suite of services is designed to provide you with the peace of mind you deserve. Explore our comprehensive range of non-life insurance offerings tailored to meet your everyday needs."}
            </p>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div
            style={{
              backgroundImage: `url(${life})`,
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
                {isAmh ? "የድርጅት መዋቅር" : "Life and Health Insurance"}
              </h1>
              <p className="text-lg font-light text-white w-[40%]">
                {isAmh
                  ? "ቤት/ስለ እኛ"
                  : "Explore our Life and Health Insurance offerings at NIB Insurance, where we prioritize your well-being and financial security. Our range of services is crafted to protect your future, ensuring that you and your loved ones are cared for in times of need. Delve into the details of our life and health insurance solutions, designed to provide you with the assurance and support you deserve."}
              </p>
            </div>
          </div>
        </>
      )}

      {/*  */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 h-full z-40 hidden md:flex">
          <img src={bodyone} alt="" className="h-full object-contain " />
        </div>
        <div className="absolute right-0 top-0 bottom-0 h-full z-40 hidden md:flex">
          <img src={bodytwo} alt="" className="h-full object-contain " />
        </div>
        <div className="flex flex-col items-center justify-center">
         
          <p></p>
        </div>
        <div className="max-w-6xl mx-auto p-3">
          <h1 className="font-medium text-xl text-[#661F00]">
            {isAmh
              ? servicesData?.data?.data?.data[0]?.category?.name?.amharic
              : servicesData?.data?.data?.data[0]?.category?.name?.english}
          </h1>
        </div>
        <div className="max-w-6xl mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {servicesData.isFetched ? (
            servicesData?.data?.data?.data?.map((item) => (
              <div
                key={item?.id}
                className="bg-white relative p-3 z-40 rounded-lg shadow-2xl flex flex-col items-center justify-center"
              >
                <img src={item.service_photo} alt="" className="h-36" />
                <h1 className="text-xl text-center font-semiBold text-black ">
                  {isAmh ? item.title?.amharic : item.title?.english}
                </h1>
                <p className="text-sm text-center line-clamp-2">
                  {ReactHtmlParser(
                    isAmh ? item.body.amharic : item.body?.english
                  )}
                </p>
                <h4
                  onClick={() => navigate(`/services/detail/${item.id}`)}
                  className="cursor-pointer hover:opacity-70  bottom-0  font-semiBold mt-10 text-[#FFB300]"
                >
                  {isAmh ? "ተጨማሪ ያንብቡ" : "Learn more"}
                </h4>
              </div>
            ))
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
      </div>
    </div>
  );
};

export default Services;
