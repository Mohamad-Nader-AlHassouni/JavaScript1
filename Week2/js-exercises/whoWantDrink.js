"use strict";

//Declare a variable that holds an empty array
let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];

// Create a loop that runs 5 times
for (let index = 0; index < 5; index++) {
  if (index < 2) {
    drinkTray.push(drinkTypes[0]);
  } else if (index < 4) {
    drinkTray.push(drinkTypes[1]);
  } else {
    drinkTray.push(drinkTypes[2]);
  }
}
// log the drink tray
console.log(`"Hey guys, I brought a ${drinkTray}!"`);
