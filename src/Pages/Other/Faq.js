import { useEffect, useState, useContext } from "react";
import { urlFor, client } from "../../utils/client";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Spinner } from "@chakra-ui/react";
import bodyone from "../../assets/bodyone.png";
import bodytwo from "../../assets/bodytwo.png";
import faq from "../../assets/faq.png";
import two from "../../assets/five.png";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import parse from 'html-react-parser';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { LangContext } from "../../context/LangContext";
const Faq = () => {
  const [page, setPage] = useState(1);
  const {isAmh} =useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

 
  const faqDataDatas = useQuery(
    ["faqDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/faqs?page=${page}`, {
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
  console.log(faqDataDatas?.data?.data?.data?.data);
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
            {isAmh ?  'የሚጠየቁ ጥያቄዎች' :'FAQs'}
          </h1>
          <p className="text-sm font-light text-white">{isAmh ? 'ቤት/ተደጋጋሚ ጥያቄዎች' :'HOME/Faq'}</p>
        </div>
      </div>
      {/* faqs */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 h-full z-10 hidden md:flex">
          <img
            src={bodyone}
            alt=""
            className="h-full  object-cover"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 h-full z-10 hidden md:flex">
          <img src={bodytwo} alt="" className="h-full object-contain" />
        </div>
        {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-3 z-40">
          <div>
            <img src={faq} alt="" className="h-96" />
          </div>
         
        </div> */}
         <div className="w-full max-w-6xl mx-auto py-10  p-3 md:py-20">
         <h1 className="text-gray-700 text-center font-bold text-2xl py-5 md:text-4xl">
         {isAmh ?  'የሚጠየቁ ጥያቄዎች' :'FAQs'}
          </h1>
          {faqDataDatas.isFetched ? (
            <div className="w-full  ">
              {faqDataDatas?.data?.data?.data?.data?.map((item) => (
                <div  key={item.id} className="w-full  ">
                  <Accordion allowZeroExpanded className="">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                       {parse(isAmh ? item.question.amharic : item.question.english)}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      {parse(isAmh ? item.answer.amharic : item.answer.english)}
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                </div>
              ))}
                <div className="flex items-center justify-between">
            {faqDataDatas?.data?.data?.data?.prev_page_url !== null && (
                <button onClick={()=>setPage((prev)=>prev - 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Previous
                </button>
              )}
              {faqDataDatas?.data?.data?.data?.next_page_url !== null && (
                <button onClick={()=>setPage((prev)=>prev + 1)}
                  className="bg-[#FAD03C] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Next
                </button>
              )}
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
      </div>
    </div>
  );
};

export default Faq;
