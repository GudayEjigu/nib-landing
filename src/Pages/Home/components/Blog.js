import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import { CgCalendarDates } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

import bodyone from "../../../assets/bodyone.png";
import bodytwo from "../../../assets/bodytwo.png";
import axios from "axios";

const Blog = () => {
  const { isAmh } = useContext(LangContext);
  const [blogData, setBlogData] = useState([]);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const blogsData = useQuery(
    ["blogsDataApi"],
    async () =>
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}home/blogs`, {
        headers,
      }),
    {
      keepPreviousData: false,
      refetchOnWindowFocus: false,
      retry: false,
      // enabled: !!token,
      onSuccess: (res) => {
        setBlogData(res?.data?.data);
      },
    }
  );

  const navigate = useNavigate();

  return (
    <div className="relative p-3">
      <div className="absolute left-0 top-0 bottom-0 h-full hidden md:flex ">
        <img src={bodyone} alt="" className="h-full object-contain" />
      </div>
      <div className="absolute right-0 top-0 bottom-0 h-full hidden md:flex">
        <img
          src={bodytwo}
          alt=""
          className="h-full  md:w-auto object-contain"
        />
      </div>
      <div>
        <h1 className="text-[#AC7729] text-center font-bold text-2xl py-5 md:text-4xl">
          {isAmh ? "ብሎጎች" : "Our Blog"}
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 z-40">
          {blogsData.isFetched ? (
            blogsData?.data?.data?.data?.map((item) => (
              <div
                onClick={() => navigate(`/blogs/${item.id}`)}
                key={item?.id}
                className="bg-white p-3 flex flex-col items-start space-y-1 z-30
            rounded-md shadow-lg cursor-pointer hover:scale-[1.03] transition ease-in-out duration-500"
              >
                <img
                  src={item.blog_photo}
                  alt={item?.name}
                  className="h-44 w-full object-cover"
                />
                <div className="flex items-center space-x-1 py-2">
                  <CgCalendarDates size={18} className="text-gray-400" />
                  <Moment format="YYYY/MM/DD" className="text-gray-400">
                    {item?.published_date}
                  </Moment>
                </div>
                <h1 className="font-semibold text-xl line-clamp-2">
                  {isAmh ? item.title.amharic : item.title.english}
                </h1>
                <p className="text-sm line-clamp-2">
                  {isAmh ? item.body.amhric : item.body.english}
                </p>
              </div>
            ))
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
        <p className="text-sm text-center w-full py-5 px-5">
          {isAmh
            ? "እርስዎ የተሻለ፣ ፈጣን እና የበለጠ ትርፋማ የሚያደርጉትን እንዲያደርጉ የሚያግዙዎት ግንዛቤዎች"
            : " Insights to help you do what you do better, faster and moreprofitably."}
          <span
            onClick={() => navigate("/blogs")}
            className="text-[#AC7729] font-medium hover:underline cursor-pointer "
          >
            {" "}
            {isAmh ? 'ሙሉ ብሎግ ያንብቡ' :'Read Full Blog'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
