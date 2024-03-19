import { ArmorState } from "../store/armorStore";
import { TUpgrade } from "./getArmor";

export function upgradeArmor(
  armor: ArmorState,
  level: number,
  inventoryStore,
  armorsStore
) {
  const upgradesToNextLevel: TUpgrade[] = armor.upgrades[level];

  const sufficientMaterialCheck = (): boolean => {
    for (let i = 0; i < upgradesToNextLevel.length; i++) {
      const upgrade = upgradesToNextLevel[i];
      const material = inventoryStore.inventory.find(
        (item) => item.name === upgrade.name
      );

      if (upgrade.name) {
        if (material.quantity < upgrade.quantity) {
          return false;
        }
      }
    }
    return true;
  };

  if (!sufficientMaterialCheck()) {
    alert("Insufficient materials");
  }

  if (sufficientMaterialCheck()) {
    inventoryStore.consumeMaterials(upgradesToNextLevel, inventoryStore);
    armorsStore.setLevel(armor, level + 1, armorsStore);
  }
}
