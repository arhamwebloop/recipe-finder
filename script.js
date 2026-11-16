const results = document.getElementById("results");

const recipes = [

    {
    id: 1,
    name: "Biryani",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Y9jn7oHICDFMVbAvgEKVz-1Whifqy4l5-mHe8NJCjdJCYvRqsFiNc-2N&s=10",
    category: "Desi Food"
    },

    {
    id: 2,
    name: "Karahi",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/12/Chicken-Karahi-847828f.jpg?quality=90&resize=708,643",
    category: "Desi Food"
    },

    {
    id: 3,
    name: "Nihari",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pmoNNy-5I35UMUaIR7_a-9ORZsl3EzdwypEaIyJrIPPEKJruOvooazI&s=10",
    category: "Desi Food"
    },

    {
    id: 4,
    name: "Butter Chicken",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/04/butter-chicken-recipe.jpg",
    category: "Desi Food"
    },


];

displayRecipes(recipes);

function displayRecipes(recipes){

    recipes.forEach(function (recipe){

    results.innerHTML += `
    
        <article class="card" data-id="${recipe.id}">
            <img class="card-img" src="${recipe.image}" alt="${recipe.name}">
            <div class="card-body">
                <p class="card-category">${recipe.category}</p>
                <h2 class="card-title">${recipe.name}</h2>
            </div>
        </article>

    `;

    });

};

