/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { useInventoryStore } from "../../../store/inventoryStore";
import { useArmorsStore, ArmorState } from "../../../store/armorStore";

import { TMaterial } from "../../../util/getMaterials";
import { TUpgrades } from "../../../util/getArmor";

import classes from "./Upgrades.module.scss";

type TProps = {
  upgrades: TUpgrades | {};
  materials: TMaterial[];
  armorName: string;
};

export function Upgrades({ upgrades, materials, armorName }: TProps) {
  const armorsStore = useArmorsStore((state) => state);
  const { armors, setLevel } = useArmorsStore((state) => state);
  
  const inventoryStore = useInventoryStore((state) => state);
  const { consumeMaterials } = useInventoryStore((state) => state);

  const [armorToUpgrade, setArmorToUpgrade] = useState<ArmorState>({
    name: "",
    currentLevel: 0,
    isObtained: false,
  });

  useEffect(() => {
    const findArmor = armors.find((armor) => armor.name === armorName);
    setArmorToUpgrade(findArmor);
  }, [armors]);

  function upgradeButton() {
    if (armorToUpgrade.currentLevel !== 4) {
      return (
        <button
          onClick={() => {
            consumeMaterials(
              upgrades[armorToUpgrade.currentLevel],
              inventoryStore
            );
            setLevel(armorToUpgrade, armorToUpgrade.currentLevel + 1, armorsStore);
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
          {upgrades[armorToUpgrade.currentLevel].map((upgrade) => {
            const materialIndex = materials.findIndex(
              (material) => material.name === upgrade.name
            );
            if (upgrade.name !== "") {
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
      );
    }
  }

  return (
    <>
      <div className={classes.levelContainer}>
        <button
          onClick={() => setLevel(armorToUpgrade, 0, armorsStore)}>
          Base
        </button>
        <button
          onClick={() => setLevel(armorToUpgrade, 1, armorsStore)}>
          1
        </button>
        <button
          onClick={() => setLevel(armorToUpgrade, 2, armorsStore)}>
          2
        </button>
        <button
          onClick={() => setLevel(armorToUpgrade, 3, armorsStore)}>
          3
        </button>
        <button
          onClick={() => setLevel(armorToUpgrade, 4, armorsStore)}>
          4
        </button>
      </div>

      {displayUpgradeMaterials()}
      {upgradeButton()}
    </>
  );
}
