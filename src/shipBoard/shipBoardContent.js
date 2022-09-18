import { getShipBoard } from '../reusables/gridItems';
import { createDiv } from '../reusables/elements';

function createShipBoard() {
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

  getShipBoard().append(board);
}

createShipBoard();
