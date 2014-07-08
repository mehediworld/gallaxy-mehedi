
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "img/backgrounds/6.jpg"
    , "img/backgrounds/7.jpg"
    
    ], {duration: 2000, fade: 850});

    /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = 64 * 24 * 60 * 60 * 1000 + now.valueOf();
    $('.counter').countdown(countTo, function(event) {
        var $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.'+event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });

    /*
        Tooltips
    */
    $('#social a.facebook').tooltip();
    $('#social a.twitter').tooltip();
    $('#social a.dribbble').tooltip();
    $('#social a.googleplus').tooltip();
    $('#social a.pinterest').tooltip();
    $('#social a.flickr').tooltip();



});

