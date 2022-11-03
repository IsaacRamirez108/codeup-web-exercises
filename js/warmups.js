(function() {
//     "use strict";
// let obj = {
//     Location: 'San Antonio',
//     Price: '$200,000',
//     // getPrice: function(){
//     //     return "Your total home price is " + obj.Price;
//     // }
// };
//     //console.log(obj.getPrice);
//     function getPrice(){
//         return "Your total home price is " + obj.Price;
//     }
//  console.log(getPrice());
//
//
//     function thelongestStr(arr){
//         let longestStr = "";
//         for (let str of arr){
//             if(str.length > longestStr.length){
//                 longestStr = str;
//             }
//         }
//         return longestStr;
//     }
//     const arr = ['Isaac', 'I', 'Isa', 'Is', 'Isaac Ramirez', 'Isaa'];
//     console.log(thelongestStr(arr));
//
//
    const hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        } , {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        } , {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        } , {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "September 21"
        } , {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];


//     function getTallestHampster(arr){
//         let tallest = {heightInMM: 0}
//         arr.forEach(function(el){
//             if(el.heightInMM > tallest.heightInMM){
//                 tallest = el;
//             }
//         })
//     return tallest;
//     }
//     console.log(getTallestHampster(hamsters))

    // function FizzBuzz(){
    //     for (let i = 1; i <= 100; i++){
    //         if (i % 3 == 0 && i % 5 == 0){
    //             console.log("FizzBuzz") ;
    //         } else if (i % 5 == 0){
    //             console.log("Buzz");
    //         }else if (i % 3 == 0){
    //             console.log("Fizz");
    //         }else
    //             console.log(i);
    //     }
    // }
    // console.log(FizzBuzz());



})();