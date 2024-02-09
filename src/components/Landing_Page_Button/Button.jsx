import classes from "./Button.module.scss";

export function Button({ children }) {
  return (
    <div className={classes.button}>
      <h2>{children}</h2>
    </div>
  )
}