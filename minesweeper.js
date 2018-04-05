$(document).ready(function() {
	$('#startGame').on('click', function() {
		initialize();
	})
})



var initialize = function() {
	var lastClicked;
		grid(10, 10, function(el, row, col, i) {
			console.log('clicked on element ', el);
			// console.log('clicked on row ', row);
			// console.log('clicked on col ', col);
			// console.log('clicked item ', i);
			$(el).addClass('clicked');
			if (lastClicked) {
				lastClicked.removeClass('clicked');
			}
			lastClicked = el;
		// console.log(el)
		})

}



function grid(row, col, callBack) {
	let numMines = 10;
	let placeHolderVal = 0;
	let numOfCells = row * col;

	let gameGrid = $('.game');
	for (let r = 0; r < row; r++) {
		let gridRow = $("<div class='row'>").appendTo(gameGrid);

		for (let c = 0; c < col; c++) {
			let cell = $("<div class='cell cell_" + placeHolderVal +"'>").appendTo(gridRow);
			cell.html('_');
			++placeHolderVal;

			cell.click(function(el, r, c, i) {
				return function() {
					callBack(el, r, c, i);
				}
			}(cell, r, c, placeHolderVal))
		}
	}

	let i = 0;
	while ( i < numMines) {
		let randomCell = Math.floor(Math.random() * numOfCells);
		let cell = '.cell_'


		if ($(cell + randomCell).html() === '_') {
			$(cell + randomCell).html("<i class='fa fa-bomb bomb'>");
		}

		i++;
	}


}







