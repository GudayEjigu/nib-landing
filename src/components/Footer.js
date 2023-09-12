import React, { useContext, useState } from "react";
import footers from "../assets/FooterBackground.png";
import logo from "../assets/logo.png";
import { LangContext } from "../context/LangContext";
import { IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import LoginModal from "./Auth/LoginModal";
import { ThreeDots } from "react-loader-spinner";
import { useQuery } from "react-query";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";
import { FaFax } from "react-icons/fa";

const Footer = () => {
  const { user, token, logout } = useAuth();
  const { isAmh, changeLang } = useContext(LangContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };

  const handleLogin = () => {
    if (!user && !token) {
      setIsModalOpen(true);
    } else {
      logout();
    }
  };
  const serviceCategoryData = useQuery(
    ["serviceCategoryDataApi"],
    async () =>
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}home/service/categories`,
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
    <div
      style={{
        backgroundImage: `url(${footers})`,
        backgroundPosition: "center",
        width: "100%",
        minHeight: "250px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" pt-10 w-full">
        <div className="max-w-[90%] mx-auto w-full p-3">
          {/* newsletter */}
          {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-b border-[#b99a2a] pb-5 ">
            <div>
              <h1 className="font-semiBold text-2xl md:text-3xl text-white">
                {isAmh ? "ጋዜጣችንን ይቀላቀሉ" : "JOIN OUR NEWSLETTER"}
              </h1>
              <p className="text-sm text-white max-w-lg">
                {isAmh
                  ? "በህይወት፣ በንብረት እና በተጠያቂነት ስጋቶች ላይ ሽፋን በመስጠት ቀልጣፋ እና ጥራት ያለው አገልግሎት እናቀርባለን።"
                  : "We offer efficient and quality service in the provision of cover against life, property and liability risks."}
              </p>
            </div>
            <div>
              <div className="bg-white flex items-center p-2 rounded-sm w-full">
                <input
                  type="email"
                  placeholder={isAmh ? "ኢሜይል" : "Email"}
                  className="flex flex-grow bg-transparent focus:outline-none focus:ring-0 w-full"
                />
                <button className="flex-grow flex bg-[#FFB300] p-2 md:px-5 text-white rounded-sm text-sm">
                  {isAmh ? "ይመዝገቡ" : "Subscribe"}
                </button>
              </div>
            </div>
          </div> */}
          {/* links */}
          <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  text-white border-b border-[#b99a2a] pb-5">
            <div className="flex flex-col items-start space-y-2">
              <img src={logo} alt="" className="bg-white rounded-lg" />
              <p className="text-sm max-w-xs">
                {isAmh
                  ? "ለጋራ እድገት አስተማማኝ የኢንሹራንስ ሽፋን እና አገልግሎት!"
                  : "Reliable Insurance cover and service for mutual progress!."}
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-[#FFB300] p-2 rounded-full">
                  <GrFacebookOption className="text-white" />
                </div>
                <div className="bg-[#FFB300] p-2 rounded-full">
                  <IoLogoTwitter className="text-white" />
                </div>
                <div className="bg-[#FFB300] p-2 rounded-full">
                  <GrYoutube className="text-white" />
                </div>
                <div className="bg-[#FFB300] p-2 rounded-full">
                  <GrLinkedinOption className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left md:items-left  md:ml-20">
              <div className="grid grid-cols-1 pl-8 gap-3">
                <div className="flex flex-col items-start space-y-1">
                  <h1 className="font-bold text-lg py-2 ">
                    {isAmh ? "ፈጣን ማገናኛዎች" : "QUICK LINKS"}
                  </h1>
                  <Link
                    to="/"
                    className="text-sm hover:opacity-80 text-white pb-2"
                  >
                    <p className="flex">
                      <p className="px-1 ">
                        <FaChevronRight />{" "}
                      </p>
                      {isAmh ? "ቤት" : "Home"}
                    </p>
                  </Link>
                  <div className="flex flex-col space-y-1 ">
                    {serviceCategoryData.isFetched ? (
                      <div>
                        {serviceCategoryData?.data?.data?.data?.map((item) => (
                          <div className="flex flex-col items-start space-y-2">
                            <Link
                              className="text-sm hover:opacity-80 text-white pb-2"
                              to={`/services/${item.id}`}
                            >
                              <p className="flex">
                                <p className="px-1 ">
                                  <FaChevronRight />{" "}
                                </p>
                                {isAmh ? item.name.amharic : item.name.english}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-full py-10">
                        <ThreeDots
                          height="60"
                          width="60"
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
                  <Link
                    to="/company_overview"
                    className="text-sm hover:opacity-80 text-white pb-2"
                  >
                    <p className="flex">
                      <p className="px-1 ">
                        <FaChevronRight />{" "}
                      </p>
                      {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Overview"}
                    </p>
                  </Link>

                  <Link
                    to="/vacancies"
                    className="text-sm hover:opacity-80 text-white "
                  >
                    <p className="flex">
                      <p className="px-1 ">
                        <FaChevronRight />{" "}
                      </p>{" "}
                      {isAmh ? "ስራዎች" : "Vacancies"}{" "}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left md:items-left  md:ml-20">
              <h1 className="font-semiBold text-xl py-6 "></h1>
              <div className="grid grid-cols-1 gap-1">
                <div className="flex flex-col items-start space-y-1">
                  <div className="grid  grid-cols-1 pl-8 md:pl-0 gap-3">
                    <Link
                      to="/faq"
                      className="text-sm hover:opacity-80 text-white "
                    >
                      <p className="flex">
                        <p className="px-1 ">
                          <FaChevronRight />{" "}
                        </p>{" "}
                        {isAmh ? "ፋክስ" : "Faqs"}
                      </p>
                    </Link>
                    <Link
                      to="/blogs"
                      className="text-sm hover:opacity-80 text-white"
                    >
                      <p className="flex">
                        <p className="px-1 ">
                          <FaChevronRight />{" "}
                        </p>{" "}
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "News & Anouncments"}{" "}
                      </p>
                    </Link>
                    <Link
                      to="/publication"
                      className="text-sm hover:opacity-80 text-white "
                    >
                      <p className="flex">
                        <p className="px-1 ">
                          <FaChevronRight />{" "}
                        </p>{" "}
                        {isAmh ? "የኩባንያ ህትመቶች" : "Company Publications"}{" "}
                      </p>
                    </Link>

                    <p>
                      <Link
                        to="/contact"
                        className="text-sm hover:opacity-80 text-white "
                      >
                        <p className="flex">
                          <p className="px-1 ">
                            <FaChevronRight />{" "}
                          </p>{" "}
                          {isAmh ? "አግኙን" : "Contact us"}
                        </p>
                      </Link>
                    </p>

                    <p
                      onClick={handleLogin}
                      className="text-sm hover:opacity-80 text-white "
                    >
                      <p className="flex">
                        <p className="px-1 ">
                          <FaChevronRight />{" "}
                        </p>{" "}
                        {!user && !token
                          ? isAmh
                            ? "ግባ"
                            : "Sign In /Sign Up"
                          : isAmh
                          ? "ውጣ"
                          : "Logout"}
                      </p>
                    </p>

                    <LoginModal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* contact */}
            <div className="flex flex-col justify-start md:w-[200%] md:ml-20  ">
              <p className="flex pt-10 md:pt-2 py-2 ">
                <h1 className="font-bold  text-lg pr-1 ">
                  {isAmh ? "የመገኛ አድራሻ " : "CONTACT INFO "}
                </h1>
                <p className="text-sm  pt-1">
                  ({isAmh ? "ዋና መስሪያ ቤት" : "Head Office"})
                </p>
              </p>
              <div className="flex text-sm flex-col items-start space-y-1">
                <p className=" pb-2">
                  <p className="flex">
                    <p className="px-2 ">
                      <HiLocationMarker />{" "}
                    </p>{" "}
                    <span className="text-sm font-bold">
                    {isAmh ? "አካባቢ" : "Location"}:
                  </span>{" "}
                  {isAmh
                    ? `አዲስ አበባ -
                  ኢትዮጵያ ደምበል ከተማ ማእከል - 2ኛ ፎቅ`
                    : ` Dembel City Center - 2nd Floor, Addis Ababa,
                    Ethiopia`}
                  </p>{" "}
                  
                </p>
                <p className=" pb-2">
                  <p className="flex">
                    <p className="px-2 ">
                      <AiOutlineMail />{" "}
                    </p>{" "}
                    <span className="text-sm font-bold">
                    {isAmh ? "ኢሜይል" : "Email"}:{" "}
                  </span>
                  info@nibinsurancethiopia.com
                  </p>{" "}
                 
                </p>
                <p className=" pb-2">
                  <p className="flex">
                    <p className="px-2 ">
                      <AiTwotonePhone />{" "}
                    </p>{" "}
                    <span className="text-sm font-bold">
                    {isAmh ? "ስልክ" : "Phone"}:{" "}
                  </span>
                  552 81 95/96, 553 51 29-32, 554 37 05
                  </p>
                
                </p>
                <p className=" pb-2">
                  <p className="flex">
                    <p className="px-2 ">
                      <BsMailbox />{" "}
                    </p>{" "}
                    <span className="text-sm font-bold">
                    {isAmh ? "ፖ.ሳ. ቁ" : "P.O.Box"}:{" "}
                  </span>
                  285, Addis Ababa, Ethiopia
                  </p>
           
                </p>
                <p className=" pb-2">
                  <p className="flex">
                    <p className="px-2 ">
                      <FaFax />{" "}
                    </p>{" "}
                    <span className="text-sm font-bold">
                    {" "}
                    {isAmh ? "ፋክስ" : "Fax"}:{" "}
                  </span>
                  +1-212-9876543/ +1-212-9876543
                  </p>
                 
                </p>

                {/* <p>View all branchs</p> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap text-center py-3">
            <p className="text-sm text-center w-full text-white">
              {" "}
              {isAmh
                ? `${new Date().getFullYear()} ንብ. መብቱ በህግ የተጠበቀ ነው.`
                : `${new Date().getFullYear()} NIB. All Rights Reserved.`}
            </p>
            <p className="text-sm text-center w-full text-white">
              {isAmh
                ? "የግላዊነት ፖሊሲ | ውሎች እና ሁኔታዎች"
                : "Privacy Policy | Terms & Conditions"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div
color={"white"}
px={8}
pt={16}
pb={4}
bg={"#17203F"}
style={{
  backgroundImage: `url(${footer})`,
  backgroundPosition: "center",
  width: "100%",
  minHeight: "350px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}}
>
<SimpleGrid columns={[1, 2, 3, 4]} spacing={16}>
  <Col1 />
  {Data?.map((data, index) => {
    return <Col2 data={data} key={index} />;
  })}
</SimpleGrid>
</div> */
}
