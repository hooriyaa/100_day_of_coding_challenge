"use strict";
// QUESTION 32:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinaryEnding;
    if (num == 1) {
        ordinaryEnding = "st";
    }
    else if (num == 2) {
        ordinaryEnding = "nd";
    }
    else if (num == 3) {
        ordinaryEnding = "rd";
    }
    else {
        ordinaryEnding = "th";
    }
    console.log(`${num}${ordinaryEnding}`);
}
console.log("\n");
// QUESTION 33:
let favoritePizzas = [
    "pepperoni ",
    "cheese ",
    "fagita ",
    "bebeq pizza",
];
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log("I like " + favoritePizzas[i] + " pizza");
}
console.log(`I really love pizza!`);
console.log("\n");
// QUESTION 34:
let Animals = ["dog", "cat", "horse"];
for (let Animal of Animals) {
    console.log(`A ${Animal} would make a great pet.`);
}
console.log(`Any of these animal would make a grat pet!`);
