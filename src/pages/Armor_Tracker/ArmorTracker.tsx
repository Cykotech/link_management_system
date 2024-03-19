/* eslint-disable react/prop-types */

import { useState } from "react";

import { ArmorCard } from "../../components/Armor_Card/ArmorCard";

import { TArmor } from "../../util/getArmor";
import { TMaterial } from "../../util/getMaterials";

import classes from "./ArmorTracker.module.scss";

type Props = {
  armors: TArmor[];
  materials: TMaterial[];
};

export function ArmorTracker({ armors, materials }: Props) {
  const [obtainDisplay, setObtainDisplay] = useState(true);
  const [upgradeDisplay, setUpgradeDisplay] = useState(true);

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
        {armors.map((armor) => {
          return (
            <ArmorCard
              key={armor.name}
              materials={materials}
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
