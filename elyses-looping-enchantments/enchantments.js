// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let counter = 0;
  stack.forEach(e => {
    if (e === card) {
      counter += 1
    }
  })
  return counter
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const result = {even: 0, odd: 0}

  for (const e of stack) {    
    if (e % 2 === 0) {
      result.even = result.even + 1
    } else {
      result.odd = result.odd + 1
    }     
  }

  return result[type ? 'even' : 'odd']
}
