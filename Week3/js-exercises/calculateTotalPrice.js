"use strict";

function calculateTotalPrice(list) {
  let total = 0;
  // this loop will sum all the values in the object
  for (let key in list) {
    total += list[key];
  }
  return total;
}

let cartForParty = {
  beer: 5.54,
  chips: 1.51,
  milk: 2.13,
  tea: 2.3,
  coffee: 4
};

console.log(calculateTotalPrice(cartForParty));
