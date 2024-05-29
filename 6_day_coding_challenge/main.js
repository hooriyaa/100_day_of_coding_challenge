"use strict";
// QUESTION 14:
let guestt = ['masood', 'Noor', 'fareed', 'hira', 'hashir'];
for (let i = 0; i < guestt.length; i++) {
    console.log('Mr/Miss,' + guestt[i] + '\nwe cordially invite you to join a dinner tommorow\n');
}
let absent_guestt = 'noor';
let new_guestt = 'malahim';
guestt[1] = new_guestt;
for (let i = 0; i < absent_guestt.length; i++) {
    console.log('Mr/Miss,' + guestt[i] + '\nwe cordially invite you to join a dinner tommorow\n');
}
console.log(`Miss,${absent_guestt}  \nwill not come tomorrow on dinner`);
console.log("\n");
// QUESTION 15:
let guest = ['masood', 'noor', 'fareed', 'hira', 'hashir'];
let absent_guest = 'noor';
let new_guest = 'malahim';
guest[1] = new_guest;
for (let i = 0; i < absent_guest.length; i++) {
    console.log('Mr/Miss ,' + guest[i] + '\nwe cordially invite you to join a dinner tommorow\n');
}
guest.unshift('alsa', 'hunza', 'anna');
for (let i = 0; i < guest.length; i++) {
    console.log('Mr/Miss , ' + guest[i] + '\nwe cordially invite you to join a dinner tommorow ,we arrange a big dinning table thats we decided to invite 3 more guest\n');
}
console.log("\n");
// QUESTION 16:
let guesttt = ['masood', 'noor', 'fareed', 'hira', 'hashir'];
let absent_guesttt = 'noor';
let new_guesttt = 'malahim';
guesttt[1] = new_guesttt;
// for(let i=0; i<absent_guest.length;i++){
//     console.log('Mr/Miss ,'  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow\n')
// }
//  console.log(`Miss,${absent_guest}  \nwill not come tomorrow on dinner`)
guesttt.unshift('alsa', 'hunza', 'anna');
// for(let i=0; i<guest.length; i++){
//    console.log('Mr/Miss , '  +guest[i]+ '\nwe cordially invite you to join a dinner tommorow ,we arrange a big dinning table thats we decided to invite 3 more guest\n')
// }
console.log('unfortunately we are unable to arrange big dinning table , so only two people are invite ');
while (guesttt.length > 2) {
    let remove_guest = guesttt.pop();
    console.log(`sorry mr/miss  ${remove_guest} \n you are not invited on dinner`);
}
for (let i = 0; i < guesttt.length; i++) {
    console.log('Mr/Miss ' + guesttt[i] + ' you are still invited on dinner');
}
guest.splice(0, 2);
console.log(guesttt);
