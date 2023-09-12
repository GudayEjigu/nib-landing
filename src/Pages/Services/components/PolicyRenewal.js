import React from "react";
import policyRenewal from "../../../assets/policyRenewal.png";
import { LangContext } from "../../../context/LangContext";
import { useContext } from "react";

const PolicyRenewal = () => {
  const { isAmh } = useContext(LangContext);

  return (
    <div>
      {" "}
      <div
        style={{
          backgroundImage: `url(${policyRenewal})`,
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
            {isAmh ? "የድርጅት መዋቅር" : "Policy Renewal"}
          </h1>
          <p className="text-lg font-light text-white w-[40%]">
            {isAmh
              ? "ቤት/ስለ እኛ"
              : "Renew Your Policy for Ongoing Protection: Keep Your Insurance Coverage Up-to-Date and Access the Latest Information to Ensure Peace of Mind and Security for the Future"}
          </p>
        </div>
      </div>
      <div className="py-2 mx-44">
        <div className="">
          <h1 className="font-medium text-xl pt-2 text-[#661F00]">
            {isAmh ? "ተልዕኮ" : "Renew your Policy"}
          </h1>
          <div className="w-10 bg-[#FFB300] h-[2px]" />
          <p className="my-2">
            Effortless Policy Renewal: Secure Your Future, Keep Your Coverage
            Updated, and Access the Latest Information
          </p>
        </div>
        <div className="flex my-10  justify-center">
          <div className="      flex">
            <input
              placeholder="Enter your policy number "
              className="px-2 rounded-lg  w-96 border-2 border-[#661F00]"
            />
            <button className="mx-2 bg-[#661F00] rounded-lg text-white px-4 ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyRenewal;
