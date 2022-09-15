const GameBoard = require('./gameBoard');
const Player = require('./player');

test('getGameBoard() | WORKS (Returns GameBoard', () => {
  expect(new Player().getGameBoard()).toStrictEqual(new GameBoard());
});
