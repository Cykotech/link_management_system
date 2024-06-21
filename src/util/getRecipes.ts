export async function getRecipes(): Promise<TRecipe[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzdeqRtseCpIPA7Jnm21VL5HuYQQX_mLBqffK55fHdt-50tU-bYECcnXMYtmRt92HQ/exec?type=recipes"
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
