import { useEffect, useState, useContext } from "react";
import { LangContext } from "../../context/LangContext";
import two from "../../assets/five.png";
import { CgCalendarDates } from "react-icons/cg";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import BlockContent from "@sanity/block-content-to-react";
import PortableText from "react-portable-text";
import bodyone from "../../assets/bodyone.png";
import bodytwo from "../../assets/bodytwo.png";
import { useLang } from "../../context/lang";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import ReactHtmlParser from "react-html-parser";
const Blog = () => {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState(null);
  const [page, setPage] = useState(1);
  const { isAmh } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const blogData = useQuery(
    ["blogDataApi", categoryId, page],
    async () =>
      await axios.get(
        categoryId
          ? `${process.env.REACT_APP_BACKEND_URL}home/blogs/${categoryId}?page=${page}`
          : `${process.env.REACT_APP_BACKEND_URL}home/blogs/all?page=${page}`,
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

  const blogCategoryData = useQuery(
    ["blogCategoryDataApi"],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/blog/categories`,
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
  console.log(categoryId);
  return (
    <div className="">
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
          <h1 className="text-white text-center font-semiBold text-2xl py-5 md:text-4xl">
            {isAmh ? "ብሎጎች" : "Blogs"}
          </h1>
          <p className="text-sm font-light text-white">
            {isAmh ? "ቤት/ብሎጎች" : "HOME/Insights"}
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 h-full z-40">
          <img
            src={bodyone}
            alt=""
            className="h-full object-contain opacity-20"
          />
        </div>
        <div className="absolute right-0 top-0 bottom-0 h-full z-40">
          <img
            src={bodytwo}
            alt=""
            className="h-full object-contain opacity-20"
          />
        </div>
        {blogCategoryData.isFetched && (
          <div className="max-w-6xl mx-auto p-3">
            <div className="flex flex-col items-start space-y-2 pt-5">
              <h1 className="font-medium">
                {isAmh ? "በምድብ አጣራ" : "Filter By Category"}
              </h1>
              <select
                onChange={(e) => setCategoryId(e.target.value)}
                name=""
                id=""
                className="max-w-sm w-full border-2 border-gray-400 p-2 rounded-md"
              >
                {blogCategoryData?.data?.data?.data?.map((item) => (
                  <option value={item.id}>
                    {isAmh ? item.name.amharic : item.name.english}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {blogData.isFetched ? (
          <div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 py-10">
              {blogData?.data?.data?.data?.data?.map((item) => (
                <div className="flex flex-col items-start space-y-3">
                  <div
                    onClick={() => navigate(`/blogs/${item.id}`)}
                    key={item?.id}
                    className="bg-white p-3 flex flex-col items-start space-y-1 z-30 w-full
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
                      {ReactHtmlParser(
                        isAmh ? item.body.amharic : item.body.english
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-6xl mx-auto p-2 flex items-center justify-center">
              {blogData?.data?.data?.data?.prev_page_url !== null && (
                <button
                  onClick={() => setPage((prev) => prev - 1)}
                  className="bg-[#FDB913] p-2 px-5 text-white rounded-sm 
            font-medium w-fit"
                >
                  Previous
                </button>
              )}
              {blogData?.data?.data?.data?.next_page_url !== null && (
                <button
                  onClick={() => setPage((prevPage) => prevPage + 1)}
                  className="bg-[#FDB913] p-2 px-5 text-white rounded-sm 
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
  );
};

export default Blog;
