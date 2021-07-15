/** `generateRandomString` function
 * 
 * Generates a pseudorandom string and returns the value
 */
const generateRandomString = (): string => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

export default generateRandomString