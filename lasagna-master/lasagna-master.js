/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/**
 * 
 * @param {number} remainingTime 
 * @returns {string}
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  } else if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else {
    return 'Not done, please wait.'
  }
}

/**
 * @param {string[]} layers
 * @param [number] averageTime
 * @returns {number}
 */
export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime
}
/**
 * 
 * @param {string[]} layers 
 * @returns {object}
 */
export function quantities(layers) {
  const result = {
    noodles: 0,
    sauce: 0
  }
  layers.forEach((/** @type {string} */ food) => {
    if (food === 'noodles') result.noodles = result.noodles + 50
    if (food === 'sauce') result.sauce = result.sauce + 0.2
  })

  return result
}
/**
 * 
 * @param {string[]} friendsList 
 * @param {string[]} myList 
 * @returns undefined
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
  return;
}
/**
 * 
 * @param {Object} recipe 
 * @param {number} scale 
 * @returns {Object}
 * 
 */
export function scaleRecipe(recipe, scale) {
  const newObject = {}

  for (const key in recipe) {
    if (Object.hasOwnProperty.call(recipe, key)) {
      newObject[key] = (recipe[key] / 2) * scale;      
    }
  }

  return newObject
}