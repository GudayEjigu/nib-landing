import { useEffect, useState, useContext } from "react";
import two from "../../assets/five.png";
import { CgCalendarDates } from "react-icons/cg";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import PortableText from "react-portable-text";
import bodyone from "../../assets/bodyone.png";
import bodytwo from "../../assets/bodytwo.png";
import axios from "axios";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import { LangContext } from "../../context/LangContext";
const Vacancy = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const {isAmh} =useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  const vacancyDataDatas = useQuery(
    ["vacancyDataApi"],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/vacancies?page=${page}`,
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
  return (
    <>
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
          {isAmh ?  'ክፍት የስራ ቦታዎች':'Vacancies'}
          </h1>
          <p className="text-sm font-light text-white">{isAmh ? 'ቤት/ክፍት ቦታዎች' :'HOME/Vacancies'}</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 h-full z-10 hidden md:flex">
          <img src={bodyone} alt="" className="h-full object-contain" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 h-full z-10 hidden md:flex">
          <img src={bodytwo} alt="" className="h-full object-contain" />
        </div>
        <div>
          <h1 className=" text-center font-bold text-2xl py-5 md:text-4xl">
            {isAmh ?  'ክፍት የስራ ቦታዎች':'Vacancies'}
          </h1>
        </div>
        {vacancyDataDatas.isFetched ? (
          <>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 z-30 gap-3 py-10 p-3">
              {vacancyDataDatas?.data?.data?.data?.data?.map((item) => (
                <div onClick={()=>navigate(`/vacancies/${item.id}`)}
                className="flex flex-col items-start space-y-1 bg-white 
                p-3 shadow-lg rounded-md cursor-pointer hover:scale-[1.03] duration-300 transition-all ease-out">
                  <h1 className="font-medium text-lg text-gray-700">
                    Title: <span className=" text-base">{item.title}</span>
                  </h1>
                  <p className="font-medium text-lg text-gray-700 line-clamp-3">
                    Description:{" "}
                    <span className="font-normal text-base">
                      {item.description}
                    </span>
                  </p>
                  <p className="font-medium text-lg text-gray-700">
                    Deadline:{" "}
                    <span span className=" text-base">
                      {item.deadline}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
            {vacancyDataDatas?.data?.data?.data?.prev_page_url !== null && (
                <button onClick={()=>setPage((prev)=>prev - 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Previous
                </button>
              )}
              {vacancyDataDatas?.data?.data?.data?.next_page_url !== null && (
                <button onClick={()=>setPage((prev)=>prev + 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Next
                </button>
              )}
            </div>
          </>
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
    </>
  );
};

export default Vacancy;
