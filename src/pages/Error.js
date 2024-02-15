import React, { useState } from "react";
import ErrorInfo from "../Data/errorInfo.json";
import ErrorData from "../components/ ErrorData";
import { FaInfoCircle } from "react-icons/fa";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

function Error() {
  const [selectedOption, setSelectedOption] = useState("null");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className=" rounded-xl w-[1500px] justify-center mx-auto h-full  gap-4 ">
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
      <div className="flex items-center gap-x-2  my-[5rem] p-2 justify-center ">
        <select
          className="border rounded-xl  bg-red-600 text-white p-2 h-[60px] shadow-xl text-center  select-none outline-none"
          id="mySelect"
          value={selectedOption}
          onChange={handleSelectChange}>
          <option value="null">Hata seç mesajı</option>
          <option value="400">Hatalı istek</option>
          <option value="401">Yetkisiz</option>
          <option value="403">Yasak</option>
          <option value="404">Bulunamadı</option>
          <option value="405">İzin verilmeyen yöntem </option>
          <option value="406">Kabul edilemez </option>
          <option value="407">Kimlik doğrulaması gerekli</option>
          <option value="408">İstek zaman aşımına uğradı</option>
          <option value="409">Çakışma</option>
          <option value="410">Sonlandırılmış istek </option>
        </select>
        <div>
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
  );
}

export default Error;
