import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import Slider from "react-slick";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};
const Insurances = () => {
    const { isAmh } = useContext(LangContext);
    const [blogData, setBlogData] = useState([]);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bearer ${token}`,
    };
    const brockersData = useQuery(
      ["brockersDataApi"],
      async () =>
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/brokers`, {
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

    const customLeftArrow = (
      <div className="absolute arrow-btn left-1 text-center cursor-pointer bg-amber-500 rounded-full">
        <BiChevronLeft className=" h-8 md:h-9  text-white  w-full" />
      </div>
    );
  
    const customRightArrow = (
      <div className="absolute arrow-btn right-1 text-center  cursor-pointer  bg-amber-500 rounded-full ">
        <BiChevronRight className="h-8 md:h-9  text-white  w-full" />
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center">
        {/* OUR RE-INSURERS */}
        <div className="w-full">
            <h1 className="text-[#AC7729] text-center font-bold text-2xl py-5 md:text-4xl">{isAmh ?  "የእኛ ድጋሚ ኢንሹራንስ" : "OUR RE-INSURERS"}</h1>
              {brockersData.isFetched ? (
            // <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3 z-40">
            //   {brockersData?.data?.data?.data?.RE_INSURERS?.map((item)=>(
            //     <div className="bg-white p-3 rounded-md shadow-lg flex flex-col space-y-2 items-center justify-center">
            //         <div className="flex items-center space-x-3">
            //       <img src={item.broker_photo} alt="" className="h-24 w-20 object-contain"/>
            //   <h3 className="font-medium text-lg font-bold">{isAmh ?   item?.name?.amharic : item.name?.english}</h3>
            //         </div>
            //         <button className="border-2 border-gray-700 w-full p-2 font-medium rounded-md"
            //          onClick={()=>window.open(item.link)}>{isAmh ? "ይጎብኙ" : "Vist"}</button>
            //     </div>
            //   ))}
            // </div>
         <div className="max-w-6xl mx-auto w-full ">
             <Carousel
            infinite
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={responsive}
            itemClass="px-1"
            swipeable={true}
            draggable={true}
            autoPlay={true}
          >
         {brockersData?.data?.data?.data?.RE_INSURERS?.map((item)=>(
              <div className="bg-white p-3 rounded-md shadow-lg w-full
              flex flex-col space-y-2 items-center justify-center">
                  <div className="flex items-center space-x-3">
                <img src={item.broker_photo} alt="" className="h-24 w-20 object-contain"/>
            <h3 className="font-medium text-lg font-bold">{isAmh ?   item?.name?.amharic : item.name?.english}</h3>
                  </div>
                  <button className="border-2 border-gray-700 w-full p-2 font-medium rounded-md"
                   onClick={()=>window.open(item.link)}>{isAmh ? "ይጎብኙ" : "Vist"}</button>
              </div>
            ))}
          </Carousel>
         </div>
         
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
        {/* insurances */}
        <div>
            <h1 className="text-[#AC7729] text-center font-bold text-2xl pt-10 md:text-4xl">{isAmh ?  "የእኛ የመድን ዋስትና ደላላዎች" : "OUR REINSURANCE BROKERS"}</h1>
              {brockersData.isFetched ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-3 z-40">
              {brockersData?.data?.data?.data?.REINSURANCE_BROKERS?.map((item)=>(
                <div className="bg-white p-3 rounded-md shadow-lg flex flex-col space-y-2 items-center justify-center">
                    <div className="flex items-center space-x-3">
                  <img src={item.broker_photo} alt="" className="h-24 w-20 object-contain"/>
              <h3 className="font-medium text-lg font-bold">{isAmh ?   item?.name?.amharic : item.name?.english}</h3>
                    </div>
                    <button className="border-2 border-gray-700 w-full p-2 font-medium rounded-md"
                     onClick={()=>window.open(item.link)}>{isAmh ? "ይጎብኙ" : "Vist"}</button>
                </div>
              ))}
            </div>
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
  )
}

export default Insurances