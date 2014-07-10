
jQuery(document).ready(function() {

jQuery(function () {
                var austDay = new Date();
                austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 30);
                $('#defaultCountdown').countdown({until: austDay});
                $('#year').text(austDay.getFullYear());
            });


// Or, to start a slideshow, just pass in an array of images
            jQuery('.coming-soon').backstretch([
              "img/backgrounds/6.jpg",
              "img/backgrounds/7.jpg"    
            ], {fade: 1000, duration: 4000});



});

