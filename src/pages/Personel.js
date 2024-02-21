import React from "react";
import Accordion from "@mui/material/Accordion";
import { MdKeyboardArrowDown } from "react-icons/md";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import UserCard from "../components/Ui/Cards/UserCard";
function personel() {
  return (
    <div className="w-[1500px] h-fullrounded-xl  mx-auto  my-[2%]">
      <div className="p-2 my-3 border bg-blue-500  rounded-xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown className="w-[20px] h-[20px]" />}
            aria-controls="panel1-content"
            id="panel1-header">
            Personel Tablosu
          </AccordionSummary>
          <AccordionDetails>
            <UserCard />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="p-2 my-3 border bg-blue-500  rounded-xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header">
            Şef Tablosu
          </AccordionSummary>
          <AccordionDetails>
            <UserCard />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="p-2 my-3  border bg-blue-500  rounded-xl">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header">
            Müdür Tablosu
          </AccordionSummary>
          <AccordionDetails>
            <UserCard />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default personel;
