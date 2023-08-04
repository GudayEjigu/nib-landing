import React from 'react'
import bodyone from "../../../assets/bodyone.png";

const BodyOne = () => {
  return (
    <div><div className="absolute left-0 top-0 bottom-0 h-[30%] z-40 hidden md:flex opacity-20">
    <img src={bodyone} alt="" className="h-full object-contain" />
  </div></div>
  )
}

export default BodyOne