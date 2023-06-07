//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const lowerCaseTarget = target.toLowerCase();
  const sortStr = str => [...str.toLowerCase()].sort().join("");

  return candidates.filter(candidate => {
    const lowerCaseCandidate = candidate.toLowerCase();
    return sortStr(lowerCaseCandidate) === sortStr(lowerCaseTarget) && lowerCaseCandidate !== lowerCaseTarget
  });
};
