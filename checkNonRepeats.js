function checkNonRepeats (textInput) {
  let arr = textInput.split('')
  for (let i = 0; i <= arr.length-1; i++ ) {
    if (arr.filter(a => a === arr[i]).length === 1) {
      return arr[i]
    }
  }
  return false }
  
  
  module.exports = {checkNonRepeats};
