import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SudokuBoard from "./SudokuBoard";
import puzzleToSquares from "../lib/puzzleToSquares";
import SudokuControl from "./SudokuControl";

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
    fetch(`https://vast-chamber-17969.herokuapp.com/generate?difficulty=${difficulty}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const squares = puzzleToSquares(result.puzzle);
          this.setState({
            isLoaded: true,
            difficulty: result.difficulty,
            history: [{ squares }],
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
    if (val && (!re.test(val) || val === squares[row][col].val)) {
      return;
    }

    squares[row][col] = { val };
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
    });
  }

  undo() {
    this.setState({
      stepNumber: this.state.stepNumber - 1,
    });
  }
  redo() {
    this.setState({
      stepNumber: this.state.stepNumber + 1,
    });
  }

  render() {
    const { history, isLoaded, stepNumber, difficulty } = this.state;
    const current = history ? history[stepNumber] : null;
    // const winner = calculateWinner(current.squares);

    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    // }
    if (!isLoaded) {
      return <div>loading...</div>;
    }
    return (
      <div className="game container">
        <div className="game-board">
          <SudokuControl
            history={history}
            stepNumber={stepNumber}
            difficulty={difficulty}
            undo={() => this.undo()}
            redo={() => this.redo()}
            newGame={(difficulty) => this.newGame(difficulty)}
          ></SudokuControl>
          <SudokuBoard
            squares={current.squares}
            onChange={(row, col, e) => this.handleChange(row, col, e)}
          />
        </div>
      </div>
    );
  }
}

export default SudokuGame;
