import React from 'react'
import micro from "../../../assets/micro.png";
import { LangContext } from "../../../context/LangContext";
import { useContext } from 'react';


const MicroInsurance = () => {
    const { isAmh } = useContext(LangContext);

  return (
    <div> <div
    style={{
      backgroundImage: `url(${micro})`,
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
        {isAmh ? "የድርጅት መዋቅር" : "Micro Insurance"}
      </h1>
      <p className="text-lg font-light text-white w-[40%]">
        {isAmh
          ? "ቤት/ስለ እኛ"
          : "Our Micro Insurance offerings are designed to provide accessible and affordable coverage for every individual and family. Explore how we're making insurance simple and cost-effective, ensuring that everyone can safeguard their future without breaking the bank."}
      </p>
    </div>
  </div></div>
  )
}

export default MicroInsurance