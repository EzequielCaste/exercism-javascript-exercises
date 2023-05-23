export class Matrix {
  constructor(str) {
    this.matrix = str.split('\n').map(el => el.split(' ').map(el => +el))
  }

  get rows() {
    return this.matrix
  }

  transpose(matrix) {
    const maxLength = Math.max(matrix.length,matrix[0].length);
    const minLength = matrix.length;

    const row = []

    for(let i = 0; i < maxLength; i++) {
      const col = []    

      for(let j = 0; j < minLength; j++) {
        col.push(matrix[j][i])
      }

      row.push(col)
    }
    return row
  }

  get columns() {
    return this.transpose(this.matrix)
  }
}
