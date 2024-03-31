import { useEffect, useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import { useInventoryStore } from "./store/inventoryStore";
import { useArmorsStore } from "./store/armorStore";

import { LandingPage } from "./pages/Landing_Page/LandingPage";
import { InventoryManager } from "./pages/Inventory_Manager/InventoryManager";
import { InventoryHeader } from "./pages/Inventory_Manager/InventoryHeader";
import { ArmorTracker } from "./pages/Armor_Tracker/ArmorTracker";
import { ArmorTrackerHeader } from "./pages/Armor_Tracker/ArmorTrackerHeader";
import { BatteryCalculator } from "./pages/Battery_Calculator/BatteryCalculator";
import { Cookbook } from "./pages/Cookbook/Cookbook";

import { Sidebar } from "./components/Sidebar/Sidebar";

import { HiOutlineMenu } from "react-icons/hi";

import "./App.scss";

function App() {
  const { pathname } = useLocation();
  const [upgradeDisplay, setUpgradeDisplay] = useState(true);
  const [obtainDisplay, setObtainDisplay] = useState(true);

  useEffect(() => {
    console.log("Loading inventory...");
    console.log("Loading armors...");

    useInventoryStore
      .getState()
      .populateInventory()
      .then(() => {
        console.log("Inventory loaded");
      });

    useArmorsStore
      .getState()
      .populateArmor()
      .then(() => {
        console.log("Armors loaded");
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header>
        <div className="mainHeader">
          <Link to="/">
            <h1>Link Management System</h1>
          </Link>
          <HiOutlineMenu />
        </div>
        <div className="testDisclaimer">
          Currently in development. Some features may not work as intended.
        </div>
        <Routes>
          <Route
            path="/inventory"
            element={<InventoryHeader />}
          />
          <Route
            path="/armor"
            element={
              <ArmorTrackerHeader
                obtainDisplay={obtainDisplay}
                obtainClick={setObtainDisplay}
                upgradeDisplay={upgradeDisplay}
                upgradeClick={setUpgradeDisplay}
              />
            }
          />
          {/* <Route
            path="/cookbook"
            element={<CookbookHeader />}
          />
          <Route
            path="/battery"
            element={<BatteryCalculatorHeader />}
          /> */}
        </Routes>
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
            element={
              <ArmorTracker
                obtainDisplay={obtainDisplay}
                upgradeDisplay={upgradeDisplay}
              />
            }
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
