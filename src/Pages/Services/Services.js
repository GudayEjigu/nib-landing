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
import bodyone from "../../assets/bodyone.png";
import bodytwo from "../../assets/bodytwo.png";
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
  console.log(servicesData?.data?.data);
  return (
    <div>
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="flex flex-col items-center absolute w-full text-center justify-center z-30 top-1/2">
          <h1 className="text-white text-center font-bold text-2xl py-5 md:text-4xl">
            {isAmh ? 'አገልግሎቶች'  :'SERVICES'}
          </h1>
          <p className="text-sm font-light text-white">{isAmh ? ' ቤት/አገልግሎቶች':'HOME/SERVICES'}</p>
        </div>
      </div>

      {/*  */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 h-full z-40 hidden md:flex">
          <img src={bodyone} alt="" className="h-full object-contain" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 h-full z-40 hidden md:flex">
          <img src={bodytwo} alt="" className="h-full object-contain" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center pt-10">
            {isAmh ? 'የእኛ አገልግሎቶች' :'our services'}
          </h1>
          <p></p>
        </div>
        <div className="max-w-6xl mx-auto p-3">
          <h1 className="font-medium text-xl text-gray-800">
            {isAmh
              ? servicesData?.data?.data?.data[0]?.category?.name?.amharic
              : servicesData?.data?.data?.data[0]?.category?.name?.english}
          </h1>
        </div>
        <div className="max-w-6xl mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-3 ">
          {servicesData.isFetched ? (
            servicesData?.data?.data?.data?.map((item) => (
              <div key={item?.id}
                 className="bg-white relative p-3 z-40 rounded-lg shadow-lg flex flex-col items-center justify-center">
                   <img  src={item.service_photo} alt="" className="h-36" />
                   <h1 className="text-xl text-center font-bold text-black ">{isAmh ? item.title?.amharic :item.title?.english}</h1>
                   <p className="text-sm text-center line-clamp-2">{ReactHtmlParser(isAmh ? item.body.amharic : item.body?.english)}</p>
                       <h4 
                        onClick={() => navigate(`/services/detail/${item.id}`)}
                       className="cursor-pointer hover:opacity-70  bottom-0  font-bold  text-[#AC7729]">
                          {isAmh ? 'ተጨማሪ ያንብቡ' :'Learn more'}
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
