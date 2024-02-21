import { create } from "zustand";

import { getMaterials } from "../util/getMaterials.js";

export const useInventoryStore = create(() => ({ inventory: new Map() }));

export async function mapInventory() {
  const materials = await getMaterials();
  useInventoryStore.setState((prev) => ({
    inventory: new Map(prev.inventory),
  }));
  materials.forEach((material) => {
    useInventoryStore.setState((prev) => ({
      inventory: new Map(prev.inventory).set(material.name, 0),
    }));
  });
}

export function changeMaterialQuantity(item, quantity) {
  if (quantity <= 999) {
    useInventoryStore.setState((prev) => ({
      inventory: new Map(prev.inventory).set(item, quantity),
    }));
  } else {
    useInventoryStore.setState((prev) => ({
      inventory: new Map(prev.inventory).set(item, 999),
    }));
  }

  console.log(`Stored ${quantity} ${item}`)
}
