/* eslint-disable react/prop-types */
import classes from "./ItemCard.module.scss";

export function ItemCard({ children, imgSrc }) {
  return (
    <div className={classes.card}>
      <img src={imgSrc}></img>
      <h3>{children}</h3>
      <input type="text"></input>
    </div>
  );
}
