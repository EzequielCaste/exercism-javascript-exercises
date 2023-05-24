//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (string1, string2) => {
  //
  if (string1.length !== string2.length) {
    throw new Error('strands must be of equal length')
  }

  if (!string1 || !string2) {
    return 0;
  }

  let difference = 0;

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      difference++;
    }
  }

  return difference;

};
