// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  return /^chatbot/i.test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption throught the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/emoji\w+/gi, '')
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 * (+##) ###-###-###
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  if (/^\W+\w{2}\W\s\w{3}(\-\w{3}){2}/g.test(number)) {
    return 'Thanks! You can now download me to your phone.'
  }
  else {
    return `Oops, it seems like I can't reach out to ${number}`
  }
}

/**
 * Given a certain response from the user, help the chatbot get only the URL
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  return userInput.match(/\w+\.\w{2,3}/gi)
}

/**
 * Greet the user using its full name data from the profile
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const arr = fullName.replace(',', '').split(/\W/).reverse()
  return `Nice to meet you, ${arr[0]} ${arr[1]}` 
}
