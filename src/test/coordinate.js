class Coordinate {
  constructor(coordinate) {
    if (this.checkValid(coordinate)) { this.coordinate = coordinate; } else this.coordinate = null;
    this.hit = false;
    this.occupied = false;
    this.lengthNumber = 0;
    this.shipName = '';
    this.shipHorizontalVertical = true;
    this.player = null;
  }

  checkValid(coordinate) {
    if (coordinate[0] >= 0
        && coordinate[0] <= 9
        && coordinate[1] >= 0
        && coordinate[1] <= 9
    ) return true;

    return false;
  }

  // Setters
  setPlayer(player) {
    this.player = player;
  }

  setHit(hit) {
    this.hit = hit;
  }
}

module.exports = Coordinate;
