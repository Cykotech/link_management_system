export async function getRecipes(): Promise<TRecipe[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyEAZLQIVgcAF-Z23XQ-BGTIBLqSEocjNRQaimm3T_4UDEwqzReZflDgxmE108AXZc/exec?type=recipes"
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
