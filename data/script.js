document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const recipeList = document.getElementById("recipeList");

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.recipes);
            searchBar.addEventListener("keyup", () => filterRecipes(data.recipes, searchBar.value));
        });

    function displayRecipes(recipes) {
        recipeList.innerHTML = "";
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <a href="detalle.html?id=${recipe.id}">Ver más</a>
            `;
            recipeList.appendChild(recipeCard);
        });
    }

    function filterRecipes(recipes, query) {
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
        displayRecipes(filteredRecipes);
    }
});
