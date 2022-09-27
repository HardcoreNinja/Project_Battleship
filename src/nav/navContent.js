import { getNav } from '../reusables/gridItems';
import { createH1, createSymbol } from '../reusables/elements';

function createTitle() {
  const nav = getNav();

  const h1 = createH1('Battleship');
  nav.append(h1, createSymbol('directions_boat'));
}

createTitle();
