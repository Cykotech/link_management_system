export function findRecipe(
  recipeName: string,
  recipes: TRecipe[],
  ingredients?: TMaterial[]
): TRecipe {
  let recipeToFind = recipeName;

  if (ingredients) {
    console.log(ingredients);
  }

  const recipeIndex = recipes.findIndex(
    (recipe) => recipe.name === recipeToFind
  );

  return recipes[recipeIndex];
}
