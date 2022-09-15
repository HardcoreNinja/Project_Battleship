const BattleShip = require('./battleship');
const Coordinate = require('./coordinate');

test('length | WORKS!', () => {
  expect(new BattleShip('Destroyer', 3).length).toBe(3);
});

test('horizontalVertical && changeOrientation() | WORKS!', () => {
  const battleship = new BattleShip('Destroyer', 3);
  expect(battleship.horizontalVertical).toBe(true);
  battleship.changeOrientation();
  expect(battleship.horizontalVertical).toBe(false);
});

test('getcoordinateArray| WORKS for INVALID (RETURNS NULL ARRAY)', () => {
  expect(new BattleShip('Destroyer', 3).coordinateArray).toStrictEqual([null, null, null]);
});

test('setCoorindates()| WORKS for INVALID (RETURNS NULL ARRAY)', () => {
  const battleship = new BattleShip('Destroyer', 3);
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.coordinateArray).toStrictEqual(
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  );
});

test('clearCoordinates()| WORKS', () => {
  const battleship = new BattleShip('Destroyer', 3);
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.coordinateArray).toStrictEqual(
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  );
  battleship.clearCoordinates();
  expect(battleship.coordinateArray).toStrictEqual([null, null, null]);
});

test('changeOrientation()| WORKS for BOTH Horiztonal & Vertical Orientation', () => {
  const battleship = new BattleShip('Destroyer', 3);
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.coordinateArray).toStrictEqual(
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
  );
  battleship.clearCoordinates();
  battleship.changeOrientation();
  battleship.setCoordinates(new Coordinate([0, 0]));
  expect(battleship.coordinateArray).toStrictEqual(
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
  );
});

test('name', () => {
  expect(new BattleShip('Destroyer', 3).name).toBe('Destroyer');
});
