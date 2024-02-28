import React from "react";

function UserCard({ id, name, surname, Job, age, score, region, statu }) {
  return (
    <div>
      <div>
        <div>
          <div className="flex items-center justify-center">
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-[200px]  border ">
              {id}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
              {name}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
              {surname}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
              {Job}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate w-[400px] border ">
              {age}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-[500px] border ">
              {score}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-full border ">
              {region}
            </label>
            <label className="p-4 text-center text-black text-sm line-clamp-1  text-opacity-80 border-black truncate  w-[600px] border ">
              {statu}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
