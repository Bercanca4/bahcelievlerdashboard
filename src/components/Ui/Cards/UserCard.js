import React from "react";
import personelUser from "../../../Data/personelUser.json";

function UserCard() {
  return (
    <div className="w-full shadow-2xl p-4 overflow-hidden h-full border-2 rounded-xl bg-[#250250250]">
      <div className="p-4 mx-auto bg-slate-500  rounded-t-xl flex items-center justify-between">
        <div>
          <label className="text-white text-xl font-semibold ">
            Personel Tablosu
          </label>
        </div>
        <div>
          <label className="text-white">
            {personelUser.length} adet sonuç bulundu
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
      <div>
        {personelUser.map((user, index) => {
          return (
            <div key={index}>
              <div className="flex items-center justify-center">
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-[200px]  border ">
                  {user.id}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
                  {user.name}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
                  {user.surname}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
                  {user.Job}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate w-[400px] border ">
                  {user.age}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-[500px] border ">
                  {user.score}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
                  {user.region}
                </label>
                <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-[600px] border ">
                  {user.statu}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserCard;
