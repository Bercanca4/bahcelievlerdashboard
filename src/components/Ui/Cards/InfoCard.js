import React from "react";

function InfoCard({ statusicon, paragraph, bgColor, statu }) {
  return (
    <div>
      {/* STATU DURUMLARI 3'E AYRILIR =   Attention - Announcement - null */}
      <div
        className={`w-[1300px] rounded-xl gap-x-4 p-6 mx-auto flex items-center justify-start ${bgColor} `}>
        <div className="p-2 text-black text-[25px]  rounded-full  bg-white  flex items-center justify-center">
          {statusicon}
        </div>
        <div className="p-2  w-full flex items-center justify-between">
          <label className="text-xl text-white font-light select-none  text-wrap line-clamp-2 truncate ">
            {paragraph}
          </label>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
