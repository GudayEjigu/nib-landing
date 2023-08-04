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
const ExecutiveManagment = () => {
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
  const orderOne = managementData?.data?.data?.data?.filter(
    (item) => item.order == 1 && item.type === "Top Managment"
  );
  const orderTwo = managementData?.data?.data?.data?.filter(
    (item) => item.order == 2 && item.type === "Top Managment"
  );
  const orderThree = managementData?.data?.data?.data?.filter(
    (item) => item.order == 3 && item.type === "Top Managment"
  );
  const orderFour = managementData?.data?.data?.data?.filter(
    (item) => item.order == 4 && item.type === "Top Managment"
  );

  const orderFive = managementData?.data?.data?.data?.filter(
    (item) => item.order == 5 && item.type === "Top Managment"
  );
  const orderSix = managementData?.data?.data?.data?.filter(
    (item) => item.order == 6 && item.type === "Top Managment"
  );
  const orderSeven = managementData?.data?.data?.data?.filter(
    (item) => item.order == 7 && item.type === "Top Managment"
  );
  const orderEight = managementData?.data?.data?.data?.filter(
    (item) => item.order == 8 && item.type === "Top Managment"
  );
  const orderNine = managementData?.data?.data?.data?.filter(
    (item) => item.order == 9 && item.type === "Top Managment"
  );
  const orderTen = managementData?.data?.data?.data?.filter(
    (item) => item.order == 10 && item.type === "Top Managment"
  );

  //directors
  const orderDirectorOne = managementData?.data?.data?.data?.filter(
    (item) => item.order == 1 && item.type === "Director"
  );
  const orderDirectorTwo = managementData?.data?.data?.data?.filter(
    (item) => item.order == 2 && item.type === "Director"
  );
  const orderDirectorThree = managementData?.data?.data?.data?.filter(
    (item) => item.order == 3 && item.type === "Director"
  );
  const orderDirectorFour = managementData?.data?.data?.data?.filter(
    (item) => item.order == 4 && item.type === "Director"
  );
  const orderDirectorFive = managementData?.data?.data?.data?.filter(
    (item) => item.order == 5 && item.type === "Director"
  );
  const orderDirectorSix = managementData?.data?.data?.data?.filter(
    (item) => item.order == 6 && item.type === "Director"
  );
  const orderDirectorSeven = managementData?.data?.data?.data?.filter(
    (item) => item.order == 7 && item.type === "Director"
  );
  const orderDirectorEight = managementData?.data?.data?.data?.filter(
    (item) => item.order == 8 && item.type === "Director"
  );
  const orderDirectorNine = managementData?.data?.data?.data?.filter(
    (item) => item.order == 9 && item.type === "Director"
  );
  const orderDirectorTen = managementData?.data?.data?.data?.filter(
    (item) => item.order == 10 && item.type === "Director"
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="flex flex-col items-center absolute w-full text-center justify-center z-30 top-1/2">
          <h1 className="text-white text-center font-semiBold text-2xl py-5 md:text-4xl">
            {isAmh ? "አስፈፃሚ አስተዳደር" : "Executive Managment"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/ስለ እኛ" : "Home/About"}
          </p>
        </div>
      </div>
      {/*  */}

      {/* ORGANIZATIONAL STRUCTURE */}
      <div className=" p-3">
        <div className="absolute left-0 top-0 bottom-0   z-40  hidden md:flex">
          <img src={bodyone} alt="" className="h-full object-contain  " />
        </div>

        <div className="absolute right-0 top-0  bottom-0  hidden md:flex">
          <img src={bodytwo} alt="" className="h-full object-contain  " />
        </div>

        <div className="max-w-full mx-[4%]">
          {/* order one MANAGEMENT */}
          <h1 className="font-bold text-3xl text-gray-700">
            {" "}
            {isAmh ? "ከፍተኛ አስተዳደር" : "Top Managment"}
          </h1>
          <div>
            <div className="max-w-sm md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center  ">
              {orderOne?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center  shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4   text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* order two */}
            <div className="max-w-xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderTwo?.map((item) => (
                <div className="flex flex-col  items-left  w-[100%] justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* three */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderThree?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* four */}
            <div className="max-w-2xl  md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderFour?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* five */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderFive?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* six */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderSix?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px] object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* seven */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderSeven?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* eight */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderEight?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* nine */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderNine?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* ten */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderTen?.map((item) => (
                <div className="flex flex-col items-left w-[100%]  justify-center shadow-2xl">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[400px]  object-cover "
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* directors */}
          <h1 className="font-bold text-3xl text-gray-700">
            {" "}
            {isAmh ? "ዳይሬክተሮች" : "Directors"}
          </h1>
          <div>
            <div className="max-w-sm md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorOne?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px] object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* order two */}
            <div className="max-w-xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorTwo?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]   object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* three */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorThree?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* four */}
            <div className="max-w-2xl  md:max-w-[90%]mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorFour?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* five */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorFive?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* six */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorSix?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* seven */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorSeven?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* eight */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorEight?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* nine */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorNine?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-[299px]  object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
                  </p>
                </div>
              ))}
            </div>
            {/* ten */}
            <div className="max-w-2xl md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5 items-center justify-center">
              {orderDirectorTen?.map((item) => (
                <div className="flex flex-col shadow-2xl w-[100%]  items-left justify-center">
                  <img
                    src={item.managment_photo}
                    alt=""
                    className="h-20 w-full object-cover"
                  />
                  <h1 className="font-bold text-gray-700 px-4  text-2xl">
                    {isAmh ? item?.name?.amharic : item.name?.english}
                  </h1>
                  <p className="text-blue-400 px-4 text-sm">
                    Chairperson of BoDs & Human Affairs
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

export default ExecutiveManagment;
