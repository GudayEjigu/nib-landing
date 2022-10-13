import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
const Client = () => {
  const {isAmh} =useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const clientData = useQuery(
    ["clientDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/clients`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {
      },
    }
  );


  return (
    <div className="pt-8">
      <h1 className="font-bold text-4xl text-center ">{isAmh ? 'የእኛ ደንበኞች' :'Our Clients'}</h1>
      <div className="bg-white md:p-10  pt-20 flex items-center justify-center w-full ">
        <div className=" flex  items-center justify-center w-full space-x-10">
          {clientData.isFetched ? (
            <Marquee className="flex items-center space-x-10" speed={80} loop={0} gradientWidth={80}>
            {clientData?.data?.data?.data?.map((data) => {
              return (
                <div
                  key={data.id}
                  className=" flex flex-col space-y-1 items-center px-5"
                >
                  <img
                    src={data.client_photo}
                    alt=""
                    className="h-20 w-20 md:h-44 md:w-44 object-contain"
                  />
                  <p className="text-left">{isAmh ? data.name.amharic : data.name?.english}</p>
                </div>
              );
            })}
          </Marquee>
          ):(
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

export default Client;
