import { getContent } from '../reusables/gridItems';
import { createDiv } from '../reusables/elements';

function createGrid() {
  const nav = createDiv();
  nav.setAttribute('id', 'nav');

  const shipBoard = createDiv();
  shipBoard.setAttribute('id', 'shipBoard');

  const hud = createDiv();
  hud.setAttribute('id', 'hud');

  getContent().append(nav, shipBoard, hud);
}

createGrid();
