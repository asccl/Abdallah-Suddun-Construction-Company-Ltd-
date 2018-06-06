$(document).ready(function(){
    $(".burger").click(function(){
        $("#menu").toggleClass("close");
        $("#menu").animate({
            top: '50px',
            transition: '.4s ease'
        })
    });
});