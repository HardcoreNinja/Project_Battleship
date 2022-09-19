import { createDiv, createButton } from '../reusables/elements';
import { getHud } from '../reusables/gridItems';
import { changeOrientation, selectShip } from './hudLogic';

function addShips(container) {
  const numShips = 5;
  for (let i = 0; i < numShips; i++) {
    const ship = createDiv();
    if (i === 0) {
      ship.setAttribute('id', 'destroyer');
      const destroyerIcon = createDiv();
      destroyerIcon.classList.add('destroyerIcon');
      ship.append(destroyerIcon);
      container.append('Destroyer');
    } else if (i === 1) {
      ship.setAttribute('id', 'submarine');
      const submarineIcon = createDiv();
      submarineIcon.classList.add('submarineIcon');
      ship.append(submarineIcon);
      container.append('Submarine');
    } else if (i === 2) {
      ship.setAttribute('id', 'cruiser');
      const cruiserIcon = createDiv();
      cruiserIcon.classList.add('cruiserIcon');
      ship.append(cruiserIcon);
      container.append('Cruiser');
    } else if (i === 3) {
      ship.setAttribute('id', 'battleship');
      const battleshipIcon = createDiv();
      battleshipIcon.classList.add('battleshipIcon');
      ship.append(battleshipIcon);
      container.append('Battleship');
    } else if (i === 4) {
      ship.setAttribute('id', 'carrier');
      const carrierIcon = createDiv();
      carrierIcon.classList.add('carrierIcon');
      ship.append(carrierIcon);
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
  const selectedShipContainer = createDiv();
  selectedShipContainer.setAttribute('id', 'selectedShipContainer');
  const selectedShip = createDiv();
  selectedShip.setAttribute('id', 'selectedShip');
  selectedShip.innerHTML = 'No Ship Selected...';
  selectedShipContainer.append('Selected Ship', selectedShip);
  return selectedShipContainer;
}

function createOverlay() {
  const div = createDiv();
  div.setAttribute('id', 'shipsOverlay');
  return div;
}

function appendToHUD() {
  getHud().append(createOrientationButton(), createships(), createOverlay(), createSelectedShip());
}

appendToHUD();
