import { Link, Routes, Route } from "react-router-dom";

import { LandingPage } from "./pages/Landing_Page/LandingPage";
import { InventoryManager } from "./pages/Inventory_Manager/InventoryManager";
import { ArmorTracker } from "./pages/Armor_Tracker/ArmorTracker";
import { BatteryCalculator } from "./pages/Battery_Calculator/BatteryCalculator";
import { Cookbook } from "./pages/Cookbook/Cookbook";

import { Sidebar } from "./components/Sidebar/Sidebar";

import { HiOutlineMenu } from "react-icons/hi";

import "./App.scss";

function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Link Management System</h1>
        </Link>
        <HiOutlineMenu />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/inventory"
            element={<InventoryManager />}
          />
          <Route
            path="/armor"
            element={<ArmorTracker />}
          />
          <Route
            path="/cookbook"
            element={<Cookbook />}
          />
          <Route
            path="/battery"
            element={<BatteryCalculator />}
          />
        </Routes>
        <Sidebar />
      </main>
    </>
  );
}

export default App;
