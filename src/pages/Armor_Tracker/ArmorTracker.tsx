/* eslint-disable react/prop-types */

import { useState } from "react";

import { ArmorCard } from "../../components/Armor_Card/ArmorCard";

import { useArmorsStore } from "../../store/armorStore";

import classes from "./ArmorTracker.module.scss";

type Props = {
  obtainDisplay: boolean,
  upgradeDisplay: boolean
}

export function ArmorTracker({ obtainDisplay, upgradeDisplay}: Props) {
  const { armors } = useArmorsStore((state) => state);

  return (
    <div className={classes.container}>
      {/* <div className={classes.headingContainer}>
        <h2>Armor Tracker</h2>
        <div className={classes.dropdown}>
          <button className={classes.dropdownButton}>Options</button>
          <ul className={classes.dropdownContent}>
            <li>
              <button
                onClick={() => {
                  toggleUpgradeDisplay();
                }}>
                {!upgradeDisplay
                  ? "Show upgradeable armors"
                  : "Hide upgradeable armors"}
                <p>Toggles the display of armors that cannot be upgraded.</p>
              </button>
            </li>
            <li>
              <button onClick={() => toggleObtainDisplay()}>
                Toggle highlights for obtained armors
                <p>{`${
                  !obtainDisplay ? "Turns off highlights for " : "Hightlights"
                } armors that have been obtained`}</p>
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      <div className={classes.grid}>
        {armors.map((armor, index) => {
          return (
            <ArmorCard
              key={`${armor.name}-${index}`}
              id={`${armor.name}-${index}`}
              armor={armor}
              obtainDisplay={obtainDisplay}
              upgradeDisplay={upgradeDisplay}>
              {armor.name}
            </ArmorCard>
          );
        })}
      </div>
    </div>
  );
}
