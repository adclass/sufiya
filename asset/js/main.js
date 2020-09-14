$(function(){
          $(window).scroll(function(){
            var menu = document.getElementsByClassName('.navbar');
                 if ( $(window).scrollTop() > 200 ) {
                $('.navbar').addClass('fixed-top').css("transition","all 1.3s ");
                $('.box').css("display","block");
            } else {
                $('.navbar').removeClass('fixed-top');
                $('.box').css("display","none");
            }
          });

          $(".box").click(function(){
            $(window).scrollTop(0);  
          });


        });