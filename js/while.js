"use strict";

// Question 1 of While loop Exercise
let x = 1;
let y = 0

while (y < 16) {
x *= 2;
y++;
    console.log(x);
}

// Question 2
// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;

do{
    // This expression will generate a random number between 1 and 5
    let conesTally = Math.floor(Math.random() * 5) + 1;
    if((allCones - conesTally) < 0){
        console.log("Cannot sell you " + conesTally + " cones I only have " + allCones + " ...");
    }else{
        console.log("The number of cones left before the purchase" + allCones);
        allCones -= conesTally;
        console.log(conesTally + " cones sold...");
    }
}while(allCones > 0);

console.log("YAY! we have sold all the cones")
