// Type Annotation Practices:
let myNumberExOne: number = 17;
let myStringExOne: string = "Hello, TypeScript";

console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);

// Another Way to write the same code
// for example:
let myNumberExTwo: number;
let myStringExTwo: string;

myNumberExTwo = 17;
myStringExTwo = "Hello, TypeScript";

console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);

// Dynamic type determination:

let greeting = "Hello, world!";
console.log(greeting);

// Any Type

let myVariable: any = 42;
myVariable = "Hello, TypeScript";
myVariable = true;
myVariable = null;
console.log(myVariable)

