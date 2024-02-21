import { useEffect, useState } from "react";
import {
  useInventoryStore,
  changeMaterialQuantity,
  mapInventory,
} from "../../store/inventoryStore";

import { ItemCard } from "../../components/Item_Card/ItemCard";
import { getMaterials } from "../../util/getMaterials";

import classes from "./Inventory.module.scss";

export function InventoryManager() {
  const [materials, setMaterials] = useState([]);
  const inventory = useInventoryStore((state) => state.inventory);

  useEffect(() => {
    getMaterials()
      .then((res) => {
        setMaterials(res);
      })
      .then(mapInventory());
  }, []);

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
