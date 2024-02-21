import React from "react";
import CountUp from "react-countup";

function MinCard({ title, data, customIcon, bgColor, start }) {
  return (
    <div
      className={`rounded-xl w-full min-h-[200px] max-h-[300px] h-[150px]  p-4 ${bgColor} shadow-xl transition-all hover:scale-105 hover:duration-700 duration-700`}>
      <div className="w-full p-2  flex items-center justify-between ">
        <label className="text-[18px] font-semibold select-none text-white">
          {title}{" "}
        </label>
        <div className="rounded-full border text-black w-[55px] h-[55px]  bg-white flex items-center justify-center">
          {customIcon}
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-white p-2 ">
        <CountUp
          start={start}
          end={data}
          duration={1.5}
          className="text-[50px] font-bold select-none">
          {" "}
          {data}
        </CountUp>
      </div>
    </div>
  );
}

export default MinCard;
