/* eslint-disable react/prop-types */
import {
  useInventoryStore,
  changeMaterialQuantity
} from "../../store/inventoryStore";

import { ItemCard } from "../../components/Item_Card/ItemCard";

import classes from "./Inventory.module.scss";

export function InventoryManager({ materials }) {
  const inventory = useInventoryStore((state) => state.inventory);

  return (
    <div className={classes.container}>
      <h2>Inventory Manager</h2>
      <div className={classes.grid}>
        {materials.map((item) => {
          return (
            <ItemCard
              key={item.name}
              imgSrc={item.imgSrc}
              quantity={inventory.get(item.name)}
              handleChange={changeMaterialQuantity}>
              {item.name}
            </ItemCard>
          );
        })}
      </div>
    </div>
  );
}
