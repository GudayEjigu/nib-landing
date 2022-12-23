import React,{useContext} from 'react'
import mainoffice from "../../../assets/mainoffice.png";
import footer from '../../../assets/footer.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bodyone from '../../../assets/bodyone.png'
import bodytwo from '../../../assets/bodytwo.png'
import { LangContext } from "../../../context/LangContext";
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const {isAmh} =useContext(LangContext);
  const navigate = useNavigate()
  return (
    <div className="relative ">
      <div className='absolute left-0 top-0 bottom-0 h-full z-10'>
         <img src={bodyone} alt=""className='h-full object-contain opacity-20' />
      </div>
      <div className='absolute right-0 top-0 bottom-0 h-full z-10'>
         <img src={bodytwo} alt=""className='h-full object-contain opacity-20' />
      </div>
      <div className='absolute bg-black/30 inset-0 z-20 h-[550px] md:h-[600px]'/>
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
          src={mainoffice}
          alt="banner one"
          className="h-[550px] md:h-[600px] w-full  object-cover rounded-md border-2 border-white"
        />
      </div>
      {/* third*/}
      <div className=" ">
        <img
          src={mainoffice}
          alt="banner one"
          className="h-[550px] md:h-[600px] w-full  object-cover rounded-md border-2 border-white"
        />
      </div>
    </Carousel>
    <div className="absolute z-30 top-1/4 flex flex-col items-start w-full">
      <div className="max-w-6xl mx-auto w-full flex flex-col space-y-2 p-3 md:p-0">
        <div className="flex items-center space-x-2">
          <div className="h-6 w-[2px]  bg-[#ac7729] " />
          <p className="text-white">{isAmh ?  'በጥሩ እጆች ላይ ነዎት።' :'YOU’RE IN GOOD HANDS.'}</p>
        </div>
        <h1 className="text-2xl md:text-5xl font-bold max-w-2xl text-white">
          {isAmh ?   'ስለወደፊቱ ጊዜ ማንም ሊተነብይ አይችልም። እኛ ግን ልንጠብቀው እንችላለን።' :"NO ONE CAN SURELY PREDICT THE FUTURE. BUT WE CAN PROTECT IT."}
        </h1>
        <p className="max-w-xl text-white leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button onClick={()=>navigate('/contact')} 
        className="bg-[#ac7729] p-2 px-5 text-white rounded-sm font-medium w-fit">
          {isAmh ? 'አግኙን' :'Contact us'}
        </button>
      </div>
    </div>
    <img src={footer} alt="" />
  </div>
  )
}

export default Banner