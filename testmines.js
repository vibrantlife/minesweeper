let array = new Array();

var minesweeper = function(arr) {
	let mineCount = 10;

	for (let i = 0; i < 10; i++) {
		arr.push(row);
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			arr[i][j] = 0;
		}
	}


	let i = 0;
	while (i < mineCount) {
		let randomMinePlacement = Math.floor(Math.random() * 10);

		if (arr[i][randomMinePlacement] === 0) {
			arr[randomMinePlacement][i] = 'X';
		}
		i++;
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i][j] === 'X') {
				arr[i + 1][j] = 'S';
				arr[i - 1][j] = 'S';
				arr[i][j + 1] = 'S';
				arr[i][j - 1] = 'S';
			}
		}
	}

	console.log(arr)
}

minesweeper(array);