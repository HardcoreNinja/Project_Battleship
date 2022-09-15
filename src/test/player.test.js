const GameBoard = require('./gameBoard');
const Player = require('./player');
const BattleShip = require('./battleship');

test('getGameBoard() | WORKS (Returns GameBoard', () => {
  expect(new Player().getGameBoard()).toStrictEqual(new GameBoard());
});

test('getShips() | WORKS (Returns GameBoard', () => {
  expect(new Player().getShips()).toStrictEqual({
    destoryers: [new BattleShip('Destoyer', 2), new BattleShip('Destoyer', 2), new BattleShip('Destoyer', 2), new BattleShip('Destoyer', 2), new BattleShip('Destoyer', 2)],
    submarine: [new BattleShip('Submarine', 3), new BattleShip('Submarine', 3), new BattleShip('Submarine', 3), new BattleShip('Submarine', 3)],
    cruiser: [new BattleShip('Cruiser', 3), new BattleShip('Cruiser', 3), new BattleShip('Cruiser', 3)],
    battleship: [new BattleShip('Battleship', 4), new BattleShip('Battleship', 4)],
    carrier: [new BattleShip('Carrier', 5)],
  });
});
