//  #Primitive
//  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // output will be 'false', that is symbol is used to uniquely identify the values


const bigNumber = 2342297728342879820n


//  Reference (non-primitive) type:
//  Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "anmol",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}