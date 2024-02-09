import classes from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.container}>
        <p>Inventory Manager</p>
        <p>Armor Tracker</p>
        <p>Cookbook</p>
        <p>Battery Calculator</p>
      </div>
      <div className={classes.divider}></div>
    </div>
  )
}