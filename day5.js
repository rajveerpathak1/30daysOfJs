// Activity 1: Function declaration
// Task 1

function checkEvenOdd(number){
    if(number % 2 == 0){
        return "even";
    } else {
        return "odd";
    }
}

let number = 9;
console.log(checkEvenOdd(number));               //output: odd

// Task 2

function findSquare(value){
    return value * value;
}

let value = 4;
console.log(findSquare(value));                   //output: 16

// Task 3
// Activity 2: Function Expression
function findMax(value1, value2){
    if(value1 > value2){
        console.log(value1, "is greater");
    } else if(value1 == value2){
        console.log("numbers are equal");
    } else {
        console.log(value2, "is greater");
    }
}

findMax(2, 3);   // 3 is greater

// Task 4

function concatenate(string1, string2){
    return string1 + " " + string2;
}
let firstName = "Rajveer";
let lastName = "Pathak";
let fullName = concatenate(firstName, lastName);
console.log(fullName);                           //output: Rajveer Pathak

// Activity 3
// Task 5

let addNumbers = (num1, num2) => {
    return num1 + num2;
}
let additionResult = addNumbers(2, 3);
console.log("sum:", additionResult);                   //output: sum: 5

// Task 6

let containsCharacter = (text, char) => {
    return text.includes(char);
}

console.log(containsCharacter("Rajveer pathak", 'k'));                //output: true

// Task 7

function multiply(a, b = 2){
    return a * b;
}
let x = 5;
let y = 3;
console.log("product is:", multiply(x, y));   // output: 15

// Task 8

function greetPerson(name, age = 15){
    return `name: ${name}, age: ${age}`;
}
console.log(greetPerson("nandi", 18));

// Task 9

function repeatAction(action, times) {
    for (let i = 0; i < times; i++) {
        action();
    }
}

function sayHello() {
    console.log("hello");
}

repeatAction(sayHello, 5);

// Task 10
function higherOrderFunction(funcA, funcB, value){
    return funcB(funcA(value));
}

function doubleValue(value){
    return value * 2;
}
function squareValue(value){
    return value * value;
}

console.log(higherOrderFunction(doubleValue, squareValue, 5));     //output: 100
