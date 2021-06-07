const pos = document.documentElement;
pos.addEventListener("mousemove", e => {
  pos.style.setProperty('--x', e.clientX + "px");
  pos.style.setProperty('--y', e.clientY + "px");
})
var wind = $(window);




const fbanner = document.querySelector('.footer-banner');
    // window.addEventListener('scroll', function(){
    //   const value = 280 - window.scrollY;
    //   fbanner.style.clipPath = "circle("+ value +"px at top)";
    // });
    
    
    


if(window.scroll() > 5000) {
window.addEventListener('scroll', function(){
  const value = 4000 - window.scrollY;
  fbanner.style.clipPath = "circle("+ value +"px at top)";
});

};



// var $sectionfourOST = $('.section-four').offset().top;
// $(window).scroll(function(){
//   if ($(this).scrollTop() > $sectionfourOST) {
//     fbanner.style.position='fixed';
//   }else {
//    fbanner.style.display = 'none'; 
//   }
// });







$(window).scroll(function(){
  var $scrt = $(this).scrollTop();
  var socialbox = $('.socialbox');
  var $under = ($scrt *= 0.12);
  socialbox.css({top:$under});

  
});


if ($('.section-two').scrollTop() > 1000 ) {
  $('body').toggleClass('nav-active');
}else if($(window).scrollTop() < $('.section-two').offset().Top){
  $('body').removeClass('nav-active');
}




// $(function(){
//   var $menu = $('.nav-content-LO ul li');
//   // var $menu2 = $('#scrolltwo');
//   // var $menu3 = $('#scrollthree');
//   // var $menu4 = $('#scrollfour');
//   var $contents = $('body > .scrolls');

//   console.log($contents);


//   $menu.click(function(x){
//     x.preventDefault();
//     $(this).addClass('on').siblings().removeClass('on');
//     var idx =$(this).index();

//     console.log(idx);
//   });
// })



// $(window).load(function(){
//   $('.').fadeOut();
// });




var wind = $(window);


$('.menu-icon').click(function(){
  $('body').toggleClass('nav-active'); 
});
// $('.nav_list-item').click(function(){
//   $('body').removeClass('nav-active');
// });


// wind.scroll(function(){
//   if($(this).scrollTop() > $title1OST) {
//     $title1.find('.').addClass('card-active');
//   }else {
//     $title1.find('.one-title').removeClass('card-active');
//   };
//   if($(this).scrollTop() > $title2OST) {
//     $title2.find('.one-title').addClass('card-active');
//   }else {
//     $title2.find('.one-title').removeClass('card-active');
//   };
// });  




var controller = new ScrollMagic.Controller();






// $(window).scroll(function(){ 
//   if()
// })








// VanillaTilt.init(document.querySelectorAll(".hexagon"), {
//   max: 45,
//   speed: 300
// });



$(document).ready(function () { 
  var page_url = window.location.href; 
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1); 
  // alert(page_id); 
if (page_id == 'scrollone') { 
  $('html, body').animate({ 
      scrollTop: $('scrollone').offset().Top 
  }, 0.35);
   } else if (page_id == 'scrolltwo') { 
       $('html, body').animate({ 
           scrollTop: $('scrolltwo').offset().Top 
          }, 0.35); 
  } else if (page_id == 'scrollthree') { 
       $('html, body').animate({ 
          scrollTop: $('scrollthree').offset().Top 
      }, 0.35); 
  } else if (page_id == 'scrollfour') { 
       $('html, body').animate({ 
          scrollTop: $('scrollfour').offset().Top 
       }, 0.35);
   } 
    }); 


// 지금꺼 