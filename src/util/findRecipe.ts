export function findRecipe(
  recipeName: string,
  recipes: TRecipe[],
  ingredients?: TMaterial[]
): TRecipe {
  let recipeToFind = recipeName;

  if (ingredients) {
    const meal: string[][] = [];
    let filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.ingredients.length <= ingredients.length &&
        recipe.method === "Cooking Pot"
    );

    for (const ingredient of ingredients) {
      meal.push([
        ingredient.name,
        ingredient.cookingTags[0] === "CookLowPrice"
          ? ingredient.cookingTags[2]
          : ingredient.cookingTags[1],
        ingredient.cookingTags.custom1,
        ingredient.cookingTags.custom2,
      ]);
    }

    if (meal) {
      console.log(meal);
      console.log("original filtered recipes", filteredRecipes);
      for (
        let ingredientIndex = 0;
        ingredientIndex < meal.length;
        ingredientIndex++
      ) {
        filteredRecipes = filteredRecipes.filter((recipe) => {
          return meal[ingredientIndex].some((value) => {
            return recipe.ingredients.includes(value);
          });
        });
      }
      console.log("new filtered recipes", filteredRecipes);
    }

    return filteredRecipes[0];
  }

  if (!ingredients) {
    const recipeIndex = recipes.findIndex(
      (recipe) => recipe.name === recipeToFind
    );

    return recipes[recipeIndex];
  }
}
