export type TArmor = {
  name: string,
  imgSrc: string,
  set: string,
  upgrades: TUpgrades | {},
  isObtained: boolean,
  isUpgradeable: boolean
}

export type TUpgrades = {
  0: TUpgrade[],
  1: TUpgrade[],
  2: TUpgrade[],
  3: TUpgrade[],
  4: [],
}

export type TUpgrade = {
  name: string,
  quantity: number
}

export async function getArmor(): Promise<TArmor[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxKP-yGhf7s9zWImE2dmc9hUA9k3i5SVV0vf-kiqlT6JBXAH26pBaZDRbxyDhkpOZU/exec?type=armor"
    );
    const json = await response.json();
    const armors = [];

    for (let armorIndexInJson = 0; armorIndexInJson < Object.keys(json).length; armorIndexInJson++) {
      const armor: TArmor = {
        name: json[armorIndexInJson][0],
        imgSrc: json[armorIndexInJson][1],
        set: json[armorIndexInJson][2],
        upgrades: {},
        isObtained: false,
        isUpgradeable: json[armorIndexInJson][27] === 'TRUE' ? true : false,
      };

      for (let level = 0; level < 4; level++) {
        armor.upgrades[level] = [];

        for (let upgradeIndex = 0; armor.upgrades[level].length < 3; upgradeIndex += 2) {
          let upgradeItemIndex = 3 + 6 * level + upgradeIndex;

          const upgradeQuantityIndex = upgradeItemIndex + 1;

          armor.upgrades[level].push({
            name: json[armorIndexInJson][upgradeItemIndex],
            quantity: json[armorIndexInJson][upgradeQuantityIndex],
          });
        }
      }

      armor.upgrades[4] = [];

      armors.push(armor);
    }

    return armors;
  } catch (err) {
    console.log(err);
  }
}

getArmor();
