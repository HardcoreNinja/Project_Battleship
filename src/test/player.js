const GameBoard = require('./gameBoard');

class Player {
  constructor() {
    this.gameBoard = new GameBoard();
  }

  getGameBoard() {
    return this.gameBoard;
  }
}

module.exports = Player;
