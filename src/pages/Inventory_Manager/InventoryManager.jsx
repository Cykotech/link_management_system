import { useEffect, useState } from "react";

import { ItemCard } from "../../components/Item_Card/ItemCard";
import { getMaterials } from "../../util/getMaterials";

import classes from "./Inventory.module.scss";

export function InventoryManager() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    getMaterials().then((res) => {
      setMaterials(res);
    });
  }, []);

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
