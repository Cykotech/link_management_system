/* eslint-disable react/prop-types */
import classes from "./ItemCard.module.scss";

export function ItemCard({ children, imgSrc, quantity, handleChange }) {

  return (
    <div className={classes.card}>
      <img src={imgSrc}></img>
      <h3>{children}</h3>
      <input
        type="number"
        id="material-quantity"
        min="0"
        max="999"
        value={quantity ?? 0}
        onChange={(event) => {
          handleChange(children, event.target.value);
        }}></input>
    </div>
  );
}
