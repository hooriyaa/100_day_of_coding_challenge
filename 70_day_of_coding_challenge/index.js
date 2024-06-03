"use strict";
const John = {
    name: "John",
    age: 30,
};
const Sarah = {
    name: "Sarah",
    age: 30,
    greet(message) {
        console.log(`${this.name} says: ${message}`);
    },
};
Sarah.greet("Hello, TypeScript!!"); // Output: Sarah says: Hello, TypeScript!!
//create an object 'userSettings' that adheres to the merged 'settings' interface
let userSettings = {
    theme: true,
    font: "open sans",
    sidebar: false,
    external: true,
};
console.log(userSettings.theme);
