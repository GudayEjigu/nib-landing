import React from "react";
import takaful from "../../../assets/takaful.png";
import takaful1 from "../../../assets/takaful1.png";
import takaful2 from "../../../assets/takaful2.png";
import { LangContext } from "../../../context/LangContext";
import { useContext } from "react";

const TakafulInsurance = () => {
  const { isAmh } = useContext(LangContext);

  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url(${takaful})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "800px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 " />
        <div className="flex flex-col items-left absolute w-full text-left  justify-start z-30 top-1/3 pl-44">
          <h1 className="text-white text-left font-semiBold text-2xl py-5 md:text-6xl">
            {isAmh ? "የድርጅት መዋቅር" : "Takaful"}
          </h1>
          <p className="text-lg font-light text-white w-[40%]">
            {isAmh
              ? "ቤት/ስለ እኛ"
              : "Ethical Insurance Solutions Rooted in Mutual Cooperation and Islamic Values. Explore our range of Takaful insurance products designed to provide you with peace of mind, ensuring your future is safeguarded in a way that adheres to your beliefs."}
          </p>
        </div>
      </div>
      <div className="py-2 mx-44">
        <div className="">
          <h1 className="font-medium text-xl pt-2 text-[#661F00]">
            {isAmh ? "ተልዕኮ" : "Takaful"}
          </h1>
          <div className="w-10 bg-[#FFB300] h-[2px]" />
        </div>
        <div className="grid grid-cols-2 gap-4 my-10">
          <div className=" flex justify-center">
            {" "}
            Takaful, an ethical insurance model, embraces the principles of
            cooperation and shared responsibility. Grounded in Islamic values,
            it transforms insurance into a collective effort where individuals
            protect one another from life's uncertainties. Imagine a safety net
            that not only shields you but also aligns with your ethical beliefs.
            <br />
            <br />
            <br />
            At NIB Insurance, we're proud to offer a range of Takaful products
            designed to uphold fairness, transparency, and risk-sharing,
            ensuring your financial future remains secure while respecting
            Islamic ethics. Our Takaful solutions—a harmonious blend of ethics
            and security.
          </div>
          <div className="">
            {" "}
            <img src={takaful1} alt="img" />
          </div>
        </div>
      </div>
      <div className="py-2 mx-44">
        <div className="">
          <h1 className="font-medium text-xl pt-2 text-[#661F00]">
            {isAmh ? "ተልዕኮ" : "Uinque features of Takaful"}
          </h1>
          <div className="w-10 bg-[#FFB300] h-[2px]" />
        </div>
        <div className="grid grid-cols-1 gap-4 my-10">
          <div className="">
            {" "}
            <img src={takaful2} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakafulInsurance;
