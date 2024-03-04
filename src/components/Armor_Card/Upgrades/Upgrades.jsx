/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { consumeMaterials } from "../../../store/inventoryStore";

import classes from "./Upgrades.module.scss";

export function Upgrades({ upgrades, materials }) {
  const [currentLevel, SetCurrentLevel] = useState(0);

  function upgradeButton() {
    if (currentLevel !== 4) {
      return (
        <button
          onClick={() => {
            consumeMaterials(upgrades[currentLevel]);
            SetCurrentLevel(currentLevel + 1);
          }}>
          Upgrade
        </button>
      );
    }
  }

  return (
    <>
      <div className={classes.levelContainer}>
        <button onClick={() => SetCurrentLevel(0)}>Base</button>
        <button onClick={() => SetCurrentLevel(1)}>1</button>
        <button onClick={() => SetCurrentLevel(2)}>2</button>
        <button onClick={() => SetCurrentLevel(3)}>3</button>
        <button onClick={() => SetCurrentLevel(4)}>4</button>
      </div>

      <div className={classes.upgradeContainer}>
        {upgrades[currentLevel].map((upgrade) => {
          const materialIndex = materials.findIndex(
            (material) => material.name === upgrade.name
          );
          if (upgrade.name !== "-") {
            return (
              <div className={classes.materialContainer}>
                <img src={materials[materialIndex].imgSrc}></img>
                <p>{materials[materialIndex].name}</p>
                <p>{upgrade.quantity}</p>
              </div>
            );
          }
        })}
      </div>
      {upgradeButton()}
    </>
  );
}
