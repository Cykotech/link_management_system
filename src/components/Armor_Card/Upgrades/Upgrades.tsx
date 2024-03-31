/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useMemo, useState, useEffect } from "react";

import { useInventoryStore } from "../../../store/inventoryStore";
import { useArmorsStore } from "../../../store/armorStore";

import { TUpgrades } from "../../../util/getArmor";

import Star from "/SVG/Pause_Star.svg";
import classes from "./Upgrades.module.scss";

type TProps = {
  id: string;
  upgrades: TUpgrades | {};
  armorName: string;
};

export function Upgrades({ id, upgrades, armorName }: TProps) {
  const [activeButton, setActiveButton] = useState(0);

  const armorsStore = useArmorsStore((state) => state);
  const { armors, setLevel } = useArmorsStore((state) => state);

  const { inventory } = useInventoryStore((state) => state);

  const armorToUpgrade = useMemo(
    () => armors.find((armor) => armor.name === armorName),
    [armorName]
  );

  useEffect(() => {
    setActiveButton(armorToUpgrade.currentLevel);
  }, [armorToUpgrade.currentLevel]);

  function displayUpgradeMaterials() {
    if (armorToUpgrade) {
      return (
        <div className={classes.upgradeContainer}>
          {upgrades[armorToUpgrade.currentLevel].map((upgrade, index) => {
            const materialIndex = inventory.findIndex(
              (material) => material.name === upgrade.name
            );
            if (upgrade.name !== "") {
              return (
                <div
                  className={classes.materialContainer}
                  key={`${id}-${index}`}>
                  <img src={inventory[materialIndex].imgSrc}></img>
                  <p>{inventory[materialIndex].name}</p>
                  <p>
                    {inventory[materialIndex].quantity} / {upgrade.quantity}
                  </p>
                </div>
              );
            }
          })}
        </div>
      );
    }
  }

  return (
    <>
      <div className={classes.levelContainer}>
        <button
          className={`${classes.button} ${
            activeButton === 0 ? classes.active : ""
          }`}
          onClick={() => setLevel(armorToUpgrade, 0, armorsStore)}>
          Base
        </button>
        <button
          className={`${classes.button} ${
            activeButton === 1 ? classes.active : ""
          }`}
          onClick={() => setLevel(armorToUpgrade, 1, armorsStore)}>
          <img src={Star}></img>
        </button>
        <button
          className={`${classes.button} ${
            activeButton === 2 ? classes.active : ""
          }`}
          onClick={() => setLevel(armorToUpgrade, 2, armorsStore)}>
          <img src={Star}></img>
          <img src={Star}></img>
        </button>
        <button
          className={`${classes.button} ${
            activeButton === 3 ? classes.active : ""
          }`}
          onClick={() => setLevel(armorToUpgrade, 3, armorsStore)}>
          <img src={Star}></img>
          <img src={Star}></img>
          <img src={Star}></img>
        </button>
        <button
          className={`${classes.button} ${
            activeButton === 4 ? classes.active : ""
          }`}
          onClick={() => setLevel(armorToUpgrade, 4, armorsStore)}>
          <img src={Star}></img>
          <img src={Star}></img>
          <img src={Star}></img>
          <img src={Star}></img>
        </button>
      </div>

      {displayUpgradeMaterials()}
    </>
  );
}
