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
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hashTop = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
            $('.wrapper').animate({
                scrollTop: $(hashTop).offset().top - $("nav").outerHeight(true)
              }, 1200, function(){
            });
        } // End if
    });

    $('.wrapper').scroll(function () {
        //Method 1: Using addClass and removeClass
        if ($(this).scrollTop() > $(".cover").outerHeight(true)+1) {
            $('.navbar').addClass('navbar-shrink');
            $('.rounded-circle').css({
                'width' : '60px',
                'height' : '60px',
                'transition' : '0.5s'
            });
            $('.navbar-brand span').css({
                'font-size': '3rem',
                'trasition': '0.5s'
            });
        } else {
            $('.navbar').removeClass('navbar-shrink');
            $('.rounded-circle').css({
                'width' : '100px',
                'height' : '100px'
            });
            $('.navbar-brand span').css({
                'font-size': '4rem',
                'transition': '0.5s'
            });
        }
    });

});