const GameBoard = require('./gameBoard');
const BattleShip = require('./battleship');

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
    this.ships = {
      destoryers: Array(5).fill(new BattleShip('Destoyer', 2)),
      submarine: Array(4).fill(new BattleShip('Submarine', 3)),
      cruiser: Array(3).fill(new BattleShip('Cruiser', 3)),
      battleship: Array(2).fill(new BattleShip('Battleship', 4)),
      carrier: Array(1).fill(new BattleShip('Carrier', 5)),
    };
  }

  getGameBoard() {
    return this.gameBoard;
  }

  getShips() {
    return this.ships;
  }
}

module.exports = Player;
