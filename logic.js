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

});