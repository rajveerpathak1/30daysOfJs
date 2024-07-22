// Activity 1
console.log("Activity-1");
//Task-1
// print 1-10 using for loop
for(let i = 1; i <=10;i++)
{
    console.log(i);
}
//output is : 1,2,3,4,5,6,7,8,9,10


//Task-2
// table of 5
for(let i = 1; i <=10;i++)
{
    console.log(`${5} x ${i} = ${5*i}`);
} 
/* output is:
 5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50 */

console.log("Activity-2");
//Task-3
// sum of numbers

let sum =0;
let i=1;
while(i<11)
{
    sum = sum + i;
    i++;
}
console.log(sum)
// output 55


//Task-4
//print 10-1
i=10;
while(i>0)
{
    console.log(i);
    i--;
}

// Activity-3
console.log("Activity-3");
//Task-5
// print 1-5
i=1;
do
{
    console.log(i);
    i++;
}while(i<6)
    
// output is : 1,2,3,4,5


// task-6
// factorial of numbers do while

let num = 10
let fact = 1;

do {
    fact *= num;
    num--;
} while(num > 0);
console.log(fact);
// output is 3628800



//Activity-4
console.log("Activity-4");
// task-7
let resultString = "";

for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++) {
        resultString += "*";
    }
    resultString += "\n";
}

console.log(resultString);


// Activity-5

console.log("Activity-5");

// task-8
//print numbers from 1-10 but skip number 5 using continue

for(let i = 1; i <= 10; i++)
{
    if(i === 5)
    {
        continue;
    }
    console.log(i);
}

// output is : 1,2,3,4,6,7,8,9,10

// task-9
// print 1-10 but stop when number is 7 using break

for(let i = 1; i <= 10; i++)
{
    if(i === 7)
    {
        break;
    }
    console.log(i);
}

// output is : 1,2,3,4,5,6


