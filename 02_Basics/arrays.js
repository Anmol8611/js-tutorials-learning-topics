// Arrays
const myArr = [1,2,3,4,5,6]
// const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[3]);

// // Array methods
// myArr.push(7)
// myArr.push(8)
// myArr.pop
// console.log(myArr);

// myArr.unshift(0) // it will add one elemnt at start
// myArr.shift   // it will remove the element of start

// console.log(myArr)

// console.log(myArr.includes(7)); // it will return a boolean value

// const newArr = myArr.join() // bind the array and convert it to string
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


//slice,splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);