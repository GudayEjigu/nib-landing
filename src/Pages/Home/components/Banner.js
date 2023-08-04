import React, { useContext } from "react";
import mainoffice from "../../../assets/mainoffice.png";
import footer from "../../../assets/footer.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bodyone from "../../../assets/bodyone.png";
import bodytwo from "../../../assets/bodytwo.png";
import { LangContext } from "../../../context/LangContext";
import { useNavigate } from "react-router-dom";
import featureOffece from "../../../assets/featureOffece.jpg";

const Banner = () => {
  const { isAmh } = useContext(LangContext);
  const navigate = useNavigate();
  return (
    <div className="relative ">
   {/*    <div className="absolute left-0 top-0 bottom-0 h-full z-10">
        <img
          src={bodyone}
          alt=""
          className="h-full object-contain opacity-20"
        />
      </div>
      <div className="absolute right-0 top-0 bottom-0 h-full z-10">
        <img
          src={bodytwo}
          alt=""
          className="h-full object-contain opacity-20"
        />
      </div> */}
      <div className="absolute bg-black/30 inset-0 z-20 h-[550px] md:h-[600px]" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        interval={4000}
        // renderIndicator={()=>(cl)}
      >
        <div className="  ">
          <img
            src={mainoffice}
            alt="banner one"
            className="h-[550px] md:h-[600px] w-full  object-cover rounded-md border-2 border-white"
          />
        </div>
        {/* second */}
        <div className="  ">
          <img
            src={featureOffece}
            alt="banner one"
            className="h-[550px] md:h-[600px] w-full  object-cover rounded-md border-2 border-white"
          />
        </div>
        {/* third*/}
      </Carousel>
      <div className="absolute z-30 top-1/4 flex flex-col items-start w-full">
        <div className="max-w-6xl mx-auto w-full flex flex-col space-y-2 p-3 md:p-0">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-[2px]  bg-[#ac7729] " />
            <p className="text-white">
              {isAmh ? "የእርስዎ ብልህ ምርጫ!" : "Your Intelligent Choice!"}
            </p>
          </div>
          <h1 className="text-2xl md:text-5xl font-semiBold max-w-2xl text-white">
            {isAmh
              ? "ለጋራ እድገት አስተማማኝ የኢንሹራንስ ሽፋን እና አገልግሎት!"
              : "Reliable Insurance cover and service for mutual progress!."}
          </h1>
          <p className="max-w-xl text-white leading-5">
            {isAmh
              ? "በህይወት፣ በንብረት እና በተጠያቂነት ስጋቶች ላይ ሽፋን በመስጠት ቀልጣፋ እና ጥራት ያለው አገልግሎት እናቀርባለን።"
              : "We offer efficient and quality service in the provision of cover against life, property and liability risks."}
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#FDB913] p-2 px-5 text-white rounded-sm font-medium w-fit"
          >
            {isAmh ? "አግኙን" : "Contact us"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default Banner;
