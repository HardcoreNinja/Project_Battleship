const BattleShip = require('./battleship');
// const Coordinate = require('./coordinate');

test('length | WORKS!', () => {
  expect(new BattleShip('Destroyer', 3).length).toBe(3);
});

test('horizontalVertical && changeOrientation() | WORKS!', () => {
  const battleship = new BattleShip('Destroyer', 3);
  expect(battleship.horizontalVertical).toBe(true);
  battleship.changeOrientation();
  expect(battleship.horizontalVertical).toBe(false);
});

test('changeOrientation()| WORKS for BOTH Horiztonal & Vertical Orientation', () => {
  const battleship = new BattleShip('Destroyer', 3);
  expect(battleship.horizontalVertical).toBe(true);
  battleship.changeOrientation();
  expect(battleship.horizontalVertical).toBe(false);
});

test('name', () => {
  expect(new BattleShip('Destroyer', 3).name).toBe('Destroyer');
});
