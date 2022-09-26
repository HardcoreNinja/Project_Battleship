#!/usr/bin/env node

const Player = require('./player');
const GameBoard = require('./gameBoard');
const { createDiv, createModal, blockShipBoard } = require('../reusables/elements');

class AI {
  constructor() {
    this.player = new Player();
    this.missleBoared = new GameBoard();
    this.visitedMap = new Map();
    this.placeShips();
    this.lastOccupied = null;
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

  analyzeLastOccupied(player = new Player()) {
    for (let i = 0; i < player.occupiedShipMap.get(this.lastOccupied.shipName).length; i++) {
      const index = player.gameBoard.getIndexOfCoordinate(
        player.occupiedShipMap.get(this.lastOccupied.shipName)[i].coordinate,
      );

      if (!this.visitedMap.has(`${index}`)) {
        this.visitedMap.set(`${index}`, true);
        return index;
      }
    }

    return null;
  }

  createModal(text) {
    const content = document.getElementById('content');
    const bg = createDiv();
    bg.setAttribute('id', 'bgOverlay');

    const modal = createDiv();
    modal.setAttribute('id', 'modal');
    modal.innerHTML = text;
    bg.append(modal);

    content.append(bg);
  }

  checkForWinner() {
    if (this.player.score === 15) {
      blockShipBoard('1', '3');
      createModal('Mission Failed... <br> AI Won...');
    }
  }

  fire(player = new Player()) {
    let index = Math.floor(Math.random() * 100);
    while (this.visitedMap.has(`${index}`)) {
      index = Math.floor(Math.random() * 100);
    }

    let betterIndex = null;
    if (this.lastOccupied !== null) { betterIndex = this.analyzeLastOccupied(player); }

    if (betterIndex === null) {
      this.lastOccupied = null;
      const shipBoardSquare = document.querySelector(`#S_${index}`);
      this.visitedMap.set(`${index}`, true);
      if (player.gameBoard.getCoordinateFromIndex(index).occupied) {
        this.lastOccupied = player.gameBoard.getCoordinateFromIndex(index);
        shipBoardSquare.style.background = 'red';
        this.player.score++;
        this.checkForWinner();
      } else {
        shipBoardSquare.style.background = 'green';
      }
    } else {
      const shipBoardSquare = document.querySelector(`#S_${betterIndex}`);
      this.visitedMap.set(`${betterIndex}`, true);
      if (player.gameBoard.getCoordinateFromIndex(betterIndex).occupied) {
        this.lastOccupied = player.gameBoard.getCoordinateFromIndex(betterIndex);
        shipBoardSquare.style.background = 'red';
        this.player.score++;
        this.checkForWinner();
      } else {
        shipBoardSquare.style.background = 'green';
      }
    }
  }
}

module.exports = AI;
