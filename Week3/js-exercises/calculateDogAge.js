"use strict";

function calculateDogAge(age) {
  //user input validation
  if (isNaN(age)) {
    return "input is not vaild";
  }
  //Calculate the dog's age based on the conversion rate of 1 human year to 7 dog years
  let dogAge = age * 7;
  return `Your doggie is ${dogAge} years old in dog years!`;
}
//Call the function three times with different sets of values
console.log(calculateDogAge(2));
console.log(calculateDogAge(3.5));
console.log(calculateDogAge(5));
