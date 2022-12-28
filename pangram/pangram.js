//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  let panArr = str.toLowerCase();
  panArr = panArr.match(/[a-z]/gi);

  const panSet = new Set(panArr);

  return panSet.size === 26;
};
