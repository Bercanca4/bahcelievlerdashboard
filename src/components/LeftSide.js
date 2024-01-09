import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaDashcube } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdDiscount } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { TbError404 } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

function LeftSide() {
  const [selectedPage, setSelectedPage] = useState("Overview");
  return (
    <div>
      <div className="grid grid-rows-12 h-full">
        <div className="grid row-span-1 p-4  ">
          <div className="flex items-center justify-center gap-x-3 text-white">
            <FaDashcube className="w-7 h-7  " />
            <label className="text-white text-[24px] font-semibold">
              Dashboard
            </label>
          </div>
        </div>

        <div className="grid row-span-11 p-4   ">
          <div className="  my-6">
            <div
              className="flex items-center justify-start p-3 
            ">
              <label className="text-[18px] text-white font-medium mt-4">
                Pages
              </label>
            </div>
            {selectedPage === "Overview" ? (
              <div>
                <Link
                  to="/"
                  onClick={() => setSelectedPage("Overview")}
                  className=" opacity-100 flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdOutlineSignalCellularAlt className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className=" text-white  font-normal">Overview </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/"
                  onClick={() => setSelectedPage("Overview")}
                  className=" opacity-60 flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdOutlineSignalCellularAlt className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className=" text-white  font-normal">Overview </label>
                </Link>
              </div>
            )}

            {selectedPage === "Customers" ? (
              <div>
                <Link
                  to="/customers"
                  onClick={() => setSelectedPage("Customers")}
                  className="opacity-100  flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdPeopleAlt className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal">Customers </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/customers"
                  onClick={() => setSelectedPage("Customers")}
                  className="opacity-60  flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdPeopleAlt className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Customers </label>
                </Link>
              </div>
            )}

            {selectedPage === "Companies" ? (
              <div>
                <Link
                  to="/companies"
                  onClick={() => setSelectedPage("Companies")}
                  className=" opacity-100  flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdDiscount className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal">Companies </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/companies"
                  onClick={() => setSelectedPage("Companies")}
                  className=" opacity-60  flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdDiscount className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Companies </label>
                </Link>
              </div>
            )}

            {selectedPage === "Account" ? (
              <div>
                <Link
                  to="/account"
                  onClick={() => setSelectedPage("Account")}
                  className=" opacity-100 flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdAccountCircle className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal ">Account </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/account"
                  onClick={() => setSelectedPage("Account")}
                  className=" opacity-60 flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <MdAccountCircle className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Account </label>
                </Link>
              </div>
            )}

            {selectedPage === "Setting" ? (
              <div>
                <Link
                  to="/settings"
                  onClick={() => setSelectedPage("Setting")}
                  className="opacity-100 flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <IoMdSettings className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal">Settings </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/settings"
                  onClick={() => setSelectedPage("Setting")}
                  className="opacity-60 flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <IoMdSettings className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Settings </label>
                </Link>
              </div>
            )}

            <div
              className="flex items-center justify-start p-3 
            ">
              <label className="text-[18px] text-white font-medium mt-4">
                User
              </label>
            </div>

            {selectedPage === "Login" ? (
              <div>
                <Link
                  to="/login"
                  onClick={() => setSelectedPage("Login")}
                  className="opacity-100  flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <IoLockClosed className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal">Login </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  onClick={() => setSelectedPage("Login")}
                  className="opacity-60  flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <IoLockClosed className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Login </label>
                </Link>
              </div>
            )}

            {selectedPage === "Register" ? (
              <div>
                <Link
                  to="/register"
                  onClick={() => setSelectedPage("Register")}
                  className="opacity-100  flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <IoPersonAdd className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal">Register </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/register"
                  onClick={() => setSelectedPage("Register")}
                  className="opacity-60  flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <IoPersonAdd className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Register </label>
                </Link>
              </div>
            )}

            <div
              className="flex items-center justify-start p-3 
            ">
              <label className="text-[18px] text-white font-medium mt-4">
                Other
              </label>
            </div>

            {selectedPage === "Error" ? (
              <div>
                <Link
                  to="/error"
                  onClick={() => setSelectedPage("Error")}
                  className="opacity-100  flex items-center p-3 gap-x-4 bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <TbError404 className="h-[25px] w-[25px] text-[#6466E9]" />{" "}
                  </label>
                  <label className="text-white font-normal">Error </label>
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to="/error"
                  onClick={() => setSelectedPage("Error")}
                  className="opacity-60  flex items-center p-3 gap-x-4 hover:bg-[#272E3D] rounded-xl hover:cursor-pointer">
                  <label className="text-white">
                    <TbError404 className="h-[25px] w-[25px]" />{" "}
                  </label>
                  <label className="text-white font-normal">Error </label>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
