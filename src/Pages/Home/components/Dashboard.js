import React from "react";
import DashboardImg from "../../../assets/Dashobard.png";
import CountUp from "react-countup";
import CountUpOnScroll from "../../../components/Counter";
import Counter from "../../../components/Counter";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col text-center px-20 justify-center my-10">
        <p className="font-bold  text-[#661F00] text-3xl my-4">
          Welcome to Nib Insurance
        </p>
        <p>
          Nib Insurance is dedicated to delivering a reliable, adaptive, and
          inviting insurance environment that prioritizes customer security and
          satisfaction. With unwavering commitment to our values and a strong
          foundation of confidence, we employ cutting-edge technology, industry
          standards, and seamless procedures. Our core focus is enhancing
          customer experience, ultimately enriching the value we bring to all
          our stakeholders.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${DashboardImg})`,
          backgroundPosition: "center",
          width: "100%",
          minHeight: "200px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 mx-[10%] pt-[5%]">
          <div className="flex  justify-center  border-l-2 border-l-white md:border-none  ">
            <div className="flex flex-col justify-center text-center">
              {" "}
              <p className="font-bold text-3xl text-white">
                {" "}
                <Counter end={1257} />{" "}
              </p>
              <p className="text-[#FFB300] ">Shareholders</p>
            </div>{" "}
          </div>
          <div className="flex  border-l-2 border-l-white  justify-center ">
            <div className="flex flex-col justify-center text-center">
              {" "}
              <p className="font-bold text-3xl text-white flex">
                {" "}
                <Counter end={800} />
                M+
              </p>
              <p className="text-[#FFB300] ">Subscribed Capital</p>
            </div>{" "}
          </div>{" "}
          <div className="flex  border-l-2 border-l-white justify-center ">
            <div className="flex flex-col justify-center text-center">
              {" "}
              <p className="font-bold text-3xl text-white flex">
                {" "}
                <Counter end={750} />
                M+
              </p>
              <p className="text-[#FFB300] ">Paid Up Capital</p>
            </div>{" "}
          </div>{" "}
          <div className="flex  border-l-2 border-l-white justify-center">
            <div className="flex flex-col justify-center text-center">
              {" "}
              <p className="font-bold text-3xl text-white flex">
                {" "}
                <Counter end={450} />+
              </p>
              <p className="text-[#FFB300] ">Employees</p>
            </div>{" "}
          </div>{" "}
          <div className="flex  border-l-2 border-l-white justify-center ">
            <div className="flex flex-col justify-center text-center">
              {" "}
              <p className="font-bold text-3xl text-white">
                {" "}
                <Counter end={50} />
              </p>
              <p className="text-[#FFB300] ">Branches</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
