// QUESTION 29:
const usernames:string[]=['admin','als;a','anna','rao','dora']
for(let a=0; a<usernames.length; a++){
    if (usernames[a]==='admin')
    {
        console.log('hello admin,would you like to see a status report?' ); 
    }
    else
    console.log(`hello ${usernames[a]}, thank you for logging in again`
);
}

console.log("\n");

// QUESTION 30:
let userName:string[]=['admin','alsa','anna','dora','masood']
if(userName.length===0){
    console.log('we need to find some users!')
}
else{
    userName=[];
    console.log('all users have be remove from the array. ' + userName.length)
}


console.log("\n");

// QUESTION 31:
let currentUsers:string[]=['hoor','noor','hira','malahim','hashir'];

let newUsers:string[]=['hoor','masood','anna','malahim','alsa'];

newUsers.forEach(newUsersname =>{
    let lowercase:string=newUsersname.toLowerCase();
    if(currentUsers.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The username ${newUsersname } is not available. please write a different username`);
    }
    else{
        console.log(`The Username ${newUsersname} is available`)
    }
})  
