function sudokuArr(sudokuText) {
  const result = sudokuText.replace(/(.{9})/g, '$1 ').trimEnd().split(' ').map((c) => c.split(''));
  return result;
}
module.exports = { sudokuArr };
