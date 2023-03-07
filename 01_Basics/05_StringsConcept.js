const name = "Anmol"
const repoCount = 50

// console.log(name + repoCount + "Value"); // This is quite older version of Syntax to concatinate

// console.log(`Hello My name is ${name} and my repo count is ${repoCount}`); // this is a syntax, generally in backend we use this way

/*******************************Declare String as an Object*****************************/
const gameName = new String('Anmol-Run')
// console.log(gameName[0]); // on every index we have a character, this concept is known to be (key,value) pair. the index is key and the character at that index is value

// console.log(gameName.__proto__); // output shows this is an object i.e. {}

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Anmol   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anmol.com/anmol%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes('anmol')); // includes if there is the given value or not


console.log(gameName.split('-')); // it will split the string on the basis of - and output its elemnt in array

