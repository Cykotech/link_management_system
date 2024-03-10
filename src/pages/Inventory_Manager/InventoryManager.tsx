/* eslint-disable react/prop-types */
import { useInventoryStore } from "../../store/inventoryStore";

import { ItemCard } from "../../components/Item_Card/ItemCard";

import { TMaterial } from "../../util/getMaterials";

import classes from "./Inventory.module.scss";

type Props = {
  materials: TMaterial[];
};

export function InventoryManager({ materials }: Props) {
  const inventoryStore = useInventoryStore((state) => state);

  return (
    <div className={classes.container}>
      <h2>Inventory Manager</h2>
      <div className={classes.grid}>
        {materials.map((item) => {
          const materialIndex = inventoryStore.inventory.findIndex(
            (material) => material.name === item.name
          );
          return (
            <ItemCard
              key={item.name}
              imgSrc={item.imgSrc}
              quantity={inventoryStore.inventory[materialIndex].quantity}>
              {item.name}
            </ItemCard>
          );
        })}
      </div>
    </div>
  );
}
