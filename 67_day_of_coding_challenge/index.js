"use strict";
// Day 67:
// Type Annotations with Arrays:
// Type annotations with arrays allow to specify the expected data types
// of the array elements, ensuring type safety in your code.
// Annotating an array of strings:
let fruits = ["apple", "banana", "cherry"];
// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}
// Type Annotations with multidimensional arrays:
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C", "D"];
let arrayThree = ["A", "B", "C", "D", 1, 2, 3, 4, 5];
