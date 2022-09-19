import { getShipBoard } from '../reusables/gridItems';
import { createDiv } from '../reusables/elements';

function createShipBoard() {
  const container = createDiv();
  container.setAttribute('id', 'shipGridContainer');
  const board = createDiv();
  board.setAttribute('id', 'shipGrid');
  board.classList.add('boardContainer');
  let counter = 0;

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const square = createDiv();
      square.setAttribute('id', `${x},${y}`);
      square.innerHTML = `${counter}`;
      square.classList.add('boardSquare');
      board.append(square);
      counter++;
    }
  }

  container.append('Ship Grid', board);
  return container;
}

function createMissleBoard() {
  const container = createDiv();
  container.setAttribute('id', 'missileGridContainer');
  const board = createDiv();
  board.setAttribute('id', 'missleGrid');
  board.classList.add('boardContainer');
  let counter = 0;

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const square = createDiv();
      square.setAttribute('id', `${x},${y}`);
      square.innerHTML = `${counter}`;
      square.classList.add('boardSquare');
      board.append(square);
      counter++;
    }
  }

  container.append('Missle Board', board);
  return container;
}

function createOverlay() {
  const div = createDiv();
  div.classList.add('shipBoardOverlay');
  return div;
}

function appendToShipBoard() {
  getShipBoard().append(createMissleBoard(), createShipBoard(), createOverlay());
}

appendToShipBoard();
