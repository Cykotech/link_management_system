import { Button } from "../../components/Landing_Page_Button/Button";

import classes from "./LandingPage.module.scss";

export function LandingPage() {
  return (
    <div className={classes.container}>
      <Button link="/inventory">Inventory Manager</Button>
      <Button link="/armor">Armor Tracker</Button>
      <Button link="/cookbook">Cookbook</Button>
      <Button link="/battery">Battery Calculator</Button>
    </div>
  );
}
