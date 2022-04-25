// Use filesystem.
const fs = require('fs');
const { guessTime } = require('./guessTime');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');
const { sudokuArr } = require('./sudokuArr');
const { sudokuObj } = require('./sudokuObj');
// The sudoku puzzles that your program will solve can be found
// in the sudoku-puzzles.txt file.
//
// Remember, the file has newline characters at the end of each line,
// so you should remove them.

// Gets one puzzle from the text file.
function sudokuParse(content, puzzleNumber = 14) {
  const puzzle = content.split('\n')[puzzleNumber];
  const puzzleArr = sudokuArr(puzzle);
  console.log('parser');
  console.table(puzzleArr);
  return puzzleArr;
}
function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data);
  const puzzle1 = sudokuObj(puzzle);
  const solvedPuzzle = sudoku.solve(puzzle1);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.table(sudoku.prettyBoard(solvedPuzzle));
  } else {
    // const puzzle2 = sudokuParse(data);
    const puzzle3 = sudokuObj(puzzle);
    const solvedPuzzle1 = guessTime(puzzle3);
    if (sudoku.isSolved(solvedPuzzle1)) {
      console.log('The board was solved!');
      console.table(sudoku.prettyBoard(solvedPuzzle1));
    } else {
      console.log("The board wasn't solved :(");
    }
  }
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve,
);
