$(document).ready(function() {

	$('#startGame').on('click', function() {
		
	})
})
	var lastClicked;

	var initialize = grid(10, 10, function(el, row, col, i) {
		console.log('in initialize');
		console.log('clicked on element ', el);
		console.log('clicked on row ', row);
		console.log('clicked on col ', col);
		console.log('clicked item ', i);

		el.className = 'clicked';
		if(lastClicked) {
			lastClicked.className='';
			lastClicked = el;
		}
	});

	function grid(row, col, callBack) {
	// debugger;
	var i = 0;
	let gameGrid = $('.game');
	for (let r = 0; r < row; ++r) {
		let gridRow = $("<div class='row'>").appendTo(gameGrid);

		for (let c = 0; c < col; ++c) {
			let cell = $("<div class='cell'>").appendTo(gridRow);
			cell.html("<p>" + ++i + "</p>");

			cell.click(function(el, r, c, i) {
				return function() {
					callBack(el, r, c, i);
				}
			}(cell, r, c, i), false)
		}
	}
	return grid;
}




