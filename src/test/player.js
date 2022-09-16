const GameBoard = require('./gameBoard');
const BattleShip = require('./battleship');

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
    this.shipMap = this.createShipMap();
    this.activeShip = null;
  }

  createShipMap() {
    const map = new Map();
    map.set('destroyer', Array(5).fill(new BattleShip('destroyer', 2)));
    map.set('submarine', Array(4).fill(new BattleShip('submarine', 3)));
    map.set('cruiser', Array(3).fill(new BattleShip('cruiser', 3)));
    map.set('battleship', Array(2).fill(new BattleShip('battleship', 4)));
    map.set('carrier', Array(1).fill(new BattleShip('carrier', 5)));
    return map;
  }

  selectShip(key) {
    this.activeShip = this.shipMap.get(key).shift();
  }

  deselectShip() {
    this.shipMap.get(this.activeShip.name).unshift(this.activeShip);
  }

  changeOrientation() {
    this.activeShip.horizontalVertical = !this.activeShip.horizontalVertical;
  }

  isCoordinateValid(coordinate) {
    if (this.activeShip !== null
      && coordinate[0] >= 0
      && coordinate[0] <= 9
      && coordinate[1] >= 0
      && coordinate[1] <= 9) { return true; }
    return false;
  }

  placeShip(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      for (let i = 0; i < this.activeShip.length; i++) {
        if (this.activeShip.horizontalVertical === true) {
          const newCoordinate = [coordinate[0] + i, coordinate[1]];

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).lengthNumber = i;

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).occupied = true;

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).shipName = this.activeShip.name;

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).shipHorizontalVertical = this.activeShip.horizontalVertical;
        } else if (this.activeShip.horizontalVertical === false) {
          const newCoordinate = [coordinate[0], coordinate[1] + i];

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).lengthNumber = i;

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).occupied = true;

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).shipName = this.activeShip.name;

          this.gameBoard.getCoordinateFromCoordinate(
            newCoordinate,
          ).shipHorizontalVertical = this.activeShip.horizontalVertical;
        }
      }
    }
    this.activeShip = null;
  }
}

module.exports = Player;
