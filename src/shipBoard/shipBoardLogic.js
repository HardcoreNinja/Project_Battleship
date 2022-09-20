import { player1 } from '../game/gameLogic';
import { createDiv } from '../reusables/elements';

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

function defaultOrientationButtonCopy() {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.innerHTML = 'Vertical';
}

function placeShip() {
  let canPlace = true;
  console.log(player1.gameBoard.getCoordinateFromIndex(this.getAttribute('id')).coordinate[1]);
  if (player1.activeShip.horizontalVertical) {
    if ((parseInt(this.getAttribute('id'), 10) % 10 > 9 && player1.activeShip.name === 'destroyer')
      || (parseInt(this.getAttribute('id'), 10) % 10 > 8 && player1.activeShip.name === 'submarine')
      || (parseInt(this.getAttribute('id'), 10) % 10 > 7 && player1.activeShip.name === 'cruiser')
      || (parseInt(this.getAttribute('id'), 10) % 10 > 6 && player1.activeShip.name === 'battleship')
      || (parseInt(this.getAttribute('id'), 10) % 10 > 5 && player1.activeShip.name === 'carrier')) {
      canPlace = false;
    }
  } else if (!player1.activeShip.horizontalVertical) {
    if ((player1.gameBoard.getCoordinateFromIndex(this.getAttribute('id')).coordinate[1] > 9 && player1.activeShip.name === 'destroyer')
      || (player1.gameBoard.getCoordinateFromIndex(this.getAttribute('id')).coordinate[1] > 8 && player1.activeShip.name === 'submarine')
      || (player1.gameBoard.getCoordinateFromIndex(this.getAttribute('id')).coordinate[1] > 7 && player1.activeShip.name === 'cruiser')
      || (player1.gameBoard.getCoordinateFromIndex(this.getAttribute('id')).coordinate[1] > 6 && player1.activeShip.name === 'battleship')
      || (player1.gameBoard.getCoordinateFromIndex(this.getAttribute('id')).coordinate[1] > 5 && player1.activeShip.name === 'carrier')
    ) {
      canPlace = false;
    }
  }

  if (canPlace) {
    if (player1.activeShip.name === 'destroyer') {
      const front = createDiv();
      front.classList.add('front');
      if (!player1.activeShip.horizontalVertical) { front.style.transform = 'rotate(.25turn)'; }
      this.append(front);
    } else if (player1.activeShip.name === 'submarine') {
      const front = createDiv();
      front.classList.add('front');
      const mid = createDiv();
      mid.classList.add('middle');

      if (!player1.activeShip.horizontalVertical) {
        front.style.transform = 'rotate(.25turn)';
        mid.style.transform = 'rotate(.25turn)';

        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 10}`);
        square1.append(mid);
      } else {
        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 1}`);
        square1.append(mid);
      }
    } else if (player1.activeShip.name === 'cruiser') {
      const front = createDiv();
      front.classList.add('front');
      const mid1 = createDiv();
      mid1.classList.add('middle');
      const mid2 = createDiv();
      mid2.classList.add('middle');

      if (!player1.activeShip.horizontalVertical) {
        front.style.transform = 'rotate(.25turn)';
        mid1.style.transform = 'rotate(.25turn)';
        mid2.style.transform = 'rotate(.25turn)';

        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 10}`);
        square1.append(mid1);
        const square2 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 20}`);
        square2.append(mid2);
      } else if (player1.activeShip.horizontalVertical) {
        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 1}`);
        square1.append(mid1);

        const square2 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 2}`);
        square2.append(mid2);
      }
    } else if (player1.activeShip.name === 'battleship') {
      const front = createDiv();
      front.classList.add('front');
      const mid1 = createDiv();
      mid1.classList.add('middle');
      const mid2 = createDiv();
      mid2.classList.add('middle');
      const mid3 = createDiv();
      mid3.classList.add('middle');

      if (!player1.activeShip.horizontalVertical) {
        front.style.transform = 'rotate(.25turn)';
        mid1.style.transform = 'rotate(.25turn)';
        mid2.style.transform = 'rotate(.25turn)';
        mid3.style.transform = 'rotate(.25turn)';

        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 10}`);
        square1.append(mid1);
        const square2 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 20}`);
        square2.append(mid2);
        const square3 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 30}`);
        square3.append(mid3);
      } else if (player1.activeShip.horizontalVertical) {
        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 1}`);
        square1.append(mid1);
        const square2 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 2}`);
        square2.append(mid2);
        const square3 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 3}`);
        square3.append(mid3);
      }
    } else if (player1.activeShip.name === 'carrier') {
      const front = createDiv();
      front.classList.add('front');
      const mid1 = createDiv();
      mid1.classList.add('middle');
      const mid2 = createDiv();
      mid2.classList.add('middle');
      const mid3 = createDiv();
      mid3.classList.add('middle');
      const mid4 = createDiv();
      mid4.classList.add('middle');

      if (!player1.activeShip.horizontalVertical) {
        front.style.transform = 'rotate(.25turn)';
        mid1.style.transform = 'rotate(.25turn)';
        mid2.style.transform = 'rotate(.25turn)';
        mid3.style.transform = 'rotate(.25turn)';
        mid4.style.transform = 'rotate(.25turn)';

        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 10}`);
        square1.append(mid1);
        const square2 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 20}`);
        square2.append(mid2);
        const square3 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 30}`);
        square3.append(mid3);
        const square4 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 40}`);
        square4.append(mid4);
      } else if (player1.activeShip.horizontalVertical) {
        this.append(front);
        const square1 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 1}`);
        square1.append(mid1);
        const square2 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 2}`);
        square2.append(mid2);
        const square3 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 3}`);
        square3.append(mid3);
        const square4 = document.getElementById(`${parseInt(this.getAttribute('id'), 10) + 4}`);
        square4.append(mid4);
      }
    }

    player1.activeShip = null;
    clearSelectedShip();
    setNoShipSelected();
    toggleShipsOverlayDisplay('none');
    defaultOrientationButtonCopy();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { placeShip };
