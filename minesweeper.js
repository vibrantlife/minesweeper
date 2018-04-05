$(document).ready(function() {
	$('#startGame').on('click', function() {
		initialize();
	})
})
	var initialize = function() {
	var lastClicked;
		grid(10, 10, function(el, row, col, i) {
			console.log('clicked on element ', el);
			console.log('clicked on row ', row);
			console.log('clicked on col ', col);
			console.log('clicked item ', i);
			$(el).addClass('clicked');
			console.log(lastClicked)
			if (lastClicked) {
				console.log(lastClicked)
				lastClicked.removeClass('clicked');
			}
			lastClicked = el;
		})
	}



	function grid(row, col, callBack) {
	var i = 0;
	let gameGrid = $('.game');
	for (let r = 0; r < row; r++) {
		let gridRow = $("<div class='row'>").appendTo(gameGrid);

		for (let c = 0; c < col; c++) {
			let cell = $("<div class='cell'>").appendTo(gridRow);
			++i;
			cell.html('_');

			cell.click(function(el, r, c, i) {
				return function() {
					callBack(el, r, c, i);
				}
			}(cell, r, c, i))
		}
	}
}




