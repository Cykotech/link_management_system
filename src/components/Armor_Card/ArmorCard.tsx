/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import { useEffect } from "react";

import { Upgrades } from "./Upgrades/Upgrades";

import { useArmorsStore } from "../../store/armorStore";

import { ArmorState } from "../../store/armorStore";

import classes from "./ArmorCard.module.scss";

type Props = {
  id: string;
  armor: ArmorState;
  children: string;
  obtainDisplay: boolean;
  upgradeDisplay: boolean;
};

export function ArmorCard({
  id,
  armor,
  children,
  obtainDisplay,
  upgradeDisplay,
}: Props) {
  const armorsStore = useArmorsStore((state) => state);
  const { armors, obtainArmor } = useArmorsStore((state) => state);
  const armorIndex = armors.findIndex((armor) => armor.name === children);

  function canBeUpgraded() {
    if (armor.isUpgradeable) {
      return (
        <Upgrades
          id={id}
          armorName={children}
          upgrades={armor.upgrades}
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
    if (!obtainDisplay) {
      return armors[armorIndex].isObtained ? "" : classes.unobtained;
    }
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
