"use strict";

$(function() {
    // First JQuery Section Exercises
    // let firstAlert = $('#Main-Header').html();
    // alert(firstAlert);
    //
    // let secondAlert = $('#Second-Header').html();
    // alert(secondAlert);

    // Second JQuery Section Exercises
    //$('.codeup').css('border', '1px solid red');

    // Third JQuery Section Exercises
    // $('.codeup').css('font-size', '20px');
    // $('h1').css('background-color', 'yellow');
    // $('p').css('background-color', 'yellow');
    // $('li').css('background-color', 'yellow');
    // let h1Alert = $('h1').html();
    // alert(h1Alert);

    // Fourth JQuery Section Exercises testing
    //$('h1, p, li').css('background-color', 'yellow');

    // Mouse Events Exercises
    $('h1').click(function() {
        $(this).css('background-color', '#00B2A9');
    });

    $('p').dblclick(function() {
        $(this).css('font-size', '18px');
    });

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

});