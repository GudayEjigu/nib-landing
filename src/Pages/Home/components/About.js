import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import { urlFor, client } from "../../../utils/client";
import { Spinner } from "@chakra-ui/react";
import one from "../../../assets/one.png";
import two from "../../../assets/two.png";
import magnify from "../../../assets/magnify.png";
import target from "../../../assets/target.png";
import tick from "../../../assets/tick.png";
import bodyone from "../../../assets/bodyone.png";
import bodytwo from "../../../assets/bodytwo.png";
import axios from "axios";
import { useLang } from "../../../context/lang";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import ReactHtmlParser from "react-html-parser";
const About = () => {
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const [aboutData, setaboutData] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setaboutData(data);
    });
  }, []);

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
  console.log(aboutDatas?.data?.data?.data?.values?.english.slice(302, 600));
  console.log(aboutDatas?.data?.data?.data?.values?.english.slice(0, 600));
  var FirstData = aboutDatas?.data?.data?.data?.values?.english.slice(0, 310);
  var SecondData = aboutDatas?.data?.data?.data?.values?.english.slice(
    302,
    600
  );

  return (
    <div className="relative pt-14 p-3">
      <div className="absolute left-0 top-0 bottom-0 h-full z-40 hidden md:flex opacity-20">
        <img src={bodyone} alt="" className="h-full object-contain" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 h-full z-40 hidden md:flex opacity-20">
        <img src={bodytwo} alt="" className="h-full object-contain" />
      </div>
      <h1 className="font-semiBold text-4xl text-center pb-10">
        {isAmh ? "ስለ እኛ" : "About Us"}
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="relative   flex-col items-start justify-start w-full">
          <img
            src={two}
            alt=""
            className="h-64 w-64 lg:h-[286px] lg:w-[331px]   object-cover "
          />
          <img
            src={one}
            alt=""
            className="absolute right-0 -bottom-10 h-64 w-64 lg:h-[286px] lg:w-[331px] "
          />
        </div>
        <div className="flex flex-col space-y-2 pt-12 lg:pt-0">
          <h1 className="text-[#FDB913] font-semiBold text-4xl">
            {isAmh ? "የወደፊት ዕጣህን ከእኛ ጋር አስጠብቅ።" : "SECURE YOUR FUTURE WITH US."}
          </h1>

          <h4 className="text-[#000] font-semiBold text-2xl">
            {isAmh ? "መመስረት" : "Establishment"}
          </h4>

          <p className="text-sm text-justify">
            {ReactHtmlParser(
              isAmh
                ? aboutDatas?.data?.data?.data?.establishment?.amharic
                : aboutDatas?.data?.data?.data?.establishment?.english
            )}
          </p>
          {/* <button className="bg-[#FDB913] p-2 px-5 text-white rounded-sm font-medium w-fit">
            read more
          </button> */}
        </div>
      </div>

      {/* mission */}
      <div className="pt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white  rounded-lg p-5">
            <div className="py-2">
              <img src={target} />
              <h1 className="font-semiBold text-xl pt-2 ">
                {isAmh ? "ተልዕኮ" : "Our Mission"}
              </h1>
              <div className="w-10 bg-[#FDB913] h-[2px]" />
            </div>
            <p className="text-sm text-justify">
              {ReactHtmlParser(
                isAmh
                  ? aboutDatas?.data?.data?.data?.mission?.amharic
                  : aboutDatas?.data?.data?.data?.mission?.english
              )}
            </p>
          </div>
          <div className="bg-white  rounded-lg p-5">
            <div className="py-2">
              <img src={magnify} />
              <h1 className="font-semiBold text-xl  pt-2">
                {isAmh ? "ራዕይ" : "Our Vision"}
              </h1>
              <div className="w-10 bg-[#FDB913] h-[2px]" />
            </div>
            <p className="text-sm text-justify">
              {ReactHtmlParser(
                isAmh
                  ? aboutDatas?.data?.data?.data?.vision?.amharic
                  : aboutDatas?.data?.data?.data?.vision?.english
              )}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 bg-white  rounded-lg p-5">
          <div className="py-2">
            <img src={magnify} />
            <h1 className="font-semiBold text-xl pt-2 ">
              {isAmh ? "እሴቶች" : "Our Values"}
            </h1>
            <div className="w-10 bg-[#FDB913] h-[2px]" />
          </div>
          <p className="text-sm text-justify  grid lg:grid-cols-2 lg:gap-12">
            <div className="flex ">
              <div className="lg:flex flex-col px-4 hidden ">
                <p className="pb-5">
                  <img src={tick} />
                </p>
                <p className="pb-5">
                  <img src={tick} />
                </p>

                <p>
                  <img src={tick} />
                </p>
              </div>
              <div>
                {ReactHtmlParser(
                  isAmh
                    ? aboutDatas?.data?.data?.data?.values?.amharic
                    : FirstData
                )}
              </div>
            </div>
            <div className="flex ">
              <div className="hidden lg:flex flex-col px-4">
                <p className="pb-1 ">
                  <img className="w-4" src={tick} />
                </p>
                <p className="w-4 pb-1">
                  <img src={tick} />
                </p>
                <p className="w-4">
                  <img src={tick} />
                </p>
              </div>
              <div>
                {ReactHtmlParser(
                  isAmh
                    ? aboutDatas?.data?.data?.data?.values?.amharic
                    : SecondData
                )}
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
