import { ItemCard } from "../../components/Item_Card/ItemCard";
import { materials } from "../../util/getMaterials";

import classes from "./Inventory.module.scss";

export function InventoryManager() {
  return (
    <div className={classes.container}>
      <h2>Inventory Manager</h2>
      <div className={classes.grid}>
        {materials.map((item) => {
          return (
            <ItemCard
              key={item.name}
              imgSrc={item.imgSrc}>
              {item.name}
            </ItemCard>
          );
        })}
      </div>
    </div>
  );
}
