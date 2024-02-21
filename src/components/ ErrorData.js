import React from "react";

function ErrorData({ errorcode, errorTitle, errordesc }) {
  return (
    <div className="w-full h-full mx-auto my-2">
      <div className="w-full">
        <div className="flex items-center justify-center p-2">
          <label className=" select-none text-[15rem] font-protest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-2">
            Oops...
          </label>
        </div>

        <div className="flex items-center  justify-center p-2">
          <label className="text-[50px] select-none  text-center font-semibold  rounded-xl mx-2">
            {errorcode} - {errorTitle}
          </label>
        </div>

        <div className="flex items-center justify-center">
          <label className="text-[22px] select-none  font-Fredoka text-center truncate line-clamp-3 whitespace-normal w-[50rem] ">
            Description {errordesc}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ErrorData;
