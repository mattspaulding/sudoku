import React, { useEffect, useState } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SudokuBoard from "./SudokuBoard";
import puzzleToSquares from "../lib/puzzleToSquares";
import SudokuControl from "./SudokuControl";
import solveSudoku from "../lib/solveSudoku";
import SudokuFooter from "./SudokuFooter";
import isSudokuSolved from "../lib/isSudokuSolved";

function SudokuGame() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [history, setHistory] = useState([{}]);
  const [stepNumber, setStepNumber] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [isSolvable, setIsSolvable] = useState(true);
  const [isSolved, setIsSolved] = useState(false);
  const [isTrainingMode, setIsTrainingMode] = useState(false);

  useEffect(() => {
    newGame(difficulty);
  }, []);

  const newGame = async (diff) => {
    const result = await fetch(
      `https://vast-chamber-17969.herokuapp.com/generate?difficulty=${diff}`
    ).then((r) => r.json());

    const squares = puzzleToSquares(result.puzzle);
    let h = history;
    setIsLoaded(false);
    setDifficulty(result.difficulty);
    setHistory([{ squares }]);
    setStepNumber(0);
    setIsSolvable(true);
    setIsSolved(false);
    setIsTrainingMode(false);
    setIsLoaded(true);
  };

  const handleChange = (row, col, e) => {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));

    let val = [...e.target.value].pop();
    const re = /^[1-9\b]+$/;
    val = val || "";
    if (val && (!re.test(val) || val === squares[row][col].val)) {
      return;
    }

    squares[row][col] = { val };
    setHistory(hist.concat([{ squares }]));
    setStepNumber(hist.length);
    setIsSolvable(solveSudoku(squares).isSolvable);
    setIsSolved(isSudokuSolved(squares));
  };

  const undo = () => {
    setStepNumber(stepNumber - 1);
    checkSolvable(stepNumber - 1);
  };
  const redo = () => {
    setStepNumber(stepNumber + 1);
    checkSolvable(stepNumber + 1);
  };
  const checkSolvable = (step) => {
    const hist = history.slice(0, step + 1);
    const current = hist[hist.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));

    const isSolvable = solveSudoku(squares).isSolvable;
    setIsSolvable(isSolvable);
  };
  const solve = () => {
    const hist = history.slice(0, stepNumber + 1);
    const current = hist[hist.length - 1];

    const result = solveSudoku(current.squares);
    if (result.isSolvable) {
      setHistory(hist.concat([{ squares: result.squares }]));
      setStepNumber(hist.length);
      setIsSolved(true);
    }
  };

  const current = history ? history[stepNumber] : null;

  return (
    <div className="container">
      <SudokuControl
        difficulty={difficulty}
        newGame={(difficulty) => newGame(difficulty)}
      />
      {isLoaded && (
        <>
          <SudokuBoard
            squares={current.squares}
            onChange={(row, col, e) => handleChange(row, col, e)}
          />
          <SudokuFooter
            history={history}
            stepNumber={stepNumber}
            difficulty={difficulty}
            isTrainingMode={isTrainingMode}
            turnOnTrainingMode={() => setIsTrainingMode(true)}
            undo={() => undo()}
            redo={() => redo()}
            solve={() => solve()}
            isSolvable={isSolvable}
            isSolved={isSolved}
          />
        </>
      )}
    </div>
  );
}

export default SudokuGame;
