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

loadRecipes();
