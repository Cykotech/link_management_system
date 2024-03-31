import { Link } from "react-router-dom";

import classes from "./Sidebar.module.scss";

type Props = {
  openMenu: boolean;
};

export function Sidebar({ openMenu }: Props) {
  return (
    <div className={`${classes.sidebar} ${openMenu ? classes.open : ""}`}>
      <div className={classes.container}>
        <Link to="/inventory">Inventory Manager</Link>
        <Link to="/armor">Armor Tracker</Link>
        <Link to="/cookbook">Cookbook</Link>
        <Link to="/battery">Battery Calculator</Link>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
}
