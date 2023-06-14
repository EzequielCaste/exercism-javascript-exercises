//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function countRepetitions(str, target) {
  return str.split("").reduce((acc, val) => val === target ? acc + 1 : acc, 0);    
}

export const isIsogram = (str) => {

  let wordMap;

  if (str.length === 0) return true;

  wordMap = new Set(str.toLowerCase().split(""));

  
  if (wordMap.has("-")) {
    const numberOfHyphens = countRepetitions(str, "-");

    if (numberOfHyphens > 1) {
      return wordMap.size + 1 === str.length
    }
  }

  if (wordMap.has(" ")) {
    const numberOfSpaces = countRepetitions(str, " ");
   
    if (numberOfSpaces > 1) { 
      return wordMap.size + 1 === str.length
    }
  }


  return wordMap.size === str.length
};
