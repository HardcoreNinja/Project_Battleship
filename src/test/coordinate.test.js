const Coordinate = require('./coordinate');

test('getCoordinate() | WORKS for VALID Coordinate', () => {
  expect(new Coordinate([0, 0]).getCoordinate()).toStrictEqual([0, 0]);
});

test('getCoordinate() | WORKS for (RETURNS NULL) INVALID Coordinate', () => {
  expect(new Coordinate([-1, 22]).getCoordinate()).toStrictEqual(null);
});

test('setHit() & getHit()| WORKS', () => {
  const coordinate = new Coordinate([0, 0]);
  expect(coordinate.getHit()).toBe(false);
  coordinate.setHit(true);
  expect(coordinate.getHit()).toBe(true);
});
