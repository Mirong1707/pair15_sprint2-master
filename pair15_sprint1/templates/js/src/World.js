import {cell, cellBlack, cellObstructed, cellRed, ctx} from "./Script_start.js";
import Position from "./Position.js";
import {Color} from "./enums/Color.js";
import {assert} from "../utils/Assertions.js";

export default class World {
  constructor(x, y, cells) {
    this.x = x;
    this.y = y;
    this.cells = cells
    this.updateMapView(); // Updating the map view
  }

  // Drawing the cell at the given position with the given cell type
  drawCell(i, j, cellTyped) {
    if (typeof document !== 'undefined') {
      if (i % 2 === 0) { // Checking if the row is even
        ctx.drawImage(cellTyped, j * 50, i * 44, 64, 64); // Drawing the cell at the even position
      } else {
        ctx.drawImage(cellTyped, j * 50 + 25, i * 44, 64, 64); // Drawing the cell at the odd position
      }
    }
  }

  // Updating the map view of the World
  updateMapView() {
    for (let i = 0; i < this.y; i++) { // Looping through each row
      for (let j = 0; j < this.x; j++) { // Looping through each column
        if (this.cells[i][j].obstructed) this.drawCell(i, j, cellObstructed)
        else if (this.cells[i][j].base === Color.Red) this.drawCell(i, j, cellRed)
        else if (this.cells[i][j].base === Color.Black) this.drawCell(i, j, cellBlack)
        else this.drawCell(i, j, cell)
      }
    }
  }

  cellAt(position) {
    const x = position.x
    const y = position.y

    if (x < 0 || x >= this.x || y < 0 || y >= this.y) {
      return null;
    }
    return this.cells[y][x];
  }

  // Getting the sensed cell at the given position and direction
  sensedCell(currentPosition, direction) {
    switch (direction) {
      case -1:
        return new Position(currentPosition.x, currentPosition.y);
      case 0:
        return new Position(currentPosition.x + 1, currentPosition.y);
      case 1:
        return new Position(currentPosition.x + 1, currentPosition.y + 1);
      case 2:
        return new Position(currentPosition.x, currentPosition.y + 1);
      case 3:
        return new Position(currentPosition.x - 1, currentPosition.y);
      case 4:
        return new Position(currentPosition.x, currentPosition.y - 1);
      case 5:
        return new Position(currentPosition.x + 1, currentPosition.y - 1);
      default:
        assert(false, "error: wrong direction");
    }
  }

  adjacent(position, direction) {
    if (direction < 0 || direction > 5)
      throw new Error("Direction is out of bounds.");
    return (this.cells)[this.sensedCell(position, direction).y][this.sensedCell(position, direction).x];
  }

  isObstructed(position) {
    const cell = this.cellAt(position);
    return cell ? cell.isObstructed() : false;
  }

  isOccupiedAt(position) {
    const cell = this.cellAt(position);
    return cell ? cell.isOccupied() : false;
  }

  setBugAt(position, bug) {
    const cell = this.cellAt(position);
    return cell ? cell.setBug(bug) :  false;
  }

  getBugAt(position) {
    const cell = this.cellAt(position);
    return cell ? cell.getBug() : null;
  }

  removeBugAt(position) {
    const cell = this.cellAt(position);
    return cell ? cell.removeBug() : false;
  }

  setFoodAt(position, amount) {
    const cell = this.cellAt(position);
    if (cell) {
      cell.setFood(amount);
    }
  }

  getFoodAt(position) {
    const cell = this.cellAt(position);
    return cell ? cell.food : 0;
  }

  isFriendlyBaseAt(position, color) {
    const cell = this.cellAt(position);
    return cell ? cell.isFriendlyBase(color) : false;
  }

  isEnemyBaseAt(position, color) {
    const cell = this.cellAt(position);
    return cell ? cell.isEnemyBase(color) : false;
  }

  setMarkerAt(position, color, number) {
    const cell = this.cellAt(position);
    if (cell) {
      cell.setMarker(color, number);
    }
  }

  clearMarkerAt(position) {
    const cell = this.cellAt(position);
    if (cell) {
      cell.clearMarker();
    }
  }

  isFriendlyMarkerAt(position, color) {
    const cell = this.cellAt(position);
    return cell ? cell.isFriendlyMarker(color) : false;
  }

  isEnemyMarkerAt(position, color) {
    const cell = this.cellAt(position);
    return cell ? cell.isEnemyMarker(color) : false;
  }

  toString() {
    let str = "";
    for (let i = 0; i < this.x; i++) {
      for (let j = 0; j < this.y; j++) {
        str += this.cells[i][j].toString();
      }
      str += "\n";
    }
    return str;
  }
}
