// QUESTION 26:
// version 1:
let alien_color:string='green';
if(alien_color=='green'){
   console.log ('the player earned 5 points');
}
else if(alien_color=='yellow'){
    console.log('the player earned 10 points!');
}
else if(alien_color=='red'){
    console.log('the player earned 15 points!');
}
else{
    console.log('please choose correct one!');
}
// version 2
alien_color='yellow';
if(alien_color=='green'){
    console.log ('the player earned 5 points!');
 }
 else if(alien_color=='yellow'){
     console.log('the player earned 10 points!');
 }
 else if(alien_color=='red'){
     console.log('the player earned 15 points!');
 }
 else{
     console.log('please choose correct one'!);
 }
// version 3
alien_color='red';
if(alien_color=='green'){
    console.log ('the player earned 5 points!');
 }
 else if(alien_color=='yellow'){
     console.log('the player earned 10 points'!);
 }
 else if(alien_color=='red'){
     console.log('the player earned 15 points!');
 }
 else{
     console.log('please choose correct one!');
 }

console.log("\n");

// QUESTION 27:
let age:number=17;
if(age < 2){
    console.log('the person is baby!');
}
else if(age >= 2 && age < 4){
    console.log('the person is toddler!');
}
else if(age >=4  && age < 13){
    console.log('the person is kid!');
}
else if(age >=13  && age < 20){
    console.log('the person is teenager!');
}
else if(age >=20  && age < 65){
    console.log('the person is adult!');
}
else if (age = 65  || age > 65){
    console.log('the person is elder!');
}

console.log("\n");

// QUESTION 28:
let favorite_fruits:string[]=['apple','orange','banana'];
if(favorite_fruits.includes('apple')){
 console.log('i really like apple');
}
if(favorite_fruits.includes('banana')){
    console.log('i really like banana');
   }
   if(favorite_fruits.includes('mango')){
    console.log('i really like mango');
   }
   if(favorite_fruits.includes('orange')){
    console.log('i really like orange');
   }
   if(favorite_fruits.includes('strawberry')){
    console.log('i really like strawberry');
   }
 
