// here we will learn about Stack and Heap memory
// Stack (Primitve), Heap (Non-Primitive).
// i.e. Generally Primitive data types are stored in Stack memory and Non-Primitive datatypes are stored in Heap memory.

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYoutubeName); // here the older value is not changed rather the copied value is changed


//lets check it on object datatypes
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "anmol@google.com"
console.log(userOne.email);
console.log(userTwo.email); // here you will see the value has changed