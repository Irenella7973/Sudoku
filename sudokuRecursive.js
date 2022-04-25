const { sudokuObj } = require('./sudokuObj.js');
const { checkElements } = require('./checkElements.js');

// const sudokuText = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
// const sudoku = sudokuText.replace(/(.{9})/g, '$1 ').trimEnd().split(' ').map((c) => c.split(''));
// const sudokuob = sudokuObj(sudoku);

function sudokuRecursive(board) {
  if (checkBoard(board) === false) { return 'The board wasn\'t solved :('; }
  if (board.map((c) => c.value).join('') === false) { return board; }
  for (let j = 0; j <= board.length - 1; j++) {
    if (board[j].value === '-') {
      for (let i = 1; i <= 9; i++) {
        const boardCheck = JSON.parse(JSON.stringify(board));
        boardCheck[j].value = String(i);
        if (checkBoard(boardCheck) === true) {
          board[j].value = String(i);
          board = sudokuRecursive(board);
        }
      }
    }
  }
  return board;
}

function checkBoard(board) {
// проверяет строки
  for (let i = 0; i <= 8; i++) {
    let elLine = '';
    for (let j = 0; j <= board.length - 1; j++) {
      if (board[j].i === i && board[j].value !== '-') {
        elLine += board[j].value;
      }
    }
    if (checkUniqNumber(elLine).length !== elLine.length) { return false; }
  }
  // проверяет столбцы
  for (let i = 0; i <= 8; i++) {
    let elRow = '';
    for (let j = 0; j <= board.length - 1; j++) {
      if (board[j].j === i && board[j].value !== '-') {
        elRow += board[j].value;
      }
    }
    if (checkUniqNumber(elRow).length !== elRow.length) { return false; }
  }
  //  //проверяет секторы
  for (let i = 1; i <= 9; i++) {
    let elSector = '';
    for (let j = 0; j <= board.length - 1; j++) {
      if (board[j].sector === i && board[j].value !== '-') {
        elSector += board[j].value;
      }
    }
    if (checkUniqNumber(elSector).length !== elSector.length) { return false; }
  }
  // проверяет нет ли клеток без возможных значений
  const board1 = checkElements(board);
  for (let i = 1; i <= board1.length - 1; i++) {
    if (board1[i].value === '-' && board1[i].posibleValue === '') { return false; }
  }
  return true;
}

function checkUniqNumber(textInput) {
  const arr = textInput.split('');
  const result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr.filter((a) => a === arr[i]).length === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(sudokuRecursive(sudokuob));
// console.log(checkBoard(sudokuRecursive(sudokuob)));

module.exports = { sudokuRecursive };
