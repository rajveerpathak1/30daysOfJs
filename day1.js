console.log("activity-1");
// output is activity-1




// TASK-1

// declaring a variable using var,assign it a number and log the value to console
var num = 10;
console.log(num);

// output is 10



// TASK-2
// declaring a variable using let,assign it a string and log the value to console

let str = "Hello World!";
console.log(str);

// output is Hello World!


// TASK-3
// declare a variable using const,assign it a boolean value and log the value to console

const bool = true;
console.log(bool);

// output is true


// TASK-4
// create variable of diff data type(bool,number,string,double,float,char etc.) and log each each variable types using typeof operator

let num1 = 10;
console.log(typeof num1); // output is number

let str1 = "Hello World!";
console.log(typeof str1); // output is string

let bool1 = true;
console.log(typeof bool1); // output is boolean

let char1 = 'a';
console.log(typeof char1); // output is string

// task -5
// declare variable using let,assign it an initial value and reassign a new value and log both value on console

let num2 = 10;
console.log("Initial value: ", num2); // output is Initial value:  10

num2 = 20;
console.log("New value: ", num2); // output is New value:  20


// task-6
// try reassigning a variable declared with const and observe the error

const constVar = "Hello World!";
console.log(constVar); // output is Hello World!

// try to change the value of constVar
constVar = "Rajveer"
console.log(constVar);
// this will throw an error as constVar is declared as const and can't be reassigned

