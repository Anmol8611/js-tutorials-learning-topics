const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toExponential());
// console.log(balance.toFixed(2)); // if the number is in decimal form it will convert it in nearest integer

const otherNumber = 23.8678;
const NumberTwo = 123.8678
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


// **************************Maths*********************************//
console.log(Math); // It is a type of object

console.log(Math.abs(-4)); // It changes negative values to positive 
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3,9,5,2,6,54,8));
console.log(Math.max(3,9,5,2,6,54,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);