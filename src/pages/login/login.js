import React from "react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { GoAlertFill } from "react-icons/go";
import Bahcelievlerlogo from "../../assets/bahcelievlerlogo.jpeg";

function login() {
  return (
    <div className="flex">
      <div className="w-[55rem] h-screen">
        <img
          src={Bahcelievlerlogo}
          className="flex items-center justify-center w-full h-full  object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-xl border shadow-2xl w-[35rem] h-[17rem] text-left mx-auto p-4">
          <div>
            <div className="my-2">
              <label className="text-xl p-2 my-2 text-black  font-Fredoka">
                Giriş yap
              </label>
            </div>
            <input
              type="mail"
              className="rounded-xl border outline-none w-full p-2 my-2 "
              placeholder="E Mail"
            />
            <input
              type="password"
              className="rounded-xl border outline-none w-full p-2 my-2 "
              placeholder="Şifre"
            />
            <div className=" my-2 w-full flex justify-end">
              <Link
                to="/"
                className="p-3 border rounded-xl text-white bg-blue-600">
                Giriş yap
              </Link>
              <Tooltip
                className="flex items-center justify-center"
                title="Geri dön butonu geçici olarak eklenmiştir."
                placement="right">
                <IconButton>
                  <GoAlertFill />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

{
  /* <div className=" p-4 border h-full flex items-end justify-end ">
<Link
  to="/"
  className="border  flex items-center justify-center rounded-xl bg-blue-500 p-2 text-center gap-x-4 font-Fredoka text-white w-[250px] h-[60px] ">
  <label className=" text-xl"> Geri dön</label>
  <Tooltip
    className="flex items-center justify-center"
    title="Geri dön butonu geçici olarak eklenmiştir."
    placement="right">
    <IconButton>
      <GoAlertFill />
    </IconButton>
  </Tooltip>
</Link>
</div> */
}
