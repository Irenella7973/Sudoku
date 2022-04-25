const { checkNonRepeats } = require('./checkNonRepeats.js');
const {fillEmpty} = require('./fillEmpty.js')


function checkElements(arrLine) {
  let CheckElementsOutput = [0, 1]
  while (CheckElementsOutput[CheckElementsOutput.length-1] !== CheckElementsOutput[CheckElementsOutput.length-2]) {
  arrLine = fillEmpty(arrLine)
   //// Для линий

  for (let i = 0; i<=8; i++) {
  let elLine = ''
  for (let j = 0; j <= arrLine.length-1; j++ ) {
   if (arrLine[j].value === '-' && arrLine[j].i === i) {
     elLine += arrLine[j].posibleValue
   }}
   if (elLine !== '' && checkNonRepeats(elLine) !== false ) {
    for (let j = 0; j <= arrLine.length-1; j++ ) {
      if (arrLine[j].value === '-' && arrLine[j].i === i && arrLine[j].posibleValue.includes(checkNonRepeats(elLine))) {
        arrLine[j].value = checkNonRepeats(elLine)
      }
   }
  }
}
fillEmpty(arrLine)
//// Для столбцов
for (let i = 0; i<=8; i++) {
  let elRow = ''
  for (let j = 0; j <= arrLine.length-1; j++ ) {
   if (arrLine[j].value === '-' && arrLine[j].j === i) {
     elRow += arrLine[j].posibleValue
   }}
   if (elRow !== '' && checkNonRepeats(elRow) !== false ) {
    for (let j = 0; j <= arrLine.length-1; j++ ) {
      if (arrLine[j].value === '-' && arrLine[j].j === i && arrLine[j].posibleValue.includes(checkNonRepeats(elRow))) {
        arrLine[j].value = checkNonRepeats(elRow)
      }
   }
  }
}
fillEmpty(arrLine)
//// Для секторов
for (let i = 1; i<=9; i++) {
  let elSector = ''
  for (let j = 0; j <= arrLine.length-1; j++ ) {
   if (arrLine[j].value === '-' && arrLine[j].sector === i) {
     elSector += arrLine[j].posibleValue
   }}
   if (elSector !== '' && checkNonRepeats(elSector) !== false ) {
    for (let j = 0; j <= arrLine.length-1; j++ ) {
      if (arrLine[j].value === '-' && arrLine[j].sector === i && arrLine[j].posibleValue.includes(checkNonRepeats(elSector))) {
        arrLine[j].value = checkNonRepeats(elSector)
      }
   }
  }
}
fillEmpty(arrLine)


CheckElementsOutput.push(arrLine.map(c => c.value).join('')) }
   return arrLine
 }

 module.exports = {checkElements}
