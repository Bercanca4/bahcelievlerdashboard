import React from "react";
import { FaSearch } from "react-icons/fa";

const duyuru = [
  {
    data: "Pazartesi günü saat 18:00'da halk toplantısı yapılacaktır.",
  },
  {
    data: "Salı günü 12:00'da Bisiklet dağıtma etkinlikleri olacaktır.",
  },
  {
    data: "Çarşamba günü yapılacak toplantıya 22 kişi katılacaktır.",
  },
  {
    data: "Perşembe günü yapılacak olan deneme için öğrencilere duyuru geçilecektir.",
  },
  {
    data: "Cuma günü yapılacak olan etkinliğe halk çağırılacaktır.",
  },
];

function Navbar() {
  const birlesikDuyuru = duyuru.map((item) => item.data).join(" | ");

  return (
    <div className="w-full  h-[90px] backdrop-blur-2xl shadow-lg z-20 fixed flex items-center justify-center py-2 px-4">
      <div className=" w-full  flex items-center justify-between  mr-[279px] ">
        <div className="flex items-center justify-center   w-full mx-[1%] gap-x-4">
          <label className="p-2 flex items-center select-none  justify-center bg-red-500 text-white  rounded-xl">
            Duyurular
          </label>
          <marquee className=" flex items-center font-semibold p-2 select-none ">
            {birlesikDuyuru}
          </marquee>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <div className="flex items-center justify-center gap-x-2">
            <input
              className="w-[400px] border rounded-xl outline-none  p-2 "
              placeholder="Ara..."
            />
            <FaSearch className=" flex items-center   justify-center rounded-xl   cursor-pointer w-[25px] h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
