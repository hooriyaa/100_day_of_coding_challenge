"use strict";
// create two objects
const book = {
    name: 'al chemist',
    price: 600
};
const apples = {
    name: 'apples',
    price: 300
};
console.log(`book name: ${book.name} ,  price:${book.price}:`);
console.log(`book name: ${apples.name} , price:${apples.price}:`);
console.log("\n");
// QUESTION 21:
let array_error = ['sana', 'zara', 'anna', 2, 4, 6];
// console.log(array_error[8])
console.log(array_error[3]);
console.log(array_error[5]);
console.log(array_error[2]);
console.log(array_error[1]);
console.log(array_error[0]);
console.log(array_error[4]);
console.log("\n");
// QUESTION 22:
// EXERCISE:23:
// test 1: equality comparsion(true)
let car = 'subaru';
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');
// test 2: strict equality comparsion(true)
console.log("Is cars === 'subaru'? I predict true.");
console.log(car === 'subaru');
// test 3:  Inequality comparsion(false)
console.log("Is cars |= 'subaru'? I predict false.");
console.log(car != 'subaru');
// test 4: strict inequality comparsion(false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// test 5: less than  comparsion(false)
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru');
// test 6: greater than  comparsion(false)
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru');
// test 7: less than or equsl comparsion(true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(car <= 'subaru');
// test 8: greater than or equal comparsion(true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(car >= 'subaru');
// test 9: checking truthiness(true)
console.log("Is subaru? I predict true.");
console.log(car);
// test 10: checking truthiness(false)
console.log("Is  !car? I predict false.");
console.log(!car);
