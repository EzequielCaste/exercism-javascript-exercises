//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let sum = 0;

  for (let i = 1; i < number; i++) {
    sum = number % i === 0 ? sum + i : sum
  }

  if (sum === number) {
    return 'perfect'
  } else {
    if (sum > number) {
      return 'abundant'
    }
  }
  return 'deficient'

};
