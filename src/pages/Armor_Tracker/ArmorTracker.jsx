/* eslint-disable react/prop-types */

// import { useInventoryStore } from "../../store/inventoryStore";

import { ArmorCard } from "../../components/Armor_Card/ArmorCard";

import classes from "./ArmorTracker.module.scss";

export function ArmorTracker({ armors, materials }) {

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
