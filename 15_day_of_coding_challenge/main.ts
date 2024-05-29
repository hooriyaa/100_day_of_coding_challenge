// QUESTION 42:
let magician:string[]=['david blaine','criss copperfield','shin lim'];

function copyArray(arr:string[]){
    return[...arr];
}

function make_great(magicianArray:string[]){

    for(let i=0; i<magicianArray.length; i++){

    magicianArray[i]="The great " + magicianArray[i]
}
}

function show_magicians(magicians:string[]){
    magicians.forEach(element => {
      console.log(element);  
    });
}

const copymagicianarray=copyArray(magician);

make_great(copymagicianarray);
console.log('This is my original array:');
show_magicians(magician);

console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagicianarray);


console.log("\n");

// QUESTION 43:
function makesandwich(item:string[]){
    console.log( '\nMaking your sandwich with:');
    console.log(`${item} \nENJOY YOUR SANDWICH!`)
  
}

makesandwich(['-chicken','\n-lettuse','\n-greenpepper']);
makesandwich(['-egg','\n-cabbage']);
makesandwich(['-coriander','\n-onion','\n-cucumber']);



console.log("\n");

// QUESTION 44:
// Installation completed:
type car={
    manufacture:string; 
    model:string;
    [key:string]:any;
}

function createcar(manufacture:string,model:string,optional:Record<string, any>): car {
    return{
        manufacture,
           model,
        ...optional,
    }
}
const myCar:car=createcar("honda","civic", {color:'black' ,year:"2022"})
console.log(myCar);