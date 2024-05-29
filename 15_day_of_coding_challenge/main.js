"use strict";
// QUESTION 42:
let magician = ['david blaine', 'criss copperfield', 'shin lim'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The great " + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianarray = copyArray(magician);
make_great(copymagicianarray);
console.log('This is my original array:');
show_magicians(magician);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianarray);
console.log("\n");
// QUESTION 43:
function makesandwich(item) {
    console.log('\nMaking your sandwich with:');
    console.log(`${item} \nENJOY YOUR SANDWICH!`);
}
makesandwich(['-chicken', '\n-lettuse', '\n-greenpepper']);
makesandwich(['-egg', '\n-cabbage']);
makesandwich(['-coriander', '\n-onion', '\n-cucumber']);
console.log("\n");
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createcar("honda", "civic", { color: 'black', year: "2022" });
console.log(myCar);
