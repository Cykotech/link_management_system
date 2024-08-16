export async function getRecipes(): Promise<TRecipe[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby-irzt9YhoB6exI4APEe-hWKFUOPwO3k4rF7_uommwfWNx3dp73IdxMNr7SPeskOc/exec?type=recipes"
    );
    const json = await response.json();
    json.forEach((recipe) => {
      recipe.ingredients = recipe.ingredients.filter(
        (ingredient) => ingredient !== ""
      );
    });
    return json;
  } catch (err) {
    console.log(err);
  }
}
