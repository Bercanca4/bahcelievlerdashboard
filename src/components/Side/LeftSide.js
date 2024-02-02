import React from "react";
import menudata from "../../Data/menudata.json";
import { NavLink } from "react-router-dom";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { TbError404 } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

function LeftSide() {
  const iconMap = {
    MdOutlineSignalCellularAlt,
    MdPeopleAlt,
    MdDiscount,
    MdAccountCircle,
    IoLockClosed,
    IoPersonAdd,
    IoMdSettings,
    TbError404,
  };

  return (
    <div className="my-[5rem] ">
      {menudata.map((page, index) => {
        const IconComponent = iconMap[page.icon];
        return (
          <div className="flex my-[1rem] " key={index}>
            <NavLink
              to={page.path}
              exact // Yalnızca tam olarak eşleşen URL'lerde seçili durumu etkinleştirir
              className="flex gap-x-2 text-white rounded-xl px-4 py-2 w-full transition-colors duration-300 ease-in-out
                         hover:bg-gray-700 focus:bg-gray-700 "
              activeClassName="bg-gray-700">
              <IconComponent className="w-[30px]  h-[30px]" />
              {page.pageName}
            </NavLink>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default LeftSide;
