const GameBoard = require('./gameBoard');
const Player = require('./player');
const BattleShip = require('./battleship');

test('gameBoard | WORKS (Returns GameBoard', () => {
  expect(new Player().gameBoard).toStrictEqual(new GameBoard());
});

test('shipMap | WORKS (Returns GameBoard', () => {
  const map = new Map();
  map.set('destroyer', Array(5).fill(new BattleShip('destroyer', 2)));
  map.set('submarine', Array(4).fill(new BattleShip('submarine', 3)));
  map.set('cruiser', Array(3).fill(new BattleShip('cruiser', 3)));
  map.set('battleship', Array(2).fill(new BattleShip('battleship', 4)));
  map.set('carrier', Array(1).fill(new BattleShip('carrier', 5)));
  expect(new Player().shipMap).toStrictEqual(map);
});

test('deselectShip & selectShip | WORKS', () => {
  const player = new Player();
  expect(player.activeShip).toBe(null);

  player.selectShip('destroyer');
  expect(player.activeShip).toStrictEqual(new BattleShip('destroyer', 2));

  expect(player.shipMap.get('destroyer').length).toBe(4);

  player.deselectShip();

  expect(player.shipMap.get('destroyer').length).toBe(5);

  player.selectShip('submarine');
  expect(player.activeShip).toStrictEqual(new BattleShip('submarine', 3));

  expect(player.shipMap.get('submarine').length).toBe(3);

  player.deselectShip();

  expect(player.shipMap.get('submarine').length).toBe(4);

  player.selectShip('cruiser');
  expect(player.activeShip).toStrictEqual(new BattleShip('cruiser', 3));

  expect(player.shipMap.get('cruiser').length).toBe(2);

  player.deselectShip();

  expect(player.shipMap.get('cruiser').length).toBe(3);

  player.selectShip('battleship');
  expect(player.activeShip).toStrictEqual(new BattleShip('battleship', 4));

  expect(player.shipMap.get('battleship').length).toBe(1);

  player.deselectShip();

  expect(player.shipMap.get('battleship').length).toBe(2);

  player.selectShip('carrier');
  expect(player.activeShip).toStrictEqual(new BattleShip('carrier', 5));

  expect(player.shipMap.get('carrier').length).toBe(0);

  player.deselectShip();

  expect(player.shipMap.get('carrier').length).toBe(1);
});

test('selectShip | WORKS (Returns Null) when out of ships!', () => {
  const player = new Player();
  player.selectShip('carrier');
  expect(player.activeShip).toStrictEqual(new BattleShip('carrier', 5));
  player.placeShip([0, 0]);
  player.selectShip('carrier');
  expect(player.activeShip).toBe(null);
});

test('placeShip | WORKS', () => {
  const player = new Player();

  player.selectShip('destroyer');
  player.placeShip([0, 0]);

  expect(player.gameBoard.getCoordinateFromCoordinate([0, 0]).shipName).toBe('destroyer');
  expect(player.gameBoard.getCoordinateFromCoordinate([1, 0]).shipName).toBe('destroyer');

  expect(player.gameBoard.getCoordinateFromCoordinate([0, 0]).lengthNumber).toBe(0);
  expect(player.gameBoard.getCoordinateFromCoordinate([1, 0]).lengthNumber).toBe(1);

  expect(player.gameBoard.getCoordinateFromCoordinate([0, 0]).occupied).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([1, 0]).occupied).toBe(true);

  expect(player.gameBoard.getCoordinateFromCoordinate([0, 0]).shipHorizontalVertical).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([1, 0]).shipHorizontalVertical).toBe(true);

  player.selectShip('carrier');
  player.changeOrientation();
  player.placeShip([2, 0]);

  expect(player.gameBoard.getCoordinateFromCoordinate([2, 0]).shipName).toBe('carrier');
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 1]).shipName).toBe('carrier');
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 2]).shipName).toBe('carrier');
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 3]).shipName).toBe('carrier');
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 4]).shipName).toBe('carrier');

  expect(player.gameBoard.getCoordinateFromCoordinate([2, 0]).lengthNumber).toBe(0);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 1]).lengthNumber).toBe(1);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 2]).lengthNumber).toBe(2);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 3]).lengthNumber).toBe(3);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 4]).lengthNumber).toBe(4);

  expect(player.gameBoard.getCoordinateFromCoordinate([2, 0]).occupied).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 1]).occupied).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 2]).occupied).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 3]).occupied).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 4]).occupied).toBe(true);

  expect(player.gameBoard.getCoordinateFromCoordinate([2, 0]).shipHorizontalVertical).toBe(false);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 1]).shipHorizontalVertical).toBe(false);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 2]).shipHorizontalVertical).toBe(false);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 3]).shipHorizontalVertical).toBe(false);
  expect(player.gameBoard.getCoordinateFromCoordinate([2, 4]).shipHorizontalVertical).toBe(false);
});

test('updateShipCounts | WORKS', () => {
  const player = new Player();

  expect(player.carrierCount).toBe(1);
  player.selectShip('carrier');
  player.placeShip([0, 0]);
  expect(player.carrierCount).toBe(0);

  expect(player.destroyerCount).toBe(5);
  player.selectShip('destroyer');
  player.placeShip([0, 1]);
  expect(player.destroyerCount).toBe(4);
  player.selectShip('destroyer');
  player.placeShip([0, 2]);
  expect(player.destroyerCount).toBe(3);
  player.selectShip('destroyer');
  player.placeShip([0, 3]);
  expect(player.destroyerCount).toBe(2);
  player.selectShip('destroyer');
  player.placeShip([0, 4]);
  expect(player.destroyerCount).toBe(1);
  player.selectShip('destroyer');
  player.placeShip([0, 5]);
  expect(player.destroyerCount).toBe(0);
});

test('updateOccupiedCoordinates | Works', () => {
  const player = new Player();
  player.selectShip('destroyer');
  player.placeShip([0, 0]);
  expect(player.occupiedCoordinates[0][0].coordinate).toStrictEqual([0, 0]);
  expect(player.occupiedCoordinates[0][1].coordinate).toStrictEqual([1, 0]);

  player.selectShip('cruiser');
  player.changeOrientation();
  player.placeShip([2, 0]);
  expect(player.occupiedCoordinates[1][0].coordinate).toStrictEqual([2, 0]);
  expect(player.occupiedCoordinates[1][1].coordinate).toStrictEqual([2, 1]);
  expect(player.occupiedCoordinates[1][2].coordinate).toStrictEqual([2, 2]);
});
