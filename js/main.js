$(document).ready(function() {
    AOS.init();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});