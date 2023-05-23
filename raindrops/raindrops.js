//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {

  const result = [];

  if (number % 3 === 0) {
    result.push('Pling');
  }
  if (number % 5 === 0) {
    result.push('Plang');
  }
  if (number % 7 === 0) {
    result.push('Plong');
  }

  return result.length > 0 ? result.join("") : String(number)
};
