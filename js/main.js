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

    
    var firstPercent = (100 / (leftOverLay - 1));
   
   
    var secondPercent = (100 / (rightOverLay - 1 ));



    $(".quiz-answer").click(function () {
        
        //active quiz none
        var quiz = $(this).parents(".mySlider");
        quiz.addClass("d-none");

        //increase  Percent 
        var quizType = quiz.attr("dg");


        if (quizType == 0) {
            defoltFirstPercent += firstPercent;
            console.log(defoltFirstPercent);

            if(defoltFirstPercent > 100){
                defoltFirstPercent = 100;
                $(".layoutSecond").css('width', secondPercent + '%');

            }
            $(".layoutFirst").css('width', defoltFirstPercent + '%');
        }
        else {
            if(defoltSecondPercent > 100){
                defoltSecondPercent = 100;
            }
            defoltSecondPercent += secondPercent;
            $(".layoutSecond").css('width', defoltSecondPercent + '%');

        }

        activSliderCount += 1;
        changeSlider(activSliderCount);

        if((activSliderCount -1) == mySliders.length){
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
                if(index == activSliderCount){
                    var quizType = (mySliders[index].getAttribute("dg"));
                    if (quizType == 0) {
                        defoltFirstPercent -= firstPercent;
                        $(".layoutFirst").css('width', defoltFirstPercent + '%');
                        console.log(activSliderCount);
                        console.log(index);
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

    
    //plan page in loading 
    var durationCounter = 10000;    //plan page in loading min
    var  counterValue = $(".plan").length;
    var durationPlan = durationCounter / counterValue;

    //plan page in li add active class
    var durationPlan = durationCounter / counterValue;
    console.log(durationPlan);

    $('.counter-value').each(function() {
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
            step: function() {
              $this.text(Math.floor(this.countNum) + "%");
              
            },
            complete: function() {
              $this.text(this.countNum + "%");
              location.href = 'email.html';
            }
  
        });
       
    });

    //plan add active class
    // var d = 0;
    // setInterval(function() {
    //     if(d < counterValue ){
    //         $(".plan")[d].classList.add('active');
    //          d +=1;
    //     }else{
    //         console.log("s");
    //     }
       
    //  }, durationPlan)

    //creating page btn email click
    $(".emailBtn").click(function(){
        location.href = 'payment.html';
    });

});



