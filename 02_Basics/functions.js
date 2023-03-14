// function
function sum(n1,n2) {
    console.log(n1 + n2);
}
sum(23,54);


// arguments object in array which stores as many arguemnts as user needs
function add() {
    if(arguments.length == 0) {
        console.log("no parameters passed");
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    }
}

add(5,3,2,56);

let addition = add; //functions can be stored in a variable
addition(24,53,5);

// Return in Function
//e.g.1
function add(a,b) {
    return a + b; // if we do not return anything , it shows undefined value
}
let result = add(56,44);
console.log(result)

//e.g.2
function compare(a,b) {
    let output;
    if(a>b){
        output = `${a} is greater than ${b}`;
        return output;
    } else if(a<b) {
        output = `${b} is greater than ${a}`;
        return output;
    }
        else {
            output = "both are equal";
            return output;
        }
}

let compareResult = compare(9,7)
console.log(compareResult);

// Anonymous Function = a function which does not has name of its own

let show = function () {
    console.log("hello ji");
};  // this assigining of anonymous function is also known to be Function Expression

show();



//Immediately Invoked function
// Execute at the moment when it was created wilthout calling it or assigning to variable

(function () {
    console.log("hello world");
})()

