import recipes from './recipes.mjs';

function createStarRating(rating) {
	const starContainer = document.createElement("span");
	starContainer.classList.add("rating");
	starContainer.setAttribute("role", "img");
	starContainer.setAttribute("aria-label", `Rating: ${rating} out of 5 stars`);

	for (let i = 1; i <= 5; i++) {
		const star = document.createElement("span");
		star.setAttribute("aria-hidden", "true");
		star.textContent = i <= rating ? "⭐" : "☆";
		starContainer.appendChild(star);
	}

	return starContainer;
}

function renderRecipe(recipe) {
	const article = document.createElement("article");
	article.classList.add("recipe-card");

	const img = document.createElement("img");
	img.src = recipe.image;
	img.alt = recipe.name;

	const title = document.createElement("h2");
	title.textContent = recipe.name;

	const rating = createStarRating(Math.round(recipe.rating)); // round half-stars

	const desc = document.createElement("p");
	desc.classList.add("recipe-description");
	desc.textContent = recipe.description;

	article.appendChild(img);
	article.appendChild(title);
	article.appendChild(rating);
	article.appendChild(desc);

	return article;
}

function loadRecipes() {
	const section = document.querySelector("#recipe-section");
	recipes.forEach(recipe => {
		const card = renderRecipe(recipe);
		section.appendChild(card);
	});
}

//Random recipe selection
function getRandomRecipe(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}


function recipeTemplate(recipe) {
	return `<article class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-details">
            ${tagsTemplate(recipe.tags)}
            <h2>${recipe.name}</h2>
            ${ratingTemplate(Math.round(recipe.rating))}
            <p class="recipe-description">${recipe.description}</p>
            ${ingredientsTemplate(recipe.recipeIngredient)}
        </div>
        </article>`;
}

function ingredientsTemplate(ingredients) {
    return `
        <div class="recipe-ingredients">
            <h3>Ingredients</h3>
            <ul>
                ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>
        </div>
    `;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");
}


function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        // else output an empty star
        html += `<span aria-hidden="true" class="icon-star">${i <= rating ? '⭐' : '☆'}</span>`;
    }
	// after the loop, add the closing tag to our string
	html += `</span>`;
	// return the html string
	return html;
}

const recipe = getRandomRecipe(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	// Set the HTML strings as the innerHTML of our output element.
    const section = document.querySelector("#recipe-random");
    section.innerHTML = recipeList.map(recipeTemplate).join("");
}

function init() {
  // get a random recipe
    const recipe = getRandomRecipe(recipes);
  // render the recipe with renderRecipes.
    renderRecipes([recipe]);
}
init();

//search button functionality
document.getElementById("search-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = document.getElementById("search-input").value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) || // || is for OR condition
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm) || // .some is used to check if any tag matches, doesnt need to be an exact match
        recipe.recipeIngredient.some(ing => ing.toLowerCase().includes(searchTerm)) // Check ingredients
    ));

    const sorted = filteredRecipes.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name

    renderRecipes(sorted);
});

loadRecipes();
