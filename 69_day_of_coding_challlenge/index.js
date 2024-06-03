"use strict";
// DAY 69
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
const today = Days.Tuesday;
console.log(`Today is ${Days[today]}`);
var Fruites;
(function (Fruites) {
    Fruites[Fruites["Apple"] = 0] = "Apple";
    Fruites[Fruites["Mango"] = 5] = "Mango";
    Fruites[Fruites["Banana"] = 6] = "Banana";
    Fruites[Fruites["Orange"] = 7] = "Orange";
})(Fruites || (Fruites = {}));
console.log(Fruites[0]);
console.log(Fruites["Banana"]);
console.log(Fruites["Apple"]);
console.log(Fruites.Orange);
