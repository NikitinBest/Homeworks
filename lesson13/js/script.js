$(document).ready(function() {

	$(".container:first").on("click", function(event){
		let target = event.target;
		if(target == $(".main_btn:first") || target == $(".main_btna:first") || target == $("#sheldure")){
			$(".overlay:first").fadeOut();
			$(".modal:first").slideDown();
		}
	});


	$(".close:first").on('click', function() {
		$(".overlay:first").fadeIn();
		$(".modal:first").slideUp();
	});



});