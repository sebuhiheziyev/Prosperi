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


    //change quiz 
    var activSliderCount = 1;
    var mySliders = $(".mySlider");


    var leftOverLay = 0;
    var rightOverLay = 0;

    for (let index = 0; index < mySliders.length; index++) {
        var typeName = mySliders[index].getAttribute("dg");

        if (typeName == 0) {
            leftOverLay += 1;
        }
        else {
            rightOverLay += 1;
        }

    }

    var defoltFirstPercent = 0;
    var defoltSecondPercent = 0;


    // var firstPercent = (100 / (leftOverLay - 1));
    var firstPercent = (100 /leftOverLay);

    // var secondPercent = (100 / (rightOverLay - 1));
    var secondPercent = (100 / rightOverLay);
    



    $(".quiz-answer").click(function () {

        //active quiz none
        var quiz = $(this).parents(".mySlider");
        quiz.addClass("d-none");

        //increase  Percent 
        var quizType = quiz.attr("dg");


        if (quizType == 0) {
            defoltFirstPercent += firstPercent;
            defoltSecondPercent = 0;
            if (defoltFirstPercent >= 100) {
                defoltFirstPercent = 100;
                defoltSecondPercent += secondPercent;
                var test = setInterval(function () {
                    $(".layoutSecond").css('transition', "width 0.2s");
                    $(".layoutSecond").css('width', defoltSecondPercent + '%');
                   
               }, 200);
            }
            $(".layoutFirst").css('width', defoltFirstPercent + '%');
          
        }
        else {
            if (defoltSecondPercent > 100) {
                defoltSecondPercent = 100;
            }
           
            defoltSecondPercent += secondPercent;
            $(".layoutSecond").css('width', defoltSecondPercent + '%');

        }

        activSliderCount += 1;
        changeSlider(activSliderCount);
        if ((activSliderCount - 1) == mySliders.length) {
            location.href = 'creating-plan.html';
        }
    });

    //show next slider
    function changeSlider(n) {
        var i = 0;
        for (var mySlider of mySliders) {
            i++;
            if (i == n) {
                mySlider.classList.remove(
                    'd-none',
                );
            } else {
                mySlider.classList.add(
                    'd-none',
                );
            }

        }
    }


    //click back
    $(".back").click(function () {
        if (activSliderCount > 1) {
            activSliderCount -= 1;
            for (let index = 0; index < mySliders.length; index++) {
                if (index == activSliderCount) {
                    var quizType = (mySliders[index].getAttribute("dg"));
                    if (quizType == 0) {
                        defoltFirstPercent -= firstPercent;
                        $(".layoutFirst").css('width', defoltFirstPercent + '%');
                    }
                    else {
                        defoltSecondPercent -= secondPercent;
                        $(".layoutSecond").css('width', defoltSecondPercent + '%');
                    }
                }
            }
            changeSlider(activSliderCount);
        }
        else {
            // $(".quiz-area").addClass("d-none");
            // $(".go-quiz").removeClass("d-none");
            location.href = 'index.html';

            $(".layoutFirst").css('width', 0 + '%');
            $(".layoutSecond").css('width', 0 + '%');
        }
    });


    //change quiz end



    //plan page in loading 
    var durationCounter = 10000;    //plan page in loading min
    var counterValue = $(".plan").length;
    var durationPlan = durationCounter / counterValue;



    //plan page in li add active class
    var durationPlan = durationCounter / counterValue;

    $('.counter-value').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()

        }).animate({
            countNum: countTo
        },

            {
                duration: durationCounter,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum) + "%");

                },
                complete: function () {
                    $this.text(this.countNum + "%");
                    location.href = 'email.html';
                }

            });

    });

    var d = 0;
    var interval = setInterval(function () {
        if (d < counterValue) {
            $(".plan")[d].classList.add('active');
            d += 1;
        }else{
            clearInterval(interval);
        }
    }, durationPlan);
    //end  plan page in li add active 
    
 

    //creating page btn email click
    $(".emailBtn").click(function () {
        location.href = 'payment.html';
    });


    // payment page slider

    var pCount = 1;
    var pSliders = $(".fb-slider");

    $(".back-p").click(function () {
        if (pCount == 1) {
            pCount = pSliders.length;
        } else {
            pCount -= 1;

        }
        paymentSlider(pCount);
    });

    $(".next-p").click(function () {
        if (pCount == pSliders.length) {
            pCount = 1;
        }
        else {
            pCount += 1;
        }
        paymentSlider(pCount);

    });

    function paymentSlider(c) {
        var i = 0;
        for (var pSlider of pSliders) {
            i++;
            if (i == c) {
                pSlider.classList.remove(
                    'd-none',
                );
            } else {
                pSlider.classList.add(
                    'd-none',
                );
            }
        }
    }

    // payment page slider end

    // time 
    var timer2 = "10:00";
    var intervalT = setInterval(function() {

    var timer = timer2.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0) clearInterval(intervalT);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    $('.timer').html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
    }, 1000);
});



