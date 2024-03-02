/* eslint-disable react/prop-types */
// import { useInventoryStore } from "../../store/inventoryStore";

import { ArmorCard } from "../../components/Armor_Card/ArmorCard";

import classes from "./ArmorTracker.module.scss";

export function ArmorTracker({ armors, materials }) {
  return (
    <div className={classes.container}>
      <h2>Armor Tracker</h2>
      <div className={classes.grid}>
        {armors.map((item) => {
          return (
            <ArmorCard
              key={item.name}
              imgSrc={item.imgSrc}
              upgrades={item.upgrades}
              materials={materials}>
              {item.name}
            </ArmorCard>
          );
        })}
      </div>
    </div>
  );
}
