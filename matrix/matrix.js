export class Matrix {
  constructor(str) {
    this.matrix = str;
    this.matrixArray = str
      .split('\n')
      .map((row) => row.split(' ').map((entry) => +entry));
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    if (this.matrixArray.length === 1) {
      return [this.matrixArray[0]];
    }
    let maxCol = this.matrixArray[0].length;
    let maxRow = this.matrixArray.length;

    let columnArray = [];
    for (let i = 0; i < maxCol; i++) {
      let auxArr = [];
      for (let y = 0; y < maxRow; y++) {
        auxArr.push(this.matrixArray[y][i]);
      }
      columnArray.push(auxArr);
    }
    return columnArray;
  }
}
