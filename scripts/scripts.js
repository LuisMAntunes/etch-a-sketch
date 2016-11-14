var squares = 16;


numberOfSquares = function(){
	var size = prompt("How many squares?")
	return size;
}

createGrid = function(squares){
	$('button').after('<div class="container">');
		for (var i = 0; i < squares; i++) {
	 		$('.container').append('<div class="row">');
	 	};
		for (var j = 0; j < squares; j++) {
			$('.row').append('<div class="collumn">')
		};
		$('.collumn').height($('.container').height()/squares);
		$('.collumn').width($('.container').width()/squares);
		$('.collumn').on('mouseenter', function() {
			/* Act on the event */
			$(this).css({'background-color':'black'
						});

	
		});
}


$(document).ready(function(){
	createGrid(squares);
	$("button").on('click', function() {
		var squares = numberOfSquares();
		$('button').nextAll('div').remove();
		createGrid(squares);
	});

});

