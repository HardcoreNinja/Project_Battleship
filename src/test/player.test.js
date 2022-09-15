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
