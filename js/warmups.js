(function() {
    "use strict";
let obj = {
    Location: 'San Antonio',
    Price: '$200,000',
    // getPrice: function(){
    //     return "Your total home price is " + obj.Price;
    // }
};
    //console.log(obj.getPrice);
    function getPrice(){
        return "Your total home price is " + obj.Price;
    }
 console.log(getPrice());


    function thelongestStr(arr){
        let longestStr = "";
        for (let str of arr){
            if(str.length > longestStr.length){
                longestStr = str;
            }
        }
        return longestStr;
    }
    const arr = ['Isaac', 'I', 'Isa', 'Is', 'Isaac Ramirez', 'Isaa'];
    console.log(thelongestStr(arr));

})();