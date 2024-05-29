"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
// QUESTION 11:
// Greeting:
let message_Members = ['congratulation for your great success: hoor', 'congratulation for your great success: hira', 'congratulation for your great success: malahim'];
for (let i = 0; i < message_Members.length; i++) {
    console.log(message_Members[i]);
}
console.log("\n");
// QUESTION 12:
let transportation = ['car', 'bike', 'aircraft', 'catamaran'];
for (let i = 0; i < transportation.length; i++) {
    console.log('i would like to own a ' + transportation[i]);
}
console.log("\n");
// QUESTION 13:
let guest_list = ['masood', 'noor', 'fareed', 'hira'];
exports.guest_list = guest_list;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Mr/Miss' + guest_list[i] + ',\nwe cordially invite you to join us on a formal dinner\n');
}
