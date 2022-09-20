/* eslint-disable import/prefer-default-export */
import { getShipBoard } from '../reusables/gridItems';
import { createDiv } from '../reusables/elements';
import { placeShip } from './shipBoardLogic';

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
      square.setAttribute('id', `${counter}`);
      // square.innerHTML = `${counter}`;
      square.classList.add('boardSquare');
      square.addEventListener('mousedown', placeShip);
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
  div.setAttribute('id', 'shipBoardOverlay');
  return div;
}

function appendToShipBoard() {
  getShipBoard().append(createMissleBoard(), createShipBoard(), createOverlay());
}

function toggleShipBoardOverlay(row) {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.gridRowEnd = row;
}

export { toggleShipBoardOverlay };
appendToShipBoard();
