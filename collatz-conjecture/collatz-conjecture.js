const isEven = (int) => {
  return int % 2 === 0;
};

export const steps = (int) => {
  let num = int;
  let count = 0;

  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  while (num !== 1) {
    if (isEven(num)) {
      num = num / 2;
      count++;
    } else {
      num = 3 * num + 1;
      count++;
    }
  }

  return count;
};
