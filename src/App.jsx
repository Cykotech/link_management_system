import { Button } from "./components/Landing_Page_Button/Button";
import { Sidebar } from "./components/Sidebar/Sidebar";

import { HiOutlineMenu } from "react-icons/hi";

import "./App.scss";

function App() {
  return (
    <>
      <header>
        <h1>Link Management System</h1>
        <HiOutlineMenu />
      </header>
      <main>
        <div className="linkContainer">
          <Button>Inventory Manager</Button>
          <Button>Armor Tracker</Button>
          <Button>Cookbook</Button>
          <Button>Battery Calculator</Button>
        </div>
        <Sidebar />
      </main>
    </>
  );
}

export default App;
