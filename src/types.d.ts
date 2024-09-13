interface TRecipe {
  name: string;
  imgSrc: string;
  actorName: string;
  ingredients: string[];
  method: string;
  effect: string;
  effectLevel: number;
  effectDuration: number;
  baseRecoveredHearts: number;
  priority: number;
}

interface TMaterial {
  name: string;
  imgSrc: string;
  actorName: string;
  ingredientProperties: Properties;
  cookingTags: Tags;
  quantity: number;
  id: number;
}

interface Properties {
  heartsRecovered: number;
  cookingEffect: string;
  effectLevel: number;
  effectDuration: number;
  durationBoost: number;
  critChance: number;
}

interface Tags {
  1: string;
  2: string;
  3: string;
  custom1: string;
  custom2: string;
}

interface TArmor {
  name: string;
  imgSrc: string;
  set: string;
  upgrades: TUpgrades | {};
  isObtained: boolean;
  isUpgradeable: boolean;
}

interface TUpgrades {
  0: TMaterial[];
  1: TMaterial[];
  2: TMaterial[];
  3: TMaterial[];
  4: [];
}

interface TDevice {
  name: string;
  imgSrc: string[];
  duration: number;
  energyConsumption: number;
  consumptionPerSecond: number;
}