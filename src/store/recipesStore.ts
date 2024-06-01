import { create } from "zustand";

import { getRecipes, TRecipe } from "../util/getRecipes";

type State = {
  recipes: TRecipe[];
};

type Actions = {
  populateRecipes: () => Promise<void>;
};

const initialState: TRecipe[] = [];

export const useRecipesStore = create<State & Actions>((set) => ({
  recipes: initialState,
  populateRecipes: async () => {
    const recipes = await getRecipes();
    set(() => ({
      recipes: recipes,
    }));
  },
}));