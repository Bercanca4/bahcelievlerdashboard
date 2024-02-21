// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Overview from "./pages/Overview";
import Personel from "./pages/Personel";
import Error from "./pages/Error";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Side/Navbar";
import Logo from "./components/Ui/Logo";
import LeftSide from "./components/Side/LeftSide";
import ProfileCard from "../src/components/Ui/Cards/ProfileCard";

function App() {
  return (
    <div>
      <Routes>
        {/* Login ekranı */}
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />

        {/* Diğer sayfalar */}
        <Route
          path="/*"
          element={
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
                    <Route path="/personel" element={<Personel />} />
                    <Route path="*" element={<Notfound />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
