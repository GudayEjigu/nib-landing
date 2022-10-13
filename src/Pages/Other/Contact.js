import Contacts from "../Home/components/Contact";
import two from "../../assets/five.png";
const Contact = () => {
  return (
    <div>
          <div
        style={{
          backgroundImage: `url(${two})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "350px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="flex flex-col items-center absolute w-full text-center justify-center z-30 top-1/2">
          <h1 className="text-white text-center font-bold text-2xl py-5 md:text-4xl">
          CONTACT US
          </h1>
          <p className="text-sm font-light text-white">HOME/CONTACT US</p>
        </div>
      </div>

      <div>
        <Contacts />
      </div>
    </div>
  )
}

export default Contact