function sudokuArr (sudokuText){
  return sudokuText.replace(/(.{9})/g, `$1 `).trimEnd().split(' ').map(c => c.split('')) }

module.exports = {sudokuArr}
