const { checkNumbers } = require('./checkNumbers.js');

function fillEmpty(arrLine) {
  const fillEmptyOutput = [0, 1];
  while (fillEmptyOutput[fillEmptyOutput.length - 1] !== fillEmptyOutput[fillEmptyOutput.length - 2]) {
    for (let i = 0; i <= arrLine.length - 1; i++) {
      if (arrLine[i].value === '-') {
        let lineEl = '';
        let rowEl = '';
        let sectorEl = '';
        for (let j = 0; j <= arrLine.length - 1; j++) {
          if (arrLine[j].i === arrLine[i].i && i !== j) {
            lineEl += arrLine[j].value;
          }
          if (arrLine[j].j === arrLine[i].j && i !== j) {
            rowEl += arrLine[j].value;
          }
          if (arrLine[j].sector === arrLine[i].sector && i !== j) {
            sectorEl += arrLine[j].value;
          }
        }
        arrLine[i].posibleValue = checkNumbers(lineEl + rowEl + sectorEl);
        if (arrLine[i].posibleValue.length === 1) {
          arrLine[i].value = arrLine[i].posibleValue;
          arrLine[i].posibleValue = '';
        }
      }
    }
    fillEmptyOutput.push(arrLine.map((c) => c.value).join(''));
  }
  return arrLine;
}

module.exports = { fillEmpty };
