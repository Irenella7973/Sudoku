const {
  checkNumbers
} = require('./checkNumbers')
const sudokuText = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
const sudokuArr = sudokuText.replace(/(.{9})/g, `$1 `).trimEnd().split(' ').map(c => c.split(''))

// function sudokuObj(arr) {

// function getSector(line, row) {
//   if (line >= 0 && line < 3) {
//     if (row < 3) {
//       return 1;
//     }
//     if (row < 6) {
//       return 2;
//     }
//     if (row < 9) {
//       return 3;
//     }
//   }
//   if (line >= 3 && line < 6) {
//     if (row < 3) {
//       return 4;
//     }
//     if (row < 6) {
//       return 5;
//     }
//     if (row < 9) {
//       return 6;
//     }
//   }
//   if (line >= 6 && line < 9) {
//     if (row < 3) {
//       return 7;
//     }
//     if (row < 6) {
//       return 8;
//     }
//     if (row < 9) {
//       return 9;
//     }
//   }
// }

// const arrLine = [];
// for (let i = 0; i <= arr.length - 1; i = i + 1) {
//   for (let j = 0; j <= arr.length- 1; j= j +1) {
//     const number = {
//       value: arr[i][j],
//       i: i,
//       j: j,
//       sector: getSector(i, j),
//       posibleValue: '',
//     };
//     arrLine.push(number);
//   }
// }
// return arrLine
// }

// function fillEmpty (arrLine) {
//   for (let i = 0, i <= arrLine.length - 1; i ++) {
//     if arrLine[i].value === '' {
//       let lineEl = '';
//       let rowEl = '';
//       let sectorEl = '';
//       for (let j = 0, j <= arrLine.length - 1; j ++) {
//         if (arrLine[j].i === arrLine[i].i) {
//           lineEl += arrLine[j].value
//         }
//         if (arrLine[j].j === arrLine[i].j) {
//           rowEl += arrLine[j].value
//         } 
//         if (arrLine[j].sector === arrLine[i].sector) {
//           SectorEl += arrLine[j].value
//         } 
        

//       }
//     }
//   }

// }

console.log(sudokuArr);
