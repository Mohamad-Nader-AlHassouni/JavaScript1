"use strict";
function creditCardValidator(creditCardNumber) {
  //calculate the sum of all numbers in the credit card number
  let sum = 0;
  for (let i = 0; i < creditCardNumber.length; i++) {
    sum += +creditCardNumber[i];
  }
  //check the length of the credit card number
  if (creditCardNumber.length !== 16) {
    return `${creditCardNumber} is not valid credit card\n** The credit card should be 16 digits **`;
    //check if all digits of the credit card number are numbers
  } else if (isNaN(creditCardNumber)) {
    return `${creditCardNumber} is not valid credit card\n** The credit card should be all numbers **`;
    //check if the final digit is even 
  } else if (creditCardNumber[creditCardNumber.length - 1] % 2 !== 0) {
    return `${creditCardNumber} is not valid credit card\n** The final digit must be even **`;
    //check if the credit card number have at least two different digits
    // i google it to find this solution but i dont know how this code works
  } else if (/^(.)\1+$/.test(creditCardNumber)) {
    return `${creditCardNumber} is not valid credit card\n** The credit card must have at least two different digits **`;
    //check is the sum of all credit card numbers > 16
  } else if (sum <= 16) {
    return `${creditCardNumber} is not valid credit card\n** The sum of all the digits must be greater than 16 **`;
    //if the credit card number passed all the condition then its valid
  } else {
    return `${creditCardNumber} is a valid credit card`;
  }
}
//call the function with all the cases above
console.log(creditCardValidator("95678943212450"));
console.log(creditCardValidator("g334567899974d32"));
console.log(creditCardValidator("6666666666666661"));
console.log(creditCardValidator("8888888888888888"));
console.log(creditCardValidator("1111111111111110"));
console.log(creditCardValidator("9999777788880000"));
