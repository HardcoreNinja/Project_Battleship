import { player1 } from '../game/gameLogic';
import { createDiv } from '../reusables/elements';
import { toggleShipBoardOverlay } from '../shipBoard/shipBoardContent';

function toggleOrientationButtonDisabled(disabled) {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.disabled = disabled;
}

function toggleShipsOverlayDisplay(display) {
  const overlay = document.getElementById('shipsOverlay');
  overlay.style.display = display;
}

function clearSelectedShip() {
  const selectedShip = document.getElementById('selectedShip');

  while (selectedShip.firstChild) {
    selectedShip.removeChild(selectedShip.firstChild);
  }
}

function setNoShipSelected() {
  const selectedShip = document.getElementById('selectedShip');
  selectedShip.innerHTML = 'No Ship Selected...';
}

function changeIconColor(name) {
  if (name === 'destroyer') {
    if (player1.destroyerCount <= 0) {
      const destroyerIcon = document.querySelector('.destroyerIcon');
      destroyerIcon.style.background = 'gray';
    } else if (player1.destroyerCount > 0) {
      const destroyerIcon = document.querySelector('.destroyerIcon');
      destroyerIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'submarine') {
    if (player1.submarineCount <= 0) {
      const submarineIcon = document.querySelector('.submarineIcon');
      submarineIcon.style.background = 'gray';
    } else if (player1.submarineCount > 0) {
      const submarineIcon = document.querySelector('.submarineIcon');
      submarineIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'cruiser') {
    if (player1.cruiserCount <= 0) {
      const cruiserIcon = document.querySelector('.cruiserIcon');
      cruiserIcon.style.background = 'gray';
    } else if (player1.cruiserCount > 0) {
      const cruiserIcon = document.querySelector('.cruiserIcon');
      cruiserIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'battleship') {
    if (player1.battleshipCount <= 0) {
      const battleshipIcon = document.querySelector('.battleshipIcon');
      battleshipIcon.style.background = 'gray';
    } else if (player1.battleshipCount > 0) {
      const battleshipIcon = document.querySelector('.battleshipIcon');
      battleshipIcon.style.background = 'rgb(196 41 106)';
    }
  } else if (name === 'carrier') {
    if (player1.carrierCount <= 0) {
      const carrierIcon = document.querySelector('.carrierIcon');
      carrierIcon.style.background = 'gray';
    } else if (player1.carrierCount > 0) {
      const carrierIcon = document.querySelector('.carrierIcon');
      carrierIcon.style.background = 'rgb(196 41 106)';
    }
  }
}

function deselectShip() {
  const oldActiveShipName = player1.activeShip.name;
  player1.deselectShip();
  changeIconColor(oldActiveShipName);
  toggleShipsOverlayDisplay('none');
  clearSelectedShip();
  setNoShipSelected();
  toggleShipBoardOverlay('3');
  toggleOrientationButtonDisabled(true);
}

function setSelectedShip(activeShip) {
  clearSelectedShip();
  const selectedShip = document.getElementById('selectedShip');
  const container = createDiv();
  container.setAttribute('id', 'selected_ShipContainer');
  const ship = createDiv();
  if (activeShip.name === 'destroyer') {
    ship.setAttribute('id', 'selected_destroyer');
    const destroyerIcon = createDiv();
    destroyerIcon.classList.add('destroyerIcon');
    ship.append(destroyerIcon);
    container.append('Destroyer');
  } else if (activeShip.name === 'submarine') {
    ship.setAttribute('id', 'selected_submarine');
    const submarineIcon = createDiv();
    submarineIcon.classList.add('submarineIcon');
    ship.append(submarineIcon);
    container.append('Submarine');
  } else if (activeShip.name === 'cruiser') {
    ship.setAttribute('id', 'selected_cruiser');
    const cruiserIcon = createDiv();
    cruiserIcon.classList.add('cruiserIcon');
    ship.append(cruiserIcon);
    container.append('Cruiser');
  } else if (activeShip.name === 'battleship') {
    ship.setAttribute('id', 'selected_battleship');
    const battleshipIcon = createDiv();
    battleshipIcon.classList.add('battleshipIcon');
    ship.append(battleshipIcon);
    container.append('Battleship');
  } else if (activeShip.name === 'carrier') {
    ship.setAttribute('id', 'selected_carrier');
    const carrierIcon = createDiv();
    carrierIcon.classList.add('carrierIcon');
    ship.append(carrierIcon);
    container.append('Carrier');
  }

  container.addEventListener('mousedown', deselectShip);
  container.append(ship);
  selectedShip.append(container);
}

function selectShip() {
  if ((this.getAttribute('id') === 'destroyer' && player1.destroyerCount > 0)
    || (this.getAttribute('id') === 'submarine' && player1.submarineCount > 0)
    || (this.getAttribute('id') === 'cruiser' && player1.cruiserCount > 0)
    || (this.getAttribute('id') === 'battleship' && player1.battleshipCount > 0)
    || (this.getAttribute('id') === 'carrier' && player1.carrierCount > 0)
  ) {
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
      toggleShipBoardOverlay('2');
    }

    changeIconColor(this.getAttribute('id'));
    toggleOrientationButtonDisabled(false);
    setSelectedShip(player1.activeShip);
    toggleShipsOverlayDisplay('block');
    // console.log(player1.activeShip);
  }
}

function changeOrientation() {
  const activeShip = document.getElementById(`selected_${player1.activeShip.name}`);
  if (player1.activeShip !== null) {
    if (player1.activeShip.horizontalVertical) {
      this.innerHTML = 'Horizontal';
      activeShip.style.transform = 'rotate(.25turn)';
    } else {
      this.innerHTML = 'Vertical';
      activeShip.style.transform = 'rotate(0turn)';
    }
    player1.changeOrientation();
  }
}

export {
  selectShip, changeOrientation, setNoShipSelected,
};
