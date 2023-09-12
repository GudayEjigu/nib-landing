import React from 'react'
import proposalForms from "../../../assets/proposalForms.png";
import { LangContext } from "../../../context/LangContext";
import { useContext } from 'react';

const ProposalForms = () => {
    const { isAmh } = useContext(LangContext);

    return (
      <div>  <div
      style={{
        backgroundImage: `url(${proposalForms})`,
        backgroundPosition: "center",
        width: "100%",
        minHeight: "600px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 " />
      <div className="flex flex-col items-left absolute w-full text-left  justify-start z-30 top-1/3 pl-44">
        <h1 className="text-white text-left font-semiBold text-2xl py-5 md:text-6xl">
          {isAmh ? "የድርጅት መዋቅር" : "Proposal Forms"}
        </h1>
        <p className="text-lg font-light text-white w-[40%]">
          {isAmh
            ? "ቤት/ስለ እኛ"
            : "You'll find a collection of essential documents designed to streamline the process of getting started with us. Explore, download, and take the first steps toward securing your future with ease."}
        </p>
      </div>
    </div></div>
    )
}

export default ProposalForms