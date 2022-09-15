const Coordinate = require('./coordinate');

class BattleShip {
  constructor(length) {
    this.length = length;
    this.coordinateArray = Array(length).fill(null);
    this.horizontalVertical = true;
  }

  getLength() {
    return this.length;
  }

  getOrientation() {
    return this.horizontalVertical;
  }

  changeOrientation() {
    this.horizontalVertical = !this.horizontalVertical;
  }

  setCoordinates(coordiante) {
    for (let i = 0; i < this.coordinateArray.length; i++) {
      if (this.horizontalVertical) {
        this.coordinateArray[i] = new Coordinate(
          [coordiante.getCoordinate()[0] + i, coordiante.getCoordinate()[1]],
        );
      } else {
        this.coordinateArray[i] = new Coordinate(
          [coordiante.getCoordinate()[0], coordiante.getCoordinate()[1] + i],
        );
      }
    }
  }

  getCoordinates() {
    return this.coordinateArray;
  }

  clearCoordinates() {
    for (let i = 0; i < this.coordinateArray.length; i++) { this.coordinateArray[i] = null; }
  }

  changeHit
}

module.exports = BattleShip;
