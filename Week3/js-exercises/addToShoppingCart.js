"use strict";

function addToShoppingCart(groceryItem) {
  //this will remove the 1st item in the array if the items are more than 3
  if (groceryList.length >= 3) {
    groceryList.shift();
  }
  //this will add the item to the list array
  groceryList.push(groceryItem);
  return `You bought ${groceryList}!`;
}

let groceryList = ["bananas", "milk"];

console.log(addToShoppingCart("strawberry"));
console.log(addToShoppingCart("apples"));
console.log(addToShoppingCart("beer"));
