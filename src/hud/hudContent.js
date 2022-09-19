import { createDiv, createButton } from '../reusables/elements';
import { getHud } from '../reusables/gridItems';
import { changeOrientation, selectShip } from './hudLogic';

function addShips(container) {
  const numShips = 5;
  for (let i = 0; i < numShips; i++) {
    const ship = createDiv();
    if (i === 0) {
      ship.setAttribute('id', 'destroyer');
      const destroyerLength = createDiv();
      destroyerLength.classList.add('destroyerIcon');
      ship.append(destroyerLength);
      container.append('Destroyer');
    } else if (i === 1) {
      ship.setAttribute('id', 'submarine');
      const submarineLength = createDiv();
      submarineLength.classList.add('submarineIcon');
      ship.append(submarineLength);
      container.append('Submarine');
    } else if (i === 2) {
      ship.setAttribute('id', 'cruiser');
      const cruiser = createDiv();
      cruiser.classList.add('cruiserIcon');
      ship.append(cruiser);
      container.append('Cruiser');
    } else if (i === 3) {
      ship.setAttribute('id', 'battleship');
      const battleship = createDiv();
      battleship.classList.add('battleshipIcon');
      ship.append(battleship);
      container.append('Battleship');
    } else if (i === 4) {
      ship.setAttribute('id', 'carrier');
      const carrier = createDiv();
      carrier.classList.add('carrierIcon');
      ship.append(carrier);
      container.append('Carrier');
    }

    ship.addEventListener('mousedown', selectShip);
    container.append(ship);
  }
}

const createships = () => {
  const container = createDiv();
  container.setAttribute('id', 'shipsContainer');
  const ships = createDiv();
  ships.setAttribute('id', 'ships');
  addShips(ships);

  container.append('Ships', ships);
  return container;
};
const createOrientationButton = () => {
  const container = createDiv();
  container.setAttribute('id', 'orientationButtonContainer');

  const button = createButton();
  button.disabled = 'true';
  button.setAttribute('id', 'orientationButton');
  button.innerHTML = 'Horizontal';
  button.addEventListener('mousedown', changeOrientation);

  container.append('Orientation', button);
  return container;
};

function createSelectedShip() {
  const selectedShip = createDiv();
  selectedShip.setAttribute('id', 'selectedShip');
  return selectedShip;
}

function appendToHUD() {
  getHud().append(createOrientationButton(), createships(), createSelectedShip());
}

appendToHUD();
