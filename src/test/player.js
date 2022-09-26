const GameBoard = require('./gameBoard');
const BattleShip = require('./battleship');

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
    this.shipMap = this.createShipMap();
    this.activeShip = null;
    this.destroyerCount = this.shipMap.get('destroyer').length;
    this.submarineCount = this.shipMap.get('submarine').length;
    this.cruiserCount = this.shipMap.get('cruiser').length;
    this.battleshipCount = this.shipMap.get('battleship').length;
    this.carrierCount = this.shipMap.get('carrier').length;
    this.occupiedCoordinates = [];
    this.occupiedShipMap = new Map();
    this.score = 0;
  }

  createShipMap() {
    const map = new Map();
    map.set('destroyer', Array(1).fill(new BattleShip('destroyer', 1)));
    map.set('submarine', Array(1).fill(new BattleShip('submarine', 2)));
    map.set('cruiser', Array(1).fill(new BattleShip('cruiser', 3)));
    map.set('battleship', Array(1).fill(new BattleShip('battleship', 4)));
    map.set('carrier', Array(1).fill(new BattleShip('carrier', 5)));
    return map;
  }

  updateShipCounts(key) {
    if (key === 'destroyer') {
      this.destroyerCount = this.shipMap.get(key).length;
    } else if (key === 'submarine') {
      this.submarineCount = this.shipMap.get(key).length;
    } else if (key === 'cruiser') {
      this.cruiserCount = this.shipMap.get(key).length;
    } else if (key === 'battleship') {
      this.battleshipCount = this.shipMap.get(key).length;
    } else if (key === 'carrier') {
      this.carrierCount = this.shipMap.get(key).length;
    }
  }

  checkToDeleteShipMapObject(key) {
    if (this.shipMap.get(key).length === 0) { this.shipMap.delete(key); }
  }

  selectShip(key) {
    if (this.shipMap.has(key)) {
      if (this.shipMap.get(key).length !== 0) {
        this.activeShip = this.shipMap.get(key).shift();
        this.updateShipCounts(key);
      } else { this.activeShip = null; }
    }
  }

  deselectShip() {
    const key = this.activeShip.name;
    this.shipMap.get(this.activeShip.name).unshift(this.activeShip);
    this.activeShip = null;
    this.updateShipCounts(key);
  }

  changeOrientation() {
    this.activeShip.horizontalVertical = !this.activeShip.horizontalVertical;
  }

  isCoordinateValid(coordinate) {
    const index = this.gameBoard.getIndexOfCoordinate(coordinate);

    if (this.activeShip !== null
      && this.gameBoard.getCoordinateFromCoordinate(coordinate).occupied === false
      && coordinate[0] >= 0
      && coordinate[0] <= 9
      && coordinate[1] >= 0
      && coordinate[1] <= 9) {
      if (this.activeShip.horizontalVertical) {
        if ((parseInt(index, 10) % 10 > 9 && this.activeShip.name === 'destroyer')
          || (parseInt(index, 10) % 10 > 8 && this.activeShip.name === 'submarine')
          || (parseInt(index, 10) % 10 > 7 && this.activeShip.name === 'cruiser')
          || (parseInt(index, 10) % 10 > 6 && this.activeShip.name === 'battleship')
          || (parseInt(index, 10) % 10 > 5 && this.activeShip.name === 'carrier')) {
          return false;
        }
      } else if (!this.activeShip.horizontalVertical) {
        if ((coordinate[1] > 9 && this.activeShip.name === 'destroyer')
          || (coordinate[1] > 8 && this.activeShip.name === 'submarine')
          || (coordinate[1] > 7 && this.activeShip.name === 'cruiser')
          || (coordinate[1] > 6 && this.activeShip.name === 'battleship')
          || (coordinate[1] > 5 && this.activeShip.name === 'carrier')
        ) {
          return false;
        }
      }

      for (let i = 0; i < this.activeShip.length; i++) {
        if (this.activeShip.horizontalVertical) {
          if (this.gameBoard.getCoordinateFromIndex(`${parseInt(index, 10) + i}`).occupied) { return false; }
        } else if (!this.activeShip.horizontalVertical) {
          if (this.gameBoard.getCoordinateFromIndex(`${parseInt(index, 10) + (i * 10)}`).occupied) { return false; }
        }
      }
    } else return false;

    return true;
  }

  updateOccupiedCoordinates(coordinateArray) {
    this.occupiedCoordinates.push(coordinateArray);
    this.occupiedShipMap.set(`${this.activeShip.name}`, coordinateArray);
  }

  placeShip(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      const tempArray = [];
      for (let i = 0; i < this.activeShip.length; i++) {
        const newCoordinate = (this.activeShip.horizontalVertical)
          ? [coordinate[0] + i, coordinate[1]] : [coordinate[0], coordinate[1] + i];

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

        tempArray.push(this.gameBoard.getCoordinateFromCoordinate(
          newCoordinate,
        ));
      }
      this.updateOccupiedCoordinates(tempArray);
      this.checkToDeleteShipMapObject(this.activeShip.name);
      this.activeShip = null;
    }
  }

  receiveFire(coordinate) {
    const tempCoordinate = this.gameBoard.getCoordinateFromCoordinate(coordinate);

    if (tempCoordinate.occupied === true) {
      for (let i = 0; i < this.occupiedCoordinates.length; i++) {
        for (let j = 0; j < this.occupiedCoordinates[i].length; j++) {
          if (tempCoordinate.coordinate === this.occupiedCoordinates[i][j].coordinate) {
            this.occupiedCoordinates[i][j].hit = true;
          }
        }
      }
    }
    this.gameBoard.getCoordinateFromCoordinate(coordinate).hit = true;
  }

  checkPlayerLost() {
    for (let i = 0; i < this.occupiedCoordinates.length; i++) {
      for (let j = 0; j < this.occupiedCoordinates[i].length; j++) {
        if (this.occupiedCoordinates[i][j].hit === false) return false;
      }
    }

    return true;
  }
}

module.exports = Player;
