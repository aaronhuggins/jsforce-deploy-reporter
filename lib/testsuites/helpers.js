/**
 * @description Group items from an array together by some criteria or value.
 * (c) 2019 Tom Bremmer (https://tbremer.com/) and Chris Ferdinandi (https://gomakethings.com), MIT License,.
 * @param  {Array} arr - The array to group items from.
 * @param  {string|Function} criteria - The criteria to group by.
 * @returns {object} The grouped object.
 */
const groupBy = function groupBy (arr, criteria) {
  return arr.reduce((obj, item) => {
    // Check if the criteria is a function to run on the item or a property of it
    const key = typeof criteria === 'function' ? criteria(item) : item[criteria]

    // If the key doesn't exist yet, create it
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = []
    }

    // Push the value to the object
    obj[key].push(item)

    // Return the object to the next item in the loop
    return obj
  }, {})
}

const formatToSeconds = function (milliseconds = 1) {
  const stringified = (milliseconds * 0.001).toFixed(3)
  const [part1, part2] = stringified.split('.')

  return part1 + '.' + part2.padEnd(3, '0')
}

module.exports = {
  groupBy,
  formatToSeconds
}
