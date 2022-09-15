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
}

module.exports = Player;
