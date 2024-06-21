interface TRecipe {
  name: string;
  imgSrc: string;
  ingredients: Ingredients;
  method: string;
  effect: string;
  effectLevel: number;
  effectDuration: number;
  baseRecoveredHearts: number;
}

interface Ingredients {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

interface TMaterial {
  name: string,
  imgSrc: string,
  ingredientProperties: Properties,
  cookingTags: Tags
}

interface Properties {
  heartsRecovered: number,
  cookingEffect: string,
  effectLevel: number,
  effectDuration: number,
  durationBoost: number,
  critChance: number
}

interface Tags {
  1: string,
  2: string,
  3: string,
  custom1: string,
  custom2: string
}

interface TArmor {
  name: string,
  imgSrc: string,
  set: string,
  upgrades: TUpgrades | {},
  isObtained: boolean,
  isUpgradeable: boolean
}

interface TUpgrades {
  0: TUpgrade[],
  1: TUpgrade[],
  2: TUpgrade[],
  3: TUpgrade[],
  4: [],
}

interface TUpgrade {
  name: string,
  quantity: number
}