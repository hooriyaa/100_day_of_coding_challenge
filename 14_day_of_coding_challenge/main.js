"use strict";
// QUESTION 39:
function city_country(city, country) {
    return `${city} , ${country}`;
}
console.log(city_country("lahore", "pakistan."));
console.log(city_country("Tianjin", "china."));
console.log(city_country("nagoya", "japan."));
console.log("\n");
// QUESTION 40:
function make_album(artist, title, tracts) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracts !== undefined) {
        album.tracks = tracts;
    }
    return album;
}
const album1 = make_album("artist 1 ", "album tittle 1");
console.log(album1);
const album2 = make_album("artist 2 ", "album tittle 2");
console.log(album2);
const album3 = make_album("artist 3 ", "album tittle 3", 12);
console.log(album3);
console.log("\n");
// QUESTION 41:
let magician = ["david blaine", "criss copperfield", "shin lim"];
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
show_magicians(magician);
