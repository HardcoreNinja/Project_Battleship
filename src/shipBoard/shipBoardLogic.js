import { player1, ai } from '../game/gameLogic';
import { createDiv } from '../reusables/elements';

function toggleShipsOverlayDisplay(display) {
  const overlay = document.getElementById('shipsOverlay');
  overlay.style.display = display;
}

function toggleShipBoardOverlay(row) {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.gridRowEnd = row;
}

function toggleOrientationButtonDisabled(disabled) {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.disabled = disabled;
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

function defaultOrientationButtonCopy() {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.innerHTML = 'Vertical';
}

function isValid(id) {
  if (player1.activeShip.horizontalVertical) {
    if ((parseInt(id, 10) % 10 > 9 && player1.activeShip.name === 'destroyer')
      || (parseInt(id, 10) % 10 > 8 && player1.activeShip.name === 'submarine')
      || (parseInt(id, 10) % 10 > 7 && player1.activeShip.name === 'cruiser')
      || (parseInt(id, 10) % 10 > 6 && player1.activeShip.name === 'battleship')
      || (parseInt(id, 10) % 10 > 5 && player1.activeShip.name === 'carrier')) {
      return false;
    }
  } else if (!player1.activeShip.horizontalVertical) {
    if ((player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 9 && player1.activeShip.name === 'destroyer')
      || (player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 8 && player1.activeShip.name === 'submarine')
      || (player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 7 && player1.activeShip.name === 'cruiser')
      || (player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 6 && player1.activeShip.name === 'battleship')
      || (player1.gameBoard.getCoordinateFromIndex(id).coordinate[1] > 5 && player1.activeShip.name === 'carrier')
    ) {
      return false;
    }
  }

  for (let i = 0; i < player1.activeShip.length; i++) {
    if (player1.activeShip.horizontalVertical) {
      if (player1.gameBoard.getCoordinateFromIndex(`${parseInt(id, 10) + i}`).occupied) { return false; }
    } else if (player1.gameBoard.getCoordinateFromIndex(`${parseInt(id, 10) + (i * 10)}`).occupied) { return false; }
  }

  return true;
}

function toggleHudOverlayDisplay(display) {
  const overlay = document.getElementById('hudOverlay');
  overlay.style.display = display;
}

function checkIfPlayerOutofShips() {
  if (player1.destroyerCount <= 0
    && player1.submarineCount <= 0
    && player1.cruiserCount <= 0
    && player1.battleshipCount <= 0
    && player1.carrierCount <= 0) { return true; }

  return false;
}

function drawShipToShipBoard(activeShip, array, shipSquare) {
  if (activeShip.name === 'destroyer') {
    const front = createDiv();
    front.classList.add('front');
    if (!activeShip.horizontalVertical) { front.style.transform = 'rotate(.25turn)'; }
    shipSquare.append(front);
  } else if (activeShip.name === 'submarine') {
    const front = createDiv();
    front.classList.add('front');
    const mid = createDiv();
    mid.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid.style.transform = 'rotate(.25turn)';
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid);
    } else {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid);
    }
  } else if (activeShip.name === 'cruiser') {
    const front = createDiv();
    front.classList.add('front');
    const mid1 = createDiv();
    mid1.classList.add('mid');
    const mid2 = createDiv();
    mid2.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid1.style.transform = 'rotate(.25turn)';
      mid2.style.transform = 'rotate(.25turn)';

      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 20}`);
      square2.append(mid2);
    } else if (activeShip.horizontalVertical) {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 2}`);
      square2.append(mid2);
    }
  } else if (activeShip.name === 'battleship') {
    const front = createDiv();
    front.classList.add('front');
    const mid1 = createDiv();
    mid1.classList.add('mid');
    const mid2 = createDiv();
    mid2.classList.add('mid');
    const mid3 = createDiv();
    mid3.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid1.style.transform = 'rotate(.25turn)';
      mid2.style.transform = 'rotate(.25turn)';
      mid3.style.transform = 'rotate(.25turn)';

      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 20}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 30}`);
      square3.append(mid3);
    } else if (activeShip.horizontalVertical) {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 2}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 3}`);
      square3.append(mid3);
    }
  } else if (activeShip.name === 'carrier') {
    const front = createDiv();
    front.classList.add('front');
    const mid1 = createDiv();
    mid1.classList.add('mid');
    const mid2 = createDiv();
    mid2.classList.add('mid');
    const mid3 = createDiv();
    mid3.classList.add('mid');
    const mid4 = createDiv();
    mid4.classList.add('mid');

    if (!activeShip.horizontalVertical) {
      front.style.transform = 'rotate(.25turn)';
      mid1.style.transform = 'rotate(.25turn)';
      mid2.style.transform = 'rotate(.25turn)';
      mid3.style.transform = 'rotate(.25turn)';
      mid4.style.transform = 'rotate(.25turn)';

      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 10}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 20}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 30}`);
      square3.append(mid3);
      const square4 = document.getElementById(`S_${parseInt(array[1], 10) + 40}`);
      square4.append(mid4);
    } else if (activeShip.horizontalVertical) {
      shipSquare.append(front);
      const square1 = document.getElementById(`S_${parseInt(array[1], 10) + 1}`);
      square1.append(mid1);
      const square2 = document.getElementById(`S_${parseInt(array[1], 10) + 2}`);
      square2.append(mid2);
      const square3 = document.getElementById(`S_${parseInt(array[1], 10) + 3}`);
      square3.append(mid3);
      const square4 = document.getElementById(`S_${parseInt(array[1], 10) + 4}`);
      square4.append(mid4);
    }
  }
}

function blockShipBoard() {
  const overlay = document.getElementById('shipBoardOverlay');
  overlay.style.background = 'transparent';
  overlay.style.gridRowStart = '2';
  overlay.style.gridRowEnd = '3';
}

function placeShip() {
  const array = this.getAttribute('id').split('S_');
  if (isValid(array[1])) {
    const oldActiveShip = player1.activeShip;
    player1.placeShip(player1.gameBoard.getCoordinateFromIndex(array[1]).coordinate);
    drawShipToShipBoard(oldActiveShip, array, this);
    if (!checkIfPlayerOutofShips()) {
      clearSelectedShip();
      setNoShipSelected();
      toggleShipsOverlayDisplay('none');
      toggleShipBoardOverlay('3');
      defaultOrientationButtonCopy();
      toggleOrientationButtonDisabled(true);
    } else {
      clearSelectedShip();
      setNoShipSelected();
      toggleHudOverlayDisplay('block');
      blockShipBoard();
    }
  }
}

function checkForWinner() {
  if (player1.score === 15) { alert('Player Won!'); }
}

function fire() {
  const array = this.getAttribute('id').split('M_');
  const index = parseInt(array[1], 10);

  ai.player.receiveFire(ai.player.gameBoard.getCoordinateFromIndex(index).coordinate);
  if (ai.player.gameBoard.getCoordinateFromIndex(index).hit
  && ai.player.gameBoard.getCoordinateFromIndex(index).occupied) {
    this.style.background = 'red';
    player1.score++;
    checkForWinner();
  } else {
    this.style.background = 'yellow';
  }

  ai.fire(player1);
}

export { placeShip, fire };
