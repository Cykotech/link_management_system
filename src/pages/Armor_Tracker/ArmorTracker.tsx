/* eslint-disable react/prop-types */

import { useState } from "react";

import { ArmorCard } from "../../components/Armor_Card/ArmorCard";

import { useArmorsStore } from "../../store/armorStore";

import { TArmor } from "../../util/getArmor";
import { TMaterial } from "../../util/getMaterials";

import classes from "./ArmorTracker.module.scss";

export function ArmorTracker() {
  const [obtainDisplay, setObtainDisplay] = useState(true);
  const [upgradeDisplay, setUpgradeDisplay] = useState(true);

  const { armors } = useArmorsStore((state) => state);

  function toggleObtainDisplay() {
    setObtainDisplay(!obtainDisplay);
  }

  function toggleUpgradeDisplay() {
    setUpgradeDisplay(!upgradeDisplay);
  }

  return (
    <div className={classes.container}>
      <h2>Armor Tracker</h2>
      <button
        onClick={() => {
          toggleUpgradeDisplay();
        }}>
        {!upgradeDisplay ? "Show upgradeable armors" : "Hide upgradeable armors"}
      </button>
      <button onClick={() => toggleObtainDisplay()}>
        {!obtainDisplay ? "Highlight obtained armors" : "Turn off obtained highlight"}
      </button>
      <div className={classes.grid}>
        {armors.map((armor, index) => {
          return (
            <ArmorCard
              key={`${armor.name}-${index}`}
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
