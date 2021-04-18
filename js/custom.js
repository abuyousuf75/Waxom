$(function(){


// CounterUp
$('.counter').counterUp({
    delay: 5,
    time: 3000,
  });


 // lightbox
 $('.venobox').venobox(); 

// Blog Slider

$('.blog-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 1500,
  centerMode:true,
  centerPadding:false,
});



})