import { useEffect, useState, useContext } from "react";
import { urlFor, client } from "../../utils/client";
import { Disclosure } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Spinner } from "@chakra-ui/react";
import bodyone from "../../assets/LeftFrame.png";
import bodytwo from "../../assets/RightFrame.png";
import car from "../../assets/car.png";
import two from "../../assets/five.png";
import { useLang } from "../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import { Tab } from "@headlessui/react";
import AddisAbeba from "./AddisAbeba";
import MainBranch from "./MainBranch";
import OutlyingBranches from "./OutlyingBranches";
import { LangContext } from "../../context/LangContext";
const Branches = () => {
  const { isAmh } = useContext(LangContext);
  const [categories] = useState([
    isAmh ? "ዋና መስሪያ ቤት" : "Head Office",
    isAmh ? "አዲስ አበባ ቅርንጫፍ" : "Addis Abeba Branch",
    isAmh ? "ውጫዊ ቅርንጫፎች" : "outlying Branches",
  ]);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div>
      <div className="absolute left-0 top-0 bottom-0 h-full z-40 hidden md:flex ">
        <img src={bodyone} alt="" className="h-full object-contain" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 h-full z-40 hidden md:flex ">
        <img src={bodytwo} alt="" className="h-full object-contain" />
      </div>
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
            {isAmh ? "ቅርንጫፎች" : "Branches"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/ቅርንጫፎች" : "HOME/About"}
          </p>
        </div>
      </div>

      <div>
        <div className="max-w-6xl mx-auto w-full  px-2 py-10 md:py-20  sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl  p-1">
              {categories.map((category, i) => (
               <>{i != 0 ? (<> <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full  py-2.5  font-medium  text-[#661F00] leading-5 text-[#216fed] dark:text-gray-300",
                    "    focus:outline-none ",
                    selected
                      ? " border-b border-blue-500 hover:border-blue-500"
                      : "text-gray-700 border-b duration-500 ease-in-out hover:border-blue-500 "
                  )
                }
              >
                {category}
              </Tab></>): (null)} </>
              ))}
            </Tab.List>
            <Tab.Panels className={"text-red-500"}>
             
              <Tab.Panel>
                <AddisAbeba />
              </Tab.Panel>
              <Tab.Panel>
                <OutlyingBranches />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Branches;
