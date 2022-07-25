var $ = jQuery.noConflict();
$(document).ready(function() {
   "use strict";

  $(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-up-sm',
	linkElement: '.fade-page'
  });
  
	if (jQuery.isFunction(jQuery.fn.swipebox)) {

	  $( '.swipebox' ).swipebox();
	}
	if (jQuery.isFunction(jQuery.fn.datepicker)) {
	  $( "#arrivaldate" ).datepicker()
	  .datepicker('widget').wrap('<div class="ll-skin-wedding"/>');
	}
  
   
   if (jQuery.isFunction(jQuery.fn.countdown)) {

		$('#defaultCountdown').countdown({until: new Date(2019, 9 - 1, 15, 21), format: 'y-o-d-h'});
   }						   
  if (jQuery.isFunction(jQuery.fn.owlCarousel)) {
	$("#weddingcarousel").owlCarousel({
	items : 4,
	itemsScaleUp : true,
	theme : "owl-themecarousel"
	});
  }
  
});