"use strict";

// Question 1
// Creating a function called 'showMultiplicationTable' that takes in one parameter called 'num1'
function showMultiplicationTable(num1)
{
    // This for loop is stating that as long as 'i' is less than or equal to 10 it will keep looping. 'i' will increase by one everytime
    for (let i = 1; i <= 10; i++)
    {
        // This new variable is multiplying the inputted number & 'i'
        let num2 =  (num1 * i);
        // This will print out the full equation in the console until the loop finishes
        console.log(num1 + " * " + i + " = " + num2);
    }



    // Question 2
    // Creating a for loop is stating that as long as 'i' is less than or equal to 10 it will keep looping. 'i' will increase by one everytime
    for (let i = 1; i <= 10; i++)
    {
        // Creating a new variable that generates a random number from 20 to 200
        let randomNumber = Math.floor(Math.random() * 200) + 20;
        // stating if the random number is equal to 0. if it is number is even if not it is odd
        if (randomNumber % 2 === 0)
        {
            console.log(randomNumber + " is Even!");
        }else
            console.log(randomNumber + " is Odd!");
    }



    // Question 3
    // Setting the variable of output to string of 1
    let output = '1';
    for (let i = output; i <= 9; i++)
    {
        output = i;
        for (let j = 1; j < i; j++)
        {
            output += i.toString();
        }
        console.log(output);
        //output = '';
    }

    let setNum = '100';
        for (let i = setNum; i > 0; i--)
        {
            if(i % 5 == 0)
            {
                console.log(i.toString())
            }
        }
}
// Giving the parameter a value of 7 for Question number 1
console.log(showMultiplicationTable(7));
