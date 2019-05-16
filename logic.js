$(document).ready(function() {

    // hide .navbar first
    $(".navbar").hide();
      
    // fade in .navbar
    $(function () {
        $(".wrapper").on("scroll", function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 200) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });    
    });

    var typed = new Typed('#typed', {
        strings: ["Web Designer", "Backend and Frontend", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 30,
        smartBackspace: true,
        backDelay: 2000,
        loop: true,
        loopCount: Infinity
    });
});