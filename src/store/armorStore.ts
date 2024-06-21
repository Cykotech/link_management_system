import { create } from "zustand";

import { getArmor } from "../util/getArmor";

type ArmorState = {
  name: string,
  imgSrc: string,
  set: string,
  upgrades: TUpgrades | {},
  isObtained: boolean,
  isUpgradeable: boolean,
  currentLevel: number,
};

type State = {
  armors: ArmorState[];
};

type Actions = {
  setLevel: (armorToSet: ArmorState, level: number, state: State) => void;
  populateArmor: () => Promise<void>;
  obtainArmor: (armorToSet: string, state: State) => void;
};

const initialState: ArmorState[] = [];

export const useArmorsStore = create<State & Actions>((set) => ({
  armors: initialState,
  setLevel: (armorToSet: ArmorState, level: number, state: State) => {
    const armorIndex: number = state.armors.findIndex(
      (armor) => armor.name === armorToSet.name
    );

    state.armors[armorIndex].currentLevel = level;

    set((state) => ({
      armors: [...state.armors],
    }));
  },
  populateArmor: async () => {
    const armors = await getArmor();
    const armorsState: ArmorState[] = armors.map((armor) => ({
      name: armor.name,
      imgSrc: armor.imgSrc,
      set: armor.set,
      upgrades: armor.upgrades,
      currentLevel: 0,
      isObtained: armor.isObtained,
      isUpgradeable: armor.isUpgradeable
    }));

    set(() => ({
      armors: armorsState,
    }));
  },
  obtainArmor: (armorToSet: string, state: State) => {
    const armorIndex: number = state.armors.findIndex(
      (armor) => armor.name === armorToSet
    );

    state.armors[armorIndex].isObtained = !state.armors[armorIndex].isObtained;

    set((state) => ({
      armors: [...state.armors],
    }));
  },
}));
