class BattleShip {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.coordinateArray = Array(length).fill(null);
    this.horizontalVertical = true;
  }

  changeOrientation() {
    this.horizontalVertical = !this.horizontalVertical;
  }

  setCoordinates(coordinate) {
    for (let i = 0; i < this.coordinateArray.length; i++) {
      if (this.horizontalVertical) {
        this.coordinateArray[i] = [coordinate.coordinate[0] + i,
          coordinate.coordinate[1]];
      } else {
        this.coordinateArray[i] = [coordinate.coordinate[0],
          coordinate.coordinate[1] + i];
      }
    }
  }

  clearCoordinates() {
    for (let i = 0; i < this.coordinateArray.length; i++) { this.coordinateArray[i] = null; }
  }
}

module.exports = BattleShip;
