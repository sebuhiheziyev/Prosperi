"use strict";
$(window).on('load', function () {

    // open and close menu
    $(".menuOpen").click(function () {
        //icons
        $(".menuOpen").addClass("d-none");
        $(".menuClose").removeClass("d-none");


        //menu div
        $(".menu").removeClass("d-none");
        $("#nav").addClass("navbar-open");

    });

    $(".menuClose").click(function () {
        //icons
        $(".menuClose").addClass("d-none");
        $(".menuOpen").removeClass("d-none");

        //menu div
        $(".menu").addClass("d-none");
        $("#nav").removeClass("navbar-open");
    });




    // open quiz
    $(".go-quiz-btn").click(function () {
        $(".go-quiz").hide();

        //open quiz
        $(".quiz-area").removeClass("d-none");
        $(".quiz-area").addClass("d-block");

    });

    //back quiz
    $(".back").click(function () {
        console.log("salam");
    });


    //change quiz 
    var activSliderCount = 1;
    var mySliders = $(".mySlider");



    $(".quiz-answer").click(function () {
        var quiz =   $(this).parents(".mySlider");
        quiz.addClass("d-none");
        
        var quizType = quiz.attr("dg");



        if(quizType == 0){
           $(".layoutFirst").css('width', '100%');
        }
        else{
            $(".layoutSecond").css('width', '70%');
           
        }

        // $(this).parents(".mySlider").addClass("d-none");
        activSliderCount += 1;
        changeSlider(activSliderCount);
    });

    function changeSlider (n){
        var i = 0;
        for(var mySlider of mySliders){
           i++;
           if(i == n){
                mySlider.classList.remove(
                    'd-none',
                );
           }
        }
    }

});



