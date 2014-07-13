// Product Image Rotation
var shop = new cbpShop( document.getElementById( 'cbp-pgcontainer' ) ); 


$(function() {
  // Scrolled by user interaction
  $('.product-caroufredsel_thumb').carouFredSel({
     auto: true,
     prev: '#prev1',
     next: '#next1',
     pagination: "#pager1",
     mousewheel: true,
     swipe: {
        onMouse: true,
        onTouch: true
     },
     scroll : {
         items           : 1,
         easing          : "elastic",
         duration        : 1000,                         
         pauseOnHover    : true
     }           
  });
  // Scrolled by user interaction
  $('.product-gallery--caroufredsel_thumb').carouFredSel({
     auto: false,
     prev: '#prev2',
     next: '#next2',
     pagination: "#pager2",
     mousewheel: false,
  });
  // Scrolled by user interaction
  $('.related-product-caroufredsel').carouFredSel({
     auto: false,
     prev: '#prev3',
     next: '#next3',
     pagination: "#pager3",
     mousewheel: false,
     scroll : {
         items           : 1,
         easing          : "elastic",
         duration        : 1000,                         
         pauseOnHover    : true
     }          
  });            
});


$(document).ready(function(){
    $('#demo-simpleLens-gallery .simpleLens-thumbnails-container img').simpleGallery({
        loading_image: 'img/loading.gif'
    });
    $('#demo-simpleLens-gallery .simpleLens-big-image').simpleLens({
        loading_image: 'img/loading.gif'
    });

    //Add your review
    function addReview() {
      var $ = jQuery;
      
      $('a[href="#reviews"].add-review').click(function(){
        $('.tabs #tab3').trigger('click');
        
        $('html, body').animate({
          scrollTop: $("#tab3").offset().top
        }, 1000);
      });
    }

    addReview();

});

//Removing # tag
( function( $ ) {
   $( 'a[href="#reviews"]' ).click( function(e) {
      e.preventDefault();
   } );
} )( jQuery );

