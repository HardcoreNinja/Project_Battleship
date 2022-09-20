#!/usr/bin/env node

const Player = require('./player');

class AI {
  constructor() {
    this.player = new Player();
    this.placeShips();
  }

  selectShip(name) {
    this.player.selectShip(name);
  }

  changeOrientation() {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 1) this.player.changeOrientation();
  }

  findValidCoordinateAndPlaceShip() {
    while (this.player.activeShip !== null) {
      const randomNumber = Math.floor(Math.random() * 100);
      const coordinate = this.player.gameBoard.getCoordinateFromIndex(randomNumber);
      this.changeOrientation();
      this.player.placeShip(coordinate.coordinate);
    }
  }

  placeShips() {
    while (this.player.shipMap.size > 0) {
      const randomNumber = Math.floor(Math.random() * 5);
      switch (randomNumber) {
        case 0:
          if (this.player.destroyerCount > 0) { this.selectShip('destroyer'); }
          break;
        case 1:
          if (this.player.submarineCount > 0) { this.selectShip('submarine'); }
          break;
        case 2:
          if (this.player.cruiserCount > 0) { this.selectShip('cruiser'); }
          break;
        case 3:
          if (this.player.battleshipCount > 0) { this.selectShip('battleship'); }
          break;
        case 4:
          if (this.player.carrierCount > 0) { this.selectShip('carrier'); }
          break;
        default:
      }
      this.findValidCoordinateAndPlaceShip();
    }
  }
}

module.exports = AI;
