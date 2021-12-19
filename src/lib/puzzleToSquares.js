export default function puzzleToSquares(puzzle) {
  let squares = Array.from(Array(9), () => new Array(9).fill({ val: "" }));

  for (let key in puzzle) {
    if (puzzle.hasOwnProperty(key)) {
      let pos = [...key];
      let row = pos[0].charCodeAt(0) - 65;
      let col = pos[1] - 1;
      squares[row][col] = { val: puzzle[key], isLocked: true };
    }
  }

  return squares;
}
