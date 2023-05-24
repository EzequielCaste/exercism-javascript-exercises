//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(numberOfSquares) {
    this.numberOfSquares = numberOfSquares;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.numberOfSquares; i++) {
      sum = sum + (i**2)
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let i = 1; i <= this.numberOfSquares; i++) {
      sum = sum + i
    }
    return sum**2;
  }

  get difference() {
    return Math.abs(this.sumOfSquares - this.squareOfSum)
  }
}
