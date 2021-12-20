import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SudokuBoard from "./SudokuBoard";
import puzzleToSquares from "../lib/puzzleToSquares";
import SudokuControl from "./SudokuControl";
import solveSudoku from "../lib/solveSudoku";
import SudokuFooter from "./SudokuFooter";
import isSudokuSolved from "../lib/isSudokuSolved";

class SudokuGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      stepNumber: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  newGame(difficulty) {
    fetch(
      `https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const squares = puzzleToSquares(result.puzzle);
          this.setState({
            isLoaded: true,
            difficulty: result.difficulty,
            history: [{ squares }],
            stepNumber: 0,
            isSolvable: true,
            isSolved: false,
            isTrainingMode: false,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.newGame(`easy`);
  }

  handleChange(row, col, e) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));

    let val = [...e.target.value].pop();
    const re = /^[1-9\b]+$/;
    val = val || "";
    if (val && (!re.test(val) || val === squares[row][col].val)) {
      return;
    }

    squares[row][col] = { val };
    const isSolvable = solveSudoku(squares).isSolvable;
    const isSolved = isSudokuSolved(squares);
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      isSolvable,
      isSolved,
    });
  }

  undo() {
    const stepNumber = this.state.stepNumber - 1;
    this.setState({
      stepNumber,
      isSolvable: this.checkSolvable(stepNumber),
    });
  }
  redo() {
    const stepNumber = this.state.stepNumber + 1;
    this.setState({
      stepNumber,
      isSolvable: this.checkSolvable(stepNumber),
    });
  }
  turnOnTrainingMode() {
    this.setState({
      isTrainingMode: true,
    });
  }
  checkSolvable(stepNumber) {
    const history = this.state.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = JSON.parse(JSON.stringify(current.squares));

    const isSolvable = solveSudoku(squares).isSolvable;
    return isSolvable;
  }
  solve() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    const result = solveSudoku(current.squares);
    if (result.isSolvable) {
      this.setState({
        history: history.concat([{ squares: result.squares }]),
        stepNumber: history.length,
        isSolved: true,
      });
    }
  }

  render() {
    const {
      history,
      isLoaded,
      stepNumber,
      difficulty,
      isTrainingMode,
      isSolvable,
      isSolved,
    } = this.state;
    const current = history ? history[stepNumber] : null;

    if (!isLoaded) {
      return <div>loading...</div>;
    }
    return (
      <div className="game container">
        <div className="game-board">
          <SudokuControl
            difficulty={difficulty}
            newGame={(difficulty) => this.newGame(difficulty)}
          />
          <SudokuBoard
            squares={current?.squares}
            onChange={(row, col, e) => this.handleChange(row, col, e)}
          />
          <SudokuFooter
            history={history}
            stepNumber={stepNumber}
            difficulty={difficulty}
            isTrainingMode={isTrainingMode}
            turnOnTrainingMode={() => this.turnOnTrainingMode()}
            undo={() => this.undo()}
            redo={() => this.redo()}
            solve={() => this.solve()}
            isSolvable={isSolvable}
            isSolved={isSolved}
          />
        </div>
      </div>
    );
  }
}

export default SudokuGame;
