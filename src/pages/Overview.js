import React, { useState } from "react";
import Mincard from "../components/Ui/Cards/MinCard";
import { HiUsers } from "react-icons/hi";
import { MdOutlineContactPage } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgOrganisation } from "react-icons/cg";
import InfoCard from "../components/Ui/Cards/InfoCard";
import { FaCircleExclamation } from "react-icons/fa6";
import { MdAnnouncement } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";

const data = [
  {
    title: "Kayıtlı Kişi sayısı",
    data: "20447",
    start: 0,
    customIcon: <HiUsers />,
    bgColor: "bg-red-500",
  },
  {
    title: "Aktif CV sayısı",
    data: "4517",
    start: 0,
    customIcon: <MdOutlineContactPage />,
    bgColor: "bg-blue-500",
  },
  {
    title: "İstihdam sayısı",
    data: "6683",
    start: 0,
    customIcon: <BsPersonWorkspace />,
    bgColor: "bg-green-500",
  },
  {
    title: "Kayıtlı Kurum sayısı",
    data: "883",
    start: 0,
    customIcon: <CgOrganisation />,
    bgColor: "bg-yellow-500",
  },
];

const statuinfo = [
  {
    data: "Herhangi bir duyuru veya bildiriniz yoktur. Kolay gelsin. ",
    statu: "null",
    icon: <FaRegSmileBeam />,
    bgColor: "bg-green-500",
  },
  {
    data: "Sayın Başkan, gelecek seçimler için oluşturulan 'Bütçe yönetimi ve reklam stratejisi' toplantısı 01/02/2024 Perşembe günü saat 09:00'da Sempati sosyal tesislerinde yapılacaktır. İcabet etmenizi temenni ederiz. ",
    statu: "Attention",
    icon: <FaCircleExclamation />,
    bgColor: "bg-red-500",
  },

  {
    data: "24.05.2024 tarihine kadar Zafer Mahallesi/Madalyon Sokak İSKİ kanal temizleme çalışmaları durdurulmuştur.",
    statu: "Announcement",
    icon: <MdAnnouncement />,
    bgColor: "bg-yellow-500",
  },
];

function Overview() {
  const [selectedOption, setSelectedOption] = useState("Attention");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <div className="w-[1500px] mx-auto flex items-center  justify-center gap-x-5 my-[4%]">
        {data.map((item, index) => (
          <Mincard
            key={index}
            title={item.title}
            data={item.data}
            customIcon={item.customIcon}
            bgColor={item.bgColor}
          />
        ))}
      </div>
      <div className="w-[1500px] gap-x-3  mx-auto  flex my-[4%]">
        {statuinfo
          .filter((item) => item.statu === selectedOption)
          .map((item, index) => (
            <InfoCard
              key={index}
              statu={item.statu}
              paragraph={item.data}
              statusicon={item.icon}
              bgColor={item.bgColor}
            />
          ))}

        <div className="  flex items-center border rounded-xl bg-gray-100 p-2 justify-center">
          <select
            className="border rounded-xl w-[150px] h-[60px] shadow-xl text-center  select-none outline-none"
            id="mySelect"
            value={selectedOption}
            onChange={handleSelectChange}>
            <option value="null">Mesaj yoksa</option>
            <option value="Attention">Bildiri</option>
            <option value="Announcement">Duyuru</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Overview;
