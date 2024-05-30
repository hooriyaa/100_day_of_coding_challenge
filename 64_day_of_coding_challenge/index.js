"use strict";
// Type annotations with objects:
// Type annotations with objects in typescript allow you to specify the types
// of properties that an object should have.
let personExOne;
personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
console.log(personExOne.jobTitle);
// And there is yet  another method
// Define an object type withh type annotations:
let personExTwo = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
        street: "123 Main St",
        city: "Wonderland",
    },
};
console.log(personExOne.age);
