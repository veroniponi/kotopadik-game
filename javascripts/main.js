$(function () {

    $("html,body").css("overflow","hidden");

    $(document).mousemove(function(event) {
        $(".custom-cursor").css({
          "top": event.pageY + "px",
          "left": event.pageX + "px"
        });
    });
      
    $('.start').fadeIn(1000); 
    
    $('.start').click(function(){
        $('.start').css('display', 'none');
        $(".firstpage").fadeIn(1000);
    });



    $('.cat').click(function(){
        $('.firstpage').css('display', 'none');
        $('.hellopage').css('display', 'block');
    });

    $('.knopka').click(function(){
        $('.hellopage').fadeOut(1000);
        $('.podskazka').fadeIn(1000);
        $('.podskazka').delay(5000).fadeOut(400);
        $('.move').fadeIn(8000);
    });

    $('.knopkastop2').click(function(){
            $('.dog').css("animation-play-state", "paused"); 
            $('.snake').css("animation-play-state", "paused");
            $('.cat1').css("animation-play-state", "paused");
            $('.cat2').css("animation-play-state", "paused");
            $('.cat3').css("animation-play-state", "paused");
            $('.cat4').css("animation-play-state", "paused");
            $('.cat5').css("animation-play-state", "paused");
            $('.fish').css("animation-play-state", "paused");
    });

    $('.knopkastop2').click(function(){
        $('.movetexture').css("animation-play-state", "paused");
        $('.knopkastop2').css('display', 'none');
        $('.knopkaplay2').css('display','block');
    });

    $('.knopkaplay2').click(function(){
        $('.dog').css("animation-play-state", "running"); 
        $('.snake').css("animation-play-state", "running");
        $('.cat1').css("animation-play-state", "running");
        $('.cat2').css("animation-play-state", "running");
        $('.cat3').css("animation-play-state", "running");
        $('.cat4').css("animation-play-state", "running");
        $('.cat5').css("animation-play-state", "running");
        $('.fish').css("animation-play-state", "running");
});

    $('.knopkaplay2').click(function(){
        $('.movetexture').css("animation-play-state", "running");
        $('.knopkastop2').css('display', 'block');
        $('.knopkaplay2').css('display','none');
    });


    $(function() {
  
        
        let animals = $('.dog, .snake, .fish');
        
        
        animals.on('click', function() {
          $(this).css('display', 'none');
          
          
          if (animals.filter(function() {
            return $(this).css('display') !== 'none';
          }).length === 0) {
            
           
            $('.welldone').fadeIn(1000);
            $('.move').fadeOut(1000);
          }
        });
        
      });



//ЭТО БЫЛИ ПОПЫТКИ, ОЧЕНЬ СТАРАЛАСЬ И ПОЛУЧИЛОСЬ!!

    // $(function() {
    //     var animals = new Array($('.dog'),$('.snake'), $('.fish'));
    //     function click( click, ui ) {
                
    //              if ($('#yourElement').css('display') == 'none'){
                                
    //                     $('.welldone3').css('display', 'block');
    //                     $('.komnata2').fadeIn(1000);
                                
                                
                            
                        
    //                 }
    //     }

    


//     var animals = Array('.dog', '.snake', '.fish');
    
//     $(animals).click(function(){
//         $(animals).css('display') == 'none';
//             if (animals.css('display') == 'none') {
//             $('move').css('display', 'none');
//             setTimeout(function () {
//             $('.welldone').fadeIn(1000);
//         }, 20);
//     }
// })


// $(document).ready(function() {
   
//     $("#snake" && "#fish").click(function() {
//       $("#snake" && "#fish").css('display', 'none');
//         if ($("#snake" && "#fish").css('display', 'none')) {
//           $("#move").css('display', 'none');
//         }
//       });
//     });

  
                                        
      

$('.cat1, .cat2, .cat3, .cat4').click(function(){
    $('.error').fadeIn(1000).fadeOut(4000);
    $('.text15').fadeIn(1000).fadeOut(4000);
});


    $('.knopkanext2').click(function(){
        $('.thankyou').fadeIn(1000);
        $('.welldone').fadeOut(1000);
        
    }); 

    $('.knopka2').click(function(){
        $('.thankyou').fadeOut(1000);
        $('.podskazka2').fadeIn(1000);
    });

    $('.podskazka2').click(function(){
        $('.podskazka2').fadeOut(1000);
        $('.barmen').fadeIn(1000);
    });



    $('.coke2').click(function(){
        $('.barmen').fadeOut(1000);
        $('.welldone2').fadeIn(1000);
    });

    $('.rome').click(function(){
        $('.barmen').fadeOut(1000);
        $('.false').fadeIn(1000);
    });

    $('.wine').click(function(){
        $('.barmen').fadeOut(1000);
        $('.false').fadeIn(1000);
    });

    $('.bleizer').click(function(){
        $('.barmen').fadeOut(1000);
        $('.false').fadeIn(1000);
    });

    $('.wiskey').click(function(){
        $('.barmen').fadeOut(1000);
        $('.false').fadeIn(1000);
    });

    $('.knopkareplay').click(function(){
        $('.false').fadeOut(1000);
        $('.barmen').fadeIn(1000);
    });

    $('.knopkanext3').click(function(){
        $('.welldone2').fadeOut(1000);
        $('.goodjob').fadeIn(1000);
    });

    $('.knopka3').click(function(){
        $('.goodjob').css('display', 'none');
        $('.podskazka3').fadeIn(1000).delay(5000).fadeOut(400);
        $('.floors').fadeIn(8000);
    });

    $('.floor4').click(function(){
        $('.floors').css('display', 'none');
        $('.komnata1').fadeIn(1000);
    });


    $('.komnata1').click(function(){
        $('.komnata1').fadeOut(1000);
        $('.komnata2').fadeIn(1000);
    });

   

    $('.dj3').click(function(){
        $('.dj3').css('display', 'none');
        $('.dj22').css('display', 'block');
    });

    $('.pautina2').click(function(){
        $('.pautina2').css('display', 'none');
    });

    $('.disco22').click(function(){
        $('.disco22').css('display', 'none');
        $('.disco222').css('display', 'block');
    });



//ЭТО ВОТ МОИ МНОГОЧИСЛЕННЫЕ ПОПЫТКИ, НО У МЕНЯ ТАКИ ПОЛУЧИЛОСЬ!!!! Оставила посмотреть

    // $(function() {
    //     let count = 0;
    //     function drag( event, ui ) {


    //              if (ui.position.left + ui.helper.width() > 835 && 
    //                     ui.position.left < 941 && 
    //                     ui.position.top + ui.helper.height()> 446 && 
    //                     ui.position.top < 546){
                                
    //                                 $('.welldone3').css('display', 'block');
    //                                 $('.komnata2').fadeOut(1000);
                        
    //                 }
    //     }


    //     $('.bottle12').draggable();
    //     $('.bottle22').draggable();
    //     $('.bottle32').draggable();
    //     $('.bottle42').draggable();
    //     $('.paper12').draggable();
    //     $('.paper22').draggable();
    //     $('.paper32').draggable();
    //     $('.paper42').draggable();
    //     $('.paper52').draggable({
    //         drag: drag
    //     });
   
    //     });
       

    // $(document).ready(function() {
    //     

    //     $('.bottle11, .bottle12, .bottle13, .bottle14, .paper12, .paper22, .paper32, .paper42, .paper52').draggable();
      
    //    
    //     $('.bottle11, .bottle12, .bottle13, .bottle14, .paper12, .paper22, .paper32, .paper42, .paper52').on('dragstop', function() {
    //       if ($(this).position().left > $('.bin').position().left && $(this).position().top > $('.bin').position().top) {
    //         
    //         $('.komnata2').css('display', 'none');
    //       }
    //     });
    //   });

    $(document).ready(function() {
       
        var totalElements = 9;
       
        var elementsInBin = 0;
        
        
        $('.bottle12, .bottle22, .bottle32, .bottle42, .paper12, .paper22, .paper32, .paper42, .paper52').draggable({
          stop: function(event, ui) {
            
            if ($(this).position().left > $('.bin').position().left &&
                $(this).position().top > $('.bin').position().top) {
              elementsInBin++;
            } else {
              elementsInBin--;
            }
            
            
            if (elementsInBin === totalElements) {
              $('.komnata2').fadeOut(1000);
              $('.welldone3').fadeIn(1000);
            }
          }
        });
      });
      

   
      
    $('.knopkanext4').click(function(){
        $('.welldone3').fadeOut(500);
        $('.another').fadeIn(1000);
        $('.say6').fadeOut(8000);
        $('.text14').fadeOut(8000);
    });

    $('.floor3').click(function(){
        $('.another').fadeOut(500);
        $('.komnata3').fadeIn(1000);
        $('.say7').fadeOut(6000);
        $('.text13').fadeOut(7000);
        
    });

  

$(document).ready(function() {

    var $komnata3 = $('.komnata3');
    var $goodjob = $('.goodjob2');
  
    $('.sofa').on('click', function() {
      $('.sofa').css('display', 'none');
      $('.normsofa').css('display', 'block');
      checkDisplay();
    });
    
    $('.window').on('click', function() {
      $('.window').css('display', 'none');
      $('.normokno').css('display', 'block');
      checkDisplay();
    });
    
    $('.vanna').on('click', function() {
      $('.vanna').css('display', 'none');
      $('.normvanna').css('display', 'block');
      checkDisplay();
    });
    
    $('.lamp1').on('click', function() {
      $('.lamp1').css('display', 'none');
      $('.normlampa1').css('display', 'block');
      checkDisplay();
    });
    
    $('.lamp2').on('click', function() {
      $('.lamp2').css('display', 'none');
      $('.normlampa2').css('display', 'block');
      checkDisplay();
    });
    
    $('.pautina3').on('click', function() {
      $('.pautina3').css('display', 'none');
      checkDisplay();
    });
    
    $('.luzha2').on('click', function() {
      $('.luzha2').css('display', 'none');
      checkDisplay();
    });
  
    $('.luzha').on('click', function() {
      $('.luzha').css('display', 'none');
      checkDisplay();
    });
  
    function checkDisplay() {
      if ($('.sofa').css('display') == 'none' && $('.window').css('display') == 'none' && $('.vanna').css('display') == 'none' && $('.lamp1').css('display') == 'none' && $('.lamp2').css('display') == 'none' && $('.luzha').css('display') == 'none' && $('.luzha2').css('display') == 'none' && $('.pautina3').css('display') == 'none') {
        $komnata3.fadeOut('slow', function() {
          $goodjob.fadeIn(1000);
        });
      }
    }
  
  });
  
  
  
      
   
    
    

});