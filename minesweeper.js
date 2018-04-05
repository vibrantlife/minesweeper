$(document).ready(function() {
	$('#startGame').on('click', function() {
		$('.game').html('')
		initialize();
	})
})

var initialize = function() {
		grid(10, 10, function(el, row, col, i) {
		var lastClicked = el;
			if (lastClicked) {
				$(lastClicked).children().removeClass('clicked');
			}
			lastClicked = el;
		})

}

function grid(row, col, callBack) {
	let numMines = 10;
	let placeHolderVal = 0;
	let numOfCells = row * col;
	let gameGrid = $('.game');

	//build grid
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

	//place mines && caution (X)
	let i = 0;
	while ( i <= numMines) {
		let randomCell = Math.floor(Math.random() * numOfCells);
		let cell = '.cell_'
		let target = (cell + randomCell)
		let caution = "<i class='fa fa-times-circle selected caution clicked'>";
		
		let bottom = cell + (randomCell + 10);
		let bottomLeft = cell + (randomCell + 9);
		let bottomRight = cell + (randomCell + 11);
		let top = cell + (randomCell - 10);
		let topLeft = cell + (randomCell - 11);
		let topRight = cell + (randomCell - 9);
		let left = cell + (randomCell - 1);
		let right = cell + (randomCell + 1);

		if ($(target).html() === '_') {
				$(target).html("<i class='fa fa-bomb selected bomb clicked'>");

					if ($(bottom).html() === '_' ) {
						$(bottom).html(caution);
					}
					if ($(top).html() === '_') {
						$(top).html(caution);
					}
					if ($(left).html() === '_') {
						if ((target).charAt(target.length - 1) === '0') {
							continue;
						}
						else {
							$(left).html(caution);
						}
					}
					if ($(right).html() === '_') {
						if ((target).charAt(target.length - 1) === '9') {
							continue;
						}
						else {
							$(right).html(caution);
						}
					}
					if ($(bottomLeft).html() === '_') {
						if ((target).charAt(target.length - 1) === '0') {
							continue;
						}
						else {
							$(bottomLeft).html(caution);
						}
					}
					if ($(bottomRight).html() === '_') {
						if ((target).charAt(target.length - 1) === '9') {
							continue;
						}
						else {
							$(bottomRight).html(caution);
						}
					}
					if ($(topLeft).html() === '_') {
						if ((target).charAt(target.length - 1) === '0') {
							continue;
						}
						else {
							$(topLeft).html(caution);
						}
					}
					if ($(topRight).html() === '_') {
						if ((target).charAt(target.length - 1) === '9') {
							continue;
						}
						else {
							$(topRight).html(caution);
						}
					}

		}
		i++;
	}

	//place safe tiles
	$('.cell').each(function(i, cell) {
		if (!$(cell).children().hasClass('selected')) {
			$(cell).html("<i class='fa fa-check-circle safe clicked'>")
		}
	});
}







