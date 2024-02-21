import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full  h-[90px] backdrop-blur-2xl shadow-lg z-20 fixed flex items-center justify-center py-2 px-4">
      <div className=" w-full  flex items-center justify-end  mr-[279px] ">
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
