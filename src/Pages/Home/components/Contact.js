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
          minHeight: "550px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" md:p-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-3">
          <div className="flex items-start space-y-1 flex-col">
            <h1 className="text-2xl md:text-3xl font-semiBold">
             {isAmh ?   'ለማንኛውም ጥያቄ መልእክቱን ይላኩለን' :' DROP US MESSAGE FOR ANY QUERY'}
            </h1>
         
            <form className="flex flex-col space-y-2 flex-grow w-full ">
              <input
                type="text"
                name="name"
                id=""
                placeholder={isAmh ? 'ስም' :"your name"}
                className="p-2 border  flex-grow rounded-sm"
                required
              />
              <input
                type="email"
                name="email"
                id=""
                placeholder={isAmh ? "ኢሜይል":"your email"}
                className="p-2 border  flex-grow rounded-sm"
                required
              />
 <input
                type="number"
                name="phone"
                id=""
                placeholder={isAmh ? "ስልክ ቁጥር" : "your phone"}
                className="p-2 border  flex-grow rounded-sm"
                required
              />
              <textarea
                className="p-2 border  flex-grow rounded-sm w-full"
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder={isAmh ? "መልእክትህ" :"Your Message"}
                required
              ></textarea>
              <button
                type="submit"
                className="p-2 w-24 px-4 bg-[#ffd137] text-white rounded-md font-medium"
              >
                {isAmh ? 'ላክ' :'Send'}
              </button>
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
