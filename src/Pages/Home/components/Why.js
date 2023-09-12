import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import footer from "../../../assets/footer.png";
import Whys from "../../../assets/Why.png";
import point from "../../../assets/point.png";
import nib from "../../../assets/nib.png";
const Why = () => {
  const { isAmh } = useContext(LangContext);
  return (
    <div>
      <div className="m-20"></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <img src={Whys} className="h-[384px] w-full object-cover" />
        </div>
        <div
          style={{
            backgroundImage: `url(${nib})`,
            backgroundPosition: "center",
            width: "100%",
            minHeight: "350px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-5 flex flex-col items-start space-y-2">
            <p className="text-[#FFB300]">
              {isAmh ? "የእርስዎ ጥቅሞች" : "Your Benefits"}
            </p>
            <h1 className="text-white font-semiBold text-xl md:text-3xl">
              {isAmh ? "ለምን ይመርጡናል ? " : "WHY CHOOSE US ?"}
            </h1>
            <p className="text-white text-sm">
              {isAmh
                ? "ንብ ኢንሹራንስ ኩባንያ በ658 ባለአክሲዮኖች የተፈቀደለት ካፒታል 50.0 ሚሊዮን ብር እና የተከፈለ ካፒታል 14.0 ሚሊዮን ብር ግንቦት 02 ቀን 2002 ዓ.ም በአዲስ አበባ 4 ቅርንጫፎች ያሉት በአጠቃላይ ከ50 የማይበልጡ ሠራተኞች የተቋቋመ ነው። በአሁኑ ወቅት የተከፈለ ካፒታሉ ብር 250 ሚሊዮን የደረሰ ሲሆን የባለአክሲዮኖች ቁጥርም ወደ 1,014 ከፍ ብሏል። NIC ሁለቱንም አጠቃላይ (ህይወት ያልሆነ) ኢንሹራንስ እና የህይወት ማረጋገጫ አገልግሎቶችን ለደንበኞቹ ይሰጣል።"
                : "Nib Insurance Company (NIC) was established by 658 shareholders with an authorized capital of Birr 50.0 million and a Paid-Up Capital of Birr 14.0 million in May 02, 2002 with 4 branches in Addis Ababa and a total staff size of not more than 50. Currently, the paid up capital has reached to Birr 250 million and the number of shareholders increased to 1,014. NIC provides both General (Non-Life) Insurance and Life Assurance Services to its clients."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <img src={point} alt="" className="h-8" />
                <div>
                  <h1 className="text-white font-semiBold text-lg ">
                    {isAmh ? "የ25 ዓመታት ልምድ" : "25 YEARS OF EXPERIENCE"}
                  </h1>
                  <p className="text-sm text-white">
                    {isAmh
                      ? "ንብ ኢንሹራንስ ኩባንያ በ658 ባለአክሲዮኖች በብር 50.0 ሚሊዮን የተፈቀደ ካፒታል ተቋቁሟል።"
                      : "Nib Insurance Company (NIC) was established by 658 shareholders with an authorized capital of Birr 50.0 million "}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <img src={point} alt="" className="h-8" />
                <div>
                  <h1 className="text-white font-semiBold text-lg ">
                    {isAmh ? "ከ 44 በላይ ቅርንጫፎች" : "More than 44 branches"}
                  </h1>
                  <p className="text-sm text-white">
                    {isAmh
                      ? "ድርጅቱ ስራውን የሚያከናውነው በዋናው መስሪያ ቤት፣ በ42 ቅርንጫፎች፣ በ1 የእውቂያ ቢሮ እና በ1 ህይወት ማረጋገጫ ቅርንጫፍ ነው። ከቅርንጫፎቹ ውስጥ 27ቱ በአዲስ አበባ ይገኛሉ።"
                      : "The company undertakes its operation through its head office, 42 branches, 1 contact office and 1 life Assurance branch. Twenty seven of the  branches are located in Addis Ababa."}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
