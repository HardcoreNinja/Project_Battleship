class BattleShip {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.coordinateArray = Array(length).fill(null);
    this.horizontalVertical = true;
  }

  getName() {
    return this.name;
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
        this.coordinateArray[i] = [coordiante.getCoordinate()[0] + i,
          coordiante.getCoordinate()[1]];
      } else {
        this.coordinateArray[i] = [coordiante.getCoordinate()[0],
          coordiante.getCoordinate()[1] + i];
      }
    }
  }

  getCoordinates() {
    return this.coordinateArray;
  }

  clearCoordinates() {
    for (let i = 0; i < this.coordinateArray.length; i++) { this.coordinateArray[i] = null; }
  }
}

module.exports = BattleShip;
