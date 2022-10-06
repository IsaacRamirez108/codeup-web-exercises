"use strict";

console.log("Hello from external JavaScript");
// This will alert the user of whats to come
alert('Welcome to my Website! lets get started with some hypothetical questions');


// This will ask our user its first question
let userImput = prompt("What is your favorite color?");
// This will log my response into the console
console.log("Great, " + userImput + " Is my favorite color too!");


// This code is for question #1
alert("Okay, first question. You have rented some movies for your kids at a cost of $3 a day.");
let lilMermaid = prompt("How many days did you rent the little Mermaid for?");
console.log(lilMermaid + " Days rented");
let broBear = prompt("How many days did you rent Brother Bear for?");
console.log(broBear + " Days rented");
let hercules = prompt("How many days did you rent Hercules for?");
console.log(hercules + " Days rented");
let totalCost = (lilMermaid * 3) + (broBear * 3) + (hercules * 3);
console.log(totalCost + " Is the total cost")
alert("You'r total cost is: " + totalCost);


// This will alert the user that a new set of questions are coming
alert("Okay here's a new set of questions!")


//This code is for question #2
alert("You're working as a contractor for 3 companies: Google, Amazon and Facebook");
alert("Google pays $400, Amazon $380, and Facebook $350");
// We are giving Google/Amazon/Facebook a pre-set integer
let google = 400;
let amazon = 380;
let faceBook = 350;
// This section will ask the user how many hours they have worked at each job site
let googlePromt = prompt("How many hours did you work this week for Google: ");
console.log(googlePromt  + " hours worked at Google this week");
let amazonPromt = prompt("How many hours did you work this week for Amazon: ");
console.log(amazonPromt + " hours worked at Amazon this week");
let faceBookPromt = prompt("How many hours did you work this week for FaceBook: ");
console.log(amazonPromt + " hours worked at FaceBook this week");
// We created a variable "totalPayment" to calculate the toatl salary for this week
let totalPayment = (google * googlePromt) + (amazon * amazonPromt) + (faceBook * faceBookPromt);
console.log(totalPayment + "Is the total salary for the week");
// This will alert the user they're salary for the week
alert("You'r total payment for this week is: " + totalPayment);


// This will alert the user that a new set of questions are coming
alert("Okay here's a new set of questions!");


//This code is for question #3
alert("Hello welcome to Codeup! we're going to try and see if we have room for you to attend class");
let checkAvailability = prompt("First lets check availability, How many days out of the week are you available? ");
// Returns a random integer from 0 to 29: this will determine how how many seats we have open
let seating = Math.floor(Math.random() * 30);
// This shows that the random number must be under 20 && the days available for the meek must be a minimum of 3 days
if (seating < 20 && checkAvailability >= 3)
{
    alert("Welcome to Codeup, Happy to have you join us!");
    console.log("Welcome to Codeup");
}
// This will alert user that they didnt get accepted based of seating
else if  (seating > 20)
{
    alert("We're so sorry but the class is full at the moment");
    console.log("Not accepted in, due to class size");
}
// This will alert user that they didnt get accepted based of days available
else if  (checkAvailability < 3)
{
    alert("Sorry but we need at least 3 days to be successful");
    console.log('Not accepted in, due to your Availability');
}


// This will alert the user that a new set of questions are coming
alert("Okay here's our last of questions I promise!");


//This code is for question #4
// This will ask the user how many items they are buying
let offer = prompt('How many items are you buying?');
// User will need to confirm order
let offerExpired = confirm('Press OK if offer still valid.');
// User will need to confirm they are a Premium Member
let offerPremium = confirm('Press OK if you are a Premium Member.');
// If order is more then 2 or they are a Premium Member && they confirm order offer can be applied
if ((offer > 2 || offerPremium) && offerExpired)
{
    alert('Product offer can be applied.');
    console.log("Product offer has been applied");
}
// else the offer cannot be applied
else
{
    alert('Product offer cannot be applied');
    console.log("Product offer cannot be applied")
}



