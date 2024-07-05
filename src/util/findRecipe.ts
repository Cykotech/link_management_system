import { useRecipesStore } from "../store/recipesStore";

export function findRecipe(
  recipeName: string,
  ingredients?: TMaterial[]
): TRecipe {
  const { recipes } = useRecipesStore();

  let recipeToFind = recipeName;

  if (ingredients) {
    console.log(ingredients);
  }

  const recipeIndex = recipes.findIndex(
    (recipe) => recipe.name === recipeToFind
  );

  return recipes[recipeIndex];
}
