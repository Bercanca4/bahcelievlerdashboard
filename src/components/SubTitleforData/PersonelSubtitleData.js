import React from "react";

function PersonelSubtitleData() {
  return (
    <div>
      <div className="p-4 mx-auto bg-slate-500  rounded-t-xl flex items-center justify-between">
        <div>
          <label className="text-white text-xl font-semibold select-none">
            Personel Tablosu
          </label>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center">
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black w-[200px] border ">
            Id
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-full  border ">
            Ad
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-full  border ">
            Soyad
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-full  border ">
            Meslek
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-[400px]  border ">
            Yaş
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-[500px]  border ">
            Puan
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-full  border ">
            Tesis
          </label>
          <label className="p-4 text-center text-black text-xl font-semibold truncate border-black  w-[600px]  border ">
            Yetki
          </label>
        </div>
      </div>
    </div>
  );
}

export default PersonelSubtitleData;
