import { create } from "zustand";

import { getRecipes } from "../util/getRecipes";

type State = {
  recipes: TRecipe[];
  activeIngredients: TMaterial[];
  activeRecipe: TRecipe | {};
};

type Actions = {
  populateRecipes: () => Promise<void>;
  addIngredient: (ingredient: TMaterial, state: State) => void;
  setActiveRecipe: () => void;
  resetIngredients: () => void;
};

const initialRecipeState: TRecipe[] = [];
const initialIngredientState: TMaterial[] = [];
const initialActiveRecipeState: TRecipe | {} = {};

export const useRecipesStore = create<State & Actions>((set) => ({
  recipes: initialRecipeState,
  activeIngredients: initialIngredientState,
  activeRecipe: initialActiveRecipeState,
  populateRecipes: async () => {
    const recipes = await getRecipes();
    set(() => ({
      recipes: recipes,
    }));
  },
  addIngredient: (ingredient, state) => {
    if (state.activeIngredients.length === 5) {
      return;
    }

    set((state) => ({
      activeIngredients: [...state.activeIngredients, ingredient],
    }));
  },
  setActiveRecipe: () => {

  },
  resetIngredients: () => {
    set(() => ({
      activeIngredients: [...initialIngredientState],
    }));
  },
}));
