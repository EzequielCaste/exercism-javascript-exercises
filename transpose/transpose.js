//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const result = [];
  let margin = 0;
  for (const str of input) {
    str.split("").forEach((ch, i) => { result[i] = (result[i] || "").padEnd(margin, " ") + ch });
    ++margin;
  }
  return result;
};