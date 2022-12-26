import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";
import { ThreeDots } from "react-loader-spinner";
import bodyone from '../../../assets/bodyone.png'
import bodytwo from '../../../assets/bodytwo.png'
import axios from "axios";
import { useQuery } from "react-query";
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";
const Services = () => {
  const {isAmh} =useContext(LangContext);
  const navigate = useNavigate()

 
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const serviceData = useQuery(
    ["serviceDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/services`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => { },
    }
  );
  
  console.log(serviceData?.data?.data?.data)
  return (
    <div className="relative pt-14">
         <div className='absolute left-0 top-0 bottom-0 h-full z-10 hidden md:flex'>
         <img src={bodyone} alt=""className='h-full object-contain' />
      </div>
      <div className='absolute right-0 top-0 bottom-0 h-full z-10 hidden md:flex'>
         <img src={bodytwo} alt=""className='h-full object-contain' />
      </div>
      <div className="flex  flex-col items-center justify-center space-y-1">
        <h1 className="font-bold text-4xl text-center ">{isAmh ? 'የእኛ አገልግሎቶች' :'Our Services'}</h1>
        <p className="text-sm text-center">
         {isAmh ?  'የእኛ ህይወት እና ህይወት ነክ ያልሆኑ የኢንሹራንስ አገልግሎቶች አንደኛ ደረጃ፣ ከፍተኛ ጥራት ያላቸው እና የተለያዩ ናቸው።' :' Our life and non-life insurance services are first-class,high-quality, and diverse.'}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className=" flex -items-center justify-between pt-3 m-2 ">
          <h3 className="text-xl md:text-2xl font-bold text-black px-3 sm:px-0">
            {isAmh ?  'የሕይወት ያልሆነ ኢንሹራንስ' :'Non-Life Insurance'}
          </h3>

          {serviceData.isFetched  && <div className="flex items-center hover:opacity-70">
            <h6 
            onClick={()=>navigate(`/services/${serviceData?.data?.data?.data?.nonLifeInsurance[0]?.category?.id}`)}
            className="  font-semibold cursor-pointer text-[#ac7729]">
              {isAmh ? 'ሁሉንም አስስ' :'Browse All'}
            </h6>
            <BiChevronRight size={25} className="text-[#ac7729]" />
          </div>}
        </div>

        <div >
          {serviceData.isFetched ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
              {serviceData?.data?.data?.data?.nonLifeInsurance?.map((item)=>(
                 <div key={item?.id}
                 className="bg-white relative p-3 z-40 rounded-lg shadow-lg flex flex-col items-center justify-center">
                   <img  src={item.service_photo} alt="" className="h-36" />
                   <h1 className="text-xl font-bold text-black ">{isAmh ? item.title?.amharic :item.title?.english}</h1>
                   <p className="text-sm text-center pb-14">{parse(isAmh ? item.body.amharic : item.body?.english)}</p>
                       <h4 
                          onClick={() => navigate(`/services/detail/${item.id}`)}
                       className="cursor-pointer hover:opacity-70 absolute bottom-0 my-5 font-bold  text-[#AC7729] pt-5">
                         Learn more
                       </h4>
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

      {/* life insurance */}
      <div className="max-w-6xl mx-auto pt-5">
        <div className=" flex -items-center justify-between pt-3 m-2 ">
          <h3 className="text-xl md:text-2xl font-bold text-black px-3 sm:px-0">
          {isAmh ?  'የሕይወት ኢንሹራንስ' :'Life Insurance'}
          </h3>

          {serviceData.isFetched && <div className="flex items-center hover:opacity-70">
            <h6  onClick={()=>navigate(`/services/${serviceData?.data?.data?.data?.lifeInsurance[0]?.category?.id}`)}
            className="  font-semibold cursor-pointer text-[#ac7729]">
             {isAmh ? 'ሁሉንም አስስ' :'Browse All'}
            </h6>
            <BiChevronRight size={25} className="text-[#ac7729]" />
          </div>}
        </div>
        <div >
          {serviceData.isFetched ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {serviceData?.data?.data?.data?.lifeInsurance?.map((item)=>(
                 <div key={item?.id}
                 className="bg-white relative p-3 z-40 rounded-lg shadow-lg flex flex-col items-center justify-center">
                   <img  src={item.service_photo} alt="" className="h-36" />
                   <h1 className="text-xl font-bold text-black ">{isAmh ? item.title?.amharic :item.title?.english}</h1>
                   <p className="text-sm text-center pb-14">{parse(isAmh ? item.body.amharic : item.body?.english)}</p>
                       <h4 
                         onClick={() => navigate(`/services/detail/${item.id}`)}
                       className="cursor-pointer hover:opacity-70 absolute bottom-0 my-5 font-bold  text-[#AC7729] pt-5">
                         Learn more
                       </h4>
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
    </div>
  );
};

export default Services;
