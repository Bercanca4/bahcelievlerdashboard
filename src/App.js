import { Routes, Route } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import Account from "./pages/Account";
import Customers from "./pages/Customers";
import Companies from "./pages/Companies";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="grid col-span-2 bg-[#1E2535]">
          <LeftSide />
        </div>
        <div className="grid  col-span-10">
          <div className="grid grid-rows-12">
            {/* NAVBAR */}
            <div className="grid  row-span-1  ">
              <Navbar />
            </div>
            {/* Ana sayfa / Main page */}
            <div className="grid  row-span-11  ">
              {" "}
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/account" element={<Account />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/error" element={<Error />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
