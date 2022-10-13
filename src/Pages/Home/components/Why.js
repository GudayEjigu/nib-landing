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
      <img src={footer} />
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
            <p className="text-[#FAD03C]">{isAmh ? 'የእርስዎ ጥቅሞች' :'Your Benefits'}</p>
           <h1 className="text-white font-bold text-xl md:text-3xl">{isAmh ? 'ለምን መረጥን' :'WHY CHOOSE US'}</h1>
            <p className="text-white text-sm">Nib Insurance Company (NIC) was established by 658 shareholders with an authorized capital of Birr 50.0 million and a Paid-Up Capital of Birr 14.0 million in May 02, 2002 with 4 branches in Addis Ababa and a total staff size of not more than 50. Currently, the paid up capital has reached to Birr 250 million and the number of shareholders increased to 1,014. NIC provides both General (Non-Life) Insurance and Life Assurance Services to its clients.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             <div className="flex items-start space-x-2">
                <img src={point} alt="" className="h-8"/>
                <div>
                    <h1 className="text-white font-bold text-lg ">25 YEARS OF EXPERIENCE</h1>
                    <p className="text-sm text-white">Nib Insurance Company (NIC) was established by 658 shareholders with an authorized capital of Birr 50.0 million </p>
                </div>
             </div>
             <div className="flex items-start space-x-2">
                <img src={point} alt="" className="h-8"/>
                <div>
                    <h1 className="text-white font-bold text-lg ">25 YEARS OF EXPERIENCE</h1>
                    <p className="text-sm text-white">Nib Insurance Company (NIC) was established by 658 shareholders with an authorized capital of Birr 50.0 million </p>
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
