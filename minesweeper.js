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
	row = $('#row').val() ? parseInt($('#row').val()) : 10;
	col = $('#col').val() ? parseInt($('#col').val()) : 10;
	let numOfCells = row * col;
	let mineCalc = Math.floor(Math.random() * row) + 1;
	let numMines = (mineCalc > numOfCells) ?  Math.floor(mineCalc - (numofCells/2)) : mineCalc;
	$('#row').val(row)
	$('#col').val(col)
	$('#mines').val(numMines);
	let cellId = 0;
	const gameGrid = $('.game');

	//build grid
	for (let r = 0; r < row; r++) {
		let gridRow = $("<div class='row'>").appendTo(gameGrid);

		for (let c = 0; c < col; c++) {
			let cell = $("<div class='cell cell_" + cellId +"'>").appendTo(gridRow);
			cell.html('_');
			++cellId;

			cell.click(function(el, r, c, i) {
				return function() {
					callBack(el, r, c, i);
				}
			}(cell, r, c, cellId))
		}
	}

	//place mines && caution (X)
	let i = 0;
	while ( i <= numMines) {
		let randomCell = Math.floor(Math.random() * numOfCells);
		let cellPrefix = '.cell_';
		let target = (cellPrefix + randomCell);
		const caution = "<i class='fa fa-times-circle selected caution clicked'>";
		
		let topLeft = cellPrefix + (randomCell - 11);
		let top = cellPrefix + (randomCell - 10);
		let topRight = cellPrefix + (randomCell - 9);
		let left = cellPrefix + (randomCell - 1);
		let right = cellPrefix + (randomCell + 1);
		let bottomLeft = cellPrefix + (randomCell + 9);
		let bottom = cellPrefix + (randomCell + 10);
		let bottomRight = cellPrefix + (randomCell + 11);

		if ($(target).html() === '_') {
			$(target).html("<i class='fa fa-bomb selected bomb clicked'>");

				if ($(bottom).html() === '_' ) {
					$(bottom).html(caution);
				}
				if ($(top).html() === '_') {
					$(top).html(caution);
				}

				if (placeCaution(left, '0', target, caution)) {
					continue;
				}

				if (placeCaution(right, '9', target, caution)) {
					continue;
				}

				if (placeCaution(bottomLeft, '0', target, caution)) {
					continue;
				}
				if (placeCaution(bottomRight, '9', target, caution)) {
					continue;
				}
				if (placeCaution(topLeft, '0', target, caution)) {
					continue;
				}
				if (placeCaution(topRight, '9', target, caution)) {
					continue;
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

var placeCaution = function(location, checkPoint, target, caution) {

	if ($(location).html() === '_') {
		if((target).charAt(target.length - 1) === checkPoint) {
			return true;
		}
		else {
			$(location).html(caution);
		}
	}
	return false;
}








