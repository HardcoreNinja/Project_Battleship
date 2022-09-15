const BattleShip = require('./battleship');
const Coordinate = require('./coordinate');

test('getLength() | WORKS!', () => {
  expect(new BattleShip('Destroyer', 3).getLength()).toBe(3);
});

test('getOrientation() && changeOrientation() | WORKS!', () => {
  const battleship = new BattleShip('Destroyer', 3);
  expect(battleship.getOrientation()).toBe(true);
  battleship.changeOrientation();
  expect(battleship.getOrientation()).toBe(false);
});

test('getCoordinates| WORKS for INVALID (RETURNS NULL ARRAY)', () => {
  expect(new BattleShip('Destroyer', 3).getCoordinates()).toStrictEqual([null, null, null]);
});

test('setCoorindates()| WORKS for INVALID (RETURNS NULL ARRAY)', () => {
  const battleship = new BattleShip('Destroyer', 3);
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.getCoordinates()).toStrictEqual(
    [
      new Coordinate([0, 0]),
      new Coordinate([1, 0]),
      new Coordinate([2, 0]),
    ],
  );
});

test('clearCoordinates()| WORKS', () => {
  const battleship = new BattleShip('Destroyer', 3);
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.getCoordinates()).toStrictEqual(
    [
      new Coordinate([0, 0]),
      new Coordinate([1, 0]),
      new Coordinate([2, 0]),
    ],
  );
  battleship.clearCoordinates();
  expect(battleship.getCoordinates()).toStrictEqual([null, null, null]);
});

test('changeOrientation()| WORKS for BOTH Horiztonal & Vertical Orientation', () => {
  const battleship = new BattleShip('Destroyer', 3);
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.getCoordinates()).toStrictEqual(
    [
      new Coordinate([0, 0]),
      new Coordinate([1, 0]),
      new Coordinate([2, 0]),
    ],
  );
  battleship.clearCoordinates();
  battleship.changeOrientation();
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.getCoordinates()).toStrictEqual(
    [
      new Coordinate([0, 0]),
      new Coordinate([0, 1]),
      new Coordinate([0, 2]),
    ],
  );
});

test('getName()', () => {
  expect(new BattleShip('Destroyer', 3).getName()).toBe('Destroyer');
});
