import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { IoMdSettings } from "react-icons/io";
import "../../../assets/CSS/spin.css";
import Timer from "../../Side/Timer";

function ProfileCard() {
  const fakeuser = {
    username: "Hakan",
    usersurname: "Bahadır",
    job: "Başkan",
    image:
      "https://scontent.fist13-1.fna.fbcdn.net/v/t1.6435-9/67870061_2469976219887265_7447090145821458432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=SbRKEowym6YAX8RE5S5&_nc_ht=scontent.fist13-1.fna&cb_e2o_trans=q&oh=00_AfCZldEchpD5gpFdSnytQUU-Z5m4wx6zzBngQ_Jq6Ytq4g&oe=65E26C6F",
    age: "61",
    mail: "bahadirhakan@bahcelievlerbel.com.tr",
    address: [
      {
        addressCountry: "Türkiye",
        addressCity: "İstanbul",
        addressDistrict: "Bahçelievler",
        addressNeighbourhood: "Zafer Mahallesi",
        addressStreet: "Madalyon sokak",
        addressNo: "11",
      },
    ],
  };

  const expiryTimestamp = new Date();
  const { start } = useTimer({
    expiryTimestamp,
  });

  useEffect(() => {
    // Sayfa yüklendiğinde sayaç otomatik başlasın
    start();
  }, [start]);

  console.log(expiryTimestamp);
  return (
    <div>
      {" "}
      {/* PROFİL SİDE */}
      <div className="flex items-center justify-start  gap-x-2 fixed bottom-0 left-0 w-[279px]  shadow-2xl  border-black bg-[#242d41] p-6">
        <div className="px-2   flex items-center  justify-center gap-x-4 ">
          <img
            src={fakeuser.image}
            className="h-[40px] w-[40px] flex items-center justify-center rounded-full "
            alt="user-avatar"
          />
          <div>
            <div>
              <div className="flex  gap-1">
                {" "}
                <label className="w-[70px]truncate text-white">
                  {fakeuser.username + " " + fakeuser.usersurname}
                </label>
              </div>
              <div>
                <label className="w-[70px] text-white opacity-40 truncate cursor-pointer ">
                  {fakeuser.job}
                </label>
              </div>
            </div>

            <div className="flex items-center justify-start ">
              {" "}
              <div className="flex items-center justify-center gap-x-1">
                <div className="flex items-center justify-center gap-x-3">
                  <div className="flex items-center justify-center gap-x-1">
                    <label className="text-[12px] text-white flex items-center  justify-center ">
                      Online
                    </label>
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </div>
                  <span className="text-sm text-white">
                    <Timer />
                  </span>
                </div>

                <div className="flex items-center justify-center gap-x-1">
                  <span className="flex items-center  justify-center text-[12px]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="icon-container hover:animate-spin">
          <IoMdSettings
            class="icon"
            className="w-[30px] h-[30px] text-white hover:cursor-pointer"
          />
        </div> */}
      </div>
    </div>
  );
}

export default ProfileCard;
