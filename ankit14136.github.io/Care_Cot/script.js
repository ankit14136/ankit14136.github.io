AOS.init();

$(window).scroll(function(){
    $("#myfade").css("opacity", 1 - $(window).scrollTop() / 250);
  });

$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});