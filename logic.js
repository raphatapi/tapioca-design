$(document).ready(function() {

    var typed = new Typed('#typed', {
        strings: ["Web Developer", "Frontend", "HTML5 CSS3 JS", "Backend", "Node Express MySQL MongoDB"],
        typeSpeed: 70,
        backSpeed: 30,
        smartBackspace: true,
        backDelay: 800,
        showCursor: false,
        loop: true,
        loopCount: Infinity
    });

    $(".ct-btn-scroll").click(function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hashTop = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hashTop).offset().top - $("nav").outerHeight(true) + 1
              }, 1600, function(){
            });
        } // End if
    });

    $(document).scroll(function () {
        //Method 1: Using addClass and removeClass
        if ($(this).scrollTop() > $(".cover").outerHeight(true)) {
            $('.navbar').addClass('navbar-shrink');
            $('.nav-item a i').addClass('fa-lg').removeClass('fa-2x').css('transition', '0.5s');
            $('.rounded-circle').css({
                'width' : '50px',
                'height' : '50px',
                'transition' : '0.5s'
            });
            $('.navbar-brand span').css({
                'font-size': '2rem',
                'trasition': '0.5s'
            });
            $('.static h1').css({
                'margin-top': '10%'
            });
        } else {
            $('.navbar').removeClass('navbar-shrink');
            $('.nav-item a i').addClass('fa-2x').removeClass('fa-lg').css('transition', '0.5s');
            $('.rounded-circle').css({
                'width' : '80px',
                'height' : '80px'
            });
            $('.navbar-brand span').css({
                'font-size': '3rem',
                'transition': '0.5s'
            });
            $('.static h1').css({
                'margin-top': '0'
            });
        }
    });

    $(".cover").paroller({ factor: 0.5, factorXs: 0.2, factorSm: 0.3});
    $('.paroller').paroller();

    AOS.init({
        duration: 1500,
        easing: 'ease-in-out-back'
      });

});