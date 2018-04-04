

var initialize = function() {
	let width = 10;
	let height = 10;
	let grid = [];

	for (let i = 0; i <= height; i++) {
		$('.game').append("<div class='row'>");
		grid.push([]);
		for (let j = 0; j <= width; j++) {
			$('.game').append("<div clas='cell'><p>" + j +"</p></div>");
			grid[i].push(0)
		}
	}


	console.log(grid)
		
}

