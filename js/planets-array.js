(function(){
    "use strict";
    // Creating an array of strings that contain the name of different planet names
    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    // I am using the unshift() method to add "The Sun" to the beginning of the array
    planets.unshift("The Sun");
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    // I am using the push() method to add "Pluto" to the end of the array
    planets.push("Pluto");
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    // I am using the shift() method to remove "The Sun" from the beginning of the array
    planets.shift("The Sun");
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    // I am using the pop() method to remove "Pluto" of the end of the array
    planets.pop("Pluto");
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    // I am creating a new variable contains the indexOf() method to locate a specific index in the array in this case "Earth"
    let index = planets.indexOf('Earth');
    console.log('Finding and logging the index of "Earth" in the planets array.');
    // I am calling this variable to the console to return the index number of "Earth"
    console.log(index);

    // I am using the reverse() method to reverse the order of the array
    planets.reverse();
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    // I am using the sort() to sort the array in order in this case alphabetical order
    planets.sort();
    console.log("Sorting the planets array.");
    console.log(planets);
 })();