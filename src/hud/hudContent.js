import { createDiv } from '../reusables/elements';
import { getHud } from '../reusables/gridItems';

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

    container.append(ship);
  }
}

function createShipContainer() {
  const container = createDiv();
  container.setAttribute('id', 'shipContainer');
  addShips(container);
  getHud().append(container);
}

createShipContainer();
