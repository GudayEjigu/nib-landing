import { useEffect, useState, useContext } from "react";
import { urlFor, client } from "../../utils/client";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Spinner } from "@chakra-ui/react";
import bodyone from "../../assets/bodyone.png";
import bodytwo from "../../assets/bodytwo.png";
import two from "../../assets/five.png";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import { BsFillFilePdfFill } from "react-icons/bs";
import { LangContext } from "../../context/LangContext";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const Publication = () => {
  const [page, setPage] = useState(1);
  const [publicationId, setPublicationId] = useState(null);
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  const publicationDataDatas = useQuery(
    ["publicationDataApi", publicationId],
    async () =>
      await axios.get(
        publicationId
          ? `${process.env.REACT_APP_BACKEND_URL}home/publications/${publicationId}`
          : `${process.env.REACT_APP_BACKEND_URL}home/publications`,
        {
          headers,
        }
      ),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {
        setPublicationId(null);
      },
    }
  );

  const publicationCategoryDataDatas = useQuery(
    ["publicationCategoryDataApi"],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/publication/categories`,
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
  console.log(publicationCategoryDataDatas?.data?.data?.data);
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
            {isAmh ? "ህትመት" : "Publication"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት / ህትመት" : "HOME/Publication"}
          </p>
        </div>
      </div>
      {/* Publication */}
      <div>
        {publicationCategoryDataDatas.isFetched && (
          <div className="max-w-6xl mx-auto p-3">
            <div className="flex flex-col items-start space-y-2 pt-5">
              <h1 className="font-medium">
                {isAmh ? "በምድብ አጣራ" : "Filter By Category"}
              </h1>
              <select
                onChange={(e) => setPublicationId(e.target.value)}
                name=""
                id=""
                className="max-w-sm w-full border-2 border-gray-400 p-2 rounded-md"
              >
                {publicationCategoryDataDatas?.data?.data?.data?.map((item) => (
                  <option value={item.id}>
                    {isAmh ? item.name.amharic : item.name.english}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 h-full z-10 hidden md:flex">
          <img src={bodyone} alt="" className="h-full  object-cover" />
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
          {isAmh ? "ህትመት" : "Publication"}
          </h1>
          {publicationDataDatas.isFetched ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
              {publicationDataDatas?.data?.data?.data?.map((item) => (
                <div
                  key={item.id}
                  className="w-full  flex flex-col items-center py-2 justify-center space-y-2 bg-white shadow-lg rounded-md relative"
                >
                  <BsFillFilePdfFill size={100} className="text-red-500" />
                  <h1 className="pb-12 font-medium">
                    {" "}
                    {isAmh ? item.name.amharic : item.name.english}
                  </h1>
                  <div className="absolute bottom-3">
                    <a
                      href={item.publication_file}
                      target="_blank"
                      className="bg-[#a27128] p-2  font-medium text-white rounded-md  "
                    >
                      Download
                    </a>
                  </div>
                  {/* <Accordion allowZeroExpanded className="">
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                       {isAmh ? item.name.amharic : item.name.english}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <a href={item.publication_file} target="_blank">
            <BsFillFilePdfFill size={100} className="text-red-500"/>
        </a>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion> */}
                </div>
              ))}
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

export default Publication;

{
  /* <Accordion allowZeroExpanded className="">
<AccordionItem>
  <AccordionItemHeading>
    <AccordionItemButton>
     {isAmh ? item.name.amharic : item.name.english}
    </AccordionItemButton>
  </AccordionItemHeading>
  <AccordionItemPanel>
  <a href={item.publication_file} target="_blank">
<BsFillFilePdfFill size={100} className="text-red-500"/>
</a>
  </AccordionItemPanel>
</AccordionItem>
</Accordion> */
}
