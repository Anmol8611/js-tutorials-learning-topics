//Objects
let person = {
    // properties of this object
    firstName: 'Anmol',
    lastName: 'Kumar',
};
// there are two ways to access properties of an object
console.log(person.firstName); // this is called as dot notation
console.log(person['lastName']); // this is called array notation
console.log(person.age); // undefined otput as this propert is not there in the object

//Modifying value of property in object
person.firstName = 'Rahul' // the existing value of firstName will be changed
console.log(person);

//We can also create any property ouside the object for the same object
person.age = 18;
console.log(person);

//delete a property of object
delete person.lastName;
console.log(person);

//Weither a property exist or not in any object
console.log('height' in person); // it will return true/false

//access all the property of an object one by one
for (let key in person) {
   console.log(key + " " + person[key]); // NOTE:- Always use array notation to access object property in loop
}