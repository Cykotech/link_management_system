import { create } from "zustand";

import { getMaterials } from "../util/getMaterials";

import { TUpgrade } from "../util/getArmor";

type InventoryState = {
  name: string;
  quantity: number;
};

type State = {
  inventory: InventoryState[];
};

type Actions = {
  populateInventory: () => Promise<void>;
  setQuantity: (material: string, quantity: number, state: State) => void;
  consumeMaterials: (materialsToConsume: TUpgrade[], state: State) => void;
};

const initialState: InventoryState[] = [];

export const useInventoryStore = create<State & Actions>((set) => ({
  inventory: initialState,
  populateInventory: async () => {
    const materials = await getMaterials();
    const inventoryState: InventoryState[] = materials.map((material) => ({
      name: material.name,
      quantity: 0,
    }));

    set(() => ({
      inventory: inventoryState,
    }));
  },
  setQuantity: (material: string, quantity: number, state: State) => {
    const materialIndex: number = state.inventory.findIndex(
      (item) => item.name === material
    );
    if (quantity <= 999) {
      state.inventory[materialIndex].quantity = quantity;
    } else {
      state.inventory[materialIndex].quantity = 999;
    }

    set((state) => ({
      inventory: [...state.inventory],
    }));
  },
  consumeMaterials: (materialsToConsume: TUpgrade[], state: State) => {
    materialsToConsume.forEach((material) => {
      const materialIndex: number = state.inventory.findIndex(
        (item) => item.name === material.name
      );
      if (materialIndex !== -1) {
        state.inventory[materialIndex].quantity -= material.quantity;
      }

      set((state) => ({
        inventory: [...state.inventory],
      }));
    });
  },
}));