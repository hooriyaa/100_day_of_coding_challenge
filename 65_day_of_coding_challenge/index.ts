//----- TYPE ANNOTATIONS WITH FUNCTION:-----

function calculateRectangleArea(
  lengthOfRectAngle: number,
  widthOfRectAngle: number
): number {
  return lengthOfRectAngle * widthOfRectAngle;
}
//calling the function with valid arguments:
const lengthOfRectAngle = 5;
const widthOfRectAngle = 3;
const area = calculateRectangleArea(lengthOfRectAngle, widthOfRectAngle);
console.log(`The area of the rectangle is: ${area}`);

// Optional Parameters
function greet(name: string, age?: number) {
  if (age) {
    console.log(`Hello, ${name}! you are ${age} year old`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet("Hooriya", 17); // Output: Hello, hooriya! you are 17 year old
greet("hira"); // Output: hello hira

// Default Parameters
function greetUserDetails(username: string, age: number = 19) {
  console.log(`Hello, ${username}! your age is ${age}`);
}

greetUserDetails("hooriya", 17); // Output: Hello hooriya!, your age is 17
greetUserDetails("Malahim"); // Output: Hello, Malahim! your age is 17

// Rest Parameters

function addNumbers(...numbers: number[]): number{
    return numbers.reduce((total, number) => total + number, 0);
}
let ans=addNumbers(2,5,8,2)
console.log(ans);  // output:17


// Arrow Function:
const division = (num1: number, num2: number) :number=>  num1 / num2;

let result = division(6, 8);
console.log(result); // Output: 0.75



// Anonymous function:
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(add(6,9)); // Output: 15

// Void :
function greet2(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet2("hooriya"); // Output: Hello, Hooriya!

// Never:
function throwError(message: string): never {
  throw new Error(message);
}
function infiniteLoop():never {
    while (true) {
        
    }
}
 // Output: Error: Something went wrong!
