//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
    this.allSides = this.side1 + this.side2 + this.side3;
  }

  isValid() {
    return (
      this.side1 + this.side2 >= this.side3 &&
      this.side1 + this.side3 >= this.side2 &&
      this.side2 + this.side3 >= this.side1
    );
  }

  get isEquilateral() {
    if (this.side1 !== 0 && this.side2 !== 0 && this.side3 !== 0)
      return this.side1 === this.side2 && this.side2 === this.side3;
    return false;
  }

  get isIsosceles() {
    if (this.isValid()) {
      return (
        this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3
      );
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.isValid()) {
      return this.side1 !== this.side2 && this.side2 !== this.side3;
    }
    return false;
  }
}
