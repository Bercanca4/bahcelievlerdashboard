import React from "react";
import RegisterPage from "../../assets/registerpage.jpg";
import { Link } from "react-router-dom";

function register() {
  return (
    <div className="w-full h-full bg-slate-50 ">
      {/* Slider */}
      <div className="w-full h-[25rem] ">
        <img src={RegisterPage} className="w-full h-full object-cover" />
      </div>
      {/* Kayıt alanı */}
    </div>
  );
}

export default register;
