/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Upgrades } from "./Upgrades/Upgrades";

import { TUpgrades } from "../../util/getArmor";
import { TMaterial } from "../../util/getMaterials";

import classes from "./ArmorCard.module.scss";

type Props = {
  children: string;
  imgSrc: string;
  materials: TMaterial[];
  isUpgradeable: boolean;
  upgrades?: TUpgrades | {};
};

export function ArmorCard({
  children,
  imgSrc,
  upgrades,
  materials,
  isUpgradeable,
}: Props) {
  function canBeUpgraded() {
    if (isUpgradeable) {
      return (
        <Upgrades
          armorName={children}
          upgrades={upgrades}
          materials={materials}
        />
      );
    }
  }

  return (
    <div className={classes.card}>
      <img src={imgSrc}></img>
      <h3>{children}</h3>
      {canBeUpgraded()}
    </div>
  );
}
