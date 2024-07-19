export async function getRecipes(): Promise<TRecipe[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbymmN9BOFZXCqYPRfj2LuvuniQ2BUT4m1gEsgoC331ygHSFS-mW0mZfabbORStmuXQ/exec?type=recipes"
    );
    const json = await response.json();
    json.forEach((recipe) => {
      recipe.effectLevel = Number(json.effectLevel) || 0;
      recipe.effectDuration = Number(json.effectDuration) || 0;
      recipe.baseRecoveredHearts = Number(json.baseRecoveredHearts) || 0;
    });
    return json;
  } catch (err) {
    console.log(err);
  }
}
