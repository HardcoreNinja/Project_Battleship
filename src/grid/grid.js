import { getContent } from '../reusables/gridItems';
import { createDiv } from '../reusables/elements';

function createGrid() {
  const nav = createDiv();
  nav.setAttribute('id', 'nav');
  nav.innerHTML = 'nav';

  const shipBoard = createDiv();
  shipBoard.setAttribute('id', 'shipBoard');
  shipBoard.innerHTML = 'shipBoard';

  const hud = createDiv();
  hud.setAttribute('id', 'hud');

  const missleBoard = createDiv();
  missleBoard.setAttribute('id', 'missleBoard');
  missleBoard.innerHTML = 'missleBoard';

  getContent().append(nav, shipBoard, hud, missleBoard);
}

createGrid();
