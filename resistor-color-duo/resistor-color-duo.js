const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
export const decodedValue = (arr) => {
  const [first, second] = arr;
  return parseInt(`${COLORS.indexOf(first)}${COLORS.indexOf(second)}`);
};
