import React from 'react'
import underConstruction from "../assets/underConstruction.png";



const UnderConstruction = () => {
  return (
    <div style={{
        backgroundImage: `url(${underConstruction})`,
        backgroundPosition: "center",
        width: "100%",
        minHeight: "800px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}>
    </div>
  )
}

export default UnderConstruction