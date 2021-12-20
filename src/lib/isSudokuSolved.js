import solveSudoku from "./solveSudoku";

export default function isSudokuSolved(squares) {
  const squaresCopy = JSON.parse(JSON.stringify(squares));
  const solved = solveSudoku(squaresCopy);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (squares[i][j].val !== solved.squares[i][j].val) {
        return false;
      }
    }
  }

  return true;
}
