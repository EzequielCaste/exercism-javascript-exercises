//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (str) => {
  let arr = str.split('');
  let result = '';

  arr.map((letter) => {
    switch (letter) {
      case '':
        break;
      case 'G':
        result = result + 'C';
        break;
      case 'C':
        result = result + 'G';
        break;
      case 'T':
        result = result + 'A';
        break;
      case 'A':
        result = result + 'U';
        break;
      default:
        break;
    }
  });
  return result;
};
