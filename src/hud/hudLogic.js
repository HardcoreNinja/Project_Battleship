import { player1 } from '../game/gameLogic';

function toggleOrientationButtonDisabled() {
  const orientationButton = document.getElementById('orientationButton');
  orientationButton.disabled = !orientationButton.disabled;
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
  } else {
    player1.deselectShip();
  }

  toggleOrientationButtonDisabled();

//   console.log(player1.activeShip);
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
