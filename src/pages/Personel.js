import React from "react";
import Accordion from "@mui/material/Accordion";
import { MdKeyboardArrowDown } from "react-icons/md";
import personelUser from "../Data/personelUser.json";
import sefUser from "../Data/sefUser.json";
import mudurUser from "../Data/mudurUser.json";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import UserCard from "../components/Ui/Cards/UserCard";
import PersonelSubtitleData from "../components/SubTitleforData/PersonelSubtitleData";
import SefSubtitle from "../components/SubTitleforData/SefSubtitle";
import MudurSubtitle from "../components/SubTitleforData/MudurSubtitle";
import EndSubtitleData from "../components/SubTitleforData/EndSubtitleData";

function personel() {
  return (
    <div className="w-[1500px] h-fullrounded-xl  mx-auto  my-[2%]">
      <div className="p-2 my-3 border bg-black  rounded-xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown className="w-[20px] h-[20px]" />}
            aria-controls="panel1-content"
            id="panel1-header">
            Müdür Listesi
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <MudurSubtitle />
              {mudurUser.map((user, index) => {
                return (
                  <UserCard
                    id={user.id}
                    name={user.name}
                    surname={user.surname}
                    Job={user.Job}
                    age={user.age}
                    score={user.score}
                    region={user.region}
                    statu={user.statu}
                  />
                );
              })}
              <EndSubtitleData />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="p-2 my-3 border bg-black  rounded-xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown className="w-[20px] h-[20px]" />}
            aria-controls="panel1-content"
            id="panel1-header">
            Şef Listesi
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <SefSubtitle />
              {sefUser.map((user, index) => {
                return (
                  <UserCard
                    id={user.id}
                    name={user.name}
                    surname={user.surname}
                    Job={user.Job}
                    age={user.age}
                    score={user.score}
                    region={user.region}
                    statu={user.statu}
                  />
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="p-2 my-3 border bg-black rounded-xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown className="w-[20px] h-[20px]" />}
            aria-controls="panel1-content"
            id="panel1-header">
            Personel Listesi
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <PersonelSubtitleData />
              {personelUser.map((user, index) => {
                return (
                  <UserCard
                    id={user.id}
                    name={user.name}
                    surname={user.surname}
                    Job={user.Job}
                    age={user.age}
                    score={user.score}
                    region={user.region}
                    statu={user.statu}
                  />
                );
              })}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default personel;
