import React, { useState } from "react";
import ErrorInfo from "../Data/errorInfo.json";
import ErrorData from "../components/ ErrorData";
import { FaInfoCircle } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
function Error() {
  const [selectedOption, setSelectedOption] = useState("404");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="flex items-center justify-center h-screen  w-screen rounded-xl  bg-slate-50 p-4 ">
      <div>
        <div>
          {ErrorInfo.filter((item) => item.errorcode === selectedOption).map(
            (item, index) => (
              <ErrorData
                key={index}
                errorcode={item.errorcode}
                errorTitle={item.errorTitle}
                errordesc={item.errordesc}
              />
            )
          )}
        </div>
        <div className="flex items-center justify-center gap-x-2  p-3">
          {" "}
          <div className="hover:scale-105 hover:duration-500  duration-500">
            <Link
              to="/"
              className="border flex items-center justify-center rounded-xl bg-blue-500 p-2 text-center  font-Fredoka text-white w-[16rem] h-[60px] ">
              Geri dön
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-1 p-2">
            <select
              className="hover:scale-105 hover:duration-500  duration-500  rounded-xl   transition-all   bg-red-600 text-white p-2 w-[16rem] h-[60px] shadow-xl text-center  select-none outline-none"
              id="mySelect"
              value={selectedOption}
              onChange={handleSelectChange}>
              <option value="null">Hata seç mesajı</option>
              <option value="400">400</option>
              <option value="401">401</option>
              <option value="403">403</option>
              <option value="404">404</option>
              <option value="405">405 </option>
              <option value="406">406 </option>
              <option value="407">407</option>
              <option value="408">408</option>
              <option value="409">409</option>
              <option value="410">410 </option>
            </select>
            <div className=" p-2">
              <Tooltip
                title="Seçme yöntemi tamamen geçici bir uygulamadır. Prototip olarak hazırlanmıştır ve canlıda sunulmaz. Tamamen gönderilen değere göre sonuç vermektedir."
                placement="right">
                <IconButton>
                  <FaInfoCircle className="w-[1.5rem] h-[1.5rem] text-black  transition-all hover:duration-300 duration-300 hover:scale-110 cursor-pointer  " />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
