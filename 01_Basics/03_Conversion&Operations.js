let score = 35

console.log(typeof score);
console.log(typeof(score)); // both will give the same output i.e. 'number' type

let score2 = "50abc"
let valueInNumber = Number(score2)
console.log(typeof valueInNumber); //the String is converted into numbers, let's print the number in next line
console.log(valueInNumber); // the output will be NaN.


// when we try to convert the following type into numbers the outputs are:
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;


// now let's check boolean types conversion
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "anmol" => true


//lets check to convert in String
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // output will be the same number
console.log(typeof stringNumber);