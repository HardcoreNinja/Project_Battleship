const AI = require('./ai');

test('placeShips | WORKS', () => {
  const ai = new AI();

  for (let i = 0; i < ai.player.occupiedCoordinates.length; i++) {
    for (let j = 0; j < ai.player.occupiedCoordinates[i].length; j++) {
      console.log(`Group: ${i} Coord: ${ai.player.occupiedCoordinates[i][j].coordinate}`);
    }
  }
  expect(ai.player.occupiedCoordinates.length).toBe(5);
});
