/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Upgrades } from "./Upgrades/Upgrades";

import classes from "./ArmorCard.module.scss";

export function ArmorCard({
  children,
  imgSrc,
  upgrades,
  materials,
  isUpgradeable,
}) {

  function canBeUpgraded() {
    if (isUpgradeable) {
      return <Upgrades upgrades={upgrades} materials={materials} />;
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
