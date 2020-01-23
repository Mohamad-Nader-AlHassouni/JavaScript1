"use strict";

let firstName = "Nader";
let LastName = "Hassouni";
let BirthDetails = {
    dateOfBirth: "15-Feb-1990",
    placeOfBirth: "Damascus",
};
let BodyDetails = {
    weight: "75 kg",
    height: "180 cm"
};

console.log(typeof firstName);
console.log(typeof BodyDetails);

if (typeof firstName === typeof LastName) {
    console.log("Same Type");
}
else {
    console.log("Not The Same Type");
}

if (typeof firstName === typeof BirthDetails) {
    console.log("Same Type");
}
else {
    console.log("Not The Same Type");
}

if (typeof firstName === typeof BodyDetails) {
    console.log("Same Type");
}
else {
    console.log("Not The Same Type");
}

if (typeof LastName === typeof BirthDetails) {
    console.log("Same Type");
}
else {
    console.log("Not The Same Type");
}

if (typeof LastName === typeof BodyDetails) {
    console.log("Same Type");
}
else {
    console.log("Not The Same Type");
}

if (typeof BirthDetails === typeof BodyDetails) {
    console.log("Same Type");
}
else {
    console.log("Not The Same Type");
}