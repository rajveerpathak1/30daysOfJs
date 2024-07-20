// Task-1
// to add two num and log result

let a = 5;
let b =15;

let sum = a + b;

console.log("Sum of " + a + " and " + b + " is: " + sum);
// output is sum of  a and  b is 20


// Task-2
// to subtract two num and log result

let c = 10;
let d = 5;

let diff = c - d;

console.log("Difference of " + c + " and " + d + " is: " + diff);
// output is Difference of  c and  d is 5




// Task-3
// to multiply two num and log result

let e = 4;
let f = 8;

let product = e * f;

console.log("Product of " + e + " and " + f + " is: " + product);
// output is Product of  e and  f is 32


// Task-4
// to divide two number and log result

let g = 20;
let h = 4;

let quotient = g / h;

console.log("Quotient of " + g + " and " + h + " is: " + quotient);
// output is Quotient of  g and  h is 5



//  Task-5
// to find remainder 

let i = 10;
let j = 3;

let remainder = i % j;

console.log("Remainder of " + i + " and " + j + " is: " + remainder);
// output is Remainder of  i and  j is 1


// Task-6
// use += 
let k = 15;
k += 15;

console.log("k is: " + k);
// output is k is: 30



// Task-7
// use -=

let l = 20;
l -= 10;

console.log("l is: " + l);
// output is l is: 10



// Task-8
//  compare two number using < and > and log result

let m = 10;
let n = 5;

if (m < n) {
    console.log(m + " is less than " + n);
} else if(m>n) {
    console.log(m + " is greater than " + n);
}
else{
    console.log("both are equal");
}
// output is m is greater than n 


// Task-9
// compare two number using >= and <=

let o = 10;
let p = 5;

if (o >= p) {
    console.log(o + " is greater than or equal to " + p);
} else if(o<p) {
    console.log(o + " is less than " + p);
}
// output is o is greater than p



// Task-10
// compare two number using == and === and log result

let q = 10;
let r = 10;

if (q == r) {
    console.log(q + " is equal to " + r);
}
if(q===r) {
    console.log(q + " is strictly equal to " + r);
} 
else {
    console.log(q + " is not equal to " + r);
}
// output is q is equal to r
// output is q is strictly equal to r


//  Task-11
// use && operator to combine two conditions and log result

let s = 10;
let t = 5;

if (s > 5 && s < 15) {
    console.log(s + " is greater than 5 and less than 15");
} else {
    console.log(s + " is not between 5 and 15");
}
// output is  s is greater than 5 and less than 15



//  Task-12
// use || operator to combine two conditions and log result

let u = 10;
let v = 15;

if (u > 5 || u < 15) {
    console.log(u + " is greater than 5 or less than 15");
} else {
    console.log(u + " is not between 5 and 15");
}

// output is  u is greater than 5 or less than 15



//  Task-13
// use ! to negate a conditions and log the result

let w = 10;
let x = 5;

if (!(w > x)) {
    console.log(w + " is not greater than " + x);
} else {
    console.log(w + " is greater than " + x);
}

// output is  w is greater than x


// Task-14
// use ternary operator to check if a number is positive or negative and log the result

let y = 10;

let result = (y > 0)? "Positive" : "Negative";
console.log(y + " is " + result);

// output is y is Positive


// feature Request

// 1. write a sciptthat perform basic arithmetic operations(add,sub,mul,div,modulus etc.) on the two numbers write their output in comment also

let z = 10;
let aa = 5;

console.log("Addition: " + (z + aa));
// output is 15
console.log("Subtraction: " + (z - aa));
// output is 5 
console.log("Multiplication: " + (z * aa));
// output is 50
console.log("Division: " + (z / aa));
// output is 2
console.log("Modulus: " + (z % aa));
// output is 0



// 2. write a script that compares two numbers using different comparison operator and combine conditions using logical operators and logging the result

let bb = 10;
let cc = 5;

console.log("Using == operator: " + (bb == cc));
// output is false

console.log("Using === operator: " + (bb === cc));
// output is false

console.log("Using!= operator: " + (bb!= cc));

console.log("Using!== operator: " + (bb!== cc));

console.log("Using > operator: " + (bb > cc));

console.log("Using < operator: " + (bb < cc));
// Using != operator: true
// Using !== operator: true
// Using > operator: true
// Using < operator: false




// 3. ternary operator scipt

let dd = 10;
let ee = 5;

let result2 = (dd > ee)? "dd is greater than ee" : "ee is greater than dd";
console.log(result2);

// output is dd is greater than ee