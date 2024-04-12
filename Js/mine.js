


// for navbar acive 
$(document).ready(function () {

    // let aboutDistance=$("#About").offset().top
    // let windowTop=$(window).scrollTop()
    
    //   $(window).scroll(function () {
    
    //     if(windowTop>=aboutDistance)
    //     {
    //         $(".navbar").css("backgroundColor", "yellow");
    //         document.querySelector(".navbar").style.cssText="background-color: red !important;"
    //         console.log("hi")
    //     }
    //   })














    
    $("nav .nav-item .nav-link").click(function (){
        $('nav .nav-item .nav-link.active').removeClass('active');
        $(this).addClass('active');

    });





    // for slider

    // 1
    $(".fa-plus").click(function (){

        $('.active').removeClass('active');
        $(".one").addClass('active');
    });

    // 2
    $(".plus2").click(function (){
        $('.active').removeClass('active');
        $(".two").addClass('active');
    });
    // 3
    $(".plus3").click(function (){
        $('.active').removeClass('active');
        $(".three").addClass('active');
    });
    // 4
    $(".plus4").click(function (){
        $('.active').removeClass('active');
        $(".four").addClass('active');
    });
    // 5
    $(".plus5").click(function (){
        $('.active').removeClass('active');
        $(".five").addClass('active');
    });
    // 6
    $(".plus6").click(function (){
        $('.active').removeClass('active');
        $(".sex").addClass('active');
    });
    // 7
    $(".plus7").click(function (){
        $('.active').removeClass('active');
        $(".seven").addClass('active');
    });
    // 8
    $(".plus8").click(function (){
        $('.active').removeClass('active');
        $(".e8").addClass('active');
    });
    // 9
    $(".plus9").click(function (){
        $('.active').removeClass('active');
        $(".n9").addClass('active');
    });







    // for counter in numbering

    (function ($) {
        $.fn.count = function(options) {
            var $this = $(this);
            var settings = $.extend({
                startValue: 0,
                endValue: 300,
                durationValue: 4000
            }, options);
            $this.html(settings.startValue).attr('data-count', settings.endValue);
            var countTo = $this.attr('data-count');
            $({ countNum: $this.html()}).animate({
                countNum: countTo
            },
            {
                duration: settings.durationValue,
                easing:'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    console.log('done.');
                }
            });
            return this;
        }
    }( jQuery ));
    
    $(".count-1").count({
        startValue: 0,
        endValue: 500,
      durationValue: 15000
    });
    $(".count-2").count({
        startValue: 0,
        endValue: 350,
        durationValue: 15000
    });
    $(".count-3").count({
        startValue: 0,
        endValue: 15,
        durationValue: 15000
    });
    $(".count-4").count({
        startValue: 0,
        endValue: 80,
        durationValue: 15000
    });
        






    // console.log(`offset =`+$('#About').offset().top)


    let secTop=$("#Home").offset().top
    $(window).scroll(function(){

    let windowTop=$(window).scrollTop()
    if(windowTop>secTop)
    {
        $(".arrow-up").fadeIn(1000)
    }
    else
    {
        $(".arrow-up").fadeOut(1000)
    }


  });






});









