import { Link } from "react-router-dom";

import { Button } from "../../components/Landing_Page_Button/Button";

import classes from "./LandingPage.module.scss";

export function LandingPage() {
  return (
    <div className={classes.container}>
      <Link to="/inventory">
        <Button>Inventory Manager</Button>
      </Link>
      <Link to="/armor">
        <Button>Armor Tracker</Button>
      </Link>
      <Link to="/cookbook">
        <Button>Cookbook</Button>
      </Link>
      <Link to="/battery">
        <Button>Battery Calculator</Button>
      </Link>
    </div>
  );
}
