( function($) {
	
	"use strict";
	
	// Owl Carousel 1
	$("#owl-1").owlCarousel({
		navigation : false, // Show next and prev buttons
		navigationText: false,
		slideSpeed : 300,
		pagination: true,
		paginationSpeed : 400,
		items : 3,
		itemsDesktop: [1199,2],
		itemsDesktopSmall: [991,2],
		itemsTablet: [768,1],
		singleItem:false,
		responsive: true
 
		// "singleItem:true" is a shortcut for:
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});
	
	// Owl Carousel 2
	$("#owl-2").owlCarousel({
		navigation : false, // Show next and prev buttons
		navigationText: false,
		slideSpeed : 300,
		pagination: true,
		paginationSpeed : 400,
		items : 4,
		itemsDesktop: [1199,3],
		itemsDesktopSmall: [991,2],
		itemsTablet: [768,2],
		singleItem:false,
		responsive: true
 
		// "singleItem:true" is a shortcut for:
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});
	
	// Owl Carousel 3
	$("#owl-3").owlCarousel({
		navigation : true, // Show next and prev buttons
		navigationText: false,
		slideSpeed : 300,
		pagination: false,
		paginationSpeed : 400,
		items : 1,
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [991,2],
		itemsTablet: [768,1],
		singleItem:true,
		responsive: true
 
		// "singleItem:true" is a shortcut for:
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});
	
	$(function() {
        $('.m-open').on('click', function( e ) {
            Custombox.open({
                target: '#modal',
                effect: 'blur'
            });
            e.preventDefault();
        });
    });
	
	$(function () {
        $('#datetimepicker1').datetimepicker();
		$('#datetimepicker2').datetimepicker();
    });

	
	/* ==============================================
		TO TOP
	=============================================== */
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	
})(jQuery);