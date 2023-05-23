//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function endsWithExclamation(string) {
  return string.endsWith('!')
}

function isShouting(string) {
  if (string.split('').every(char => char === char.toUpperCase())) {
    return true;
  }
}

function isQuestion(string) {
  if (string.endsWith('?')) {
    return true;
  }
}

function isNumber(x) {
  return x.match(/[0-9]/g) || x.match(/[$&+,:;=@#|'<>.^*()%!-]/)
}

function containsNumbers(string) {
  return string.split(',').some(isNumber)
}

function hasSpecialCharacters(string) {  
  return string.split('').some(char => isNumber(char))
}

function containsSilence(string) {
  return string.length === 0 || string.trim().length === 0
}

export const hey = (message) => {

  if (containsSilence(message)) {
    return 'Fine. Be that way!'
  }

  if (isShouting(message)) {
    if (isQuestion(message)) {
      if (hasSpecialCharacters(message)) {
        return 'Sure.'
      } else {
        return `Calm down, I know what I'm doing!`
      }
    }
    if (containsNumbers(message)) {
      if (!endsWithExclamation(message)) {
        return 'Whatever.'
      }
    }    

    return 'Whoa, chill out!'
  }

  if (isQuestion(message) || isQuestion(message.trim())) {
    return 'Sure.'
  }

  return 'Whatever.'  
};
