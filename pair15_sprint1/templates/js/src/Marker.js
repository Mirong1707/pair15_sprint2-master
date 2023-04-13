export default class Marker {
  constructor(color, number) {
    this.color = color;
    this.number = number;
  }

  toString() {
    return `${this.color} marker with number ${this.number}`;
  }
}