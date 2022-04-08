"use strict";
$(window).on('load', function(){

    // open and close menu
    $(".menuOpen").click(function(){
        //icons
        $(".menuOpen").addClass("d-none");
        $(".menuClose").removeClass("d-none");

        //menu div
        $(".menu").removeClass("d-none");
        $("#nav").addClass("navbar-open");
       
    });

    $(".menuClose").click(function(){
        //icons
        $(".menuClose").addClass("d-none");
        $(".menuOpen").removeClass("d-none");

        //menu div
        $(".menu").addClass("d-none");
        $("#nav").removeClass("navbar-open");


    });



    
   
});



