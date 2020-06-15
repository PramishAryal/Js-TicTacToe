const title = document.createElement('h1');
title.innerText = 'Tic Tac Toe';
document.body.prepend(title);

const gameOver = document.querySelector('.game-over')

const playGame = document.querySelector('#playGame');
const mainMenu = document.querySelector('.main-menu');
const menu = document.querySelector('#menu');
const board = document.querySelector('#board');

playGame.addEventListener('click', () => {
	mainMenu.classList.toggle('hide');
	board.classList.toggle('hide');
});

menu.addEventListener('click', () => {
	location.reload();
	return false;
});

const box = document.querySelectorAll('td');

let Xs = [];
let Os = [];
for (let i = 0; i < 5; i++) {
	Xs[i] = document.createElement('img');
	Xs[i].src = 'assets/X.png';
	Os[i] = document.createElement('img');
	Os[i].src = 'assets/O.png';
}
let xcount = 0;
let ocount = 0;
let counter = 0;
let bGameOver = false;

let wrapUp = () => {
	board.classList.toggle('hide');
	gameOver.classList.toggle('hide');
	// box.forEach((n)=>
	// {
	//     n.removeEventListener('click',)
	// });
};

box.forEach((n) => {
	n.addEventListener('click', function bruh(event) {
		if (n.style.backgroundColor !== 'lightgrey' && n.style.backgroundColor !== 'darkgrey') {
			if (counter % 2) {
				n.append(Xs[xcount]);
				xcount++;
				n.style.backgroundColor = 'lightgrey';
			} else {
				n.append(Os[xcount]);
				ocount++;
				n.style.backgroundColor = 'darkgrey';
			}
			counter++;
		}
		bGameOver = gameover();
		if (bGameOver) {
			wrapUp();
		}
	});
});

function gameover() {
	if (ocount < 5) {
		if (
			box[0].style.backgroundColor === box[1].style.backgroundColor &&
			box[0].style.backgroundColor === box[2].style.backgroundColor &&
			box[0].style.backgroundColor !== ''
		) {
			return true;
		} else if (
			box[3].style.backgroundColor === box[4].style.backgroundColor &&
			box[3].style.backgroundColor === box[5].style.backgroundColor &&
			box[5].style.backgroundColor !== ''
		) {
			return true;
		} else if (
			box[6].style.backgroundColor === box[7].style.backgroundColor &&
			box[6].style.backgroundColor === box[8].style.backgroundColor &&
			box[8].style.backgroundColor !== ''
		) {
			return true;
		} else if (
			box[0].style.backgroundColor === box[3].style.backgroundColor &&
			box[0].style.backgroundColor === box[6].style.backgroundColor &&
			box[6].style.backgroundColor !== ''
		) {
			return true;
		} else if (
			box[1].style.backgroundColor === box[4].style.backgroundColor &&
			box[1].style.backgroundColor === box[7].style.backgroundColor &&
			box[7].style.backgroundColor !== ''
		) {
			return true;
		} else if (
			box[2].style.backgroundColor === box[5].style.backgroundColor &&
			box[2].style.backgroundColor === box[8].style.backgroundColor &&
			box[8].style.backgroundColor !== ''
		) {
			return true;
		} else if (
			box[8].style.backgroundColor !== '' &&
			box[0].style.backgroundColor === box[4].style.backgroundColor &&
			box[4].style.backgroundColor === box[8].style.backgroundColor
		) {
			return true;
		} else if (
			box[6].style.backgroundColor !== '' &&
			box[2].style.backgroundColor === box[4].style.backgroundColor &&
			box[4].style.backgroundColor === box[6].style.backgroundColor
		) {
			return true;
		}
	} else {
		return true;
	}
	return false;
}