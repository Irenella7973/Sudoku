const { checkElements } = require('./checkElements');
const { sudokuArr } = require('./sudokuArr');
const { sudokuObj } = require('./sudokuObj');

function guessTime(arrLine) {
  const guessTimeOutput = [0, 1];
  while (guessTimeOutput[guessTimeOutput.length - 1] !== guessTimeOutput[guessTimeOutput.length - 2]) {
    arrLine = checkElements(arrLine);
    for (let i = 0; i <= arrLine.length - 1; i++) {
      if (arrLine[i].value === '-' && arrLine[i].posibleValue.length === 2) {
        arrLine[i].value = arrLine[i].posibleValue[0];
        let arrLine1 = JSON.parse(JSON.stringify(arrLine));
        arrLine1 = checkElements(arrLine1);
        for (let j = 0; j <= arrLine1.length - 1; j++) {
          if (arrLine1[j].value === '-' && arrLine1[j].posibleValue.length === 0) {
            arrLine[i].value = arrLine[i].posibleValue[1];
            arrLine = checkElements(arrLine);
            return arrLine;
          }
        }
      }

      arrLine = checkElements(arrLine);
    } guessTimeOutput.push(arrLine.map((c) => c.value).join(''));
  }
  return arrLine;
}
// console.log(guessTime(sudokuObj(sudokuArr('--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--'))).map((c) => c.value).join(''));
module.exports = { guessTime };
