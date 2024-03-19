/* eslint-disable react/prop-types */
import { useInventoryStore } from "../../store/inventoryStore";

import { ItemCard } from "../../components/Item_Card/ItemCard";

import classes from "./Inventory.module.scss";

export function InventoryManager() {
  const { inventory } = useInventoryStore((state) => state);

  return (
    <div className={classes.container}>
      <h2>Inventory Manager</h2>
      <div className={classes.grid}>
        {inventory.map((item) => {
          return (
            <ItemCard
              key={item.name}
              imgSrc={item.imgSrc}
              quantity={item.quantity}>
              {item.name}
            </ItemCard>
          );
        })}
      </div>
    </div>
  );
}
