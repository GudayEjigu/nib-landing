

import two from "../../assets/five.png";
import directors from "../../assets/directors.png";
import message from "../../assets/message.png";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import { LangContext } from "../../context/LangContext";
import axios from "axios";
import ReactHtmlParser from "react-html-parser"
import Abouts from "../Home/components/About";
import bodyone from "../../assets/LeftFrame.png";
import bodytwo from "../../assets/RightFrame.png";
const CompanyOverview = () => {
  const navigate = useNavigate();
  const {isAmh} =useContext(LangContext);
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
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/managments`,
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
  console.log(managementData?.data?.data)
  const orderOne= managementData?.data?.data?.data?.filter((item)=>item.order == 1  && item.type === "Top Managment")
  const orderTwo= managementData?.data?.data?.data?.filter((item)=>item.order == 2 && item.type === "Top Managment")
  const orderThree= managementData?.data?.data?.data?.filter((item)=>item.order == 3 && item.type === "Top Managment")
  const orderFour= managementData?.data?.data?.data?.filter((item)=>item.order == 4 && item.type === "Top Managment")
    
  const orderFive= managementData?.data?.data?.data?.filter((item)=>item.order == 5 && item.type === "Top Managment")
  const orderSix= managementData?.data?.data?.data?.filter((item)=>item.order == 6 && item.type === "Top Managment")
  const orderSeven= managementData?.data?.data?.data?.filter((item)=>item.order == 7 && item.type === "Top Managment")
  const orderEight= managementData?.data?.data?.data?.filter((item)=>item.order == 8 && item.type === "Top Managment")
  const orderNine= managementData?.data?.data?.data?.filter((item)=>item.order == 9 && item.type === "Top Managment")
  const orderTen= managementData?.data?.data?.data?.filter((item)=>item.order == 10 && item.type === "Top Managment")


  //directors
  const orderDirectorOne= managementData?.data?.data?.data?.filter((item)=>item.order == 1  && item.type === "Director")
  const orderDirectorTwo= managementData?.data?.data?.data?.filter((item)=>item.order == 2 && item.type === "Director")
  const orderDirectorThree= managementData?.data?.data?.data?.filter((item)=>item.order == 3 && item.type === "Director")
  const orderDirectorFour= managementData?.data?.data?.data?.filter((item)=>item.order == 4 && item.type === "Director")
  const orderDirectorFive= managementData?.data?.data?.data?.filter((item)=>item.order == 5 && item.type === "Director")
  const orderDirectorSix= managementData?.data?.data?.data?.filter((item)=>item.order == 6 && item.type === "Director")
  const orderDirectorSeven= managementData?.data?.data?.data?.filter((item)=>item.order == 7 && item.type === "Director")
  const orderDirectorEight= managementData?.data?.data?.data?.filter((item)=>item.order == 8 && item.type === "Director")
  const orderDirectorNine= managementData?.data?.data?.data?.filter((item)=>item.order == 9 && item.type === "Director")
  const orderDirectorTen= managementData?.data?.data?.data?.filter((item)=>item.order == 10 && item.type === "Director")
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="flex flex-col items-center absolute w-full text-center justify-center z-30 top-1/2">
          <h1 className="text-white text-center font-semiBold text-2xl py-5 md:text-4xl">
          {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Overview"}
          </h1>
          <p className="text-sm font-light  text-white">{isAmh ? 'ቤት/ስለ እኛ' :'HOME/About'}</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0   z-40  hidden md:flex">
          <img
            src={bodyone}
            alt=""
            className="h-full object-contain  "
          />
        </div>
       
        <div className="absolute right-0 top-0  bottom-0  hidden md:flex">
          <img
            src={bodytwo}
            alt=""
            className="h-full object-contain  "
          />
        </div>
      {/*  */}
      <Abouts />

     

      {/* message */}
      {chairmanMessageData.isFetched ? (<div className="relative p-3 pt-20">
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
        <h1 className="font-semiBold text-4xl text-center pb-10">
        {isAmh ? 'መልእክት ከቦርድ ሰብሳቢ' :'MESSAGE FROM BOARD CHAIRMAN'}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1  max-w-6xl mx-auto items-start" >
          <div className="flex items-right justify-start">
            <div className="md:flex">
              <div className="flex justify-start md:w-[200%]  ">
                
            <img  src={chairmanMessageData?.data?.data?.data?.media[0]?.original_url } alt="" className="h-[390px] " />
              </div>
            <div className="">
            <h1 className="font-semiBold text-xl  ">{isAmh ? null : chairmanMessageData?.data?.data?.data?.title?.english}</h1>
            <p className="text-sm">
            {ReactHtmlParser(isAmh ? null : chairmanMessageData?.data?.data?.data?.description?.english.slice(0,1780))}
            </p>
            </div>
            </div>
          </div>
          {/* second grid */}
          <div className="flex flex-col text-start space-y-3">
            <h1 className="font-semiBold text-xl  ">{isAmh ? chairmanMessageData?.data?.data?.data?.title?.amharic : null}</h1>
            <p className="text-sm">
            {ReactHtmlParser(isAmh ? chairmanMessageData?.data?.data?.data?.description?.amharic : chairmanMessageData?.data?.data?.data?.description?.english.slice(1780))}
            </p>
          </div>
        </div>
      </div>):
      (
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
      )
      }
    </div>
  );
};

export default CompanyOverview;
