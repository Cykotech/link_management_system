import { create } from "zustand";

import { getArmor } from "../util/getArmor";

type ArmorState = {
  name: string;
  currentLevel: number;
  isObtained: boolean;
};

type State = {
  armors: ArmorState[];
};

type Actions = {
  setLevel: (armorToSet: ArmorState, level: number, state: State) => void;
  populateArmor: () => Promise<void>;
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
      currentLevel: 0,
      isObtained: armor.isObtained,
    }));

    set(() => ({
      armors: armorsState,
    }));
  },
}));
