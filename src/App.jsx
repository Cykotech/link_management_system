import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import { mapInventory } from "./store/inventoryStore";
import { getMaterials } from "./util/getMaterials";

import { LandingPage } from "./pages/Landing_Page/LandingPage";
import { InventoryManager } from "./pages/Inventory_Manager/InventoryManager";
import { ArmorTracker } from "./pages/Armor_Tracker/ArmorTracker";
import { BatteryCalculator } from "./pages/Battery_Calculator/BatteryCalculator";
import { Cookbook } from "./pages/Cookbook/Cookbook";

import { Sidebar } from "./components/Sidebar/Sidebar";

import { HiOutlineMenu } from "react-icons/hi";

import "./App.scss";
import background from "./assets/Images/background.webp";

function App() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    console.log("Function running...");
    getMaterials()
      .then((res) => {
        setMaterials(res);
      })
      .then(mapInventory());
  }, []);

  return (
    <>
      <img
        className="background"
        src={background}
      />
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
            element={<InventoryManager materials={materials} />}
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
