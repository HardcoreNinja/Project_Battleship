const GameBoard = require('./gameBoard');
const Player = require('./player');
const BattleShip = require('./battleship');

test('gameBoard | WORKS (Returns GameBoard', () => {
  expect(new Player().gameBoard).toStrictEqual(new GameBoard());
});

test('shipMap | WORKS (Returns GameBoard', () => {
  const map = new Map();
  map.set('destroyer', Array(1).fill(new BattleShip('destroyer', 2)));
  map.set('submarine', Array(1).fill(new BattleShip('submarine', 3)));
  map.set('cruiser', Array(1).fill(new BattleShip('cruiser', 3)));
  map.set('battleship', Array(1).fill(new BattleShip('battleship', 4)));
  map.set('carrier', Array(1).fill(new BattleShip('carrier', 5)));
  expect(new Player().shipMap).toStrictEqual(map);
});

test('deselectShip & selectShip | WORKS', () => {
  const player = new Player();
  expect(player.activeShip).toBe(null);

  player.selectShip('destroyer');
  expect(player.activeShip).toStrictEqual(new BattleShip('destroyer', 2));

  expect(player.destroyerCount).toBe(0);

  player.deselectShip();

  expect(player.destroyerCount).toBe(1);

  player.selectShip('submarine');
  expect(player.activeShip).toStrictEqual(new BattleShip('submarine', 3));

  expect(player.submarineCount).toBe(0);

  player.deselectShip();

  expect(player.submarineCount).toBe(1);

  player.selectShip('cruiser');
  expect(player.activeShip).toStrictEqual(new BattleShip('cruiser', 3));

  expect(player.cruiserCount).toBe(0);

  player.deselectShip();

  expect(player.cruiserCount).toBe(1);

  player.selectShip('battleship');
  expect(player.activeShip).toStrictEqual(new BattleShip('battleship', 4));

  expect(player.battleshipCount).toBe(0);

  player.deselectShip();

  expect(player.battleshipCount).toBe(1);

  player.selectShip('carrier');
  expect(player.activeShip).toStrictEqual(new BattleShip('carrier', 5));

  expect(player.carrierCount).toBe(0);

  player.deselectShip();

  expect(player.carrierCount).toBe(1);
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

  expect(player.destroyerCount).toBe(1);
  player.selectShip('destroyer');
  player.placeShip([0, 1]);
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

test('recieveFire | Working', () => {
  const player = new Player();
  player.selectShip('destroyer');
  player.placeShip([0, 0]);

  player.receiveFire([0, 0]);
  expect(player.occupiedCoordinates[0][0].hit).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([0, 0]).hit).toBe(true);

  player.receiveFire([1, 0]);
  expect(player.occupiedCoordinates[0][1].hit).toBe(true);
  expect(player.gameBoard.getCoordinateFromCoordinate([1, 0]).hit).toBe(true);

  expect(player.gameBoard.getCoordinateFromCoordinate([2, 0]).hit).toBe(false);
});

test('checkPlayerLost() | Working Sends TRUE if all ships in this.occupiedCoordinates() are dead', () => {
  const player = new Player();
  player.selectShip('destroyer');
  player.placeShip([0, 0]);
  player.receiveFire([0, 0]);
  player.receiveFire([1, 0]);

  expect(player.checkPlayerLost()).toBe(true);
});

test('checkPlayerLost() | Working Sends FALSE if ships in this.occupiedCoordinates() are alive', () => {
  const player = new Player();
  player.selectShip('destroyer');
  player.placeShip([0, 0]);
  player.receiveFire([0, 0]);
  player.receiveFire([2, 0]);

  expect(player.checkPlayerLost()).toBe(false);
});

test('checkToDeleteShipMapObject() | WORKS after you place a ship, it checks if it is the last ship and deletes the map object', () => {
  const player = new Player();
  expect(player.shipMap.size).toBe(5);

  player.selectShip('destroyer');
  player.placeShip([0, 0]);

  expect(player.shipMap.size).toBe(4);
});
