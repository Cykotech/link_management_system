/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useMemo } from "react";

import { useInventoryStore } from "../../../store/inventoryStore";
import { useArmorsStore } from "../../../store/armorStore";

import { upgradeArmor } from "../../../util/upgradeFunction";

import { TUpgrades } from "../../../util/getArmor";

import Star from "/SVG/Pause_Star.svg";
import classes from "./Upgrades.module.scss";

type TProps = {
  id: string;
  upgrades: TUpgrades | {};
  armorName: string;
};

export function Upgrades({ id, upgrades, armorName }: TProps) {
  const armorsStore = useArmorsStore((state) => state);
  const { armors, setLevel } = useArmorsStore((state) => state);

  const inventoryStore = useInventoryStore((state) => state);
  const { inventory } = useInventoryStore((state) => state);

  const armorToUpgrade = useMemo(
    () => armors.find((armor) => armor.name === armorName),
    [armorName]
  );

  function upgradeButton() {
    if (armorToUpgrade.currentLevel !== 4) {
      return (
        <button
          onClick={() => {
            upgradeArmor(
              armorToUpgrade,
              armorToUpgrade.currentLevel,
              inventoryStore,
              armorsStore
            );
          }}>
          Upgrade
        </button>
      );
    }
  }

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
                  <p>{upgrade.quantity}</p>
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
        <button onClick={() => setLevel(armorToUpgrade, 0, armorsStore)}>
          Base
        </button>
        <button onClick={() => setLevel(armorToUpgrade, 1, armorsStore)}>
          <img src={Star}></img>
        </button>
        <button onClick={() => setLevel(armorToUpgrade, 2, armorsStore)}>
          <img src={Star}></img>
          <img src={Star}></img>
        </button>
        <button onClick={() => setLevel(armorToUpgrade, 3, armorsStore)}>
          <img src={Star}></img>
          <img src={Star}></img>
          <img src={Star}></img>
        </button>
        <button onClick={() => setLevel(armorToUpgrade, 4, armorsStore)}>
          <img src={Star}></img>
          <img src={Star}></img>
          <img src={Star}></img>
          <img src={Star}></img>
        </button>
      </div>

      {displayUpgradeMaterials()}
      {upgradeButton()}
    </>
  );
}
