import { LangContext } from "../../../context/LangContext";
import { useEffect, useState, useContext } from "react";
import contacts from "../../../assets/contact.png";
const Contact = () => {
  const { isAmh } = useContext(LangContext);

  return (
    <div className="pt-20">
      <div
        style={{
          backgroundImage: `url(${contacts})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" md:p-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 p-0 gap-0">
          <div className="flex items-start space-y-1 flex-col p-5">
            <h1 className="text-2xl md:text-xl font-medium text-[#661F00]">
             {isAmh ?   'ለማንኛውም ጥያቄ መልእክቱን ይላኩለን' :'Contact us'}
            </h1>
            <div className="w-10 bg-[#FFB300] h-[2px]" />
         
            <form className="flex flex-col space-y-2 flex-grow w-full ">
              <input
                type="text"
                name="name"
                id=""
                placeholder={isAmh ? 'ስም' :"Full Name"}
                className="p-2 border  flex-grow rounded-sm"
                required
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder={isAmh ? "ኢሜይል":"Email Address"}
                className="p-2 border  flex-grow rounded-sm"
                required
              />
 <input
                type="number"
                name="phone"
                id=""
                placeholder={isAmh ? "ስልክ ቁጥር" : "Phone Number"}
                className="p-2 border  flex-grow rounded-sm"
                required
              />
              <textarea
                className="p-2 border  flex-grow rounded-sm w-full"
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder={isAmh ? "መልእክትህ" :"Message"}
                required
              ></textarea>
              <div className="flex justify-center">

              <button
                type="submit"
                className="p-2 w-32   bg-[#FFB300] text-white rounded-md font-medium"
                >
                {isAmh ? 'ላክ' :'Send'}
              </button>
                </div>
            </form>
          </div>
          <div className='flex items-center justify-center '>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.797199594374!2d38.784172653678205!3d8.990800446543043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d3e5f25f15%3A0x81f8b24b65d0a26d!2sAfrosweden%20Real%20Estate!5e0!3m2!1sam!2set!4v1657196923630!5m2!1sam!2set"
      width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
