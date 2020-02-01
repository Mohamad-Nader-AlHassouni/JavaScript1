"use strict";

let myMealRecipe = {
  title: "Omelete",
  servings: 2,
  ingredients: ["4 eggs", "2 strips of bacon", "1 tsp salt/pepper"]
};

for (let key in myMealRecipe) {
  if (key === "title") {
    console.log(`Meal name: ${myMealRecipe[key]}`);
  } else if (key === "servings") {
    console.log(`Servs: ${myMealRecipe[key]}`);
  } else {
    console.log("Ingredients:");
    for (let i = 0; i < myMealRecipe.ingredients.length; i++) {
      console.log(myMealRecipe.ingredients[i]);
    }
  }
}
