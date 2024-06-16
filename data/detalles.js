document.addEventListener("DOMContentLoaded", () => {
    const recipeDetail = document.getElementById("recipeDetail");
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get("id");

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const recipe = data.recipes.find(r => r.id == recipeId);
            if (recipe) {
                displayRecipeDetail(recipe);
            } else {
                recipeDetail.innerHTML = "<p>Receta no encontrada.</p>";
            }
        });

    function displayRecipeDetail(recipe) {
        recipeDetail.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>Ingredientes</h3>
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
            <h3>Instrucciones</h3>
            <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
        `;
    }
});
