/* eslint-disable react/prop-types */
import { useEffect } from "react";

// import { useInventoryStore } from "../../store/inventoryStore";

import { ArmorCard } from "../../components/Armor_Card/ArmorCard";

import classes from "./ArmorTracker.module.scss";

export function ArmorTracker({ armors, materials }) {
  useEffect(() => {
    console.log(armors);
  }, [armors]);

  return (
    <div className={classes.container}>
      <h2>Armor Tracker</h2>
      <div className={classes.grid}>
        {armors.map((armor) => {
          return (
            <ArmorCard
              key={armor.name}
              imgSrc={armor.imgSrc}
              upgrades={armor.upgrades}
              materials={materials}
              isUpgradeable={armor.isUpgradeable}>
              {armor.name}
            </ArmorCard>
          );
        })}
      </div>
    </div>
  );
}
