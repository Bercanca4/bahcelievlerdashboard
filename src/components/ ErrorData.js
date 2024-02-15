import React from "react";

function ErrorData({ errorcode, errorTitle, errordesc }) {
  return (
    <div className="w-full h-[33rem]  mx-auto my-2">
      <div className="w-full">
        <div className="flex items-center justify-center p-2">
          <label className="  text-[16rem] font-protest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-2">
            OoPS
          </label>
        </div>

        <div className="flex items-center  justify-center p-2">
          <label className="text-[50px] text-center font-semibold  rounded-xl mx-2">
            {errorcode} - {errorTitle}
          </label>
        </div>

        <div className="flex items-center justify-center">
          <label className="text-[22px] font-Fredoka text-center truncate line-clamp-3 whitespace-normal">
            Description {errordesc}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ErrorData;
