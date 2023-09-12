import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { urlFor, client } from "../utils/client";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { useHomeContext } from "../context/HomeContext";
import { Spinner } from "@chakra-ui/react";
import DropDown from "./DropDown";
import { useLang } from "../context/lang";
import { AiFillSetting, AiTwotonePhone } from "react-icons/ai";
import { TiInputChecked } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import axios from "axios";
import { LangContext } from "../context/LangContext";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import searchIcon from "../assets/searchIcon.png";
import fb from "../assets/fb.png";
import twit from "../assets/twit.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import LoginModal from "./Auth/LoginModal";
import { useAuth } from "../context/auth";
const Navbar = () => {
  const { user, token, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { isAmh, changeLang } = useContext(LangContext);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(true);
  const [aboutUs, setAboutUs] = useState(false);
  const [services, setServices] = useState(false);
  const [media, setMedia] = useState(false);
  const [claims, setClaims] = useState(false);
  const [buyOnline, setbuyOnline] = useState(false);
  const [isIsBusinessLineHovered, setIsBusinessLineHovered] = useState(false);

  const handleHome = () => {
    setHome(true);
    setAboutUs(false);
    setServices(false);
    setMedia(false);
    setClaims(false);
    setbuyOnline(false);
  };
  const handleNone = () => {
    setHome(false);
    setAboutUs(false);
    setServices(false);
    setMedia(false);
    setClaims(false);
    setbuyOnline(false);
  };

  const handleAboutUs = () => {
    setHome(false);

    setAboutUs(true);
    setServices(false);
    setMedia(false);
    setClaims(false);
    setbuyOnline(false);
  };
  const handleServices = () => {
    setHome(false);

    setAboutUs(false);
    setServices(true);
    setMedia(false);
    setClaims(false);
    setbuyOnline(false);
  };
  const handleMedia = () => {
    setHome(false);

    setMedia(true);
    setAboutUs(false);
    setServices(false);
    setMedia(false);
    setClaims(false);
    setbuyOnline(false);
  };
  const handleClaims = () => {
    setHome(false);
    setClaims(true);
    setbuyOnline(false);

    setAboutUs(false);
    setServices(false);
    setMedia(false);
  };
  const handleBuyOnline = () => {
    setHome(false);
    setClaims(false);
    setbuyOnline(true);
    setAboutUs(false);
    setServices(false);
    setMedia(false);
  };

  const { serviceId, setServiceId } = useHomeContext();
  const [serviceCategoryies, setServiceCategoryies] = useState([]);
  useEffect(() => {
    const categoryQuery = ` *[_type == "service_category" ]`;

    client.fetch(categoryQuery).then((data) => {
      setServiceCategoryies(data);
    });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
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
  console.log(serviceCategoryData?.data?.data);
  const handleLogin = () => {
    if (!user && !token) {
      setIsModalOpen(true);
    } else {
      logout();
    }
  };
  return (
    <>
      <header className="relative top-0 ">
        <div className="fixed z-50  w-full   border-[#FDB913] border-b-8  ">
          <div className="flex  justify-end space-x-10 pt-1 border-b bg-white">
            {" "}
            <p className="flex text-[#661F00] text-sm pt-1 font-medium">
              <p className="mr-1">
                {" "}
                <AiTwotonePhone />
              </p>{" "}
              552 81 95/96, 553 51 29-32, 554 37 05
            </p>
            <p
              onClick={() => navigate("/contact")}
              className="font-medium text-[#661F00] focus:text-[#FFB300]"
            >
              {isAmh ? "አግኙን" : "Contact us"}
            </p>
            <p
              onClick={handleLogin}
              className="font-medium text-[#661F00]  cursor-pointer focus:text-[#FFB300] "
            >
              {!user && !token
                ? isAmh
                  ? "ግባ"
                  : "Login"
                : isAmh
                ? "ውጣ"
                : "Logout"}
            </p>
            <div className="flex space-x-4 items-center  text-[#661F00]">
              <Menu
                menuButton={
                  <MenuButton>
                    <p className="w-24   flex">
                      <div className="p-1">
                        <TbWorld />
                      </div>
                      {isAmh ? "English" : "አማርኛ"}
                    </p>
                  </MenuButton>
                }
                transition
              >
                <MenuItem disabled>{isAmh ? "Language" : "ቋንቋ"}</MenuItem>
                <MenuItem>
                  <div
                    className="flex items-center space-x-1 cursor-pointer pb-1"
                    onClick={() => {
                      changeLang(false);
                    }}
                  >
                    <TiInputChecked
                      size={20}
                      className={!isAmh ? "text-blue-500" : "text-gray-200"}
                    />
                    <h1 className="font-medium">English</h1>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={() => {
                      changeLang(true);
                    }}
                  >
                    <TiInputChecked
                      size={20}
                      className={isAmh ? "text-blue-500" : "text-gray-200"}
                    />
                    <h1 className="font-semibold">አማርኛ</h1>
                  </div>
                </MenuItem>
                {user && token && (
                  <MenuItem>
                    <div
                      className="flex items-center space-x-1 cursor-pointer"
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <FaUser
                        size={14}
                        className={isAmh ? "text-blue-500" : "text-gray-200"}
                      />
                      <h1 className="font-semibold">Profile</h1>
                    </div>
                  </MenuItem>
                )}
              </Menu>

              <FaBars className="flex lg:hidden " size={23} onClick={toggle} />
            </div>
            <div className="grid grid-cols-4 gap-2 w-44 pt-1.5 pr-4">
              <img src={fb} />
              <img src={twit} />
              <img src={insta} />
              <img src={linkedin} />
            </div>{" "}
          </div>
          <div className=" mx-auto bg-white  flex items-center justify-between pt-4 ">
            <Link to="/" onClick={handleHome}>
              <img src={Logo} alt="" className="h-[80%]" />
            </Link>

            {/* home */}
            <div className="hidden lg:flex items-center space-x-4  ">
              {home ? (
                <>
                  <Link
                    onClick={handleHome}
                    to="/"
                    className="font-medium text-[#FFB300]"
                  >
                    {isAmh ? "ቤት" : "Home"}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    onClick={handleHome}
                    to="/"
                    className="font-medium text-[#661F00]  focus:text-[#FFB300]"
                  >
                    {isAmh ? "ቤት" : "Home"}
                  </Link>
                </>
              )}
              <p className="text-[#FDB913] text-2xl">|</p>

              {/* About us */}
              {aboutUs ? (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group ">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <p className="font-medium text-[#FFB300]">
                        {isAmh ? "ስለ እኛ" : "About us"}
                      </p>

                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300  border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        to="/about_us"
                        onClick={handleAboutUs}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border  border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "About us"}
                      </Link>
                      <Link
                        to="/company_overview"
                        onClick={handleAboutUs}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border  border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Overview"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/organization_structure"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "የድርጅት መዋቅር" : "Organization Structure"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/board-of-directors"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "አስፈፃሚ አስተዳደር" : "Board Of Directors"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/executive_managment"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "አስፈፃሚ አስተዳደር" : "Executive Managments"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/corporate_performance"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300]  pt-2 px-4 text-[#661F00]"
                      >
                        {isAmh ? "የድርጅት አፈጻጸም" : "Corporate Performance"}
                      </Link>

                      {/*   <Link
                    to="/faq"
                    className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2  text-[#661F00]"
                  >
                    {isAmh ? "ፋክስ" : "FAQs"}
                  </Link> */}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group focus:text-[#FFB300]">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <p className="font-medium text-[#661F00]">
                        {isAmh ? "ስለ እኛ" : "About us"}
                      </p>

                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20   z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300  border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        to="/about_us"
                        onClick={handleAboutUs}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border  border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "About us"}
                      </Link>
                      <Link
                        to="/company_overview"
                        onClick={handleAboutUs}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border  border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Profile"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/organization_structure"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "የድርጅት መዋቅር" : "Organization Structure"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/board-of-directors"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "አስፈፃሚ አስተዳደር" : "Board Of Directors"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/executive_managment"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "አስፈፃሚ አስተዳደር" : "Executive Managments"}
                      </Link>
                      <Link
                        onClick={handleAboutUs}
                        to="/corporate_performance"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300]  pt-2 px-4 text-[#661F00]"
                      >
                        {isAmh ? "የድርጅት አፈጻጸም" : "Corporate Performance"}
                      </Link>

                      {/*   <Link
                    to="/faq"
                    className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2  text-[#661F00]"
                  >
                    {isAmh ? "ፋክስ" : "FAQs"}
                  </Link> */}
                    </div>
                  </div>
                </>
              )}

              <p className="text-[#FDB913] text-2xl">|</p>

              {/* Services */}
              {services ? (
                <>
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#FFB300] cursor-pointer">
                        {isAmh ? "አገልግሎቶች" : "Services"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      onMouseLeave={() => setIsBusinessLineHovered(false)}
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50 
           hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300  border-white border-b-8  border-b-[#FDB913] "
                    >
                      <div className="flex flex-col space-y-1  ">
                        {serviceCategoryData.isFetched ? (
                          <div>
                            <div className="flex flex-col items-start space-y-2 ">
                              <>
                                <Link
                                  onClick={handleServices}
                                  onMouseEnter={() =>
                                    setIsBusinessLineHovered(true)
                                  }
                                  className="hover:opacity-80 flex hover:text-[#FFB300] text-[#661F00] px-4 w-full font-medium border border-white pb-2 border-b-[#FDB913]"
                                  to="/"
                                >
                                  Business Line
                                  <p className="pt-1">
                                    <BiChevronRight />
                                  </p>
                                </Link>
                                {isIsBusinessLineHovered && (
                                  <div className="absolute  left-36 bg-white   group border-b-8 w-44  border-b-[#FDB913]  rounded-lg">
                                    <div className="hidden group-hover:flex group-hover:flex-col ">
                                      <div className="flex flex-col space-y-1  ">
                                        {serviceCategoryData?.data?.data?.data?.map(
                                          (item, id) => (
                                            <Link
                                              onClick={handleServices}
                                              className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] font-medium  pt-2  px-4 pb-2 border-b border-b-[#FDB913] "
                                              to={`/services/${item.id}`}
                                            >
                                              {isAmh
                                                ? item.name.amharic
                                                : item.name.english}
                                            </Link>
                                          )
                                        )}
                                        <Link
                                          onClick={handleServices}
                                          className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2  border-b-[#FDB913]"
                                          to="/micro"
                                        >
                                          Micro Insurance
                                        </Link>
                                        <Link
                                          onClick={handleServices}
                                          className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                          to="/takaful"
                                        >
                                          Takaful Insurance{" "}
                                        </Link>
                                        <Link
                                          onClick={handleServices}
                                          className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                          to="/travel"
                                        >
                                          Travel Insurance{" "}
                                        </Link>
                                      </div>{" "}
                                    </div>
                                  </div>
                                )}

                                <Link
                                  onClick={handleServices}
                                  className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                  to="/policy_renewal"
                                  onMouseEnter={() =>
                                    setIsBusinessLineHovered(false)
                                  }
                                >
                                  Policy Renewal
                                </Link>
                                <Link
                                  onClick={handleServices}
                                  className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white  "
                                  to="/proposal_forms"
                                >
                                  Proposal Forms
                                </Link>
                              </>
                            </div>
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
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#661F00] cursor-pointer">
                        {isAmh ? "አገልግሎቶች" : "Services"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      onMouseLeave={() => setIsBusinessLineHovered(false)}
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50 
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300  border-white border-b-8  border-b-[#FDB913] "
                    >
                      <div className="flex flex-col space-y-1  ">
                        {serviceCategoryData.isFetched ? (
                          <div>
                            <div className="flex flex-col items-start space-y-2 ">
                              <>
                                <Link
                                  onClick={handleServices}
                                  onMouseEnter={() =>
                                    setIsBusinessLineHovered(true)
                                  }
                                  className="hover:opacity-80 flex hover:text-[#FFB300] text-[#661F00] px-4 w-full font-medium border border-white pb-2 border-b-[#FDB913]"
                                  to="/"
                                >
                                  Business Line
                                  <p className="pt-1">
                                    <BiChevronRight />
                                  </p>
                                </Link>
                                {isIsBusinessLineHovered && (
                                  <div className="absolute  left-36 bg-white   group border-b-8 w-44  border-b-[#FDB913]  rounded-lg">
                                    <div className="hidden group-hover:flex group-hover:flex-col ">
                                      <div className="flex flex-col space-y-1  ">
                                        {serviceCategoryData?.data?.data?.data?.map(
                                          (item, id) => (
                                            <Link
                                              onClick={handleServices}
                                              className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] font-medium  pt-2  px-4 pb-2 border-b border-b-[#FDB913] "
                                              to={`/services/${item.id}`}
                                            >
                                              {isAmh
                                                ? item.name.amharic
                                                : item.name.english}
                                            </Link>
                                          )
                                        )}
                                        <Link
                                          onClick={handleServices}
                                          className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2  border-b-[#FDB913]"
                                          to="/micro"
                                        >
                                          Micro Insurance
                                        </Link>
                                        <Link
                                          onClick={handleServices}
                                          className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                          to="/takaful"
                                        >
                                          Takaful Insurance{" "}
                                        </Link>
                                        <Link
                                          onClick={handleServices}
                                          className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                          to="/travel"
                                        >
                                          Travel Insurance{" "}
                                        </Link>
                                      </div>{" "}
                                    </div>
                                  </div>
                                )}

                                <Link
                                  onClick={handleServices}
                                  className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                  to="/policy_renewal"
                                  onMouseEnter={() =>
                                    setIsBusinessLineHovered(false)
                                  }
                                >
                                  Policy Renewal
                                </Link>
                                <Link
                                  onClick={handleServices}
                                  className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white  "
                                  to="/proposal_forms"
                                >
                                  Proposal Forms
                                </Link>
                              </>
                            </div>
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
                    </div>
                  </div>
                </>
              )}

              <p className="text-[#FDB913] text-2xl">|</p>
              {/* Claims text-[#FFB300]*/}
              {claims ? (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#FDB913] cursor-pointer">
                        {isAmh ? "የይገባኛል ጥያቄዎች " : "Claims"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
           hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300 border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Claims Handling"}
                      </Link>
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh
                          ? "ዜና እና ማስታወቂያዎች"
                          : "Claims Service Information"}
                      </Link>
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border py-2 border-white pb-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Notify Claim"}
                      </Link>
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white px-4 pt-2  text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ ህትመቶች" : "Claim Notification Forms"}
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#661F00] cursor-pointer">
                        {isAmh ? "የይገባኛል ጥያቄዎች " : "Claims"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300 border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Claims Handling"}
                      </Link>
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 py-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh
                          ? "ዜና እና ማስታወቂያዎች"
                          : "Claims Service Information"}
                      </Link>
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border py-2 border-white pb-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Notify Claim"}
                      </Link>
                      <Link
                        onClick={handleClaims}
                        to="/under_construction"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white px-4 pt-2  text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ ህትመቶች" : "Claim Notification Forms"}
                      </Link>
                    </div>
                  </div>
                </>
              )}
              <p className="text-[#FDB913] text-2xl">|</p>

              {/* Buys Online text-[#FFB300] */}
              {buyOnline ? (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#FFB300] cursor-pointer">
                        {isAmh ? "በመስመር ላይ ይግዙ" : "Buy Online"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
           hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300 border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        onClick={handleBuyOnline}
                        to="/travel"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white px-4 pt-2  text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ ህትመቶች" : "Travel Insurance"}
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#661F00] cursor-pointer">
                        {isAmh ? "በመስመር ላይ ይግዙ" : "Buy Online"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300 border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        onClick={handleBuyOnline}
                        to="/travel"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white px-4 pt-2  text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ ህትመቶች" : "Travel Insurance"}
                      </Link>
                    </div>
                  </div>
                </>
              )}

              <p className="text-[#FDB913] text-2xl">|</p>

              {/* Media text-[#FFB300] */}
              {media ? (
               <>
               {" "}
               <div className="hidden md:flex  flex-col  items-center justify-center group">
                 <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                   <h1 className="font-medium text-[#FFB300] cursor-pointer">
                     {isAmh ? "ሚዲያ" : "Media"}
                   </h1>
                   <BiChevronDown />
                 </div>
                 <div
                   className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300 border-b-8  border-b-[#FDB913] "
                 >
                   <Link
                     onClick={handleMedia}
                     to="/under_construction"
                     onMouseEnter={() => setIsBusinessLineHovered(false)}
                     className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 border-b-[#FDB913] px-4 text-[#661F00]"
                   >
                     {isAmh ? "ዜና እና ማስታወቂያዎች" : "Latest News"}
                   </Link>

                   <Link
                     onClick={handleMedia}
                     onMouseEnter={() => setIsBusinessLineHovered(true)}
                     className="hover:opacity-80 flex pt-2  hover:text-[#FFB300] text-[#661F00] px-4 w-full font-medium border border-white pb-2 border-b-[#FDB913]"
                     to="/under_construction"
                   >
                     Announcements{" "}
                     <p className="pt-1">
                       <BiChevronRight />
                     </p>
                   </Link>
                   {isIsBusinessLineHovered && (
                     <div className="absolute  left-40 top-16 bg-white w-full  group border-b-8  border-b-[#FDB913]  rounded-lg">
                       <div className="hidden group-hover:flex group-hover:flex-col ">
                         <div className="flex flex-col space-y-1  ">
                           <Link
                             onClick={handleMedia}
                             className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4 pt-2 w-full font-medium border border-white pb-2 border-b-[#FDB913]"
                             to="/under_construction"
                           >
                             Shareholders
                           </Link>

                           <Link
                             onClick={handleMedia}
                             className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                             to="/under_construction"
                           >
                             Bid
                           </Link>
                           <Link
                             onClick={handleMedia}
                             className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                             to="/vacancies"
                           >
                             Vacancy
                           </Link>
                         </div>{" "}
                       </div>
                     </div>
                   )}
                   <Link
                     onClick={handleMedia}
                     to="/under_construction"
                     onMouseEnter={() => setIsBusinessLineHovered(false)}
                     className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2  pt-2 border-b-[#FDB913] px-4 text-[#661F00]"
                   >
                     {isAmh ? "ዜና እና ማስታወቂያዎች" : "Events"}
                   </Link>
                   <Link
                     onClick={handleMedia}
                     to="/under_construction"
                     onMouseEnter={() => setIsBusinessLineHovered(false)}
                     className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 pt-2  border-b-[#FDB913] px-4 text-[#661F00]"
                   >
                     {isAmh ? "ዜና እና ማስታወቂያዎች" : "Gallery"}
                   </Link>

                   <Link
                     onClick={handleMedia}
                     onMouseEnter={() => setIsBusinessLineHovered(false)}
                     to="/publication"
                     className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white px-4 pt-2  text-[#661F00]"
                   >
                     {isAmh ? "የኩባንያ ህትመቶች" : "Publications"}
                   </Link>
                 </div>
               </div>
             </>
              ) : (
                <>
                  {" "}
                  <div className="hidden md:flex  flex-col  items-center justify-center group">
                    <div className="flex items-center space-x-1 hover:text-[#FFB300]">
                      <h1 className="font-medium text-[#661F00] cursor-pointer">
                        {isAmh ? "ሚዲያ" : "Media"}
                      </h1>
                      <BiChevronDown />
                    </div>
                    <div
                      className="py-4 rounded-md absolute  bg-white shadow-2xl top-20 z-50
hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300 border-b-8  border-b-[#FDB913] "
                    >
                      <Link
                        onClick={handleMedia}
                        to="/under_construction"
                        onMouseEnter={() => setIsBusinessLineHovered(false)}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Latest News"}
                      </Link>

                      <Link
                        onClick={handleMedia}
                        onMouseEnter={() => setIsBusinessLineHovered(true)}
                        className="hover:opacity-80 flex pt-2  hover:text-[#FFB300] text-[#661F00] px-4 w-full font-medium border border-white pb-2 border-b-[#FDB913]"
                        to="/under_construction"
                      >
                        Announcements{" "}
                        <p className="pt-1">
                          <BiChevronRight />
                        </p>
                      </Link>
                      {isIsBusinessLineHovered && (
                        <div className="absolute  left-40 top-16 bg-white w-full  group border-b-8  border-b-[#FDB913]  rounded-lg">
                          <div className="hidden group-hover:flex group-hover:flex-col ">
                            <div className="flex flex-col space-y-1  ">
                              <Link
                                onClick={handleMedia}
                                className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4 pt-2 w-full font-medium border border-white pb-2 border-b-[#FDB913]"
                                to="/under_construction"
                              >
                                Shareholders
                              </Link>

                              <Link
                                onClick={handleMedia}
                                className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                to="/under_construction"
                              >
                                Bid
                              </Link>
                              <Link
                                onClick={handleMedia}
                                className="hover:opacity-80 hover:text-[#FFB300] text-[#661F00] px-4  font-medium border border-white pb-2 border-b-[#FDB913]"
                                to="/vacancies"
                              >
                                Vacancy
                              </Link>
                            </div>{" "}
                          </div>
                        </div>
                      )}
                      <Link
                        onClick={handleMedia}
                        to="/under_construction"
                        onMouseEnter={() => setIsBusinessLineHovered(false)}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2  pt-2 border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Events"}
                      </Link>
                      <Link
                        onClick={handleMedia}
                        to="/under_construction"
                        onMouseEnter={() => setIsBusinessLineHovered(false)}
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white pb-2 pt-2  border-b-[#FDB913] px-4 text-[#661F00]"
                      >
                        {isAmh ? "ዜና እና ማስታወቂያዎች" : "Gallery"}
                      </Link>

                      <Link
                        onClick={handleMedia}
                        onMouseEnter={() => setIsBusinessLineHovered(false)}
                        to="/publication"
                        className="font-medium hover:opacity-80 hover:text-[#FFB300] border border-white px-4 pt-2  text-[#661F00]"
                      >
                        {isAmh ? "የኩባንያ ህትመቶች" : "Publications"}
                      </Link>
                    </div>
                  </div>
                </>
              )}

              <p className="text-[#FDB913] text-2xl">|</p>
              <Link
                onClick={handleNone}
                to="/branches"
                className="font-medium  text-[#661F00] focus:text-[#FFB300]"
              >
                {isAmh ? "የቅርንጫፎች " : "Branches"}
              </Link>

              <div className=" w-80  h-8">
                {" "}
                <div className="border border-[#661F00] w-72  h-8 rounded-xl flex">
                  <img className="mx-2 w-4 h-6  py-1 " src={searchIcon} />{" "}
                  <input placeholder="Search here" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <DropDown
        isOpen={isOpen}
        toggle={toggle}
        setIsModalOpen={setIsModalOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navbar;
