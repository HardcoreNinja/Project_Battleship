#!/usr/bin/env node
const Coordinate = require('./coordinate');

class GameBoard {
  constructor() {
    this.gameBoard = this.createGameBoard();
  }

  // Init Functions
  createGameBoard() {
    const array = [];
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const coordinate = new Coordinate([x, y]);
        array.push(coordinate);
      }
    }
    return array;
  }

  isCoordinateValid(coordinate) {
    if (coordinate[0] >= 0
      && coordinate[0] <= 9
      && coordinate[1] >= 0
      && coordinate[1] <= 9
    ) return true;

    return false;
  }

  isIndexValid(index) {
    if (index >= 0 && index < this.gameBoard.length) return true;
    return false;
  }

  // Getters
  getGameBoard() {
    return this.gameBoard;
  }

  getIndexOfCoordinate(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      const findCoordinate = (element) => `${element.coordinate}` === `${coordinate}`;
      return this.gameBoard.findIndex(findCoordinate);
    }
    return null;
  }

  getCoordinateFromIndex(index) {
    if (this.isIndexValid(index)) { return this.gameBoard[index]; }
    return null;
  }

  getCoordinateFromCoordinate(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      return this.gameBoard[
        this.getIndexOfCoordinate(coordinate)];
    }
    return null;
  }

  // Setters
  setHitTrue(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      this.gameBoard[this.getIndexOfCoordinate(coordinate)].setHit(true);
    }
  }

  setHitFalse(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      this.gameBoard[this.getIndexOfCoordinate(coordinate)].setHit(false);
    }
  }

  getHit(coordinate) {
    if (this.isCoordinateValid(coordinate)) {
      return this.gameBoard[
        this.getIndexOfCoordinate(coordinate)].hit;
    }

    return null;
  }
}

module.exports = GameBoard;
