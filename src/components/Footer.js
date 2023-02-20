import React,{useContext} from "react";
import footers from "../assets/footers.png";
import logo from "../assets/logo.png";
import { LangContext } from "../context/LangContext";
import { IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption, GrYoutube, GrLinkedinOption } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const { isAmh, changeLang } = useContext(LangContext);
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
              <h1 className="font-bold text-2xl md:text-4xl text-white">
                {isAmh ? 'ጋዜጣችንን ይቀላቀሉ' :'JOIN OUR NEWSLETTER'}
              </h1>
              <p className="text-sm text-white max-w-lg">
              {isAmh ? "በህይወት፣ በንብረት እና በተጠያቂነት ስጋቶች ላይ ሽፋን በመስጠት ቀልጣፋ እና ጥራት ያለው አገልግሎት እናቀርባለን።" : "We offer efficient and quality service in the provision of cover against life, property and liability risks."}
              </p>
            </div>
            <div>
              <div className="bg-white flex items-center p-2 rounded-sm w-full">
                <input
                  type="email"
                  placeholder={isAmh ? 'ኢሜይል' :'Email'}
                  className="flex flex-grow bg-transparent focus:outline-none focus:ring-0 w-full"
                />
                <button className="flex-grow flex bg-[#FAD03C] p-2 md:px-5 text-white rounded-sm font-medium">
                  {isAmh ? 'ይመዝገቡ' :'Subscribe'}
                </button>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white border-b border-[#b99a2a] pb-5">
            <div className="flex flex-col items-start space-y-2">
              <img src={logo} alt="" />
              <p className="text-sm max-w-xs">
              {isAmh ?   'ለጋራ እድገት አስተማማኝ የኢንሹራንስ ሽፋን እና አገልግሎት!' :"Reliable Insurance cover and service for mutual progress!."}
              </p>
              <div className="flex items-center space-x-2">
                <div className="bg-[#FAD03C] p-2 rounded-full">
                  <GrFacebookOption className="text-black" />
                </div>
                <div className="bg-[#FAD03C] p-2 rounded-full">
                  <IoLogoTwitter className="text-black" />
                </div>
                <div className="bg-[#FAD03C] p-2 rounded-full">
                  <GrYoutube className="text-black" />
                </div>
                <div className="bg-[#FAD03C] p-2 rounded-full">
                  <GrLinkedinOption className="text-black" />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold text-xl py-2">{isAmh ? 'ፈጣን ማገናኛዎች' :'QUICK LINKS'}</h1>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-start space-y-1">
                <Link to="/" className="font-medium hover:opacity-80 text-white">
                {isAmh ? "ቤት" :'Home'}
              </Link>
              <Link to="/vacancies" className="font-medium hover:opacity-80 text-white">
              {isAmh ?'ስራዎች' : 'Vacancies'}
              </Link>
              <Link to="/about" className="font-medium hover:opacity-80 text-white">
                {isAmh ? "ስለ እኛ" :"About us"}
              </Link>
              <Link to="/blogs" className="font-medium hover:opacity-80 text-white">
              {isAmh ? 'ብሎጎች' :'Blogs' }
              </Link>
              <Link to="/publication" className="font-medium hover:opacity-80 text-white">
                {isAmh ?  "ህትመት" :'Publication'}
              </Link>
              <Link to="/branches" className="font-medium hover:opacity-80 text-white">
                {isAmh ? "ቅርንጫፎች" :"Branches"}
              </Link>
              <Link to="/faq" className="font-medium hover:opacity-80 text-white">
                {isAmh ?  "ፋክስ":'Faqs'}
              </Link>
                </div>
              
              </div>
            </div>
            {/* contact */}
            <div>
              <h1 className="font-semibold text-xl py-2">{isAmh ?'የመገኛ አድራሻ' :'CONTACT INFO'}</h1>
              <h4 className="font-medium text-lg">{isAmh ?'ዋና መስሪያ ቤት' :'HEAD OFFICE'}</h4>
              <div className="flex flex-col items-start space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{isAmh ? 'አካባቢ' :'Location'}:</span> {isAmh ? `አዲስ አበባ -
                  ኢትዮጵያ ደምበል ከተማ ማእከል - ሁለተኛ ፎቅ` :`Addis Ababa -
                  Ethiopia Dembel City Center - Second Floor`}
                </p>
                <p className="text-sm">
                  <span className="font-medium">{isAmh ? 'ኢሜይል' :'Email'}:</span>
                  info@nibinsurancethiopia.com
                </p>
                <p className="text-sm">
                  <span className="font-medium">{isAmh ?'ስልክ' :'Phone'}:</span>
                  552 81 95/96, 553 51 29-32, 554 37 05
                </p>
                <p className="text-sm">
                  <span className="font-medium">{isAmh ? 'ፖ.ሳ. ቁ' :'P.O.Box'}:</span>
                  285
                </p>
                <p className="text-sm">
                  <span className="font-medium"> {isAmh ?'ፋክስ' : 'Fax'}</span>
                  Fax: +1-212-9876543
                </p>
                <p className="text-sm">
                  <span className="font-medium"> Fax:</span>
                  Fax: +1-212-9876543
                </p>
                {/* <p>View all branchs</p> */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap text-center py-3">
            <p className="text-sm text-center w-full text-white"> {isAmh ? `${new Date().getFullYear()} ንብ. መብቱ በህግ የተጠበቀ ነው.` :`${new Date().getFullYear()} NIB. All Rights Reserved.`}</p>
            <p className="text-sm text-center w-full text-white">{isAmh ? 'የግላዊነት ፖሊሲ | ውሎች እና ሁኔታዎች' :'Privacy Policy | Terms & Conditions'}</p>
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
