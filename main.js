
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


$(document).ready(function () {
    //smooth scrolling
    // $('nav a[href*="#"]').on('click',function(){
    //     $('html,body').animate(keyframes:{
    //         scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, options: 2000);
    // }

    //when click button -- goes to top
    // $('#up').on('click', function(){
    //     $('html,body').animate(keyframes:{
    //         scrollTop: 0
    //     },options: 2000);
    // })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true  //animatino only happens once
    });

});

