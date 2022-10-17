(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    // Creating a variable contains an array of strings
    let names = ['Isaac', 'Isarel', 'Albert', 'Abgail'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // creating a log statement that will return the number of elements in the array
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // creating a log statement that will return the strings individually by specifying th element's index
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // Creating a for loop that will go through the array and log every item in the array
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // Refactoring the code above. This will do the same thing as the code above
    names.forEach(function(name){
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    // Creating a new array called 'someArray'
    let someArray = [1, 2, 3, 4, 5];
    // This function will return the first item in the array
    function first(){
        console.log(someArray[0]);
    }
    // This function will return the second item in the array
    function second(){
        console.log(someArray[1]);
    }
    // This function will return the last item in the array
    function last(){
        console.log(someArray[someArray.length - 1]);
    }
    // Calling all three functions to see results in the console
    first();
    second();
    last();
})();