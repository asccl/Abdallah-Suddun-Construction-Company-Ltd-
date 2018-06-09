$(document).ready(function () {
    $(".burger, .nav-links").click(function () {
        $("#menu").toggleClass("close");
        $("#menu").animate({
            transition: '.4s ease'
        })
        
    });
});

window.sr = ScrollReveal({
    reset: true
});


sr.reveal('.titles', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 20,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
sr.reveal('.intro-header', {
    origin: 'right',
    distance: '100px',
    duration: 1000,
    delay: 0,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
sr.reveal('.service', {
    origin: 'top',
    distance: '2px',
    duration: 900,
    delay: 50,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
sr.reveal('.get-started', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 50,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
sr.reveal('.reason', {
    origin: 'right',
    distance: '100px',
    duration: 1000,
    delay: 50,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
sr.reveal('.work-row', {
     origin: 'bottom',
    //opacity: 0,
    //distance: '100px',
    duration: 500,
    delay: 0,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
sr.reveal('.form', {
     origin: 'bottom',
    //opacity: 0,
    //distance: '100px',
    duration: 500,
    delay: 0,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55 )',
    mobile: true
});
