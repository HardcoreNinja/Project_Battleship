import { player1 } from '../game/gameLogic';
import { createDiv } from '../reusables/elements';
import { toggleShipBoardOverlay } from '../shipBoard/shipBoardContent';

function toggleOrientationButtonDisabled() {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.disabled = !orientationButton.disabled;
}

function clearSelectedShip() {
  const selectedShip = document.getElementById('selectedShip');

  while (selectedShip.firstChild) {
    selectedShip.removeChild(selectedShip.firstChild);
  }
}

function setSelectedShip(activeShip) {
  clearSelectedShip();
  const selectedShip = document.getElementById('selectedShip');
  const container = createDiv();
  container.setAttribute('id', 'shipsContainer');
  const ship = createDiv();
  if (activeShip.name === 'destroyer') {
    ship.setAttribute('id', 'destroyer');
    const destroyerIcon = createDiv();
    destroyerIcon.classList.add('destroyerIcon');
    ship.append(destroyerIcon);
    container.append('Destroyer');
  } else if (activeShip.name === 'submarine') {
    ship.setAttribute('id', 'submarine');
    const submarineIcon = createDiv();
    submarineIcon.classList.add('submarineIcon');
    ship.append(submarineIcon);
    container.append('Submarine');
  } else if (activeShip.name === 'cruiser') {
    ship.setAttribute('id', 'cruiser');
    const cruiserIcon = createDiv();
    cruiserIcon.classList.add('cruiserIcon');
    ship.append(cruiserIcon);
    container.append('Cruiser');
  } else if (activeShip.name === 'battleship') {
    ship.setAttribute('id', 'battleship');
    const battleshipIcon = createDiv();
    battleshipIcon.classList.add('battleshipIcon');
    ship.append(battleshipIcon);
    container.append('Battleship');
  } else if (activeShip.name === 'carrier') {
    ship.setAttribute('id', 'carrier');
    const carrierIcon = createDiv();
    carrierIcon.classList.add('carrierIcon');
    ship.append(carrierIcon);
    container.append('Carrier');
  }

  container.append(ship);
  selectedShip.append(container);
}

function selectShip() {
  if (player1.activeShip === null) {
    if (this.getAttribute('id') === 'destroyer') {
      player1.selectShip('destroyer');
    } else if (this.getAttribute('id') === 'submarine') {
      player1.selectShip('submarine');
    } else if (this.getAttribute('id') === 'cruiser') {
      player1.selectShip('cruiser');
    } else if (this.getAttribute('id') === 'battleship') {
      player1.selectShip('battleship');
    } else if (this.getAttribute('id') === 'carrier') {
      player1.selectShip('carrier');
    }
    toggleShipBoardOverlay('none');
  } else {
    player1.deselectShip();
    if (this.getAttribute('id') === 'destroyer') {
      player1.selectShip('destroyer');
    } else if (this.getAttribute('id') === 'submarine') {
      player1.selectShip('submarine');
    } else if (this.getAttribute('id') === 'cruiser') {
      player1.selectShip('cruiser');
    } else if (this.getAttribute('id') === 'battleship') {
      player1.selectShip('battleship');
    } else if (this.getAttribute('id') === 'carrier') {
      player1.selectShip('carrier');
    }
  }

  toggleOrientationButtonDisabled();
  setSelectedShip(player1.activeShip);
  console.log(player1.activeShip);
}

function changeOrientation() {
  if (player1.activeShip !== null) {
    player1.changeOrientation();
    if (player1.activeShip.horizontalVertical) {
      this.innerHTML = 'Horizontal';
    } else {
      this.innerHTML = 'Vertical';
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { selectShip, changeOrientation };
