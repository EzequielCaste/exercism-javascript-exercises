//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {

  return str.split(" ").map(word => {
    if (word === "-") return "";    

    if (word.includes("-")) {
      return word.split("-").map(char => char[0].toUpperCase()).join("")
    } else if (word.includes("_")) {
      return word.replaceAll("_", "").charAt(0).toUpperCase()
    } else {
      return word[0].toUpperCase()
    }
    
  }).join("")
};
