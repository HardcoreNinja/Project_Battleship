import { getShipBoard } from '../reusables/gridItems';
import { createBoard, createDiv } from '../reusables/elements';

function createShipBoard() {
  const board = createBoard();
  let counter = 0;

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      const square = createDiv();
      square.setAttribute('id', `${x},${y} ${counter}`);
      square.innerHTML = `${counter}`;
      square.classList.add('boardSquare');
      board.append(square);
      counter++;
    }
  }

  getShipBoard().append(board);
}

createShipBoard();
