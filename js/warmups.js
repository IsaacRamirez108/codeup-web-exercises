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

})();