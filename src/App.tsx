import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import "./App.scss";

import { Sidebar } from "./components/Sidebar/Sidebar";

import { ArmorTracker } from "./pages/Armor_Tracker/ArmorTracker";
import { ArmorTrackerHeader } from "./pages/Armor_Tracker/ArmorTrackerHeader";

import { BatteryCalculator } from "./pages/Battery_Calculator/BatteryCalculator";

import { Cookbook } from "./pages/Cookbook/Cookbook";
import { CookbookHeader } from "./pages/Cookbook/CookbookHeader";

import { InventoryHeader } from "./pages/Inventory_Manager/InventoryHeader";
import { InventoryManager } from "./pages/Inventory_Manager/InventoryManager";

import { LandingPage } from "./pages/Landing_Page/LandingPage";

import { useArmorsStore } from "./store/armorStore";
import { useInventoryStore } from "./store/inventoryStore";
import { useRecipesStore } from "./store/recipesStore";

function App() {
  const { pathname } = useLocation();
  const [upgradeDisplay, setUpgradeDisplay] = useState(true);
  const [obtainDisplay, setObtainDisplay] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [showModal, setShowModal] = useState("none");

  const header = useRef<HTMLElement>(null);
  let style: React.CSSProperties;

  useEffect(() => {
    if (header.current) {
      style = {
        "--headerHeight": `${header.current.offsetHeight}`,
      } as React.CSSProperties;
    }
    console.log(style);
  }, []);

  useEffect(() => {
    console.log("Loading inventory...");
    console.log("Loading armors...");
    console.log("Loading recipes...");

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

    useRecipesStore
      .getState()
      .populateRecipes()
      .then(() => {
        console.log("Recipes loaded");
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowModal("none");
  }, [pathname]);

  return (
    <>
      <header ref={header}>
        <div className="mainHeader">
          <Link to="/">
            <h1>Link Management System</h1>
          </Link>
          <HiOutlineMenu
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
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
                showModal={showModal}
                modalClick={setShowModal}
              />
            }
          />
          <Route
            path="/cookbook"
            element={
              <CookbookHeader
                showModal={showModal}
                modalClick={setShowModal}
              />
            }
          />
          {/* <Route
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
                showModal={showModal}
                modalClick={setShowModal}
              />
            }
          />
          <Route
            path="/cookbook"
            element={
              <Cookbook
                style={style}
                showModal={showModal}
                modalClick={setShowModal}
              />
            }
          />
          <Route
            path="/battery"
            element={<BatteryCalculator />}
          />
        </Routes>
        <Sidebar openMenu={openMenu} />
      </main>
    </>
  );
}

export default App;

