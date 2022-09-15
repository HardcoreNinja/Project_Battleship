const GameBoard = require('./gameBoard');
const Coordinate = require('./coordinate');

const gameBoard = new GameBoard();
test('getIndexOfCoordinate() | WORKS for Valid Coordinate', () => {
  expect(gameBoard.getIndexOfCoordinate([9, 9])).toBe(99);
});

test('getIndexOfCoordinate() | WORKS (RETURNS NULL) for INVALID Coordinate', () => {
  expect(gameBoard.getIndexOfCoordinate([10, 10])).toBe(null);
});

test('getCoordinateFromCoordinate() | WORKS for Valid Coordinate', () => {
  expect(gameBoard.getCoordinateFromCoordinate([9, 9])).toStrictEqual(new Coordinate([9, 9]));
});

test('getCoordinateFromCoordinate() | WORKS (RETURNS NULL) for INVALID Coordinate', () => {
  expect(gameBoard.getCoordinateFromCoordinate([100, 9])).toStrictEqual(null);
});

test('setHitTrue(), SetHitFalse(), & getHit() | WORKS for VALID Coordinates', () => {
  expect(gameBoard.getHit([9, 9])).toBe(false);
  gameBoard.setHitTrue([9, 9]);
  expect(gameBoard.getHit([9, 9])).toBe(true);
  gameBoard.setHitFalse([9, 9]);
  expect(gameBoard.getHit([9, 9])).toBe(false);
});

test('setHitTrue(), SetHitFalse(), & getHit() | WORKS (RETURNS NULL) for VALID Coordinates', () => {
  expect(gameBoard.getHit([100, 9])).toBe(null);
  gameBoard.setHitTrue([100, 9]);
  expect(gameBoard.getHit([100, 9])).toBe(null);
  gameBoard.setHitFalse([100, 9]);
  expect(gameBoard.getHit([100, 9])).toBe(null);
});
