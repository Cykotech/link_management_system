/* eslint-disable react/prop-types */
import { useInventoryStore } from "../../store/inventoryStore";

import classes from "./ItemCard.module.scss";

type Props = {
  children: string;
  imgSrc: string;
  quantity: number;
};

export function ItemCard({ children, imgSrc, quantity }: Props) {
  const inventory = useInventoryStore((state) => state);

  return (
    <div className={classes.card}>
      <img src={imgSrc}></img>
      <h3>{children}</h3>
      <input
        type="number"
        id="material-quantity"
        min="0"
        max="999"
        value={quantity.toString()}
        onChange={(event) => {
          inventory.setQuantity(children, Number(event.target.value), inventory);
        }}></input>
    </div>
  );
}
