/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { Upgrades } from "./Upgrades/Upgrades";

import { useArmorsStore } from "../../store/armorStore";

import { TArmor } from "../../util/getArmor";
import { TMaterial } from "../../util/getMaterials";

import classes from "./ArmorCard.module.scss";

type Props = {
  armor: TArmor;
  materials: TMaterial[];
  children: string;
  obtainDisplay: boolean;
  upgradeDisplay: boolean;
};

export function ArmorCard({
  materials,
  armor,
  children,
  obtainDisplay,
  upgradeDisplay,
}: Props) {
  const armorsStore = useArmorsStore((state) => state);
  const { armors, obtainArmor } = useArmorsStore((state) => state);
  const armorIndex = armorsStore.armors.findIndex(
    (armor) => armor.name === children
  );

  useEffect(() => {
    console.log(armor.isObtained);
  }, [armor]);

  function canBeUpgraded() {
    if (armor.isUpgradeable) {
      return (
        <Upgrades
          armorName={children}
          upgrades={armor.upgrades}
          materials={materials}
        />
      );
    }
  }

  function upgradeClassToggle() {
    if (!armor.isUpgradeable) {
      return !upgradeDisplay ? classes.notUpgradeable : "";
    }
  }

  function obtainClassToggle() {
    if (!armor.isObtained) {
      return obtainDisplay ? classes.notObtained : "";
    }
    // return armor.isObtained ? classes.obtained : classes.notObtained
  }

  return (
    <div
      className={`${classes.card} ${upgradeClassToggle()}
       ${obtainClassToggle()}`}>
      <img src={armor.imgSrc}></img>
      <h3>{children}</h3>
      {canBeUpgraded()}
      <button onClick={() => obtainArmor(armor.name, armorsStore)}>
        {!armors[armorIndex].isObtained ? "Obtain Armor" : "Unobtain Armor"}
      </button>
    </div>
  );
}
