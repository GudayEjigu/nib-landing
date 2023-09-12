import { useEffect, useState, useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { urlFor, client } from "../../utils/client";
import two from "../../assets/five.png";
import { CgCalendarDates } from "react-icons/cg";
import { Spinner } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import parse from "html-react-parser";
const ServiceDetail = () => {
  const navigate = useNavigate();
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const { id } = useParams();

  const serviceDetails = useQuery(
    ["serviceDetailDataApi", id],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/services/details/${id}`,
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
  console.log(serviceDetails?.data?.data?.data?.Detail?.title?.amharic);
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
        <div className="absolute inset-0 " />
        <div className="flex flex-col items-center absolute w-full text-center justify-center z-30 top-1/2">
          <h1 className="text-white text-center font-semiBold text-2xl py-5 md:text-4xl">
            {isAmh ? "የአገልግሎት ዝርዝር" : " SERVICE DETAIL"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/የአገልግሎት ዝርዝር" : "HOME/SERVICE DETAIL"}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="max-w-6xl mx-auto p-3 py-20">
        <div className="max-w-3xl">
          {/* <button onClick={()=>navigate('/services')}
className="border border-gray-400 rounded-md p-3">Back</button> */}
          <h1 className="text-gray-700 text-center font-semiBold text-2xl py-5 md:text-4xl">
            {isAmh ? "የአገልግሎት ዝርዝር" : " SERVICE DETAIL"}
          </h1>
          <div className="bg-white p-3 rounded-md shadow-md">
            {serviceDetails.isFetched ? (
              <div className="flex flex-col items-start space-y-2">
                <h1 className="font-semiBold text-xl capitalize line-clamp-2">
                  <span className="font-semiBold text-xl">
                    {" "}
                    {isAmh
                      ? serviceDetails?.data?.data?.data?.Detail?.title?.amharic
                      : serviceDetails?.data?.data?.data?.Detail?.title
                          ?.english}
                  </span>
                </h1>
                <p className=" ">
                  {" "}
                  {parse(
                    isAmh
                      ? serviceDetails?.data?.data?.data?.Detail?.body?.amharic
                      : serviceDetails?.data?.data?.data?.Detail?.body?.english
                  )}
                </p>
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
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
