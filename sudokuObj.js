const { getSector } = require('./getSector.js')

function sudokuObj(arr) {
  const arrLine = [];
  for (let i = 0; i <= arr.length - 1; i = i + 1) {
    for (let j = 0; j <= arr.length- 1; j= j +1) {
      const number = {
        value: arr[i][j],
        i: i,
        j: j,
        sector: getSector(i, j),
        posibleValue: '',
      };
      arrLine.push(number);
    }
  }
  return arrLine
  } 

  module.exports = {sudokuObj};
