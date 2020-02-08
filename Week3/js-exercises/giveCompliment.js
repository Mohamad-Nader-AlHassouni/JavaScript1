"use strict";

function giveCompliment(MyName) {
  let compliments = [
    "great",
    "awesome",
    "amazing",
    "gorgeous",
    "inspiring",
    "strong",
    "charming",
    "brave",
    "beautiful",
    "one of a kind!"
  ];
  //randomly selects a compliment
  let random = compliments[Math.floor(Math.random() * compliments.length)];
  return `You are ${random}, ${MyName}!`;
}
//Call the function three times
console.log(giveCompliment("Nader"));
console.log(giveCompliment("Nader"));
console.log(giveCompliment("Nader"));
