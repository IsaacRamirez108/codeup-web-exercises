"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// Creating a function sayHello with a parameter called 'name'
function sayHello(name)
{
    // This is what the function will return everytime it is called
    return "Hello, from the past! " + name;
}
// calling function in console while giving the parameter the value of 'Isaac Ramirez'
console.log(sayHello('Isaac Ramirez'));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// creating a variable that will contain the function every time the variable is called
let helloMessage = sayHello('Isaac Ramirez');
// calling the variable that contains the function to the console
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// creating a variable that holds a string
let myName = 'Isaac Ramirez';
// Calling the function & replacing the parameter with the newly created variable
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// This function will test a random number & based off results return True or False
function isTwo()
{
    // This will return true if random number is equal to 2
    if (random === 2)
    {
        return true;
    }
    // If not equal to 2 it will return false
    return false;
}
// This is just printing the function results into the console
console.log(isTwo());
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// This function contains two separate parameter's
function calculateTip(/*num1, num2*/)
{
    // Will multiply num1 & num2 and will return total
    return num1 * num2;
}
// We are giving the parameter's a value to test function in the console
//console.log(calculateTip(0.20, 20));
//console.log(calculateTip(0.25, 25.50));
//console.log(calculateTip(0.30, 33.42));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// This will prompt the user an alert that will print out the string
alert("Hello, I hope you've had a great meal. Lets figure out you're tipping options!");
// This will prompt the user to assign an integer to num1 & num2, oppose to using it as a parameter
let num2 = parseFloat(prompt("Hello, What was your total for today's meal"));
// This will calculate the percentage of the tip
let num1 = parseFloat(prompt("What percent of tip would you like to leave for your server today?"))/100;
// This will alert the user of the total tip based off the users input which is calculated through calculateTip function
alert("You're total tip is: $" + calculateTip());
// Printing results in console
console.log(calculateTip());

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

alert("Actually before you go you were such a great customer, we have decided to give you 10% discount to you're total before the tip");
// We are giving a set percent for the discount of 10%
let discount = 0.10;
// This variable is giving us discount amount
let totalDiscount = (num2 * discount);
// This variable is giving us the total after the discount is applied to it
let totalDis = (num2 - totalDiscount);
// This function is giving us total amount with discount & tip applied to total
function applyDiscount()
{
    return totalDis + calculateTip();
}

// Showing user difference in pricing before & after the discount
alert("You're new total went from: $" + num2 + " to a new total of: $" + totalDis);
// Calling the function to show user absolute total amount
alert("Here is your new payment total with tip being added: $" + applyDiscount());
// logging results into console
console.log(applyDiscount());
