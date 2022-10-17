"use strict";


do{
    let oddNumber = parseInt(prompt("Hello, please enter in an odd number between 1 and 50."));
    if (oddNumber % 2 !== 0 && oddNumber < 50 && oddNumber > 1) {
        break;
    }
} while(true)
let oddNumber = parseInt(prompt("Hello, please enter in an odd number between 1 and 50."));
console.log("Number to skip is: " + oddNumber)

for (let j = 1; j <= 50; j+=2) {
    if (oddNumber === j)
    {
        console.log("Yikes! Skipping number: " + oddNumber.toString())
        continue;
    }
    console.log("Here is an odd number: " + j);
}





