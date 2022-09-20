#!/usr/bin/env node

const Player = require('./player');
const GameBoard = require('./gameBoard');

const LastOccupied = {
  coordinate: null,
  name: '',
};

class AI {
  constructor() {
    this.player = new Player();
    this.missleBoared = new GameBoard();
    this.visitedMap = new Map();
    this.placeShips();
    this.lastOccupied = Object(LastOccupied);
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

  fire(player = new Player()) {
    let index = Math.floor(Math.random() * 100);
    while (this.visitedMap.has(`${index}`)) {
      index = Math.floor(Math.random() * 100);
    }

    const shipBoardSquare = document.querySelector(`#S_${index}`);
    this.visitedMap.set(`${index}`, true);
    if (player.gameBoard.getCoordinateFromIndex(index).occupied) {
      this.lastOccupied.name = player.gameBoard.getCoordinateFromIndex(index).shipName;
      this.lastOccupied.coordinate = player.gameBoard.getCoordinateFromIndex(index).coordinate;
      shipBoardSquare.style.background = 'red';
    } else {
      shipBoardSquare.style.background = 'green';
    }
  }
}

module.exports = AI;
