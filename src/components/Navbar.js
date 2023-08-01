import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { urlFor, client } from "../utils/client";
import { BiChevronRight } from "react-icons/bi";
import { useHomeContext } from "../context/HomeContext";
import { Spinner } from "@chakra-ui/react";
import DropDown from "./DropDown";
import { useLang } from "../context/lang";
import { AiFillSetting } from "react-icons/ai";
import { TiInputChecked } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import axios from "axios";
import { LangContext } from "../context/LangContext";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
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
        <div className="fixed z-50  w-full   ">
          <div className=" mx-auto bg-white  flex items-center justify-between p-4 ">
            <Link to="/">
              <img src={Logo} alt="" className="h-12" />
            </Link>

            {/* links */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/" className="font-base text-gray-700  ">
                {isAmh ? "ቤት" : "Home"}
              </Link>

              <div className="hidden md:flex  flex-col  items-center justify-center group">
                <div className="flex items-center space-x-1 hover:text-[#FDB913]">
                  <h1 className="font-base text-gray-700 cursor-pointer">
                    {isAmh ? "አገልግሎቶች" : "Services"}
                  </h1>
                  <BiChevronRight />
                </div>
                <div
                  className="p-4 rounded-md absolute  bg-white shadow-lg top-12 z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300  "
                >
                  <div className="flex flex-col space-y-1 ">
                    {serviceCategoryData.isFetched ? (
                      <div>
                        {serviceCategoryData?.data?.data?.data?.map(
                          (item, id) => (
                            <div className="flex flex-col items-start space-y-2">
                              {id != 0 ? (
                                <>
                                  <Link
                                    className="hover:opacity-80 text-gray-700 font-base border border-white pb-2 border-t-orange-200"
                                    to={`/services/${item.id}`}
                                  >
                                    {isAmh
                                      ? item.name.amharic
                                      : item.name.english}
                                  </Link>
                                </>
                              ) : (
                                <>
                                  {" "}
                                  <Link
                                    className="hover:opacity-80 text-gray-700 font-base border border-white pb-2 "
                                    to={`/services/${item.id}`}
                                  >
                                    {isAmh
                                      ? item.name.amharic
                                      : item.name.english}
                                  </Link>
                                </>
                              )}
                            </div>
                          )
                        )}
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
              <div className="hidden md:flex  flex-col  items-center justify-center group">
                <div className="flex items-center space-x-1 hover:text-[#FDB913]">
                  <p className="font-base text-gray-700">
                    {isAmh ? "ስለ እኛ" : "About us"}
                  </p>

                  <BiChevronRight />
                </div>
                <div
                  className="p-4 rounded-md absolute  bg-white shadow-lg top-12 z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300   "
                >
                  <Link
                    to="/company_overview"
                    className="font-base hover:opacity-80 border  border-white pb-2 border-b-orange-200 text-gray-700"
                  >
                    {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Overview"}
                  </Link>
                  <Link
                    to="/organization_structure"
                    className="font-base hover:opacity-80 border border-white pb-2 border-b-orange-200 text-gray-700"
                  >
                    {isAmh ? "የድርጅት መዋቅር" : "Organization Structure"}
                  </Link>
                  <Link
                    to="/executive_managment"
                    className="font-base hover:opacity-80 border border-white pb-2 border-b-orange-200 text-gray-700"
                  >
                    {isAmh ? "አስፈፃሚ አስተዳደር" : "Executive Managment"}
                  </Link>
                  <Link
                    to="/branches"
                    className="font-base hover:opacity-80 border border-white pb-2 border-b-orange-200 text-gray-700"
                  >
                    {isAmh ? "የቅርንጫፎች ዝርዝር" : "List of Branches"}
                  </Link>
                  <Link
                    to="/faq"
                    className="font-base hover:opacity-80 border border-white pb-2  text-gray-700"
                  >
                    {isAmh ? "ፋክስ" : "Faqs"}
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex  flex-col  items-center justify-center group">
                <div className="flex items-center space-x-1 hover:text-[#FDB913]">
                  <h1 className="font-base text-gray-700 cursor-pointer">
                    {isAmh ? "ግንዛቤዎች" : "Insights"}
                  </h1>
                  <BiChevronRight />
                </div>
                <div
                  className="p-4 rounded-md absolute  bg-white shadow-lg top-12 z-50
             hidden group-hover:flex group-hover:flex-col transition-all ease-out duration-300  "
                >
                  <Link
                    to="/blogs"
                    className="font-base hover:opacity-80 border border-white pb-2 border-b-orange-200 text-gray-700"
                  >
                    {isAmh ? "ዜና እና ማስታወቂያዎች" : "News & Anouncments"}
                  </Link>
                  <Link
                    to="/publication"
                    className="font-base hover:opacity-80 border border-white pb-2  text-gray-700"
                  >
                    {isAmh ? "የኩባንያ ህትመቶች" : "Company Publications"}
                  </Link>
                </div>
              </div>
              <Link to="/vacancies" className="font-base  text-gray-700">
                {isAmh ? "ስራዎች" : "Vacancies"}
              </Link>

              <p
                onClick={handleLogin}
                className="font-base text-gray-700  cursor-pointer "
              >
                {!user && !token
                  ? isAmh
                    ? "ግባ"
                    : "Sign In / Sign Up"
                  : isAmh
                  ? "ውጣ"
                  : "Logout"}
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="hidden md:flex bg-[#FDB913] p-2 px-5 text-white rounded-sm font-medium"
              >
                {isAmh ? "አግኙን" : "Contact us"}
              </button>
            </div>

            <div className="flex space-x-4 items-center pr-2">
              <Menu
                menuButton={
                  <MenuButton>
                    <p className="w-24 flex">
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
                    <h1 className="font-base ">English</h1>
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
                    <h1 className="font-base">አማርኛ</h1>
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
                      <h1 className="font-base">Profile</h1>
                    </div>
                  </MenuItem>
                )}
              </Menu>

              <FaBars className="flex lg:hidden " size={23} onClick={toggle} />
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
