// QUESTION 35:
function make_shirt(size: string, text: string) {
  console.log(`please create a ${size} shirt along with message: ${text}`);
}
//  call the function:
make_shirt("small", "do not stop untill you are proud!");
make_shirt("medium", "do not stop untill you are proud!");
make_shirt("extra small", "do not stop untill you are proud!");
make_shirt("extra large", "do not stop untill you are proud!");

console.log("\n");

// QUESTION 36:
function make_shirtt(
  size: string = "large",
  text: string = "I love typescript. "
) {
  console.log(`please create a ${size} shirt along with message: ${text}`);
}
//  call the function by default:
make_shirtt();
make_shirtt("medium");
make_shirtt("small", "do not stop untill you are proud!");

console.log("\n");

// QUESTION 37:
function describe__city(city: string, country: string = "default country") {
  console.log(`${city} is in ${country}.`);
}
describe__city("karachi", "pakistan");
describe__city("Tianjin", "china");
describe__city("karachi");
