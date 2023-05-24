//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(input) {
    this.input = input;
  }

  get scores() {
    return this.input
  }

  get latest() {
    return this.input[this.input.length - 1]
  }

  get personalBest() {
    let best = 0;
    for (let score of this.input) {
      if (score > best) {
        best = score;
      }
    }
    return best;
  }

  get personalTopThree() {
    return this.input.sort((a,b) => b -a).slice(0,3)
  }
}
