var tiles = Array.from(document.querySelectorAll('.tile'))
var copy = Array.from(document.querySelectorAll('.tile'))
var X = false

tiles.forEach(function(el) {
	el.onclick = function() {
		if (!this.classList.contains('X') && !this.classList.contains('O')) {
			this.classList.add('X')
			if (checkWin(copy, 0, 1, 2, 'X') || checkWin(copy, 3, 4, 5, 'X') || checkWin(copy, 6, 7, 8, 'X') || checkWin(copy, 0, 3, 6, 'X') || checkWin(copy, 1, 4, 7, 'X') || checkWin(copy, 2, 5, 8, 'X') || checkWin(copy, 0, 4, 8, 'X') || checkWin(copy, 2, 4, 6, 'X')) {
				alert('X Wins')
				X = true
				clearBoard()
			}
			tiles.splice(tiles.indexOf(this), 1)
			setTimeout(drawO, 500)
		}
	}
})

function drawO() {
	if (!(tiles.length)) {
		alert('Try again')
		clearBoard()
	}
	var idx = Math.round(Math.random() * (tiles.length - 1))
	if (tiles[idx] && tiles.length !== 9 && !X) {
		tiles[idx].classList.add('O')
		if (checkWin(copy, 0, 1, 2, 'O') || checkWin(copy, 3, 4, 5, 'O') || checkWin(copy, 6, 7, 8, 'O') || checkWin(copy, 0, 3, 6, 'O') || checkWin(copy, 1, 4, 7, 'O') || checkWin(copy, 2, 5, 8, 'O') || checkWin(copy, 0, 4, 8, 'O') || checkWin(copy, 2, 4, 6, 'O')) {
			alert('O Wins')
			clearBoard()
		}
		tiles.splice(tiles.indexOf(tiles[idx]), 1)
	}
	X = false
}

function clearBoard() {
	tiles = Array.from(document.querySelectorAll('.tile'))
	copy.forEach(function(el) {
		el.className = 'tile'
	})
}

function checkWin(a, p1, p2, p3, player) {
	if (a[p1].classList.contains(player) && a[p2].classList.contains(player) && a[p3].classList.contains(player)) {
		return true
	}
	return false
}
