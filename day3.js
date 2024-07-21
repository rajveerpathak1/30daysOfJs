// Exercise 1: Conditional Statements
// Part 1: Create a program to determine if a number is positive, negative, or zero, and print the result to the console
let value = 0;
if (value > 0) {
    console.log("POSITIVE");
} else if (value < 0) {
    console.log("NEGATIVE");
} else {
    console.log("ZERO");
}

// Part 2: Create a program to check if a person is eligible to vote (age 18 or older) and print the result to the console
let voterAge = 21;
if (voterAge >= 18) {
    console.log("ELIGIBLE");
} else {
    console.log("NOT ELIGIBLE");
}

// Exercise 2: Nested Conditional Statements
// Part 3: Create a program to find the largest of three numbers using nested if-else statements
let numA = 1;
let numB = 2;
let numC = 0;
let maxNum;
if (numA >= numB) { // numA could be the largest
    if (numA > numC) {
        maxNum = numA;
    } else {
        maxNum = numC;
    }
} else { // numA is not the largest, choose between numB and numC
    if (numB >= numC) {
        maxNum = numB;
    } else {
        maxNum = numC;
    }
}
console.log(`The largest number is ${maxNum}`);

// Exercise 3: Switch Case
// Part 4: Create a program that uses a switch case to determine the day of the week based on a number (1-7) and print the day name to the console
let weekday = 4;
switch (weekday) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("Enter a valid number");
}

// Part 5: Create a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and print the grade to the console
// Assume the score (replace with an actual score)
const testScore = 50;
switch (true) {
    case testScore >= 90:
        console.log("GRADE IS A");
        break;
    case testScore >= 80:
        console.log("GRADE IS B");
        break;
    case testScore >= 70:
        console.log("GRADE IS C");
        break;
    case testScore >= 60:
        console.log("GRADE IS D");
        break;
    default:
        console.log("GRADE IS F");
}

// Exercise 4: Ternary Operator
// Part 6: Create a program that uses the ternary operator to check if a number is even or odd and print the result to the console
// Assume the number (replace with an actual number)
let testNumber = 42;
const parityResult = testNumber % 2 === 0 ? 'EVEN' : 'ODD';
console.log(`${testNumber} IS ${parityResult}`);

// Exercise 5: Combining Conditions
// Part 7: Create a program to check if a year is a leap year using multiple conditions
// (divisible by 4, but not by 100 unless also divisible by 400) and print the result to the console
let leapYear = 800;
const isLeap = (leapYear % 4 === 0) ? (leapYear % 100 !== 0 ? true : (leapYear % 400 === 0 ? true : false)) : false;
if (isLeap) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}
