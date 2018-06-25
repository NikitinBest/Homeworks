$(document).ready(function() {

	$(document).ready(function() {
	    $(".main_btn:first, .main_btna:first, #sheldure").on("click", function(){
	            $(".overlay:first").fadeIn();
	            $(".modal:first").slideDown();
	    });
	    $(".close:first").on('click', function() {
	        $(".overlay:first").fadeOut();
	        $(".modal:first").slideUp();
	    });
	});


});