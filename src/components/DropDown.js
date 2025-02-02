import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import Logo from "../assets/logo.png";
import { useEffect, useState, useRef } from "react";
import { urlFor, client } from "../utils/client";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useLang } from "../context/lang";
import axios from "axios";
import { useQuery } from "react-query";
import { ThreeDots } from "react-loader-spinner";
import { useAuth } from "../context/auth";
const DropDown = ({ toggle, isOpen, setIsModalOpen, setIsOpen }) => {
  const { isAmh } = useLang();
  const { user, token, logout } = useAuth();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  const navigate = useNavigate();
  const [openProjects, setOpenProjects] = useState(false);
  const [openAboutUs, setOpenAboutUs] = useState(false);
  const [openInsights, setOpenInsights] = useState(false);

  const handleShow = () => {
    setOpenProjects(!openProjects);
  };
  const handleShowAboutUS = () => {
    setOpenAboutUs(!openAboutUs);
  };
  const handleShowInsights = () => {
    setOpenInsights(!openInsights);
  };
  const [serviceCategoryies, setServiceCategoryies] = useState([]);
  useEffect(() => {
    const categoryQuery = ` *[_type == "service_category" ]`;

    client.fetch(categoryQuery).then((data) => {
      setServiceCategoryies(data);
    });
  }, []);
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
  const handleLogin = () => {
    if (!user && !token) {
      setIsModalOpen(true);
      setIsOpen(false);
    } else {
      logout();
    }
  };
  return (
    <div
      className={
        isOpen
          ? "sticky top-0 h-screen  z-50 grid grid-cols-1 gap-5 bg-white text-center space-y-3 py-5"
          : "hidden"
      }
    >
      <div className="absolute cursor-pointer right-5 top-5" onClick={toggle}>
        <FaTimes size={25} className=" text-slate-900 mr-2" />
      </div>
      <div
        div
        className="flex flex-col items-start  space-y-5 pt-10 pl-5 h-full"
      >
        <div className="flex flex-col items-start  space-y-4  p-2 h-full">
          <Link to="/" className="font-medium  text-slate-900" onClick={toggle}>
            Home
          </Link>

          <div className="flex  flex-col items-start">
            <div
              onClick={handleShow}
              className="flex items-start justify-center space-x-1 cursor-pointer hover:text-sky-500"
            >
              <h1 className="font-medium  text-slate-900">Services</h1>
              {openProjects ? (
                <BiChevronUp size={25} className="text-slate-900" />
              ) : (
                <BiChevronDown className="text-slate-900" size={25} />
              )}
            </div>
            {openProjects && (
              <div className="flex-col transition-all ease-out duration-300  ">
                <div className="flex flex-col items-start space-y-1 pt-2 pl-5">
                  {serviceCategoryData.isFetched ? (
                    <div className="flex flex-col space-y-1 ">
                      {serviceCategoryData?.data?.data?.data?.map((item) => (
                        <div className="flex flex-col items-start space-y-2">
                          <Link
                            onClick={toggle}
                            className="hover:opacity-80"
                            to={`/services/${item.id}`}
                          >
                            {isAmh ? item.name.amharic : item.name.english}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <Spinner />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex  flex-col items-start">
            <div
              onClick={handleShowAboutUS}
              className="flex items-start justify-center space-x-1 cursor-pointer hover:text-sky-500"
            >
              <h1 className="font-medium  text-slate-900">About Us</h1>
              {openAboutUs ? (
                <BiChevronUp size={25} className="text-slate-900" />
              ) : (
                <BiChevronDown className="text-slate-900" size={25} />
              )}
            </div>
            {openAboutUs && (
              <div className="flex-col transition-all ease-out duration-300  ">
                <div className="flex flex-col items-start space-y-1 pt-2 pl-5">
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex flex-col items-start space-y-2">
                      <Link
                        to="/company_overview"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >
                        {isAmh ? "የኩባንያ አጠቃላይ እይታ" : "Company Overview"}
                      </Link>
                      <Link
                        to="/organization_structure"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >
                        {isAmh ? "የድርጅት መዋቅር" : "Organization Structure"}{" "}
                      </Link>{" "}
                      <Link
                        to="/board-of-directors"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >Board of Directors
                      </Link>
                      <Link
                        to="/executive_managment"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >
                        {isAmh ? "አስፈፃሚ አስተዳደር" : "Executive Managment"}
                      </Link>
                      <Link
                        to="/faq"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >
                        FAQs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex  flex-col items-start">
            <div
              onClick={handleShowInsights}
              className="flex items-start justify-center space-x-1 cursor-pointer hover:text-sky-500"
            >
              <h1 className="font-medium  text-slate-900">Media</h1>
              {openInsights ? (
                <BiChevronUp size={25} className="text-slate-900" />
              ) : (
                <BiChevronDown className="text-slate-900" size={25} />
              )}
            </div>
            {openInsights && (
              <div className="flex-col transition-all ease-out duration-300  ">
                <div className="flex flex-col items-start space-y-1 pt-2 pl-5">
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex flex-col items-start space-y-2">
                      <Link
                        to="/blogs"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >
                        News and Announcments
                      </Link>

                      <Link
                        to="/publication"
                        className="font-medium  text-slate-900"
                        onClick={toggle}
                      >
                        Company Publications
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/vacancies"
            className="font-medium  text-slate-900"
            onClick={toggle}
          >
            Claims
          </Link>
          <Link
            to="/branches"
            className="font-medium  text-slate-900"
            onClick={toggle}
          >
            Branches
          </Link>
          <Link
            to="/vacancies"
            className="font-medium  text-slate-900"
            onClick={toggle}
          >
            Vacancy
          </Link>
          <Link
            to="/profile"
            className="font-medium  text-slate-900"
            onClick={toggle}
          >
            Profile
          </Link>

          <Button onClick={handleLogin}>
            {!user && !token
              ? isAmh
                ? "ግባ"
                : "Sign In /Sign up"
              : isAmh
              ? "ውጣ"
              : "Logout"}
          </Button>
          <Button bg="#FAD03C" size="md" width="120px">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
