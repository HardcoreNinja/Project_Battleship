class BattleShip {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.horizontalVertical = true;
  }

  changeOrientation() {
    this.horizontalVertical = !this.horizontalVertical;
  }
}

module.exports = BattleShip;
