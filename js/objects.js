(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // Creating a variable called 'person' that stores a set of objects
    let person = {
        // firstName & lastName are the Objects created inside the variable
        firstName: 'Isaac',
        lastName: 'Ramirez',
        // This is a part of question 2
        // Creating a new method 'sayHello'
        sayHello: function(){
            // This method will return "Hello form Isaac Ramirez"
            return "Hello from " + person.firstName + " " + person.lastName;
        }
    }
    // Logging the objects into the console separately
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // calling our sayHello() Method
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    // Creating an array with a list objects & storing it into a variable called 'shoppers'
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // Creating a forEach loop to loop through the array
    shoppers.forEach(function(shopper) {
        // Creating a variable to calculate the discount
        let discount = (shopper.amount * 0.12)
        // Creating a variable to calculate the total after discount is applied
        let totalDiscount = (shopper.amount - discount);
        // if shoppers amount is greater than 200 it will log this into the console
        if (shopper.amount > 200){
            console.log("Shopper Name: " + shopper.name);
            console.log("total before discount: $" + shopper.amount);
            console.log("total discount: $" + discount);
            console.log("total after discount: $" + totalDiscount);

        } // If less than 200 it will log this into the console instead
        else{
            console.log("Shopper Name: " + shopper.name);
            console.log("Sorry you dont qualify for a discount");
            console.log("Your total is: $" + shopper.amount);
        }

    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // Creating an array with a list objects & storing it into a variable called 'books'
    let books = [
        {title: 'Meditations', author: {firstName: 'Marcus', lastName: 'Aurelius'}},
        {title: 'The Art Of War', author: {firstName: 'Sun', lastName: 'Tzu'}},
        {title: 'The Roman Revolution', author: {firstName: 'Ronald', lastName: 'Syme'}},
        {title: 'To Kill A Mocking Bird', author: {firstName: 'Harper', lastName: 'Lee'}},
        {title: 'The Great Gatsby', author: {firstName: 'Scott', lastName: 'Fitzgerald'}}
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // Using a forEach loop to loop through the array
    books.forEach(function(book) {
        // Creating a variable to log a '1' for the first index instead of '0'
        const number = books.indexOf(book) + 1;
        console.log("Book # " + number);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + ' ' + book.author.lastName);
    })
})();