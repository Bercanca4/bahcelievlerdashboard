// App.js

import React from "react";
import LeftSide from "./components/Side/LeftSide";
import Logo from "./components/Ui/Logo";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Side/Navbar";
import Overview from "./pages/Overview";
import ProfileCard from "../src/components/Ui/Cards/ProfileCard";
function App() {
  return (
    <div className="flex h-screen">
      {/* Sol Kenar */}
      <aside className="w-[279px] flex-shrink-0 bg-[#1E2535] fixed h-full">
        <aside className="p-6 ">
          <Logo />
          <LeftSide />
        </aside>

        <ProfileCard />
      </aside>

      {/* Sağ Taraf İçerik */}
      <div className="flex-1 w-full h-full  ml-[279px]">
        {/* Navbar */}
        <Navbar />
        <hr />

        {/* Ana Ekran */}
        <div className="p-4 my-[4%]">
          <Routes>
            <Route path="/" element={<Overview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
