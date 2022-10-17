"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Creating a function called ifAnalyzeColor W/ a parameter called 'color'. This example will be using if statements
function ifAnalyzeColor(color)
{
    // This is global variable that will set the users input to lowerCase at all time, so it won't affect the results if there is a upper case letter
    let makeLowerCase = color.toLowerCase();
    // this is the first if statement that will return this string if color is red
    if (makeLowerCase === 'red') {
         return 'Strawberries are Red!';
    }
    // this else if statement will return this string if color is blue
    else if (makeLowerCase === 'blue') {
        return 'The sky is Blue!';
    }
    // this else if statement will return this string if color is yellow
    else if (makeLowerCase === 'yellow') {
         return "Daisy's are Yellow!";
    }
    // this else if statement will return this string if color is green
    else if (makeLowerCase === 'green') {
        return 'Lettuce is Green!';
    } else // this is the default statement will return this string if color is any other color
    return 'Im so sorry i dont know anything about ' + color;
}

// I am giving the parameter a pre-set color to test the function in the console prior to the users input
console.log(ifAnalyzeColor("Blue"));
console.log(ifAnalyzeColor('red'));
console.log(ifAnalyzeColor('cyan'));

// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// This variable will use the code above to randomly chose a color for the functions parameter
 let analyzeColor2 = analyzeColor(randomColor);
 // This will log the results into the console
 console.log(analyzeColor2);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// This is the exact same code as ifAnalyzerColor but we are using switch statements as opposed to if statements
function analyzeColor(color)
{
    // This variable is converting all letters into lower case same as the one in the ifAnalyzerColor function
    let makeLowerCase = color.toLowerCase();
    switch(makeLowerCase)
    {
        case "red":
            return "Strawberries are Red!";
        case "blue":
            return "The sky is Blue!";
        case "yellow":
            return "Daisy's are Yellow!";
        default:
            return 'Im so sorry i dont know anything about ' + color;
    }
}

// I am giving the parameter a pre-set color to test the function in the console prior to the users input
console.log(analyzeColor("Blue"));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// This variable will prompt the user to input a color
let user = prompt("Hello, What is your favorite color?");
// This will run the color the user inputted into the function and alert the results to the user
alert(analyzeColor(user));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// Creating a function called calculateTotal W/ two parameters, luckyNumber & total.
function calculateTotal(luckyNumber, total)
{
    // creating a global variable for the final price after discounts are applied, that is able to change based off results
    let finalPrice = total;
    // Switch statement that is taking in a random number by using 'luckyNumber' variable
    switch (luckyNumber)
    {
        // This result will happen if luckyNumber is 0
        case (luckyNumber = 0):
            // based off of luckyNumber this will re-define the number of finalPrice if needed. same goes for similar code below
            finalPrice = total - (0).toFixed()
            // Returns this string in console, same goes for similar code below
            console.log("No discount Applied");
            // Returns this string to the user, same goes for similar code below
            return "Hello, Your total is: $" + finalPrice;
        // This result will happen if luckyNumber is 1
        case (luckyNumber = 1):
            finalPrice = total - (total * 0.1).toFixed();
            console.log("Hello, Congratulations you've been awarded a 10% discount");
            return "Hello, Congratulations you've been awarded a 10% discount. You're new total is: $" + finalPrice;
        // This result will happen if luckyNumber is 2
        case (luckyNumber = 2):
            finalPrice = total - (total * 0.1).toFixed();
            console.log("Hello, Congratulations you've been awarded a 25% discount");
            return "Hello, Congratulations you've been awarded a 25% discount. You're new total is: $" + finalPrice;
        // This result will happen if luckyNumber is 3
        case (luckyNumber = 3):
            finalPrice = total - (total * 0.35).toFixed();
            console.log("Hello, Congratulations you've been awarded a 35% discount");
            return "Hello, Congratulations you've been awarded a 35% discount. You're new total is: $" + finalPrice;
        // This result will happen if luckyNumber is 4
        case (luckyNumber = 4):
            finalPrice = total (total * 0.5).toFixed();
            console.log("Hello, Congratulations you've been awarded a 50% discount");
            return "Hello, Congratulations you've been awarded a 50% discount. You're new total is: $" + finalPrice;
        // This result will happen if luckyNumber is 5
        case (luckyNumber = 5):
            console.log("Hello, Congratulations your purchase is 100% FREE!!");
            return "Hello, Congratulations your purchase is 100% FREE!!";
    }
}

console.log(calculateTotal(0, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 // Generates a random number between 0 and 6
 let luckyNumber = Math.floor(Math.random() * 6);

 // This variable prompts the user to input a number
 let user2 = prompt("Hello, please insert your total bill: ")
// This will alert user the results by using the inputted by user & luckyNumber
 alert(calculateTotal(luckyNumber, user2));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


confirm("Hello, lets play a game. if you give me a number I can tell you if its Even/Positive or if it is Odd/Negative. I can even add another number to it & do the math correctly! You want to try?");
// Prompting the user to input a number & using parseInt to convert it from string into a integer
let num1 = parseInt(prompt("Great! please enter your number down below & we can start!"));
// Creating a function that will answer first question using users inputted number by putting num1 in the parameter
function firstQuestion(num1)
{
    // This will determine if users inputted number is even or not & alert the results
    if (num1 % 2 === 0)
    {
        alert("The number you inserted is Even!")
    }else
        alert("The number you inserted is Odd!")
}
// Creating a function that will answer second question using users inputted number by putting num1 in the parameter
function secondQuestion(num1)
{
    // This will add 100 to the whatever number user inputted & alert the results
    let secQuestion = num1 + 100;
    alert("Based off the number you have chosen, if i added 100 to it would now equal = " + secQuestion);
}
// Creating a function that will answer Third question using users inputted number by putting num1 in the parameter
function thirdQuestion(num1)
{
    // This will determine if users inputted number is positive or not & alert the results
    if (num1 >= 0)
    {
        alert("This is a positive number as well!");
    }else
        alert("This is a negative number as well!")
}

// Testing the results
firstQuestion(num1);
secondQuestion(num1);
thirdQuestion(num1);
