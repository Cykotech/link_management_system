import React from "react";
import { useInventoryStore } from "../../store/inventoryStore";

import classes from "./Cookbook.module.scss";

interface Props {
  style?: React.CSSProperties;
}

export function Cookbook({ style }: Props) {
  const { inventory } = useInventoryStore();

  return (
    <>
      <div
        style={style}
        className={classes.ingredientContainer}>
        {inventory.map((ingredient, i) => {
          return (
            <div
              className={classes.ingredientCard}
              key={`${ingredient.name}-${i}`}>
              <img src={ingredient.imgSrc} />
              <p>{ingredient.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
