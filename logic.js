$(document).ready(function() {

    var typed = new Typed('#typed', {
        strings: ["Web Designer", "Backend and Frontend", "Web Developer"],
        typeSpeed: 70,
        backSpeed: 30,
        smartBackspace: true,
        backDelay: 800,
        showCursor: false,
        loop: true,
        loopCount: Infinity
    });

    $(".ct-btn-scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#sticky").offset().top
        }, 2000);
    });

});