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
        minHeight: "550px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" pt-14 w-full">
        <div className="max-w-6xl mx-auto w-full p-3">
          {/* newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-b border-[#b99a2a] pb-5 ">
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
                <button className="flex-grow flex bg-[#FDB913] p-2 md:px-5 text-white rounded-sm font-xs">
                  {isAmh ? "ይመዝገቡ" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white border-b border-[#b99a2a] pb-5">
            <div className="flex flex-col items-start space-y-2">
              <img src={logo} alt="" />
              <p className="text-sm max-w-xs">
                {isAmh
                  ? "ለጋራ እድገት አስተማማኝ የኢንሹራንስ ሽፋን እና አገልግሎት!"
                  : "Reliable Insurance cover and service for mutual progress!."}
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-[#FDB913] p-2 rounded-full">
                  <GrFacebookOption className="text-white" />
                </div>
                <div className="bg-[#FDB913] p-2 rounded-full">
                  <IoLogoTwitter className="text-white" />
                </div>
                <div className="bg-[#FDB913] p-2 rounded-full">
                  <GrYoutube className="text-white" />
                </div>
                <div className="bg-[#FDB913] p-2 rounded-full">
                  <GrLinkedinOption className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-left md:items-center">
              <h1 className="font-semiBold text-xl py-2 underline">
                {isAmh ? "ፈጣን ማገናኛዎች" : "QUICK LINKS"}
              </h1>
              <div className="grid grid-cols-1 pl-8 gap-3">
                <div className="flex flex-col items-start space-y-1">
                  <Link
                    to="/"
                    className="font-xs hover:opacity-80 text-white pb-2"
                  >
                    {isAmh ? "ቤት" : "Home"}
                  </Link>
                  <div className="flex flex-col space-y-1 ">
                    {serviceCategoryData.isFetched ? (
                      <div>
                        {serviceCategoryData?.data?.data?.data?.map((item) => (
                          <div className="flex flex-col items-start space-y-2">
                            <Link
                              className="font-xs hover:opacity-80 text-white pb-2"
                              to={`/services/${item.id}`}
                            >
                              {isAmh ? item.name.amharic : item.name.english}
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
                    className="font-xs hover:opacity-80 text-white pb-2"
                  >
                    {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Overview"}
                  </Link>
                  <Link
                    to="/organization_structure"
                    className="font-xs hover:opacity-80 text-white pb-2"
                  >
                    {isAmh ? "የድርጅት መዋቅር" : "Organization Structure"}
                  </Link>
                  <Link
                    to="/executive_managment"
                    className="font-xs hover:opacity-80 text-white pb-2"
                  >
                    {isAmh ? "አስፈፃሚ አስተዳደር" : "Executive Managment"}
                  </Link>{" "}
                  <Link
                    to="/branches"
                    className="font-xs hover:opacity-80 text-white pb-2"
                  >
                    {isAmh ? "የቅርንጫፎች ዝርዝር" : "List of Branches"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col iitems-left md:items-center">
              <h1 className="font-semiBold text-xl py-6 "></h1>
              <div className="grid grid-cols-1 gap-1">
                <div className="flex flex-col items-start space-y-1">
                  <div className="grid  grid-cols-1 pl-8 md:pl-0 gap-3">
                    <Link
                      to="/faq"
                      className="font-xs hover:opacity-80 text-white "
                    >
                      {isAmh ? "ፋክስ" : "Faqs"}
                    </Link>
                    <Link
                      to="/blogs"
                      className="font-xs hover:opacity-80 text-white"
                    >
                      {isAmh ? "ዜና እና ማስታወቂያዎች" : "News & Anouncments"}
                    </Link>
                    <Link
                      to="/publication"
                      className="font-xs hover:opacity-80 text-white "
                    >
                      {isAmh ? "የኩባንያ ህትመቶች" : "Company Publications"}
                    </Link>
                    <Link
                      to="/vacancies"
                      className="font-xs hover:opacity-80 text-white "
                    >
                      {isAmh ? "ስራዎች" : "Vacancies"}
                    </Link>
                    <Link
                      to="/contact"
                      className="font-xs hover:opacity-80 text-white "
                    >
                      {isAmh ? "አግኙን" : "Contact us"}
                    </Link>
                    <LoginModal
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                    />
                    <p
                      onClick={handleLogin}
                      className="font-xs hover:opacity-80 text-white "
                    >
                      {!user && !token
                        ? isAmh
                          ? "ግባ"
                          : "Sign In"
                        : isAmh
                        ? "ውጣ"
                        : "Logout"}
                    </p>
                    <p
                      onClick={handleLogin}
                      className="font-xs hover:opacity-80 text-white "
                    >
                      {!user && !token
                        ? isAmh
                          ? "ግባ"
                          : "Sign Up"
                        : isAmh
                        ? "ውጣ"
                        : "Logout"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* contact */}
            <div>
              <h1 className="font-semiBold text-xl py-2 pt-10 md:pt-2">
                {isAmh ? "የመገኛ አድራሻ" : "CONTACT INFO"}
              </h1>
              <h4 className="font-xs text-lg pb-2">
                {isAmh ? "ዋና መስሪያ ቤት" : "HEAD OFFICE"}
              </h4>
              <div className="flex flex-col items-start space-y-1">
                <p className="text-sm pb-2">
                  <span className="font-xs">
                    {isAmh ? "አካባቢ" : "Location"}:
                  </span>{" "}
                  {isAmh
                    ? `አዲስ አበባ -
                  ኢትዮጵያ ደምበል ከተማ ማእከል - ሁለተኛ ፎቅ`
                    : `Addis Ababa -
                  Ethiopia Dembel City Center - Second Floor`}
                </p>
                <p className="text-sm pb-2">
                  <span className="font-xs">{isAmh ? "ኢሜይል" : "Email"}:</span>
                  info@nibinsurancethiopia.com
                </p>
                <p className="text-sm pb-2">
                  <span className="font-xs">{isAmh ? "ስልክ" : "Phone"}:</span>
                  552 81 95/96, 553 51 29-32, 554 37 05
                </p>
                <p className="text-sm pb-2">
                  <span className="font-xs">
                    {isAmh ? "ፖ.ሳ. ቁ" : "P.O.Box"}:
                  </span>
                  285
                </p>
                <p className="text-sm pb-2">
                  <span className="font-xs"> {isAmh ? "ፋክስ" : "Fax"}</span>
                  Fax: +1-212-9876543
                </p>
                <p className="text-sm pb-2pb-2">
                  <span className="font-xs"> Fax:</span>
                  Fax: +1-212-9876543
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
