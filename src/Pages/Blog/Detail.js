import { useEffect, useState, useContext, useRef } from "react";
import { LangContext } from "../../context/LangContext";
import { urlFor, client } from "../../utils/client";
import two from "../../assets/five.png";
import { CgCalendarDates } from "react-icons/cg";
import { Spinner } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useLang } from "../../context/lang";
import ReactHtmlParser from "react-html-parser";
const Detail = () => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const homeRef = useRef();
  const navigate = useNavigate();
  const [blogDetail, setBlogDetail] = useState(null);

  const { id } = useParams();
  const { isAmh } = useContext(LangContext);
  const blogDetailData = useQuery(
    ["blogDetailDataApi", id],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/blogs/details/${id}`,
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
            {isAmh ? "የብሎግ ዝርዝር" : "BLOG DETAIL"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/ብሎግ ዝርዝር" : "HOME/BLOG DETAIL"}
          </p>
        </div>
      </div>
      {/* detail */}
      <div ref={homeRef}></div>
      <div className="max-w-6xl mx-auto p-3 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* detail grid */}
        <div className="md:col-span-8">
          {blogDetailData.isFetched ? (
            <div>
              <img
                src={blogDetailData?.data?.data?.data?.Detail?.blog_photo}
                alt={blogDetail?.Detail?.name}
                className="h-44 md:h-auto w-full object-cover"
              />
              <div className="flex items-center space-x-1 py-2">
                <CgCalendarDates size={18} className="text-gray-400" />
                <Moment format="YYYY/MM/DD" className="text-gray-400">
                  {blogDetailData?.data?.data?.data?.Detail?.published_date}
                </Moment>
              </div>
              <h1 className="font-semibold text-2xl py-2 line-clamp-2">
                {isAmh
                  ? blogDetailData?.data?.data?.data?.Detail?.title?.amharic
                  : blogDetailData?.data?.data?.data?.Detail?.title?.english}
              </h1>
              <p className="text-sm">
                {ReactHtmlParser(
                  isAmh
                    ? blogDetailData?.data?.data?.data?.Detail?.body?.amharic
                    : blogDetailData?.data?.data?.data?.Detail?.body?.english
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
        {/* second grid */}
        <div className="md:col-span-4 w-full">
          {/* <div className="bg-white flex items-center p-1 rounded-sm w-full border border-[#AC7729]">
            <input
              type="text"
              placeholder="search"
              className="flex flex-grow bg-transparent focus:outline-none focus:ring-0 w-full"
            />
            <button className="flex-grow flex bg-[#FFB300] p-2 md:px-5 text-white rounded-sm font-medium">
              <FaSearch className="text-[#AC7729]" />
            </button>
          </div> */}
          {/* popular blogs */}
          <div>
            <div className="py-4">
              <h1 className="font-semiBold text-xl capitalize pb-1">
                {isAmh ? "ተዛማጅ ብሎጎች" : "Related Blogs"}
              </h1>
              <div className="w-10 bg-[#FFB300] h-[2px]" />
            </div>
            <div>
              <div className="flexflex-col items-start space-y-2">
                {blogDetailData?.data?.data?.data?.Related?.map((item) => (
                  <div
                    onClick={() => {
                      homeRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      navigate(`/blogs/${item.id}`);
                    }}
                    className="flex items-center space-x-2 cursor-pointer hover:scale-[1.02] duration-500"
                  >
                    <img
                      src={item.blog_photo}
                      alt={item?.name}
                      className="h-20 w-24 object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-1 py-2">
                        <CgCalendarDates
                          size={18}
                          className="text-gray-400 text-[13px]"
                        />
                        <Moment
                          format="YYYY/MM/DD"
                          className="text-gray-400 text-[13px]"
                        >
                          {item?.published_date}
                        </Moment>
                      </div>
                      <h1 className="font-semibold text-sm line-clamp-2">
                        {isAmh ? item.title?.amharic : item.title?.english}
                      </h1>
                      <p className="text-sm line-clamp-2">
                        {ReactHtmlParser(
                          isAmh ? item.body?.amharic : item.body?.english
                        )}
                      </p>
                      <div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
