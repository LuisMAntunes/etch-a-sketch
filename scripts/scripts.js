$(document).ready(function(){
	$('body').append('<div class="container">');
	for (var i = 0; i < 16; i++) {
	 	$('.container').append('<div class="row">');
	 };
	for (var j = 0; j < 16; j++) {
		$('.row').append('<div class="collumn">')
	};
	$('.collumn').on('mouseenter', function() {
		/* Act on the event */
		$(this).css({'background-color':'black'});
	});
});