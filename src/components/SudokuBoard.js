import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SudokuSquare from "./SudokuSquare";

class SudokuBoard extends React.Component {
  renderSquare(row, col) {
    return (
      <SudokuSquare
        value={this.props.squares[row][col].val}
        disabled={this.props.squares[row][col].isLocked}
        onChange={(e) => this.props.onChange(row, col, e)}
      />
    );
  }

  render() {
    return (
      <div className="container border border-2 border-dark sudoku-board">
        <div className="row">
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(0, 0)}
              {this.renderSquare(0, 1)}
              {this.renderSquare(0, 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(1, 0)}
              {this.renderSquare(1, 1)}
              {this.renderSquare(1, 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(2, 0)}
              {this.renderSquare(2, 1)}
              {this.renderSquare(2, 2)}
            </div>
          </div>
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(0, 3)}
              {this.renderSquare(0, 4)}
              {this.renderSquare(0, 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(1, 3)}
              {this.renderSquare(1, 4)}
              {this.renderSquare(1, 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(2, 3)}
              {this.renderSquare(2, 4)}
              {this.renderSquare(2, 5)}
            </div>
          </div>
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(0, 6)}
              {this.renderSquare(0, 7)}
              {this.renderSquare(0, 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(1, 6)}
              {this.renderSquare(1, 7)}
              {this.renderSquare(1, 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(2, 6)}
              {this.renderSquare(2, 7)}
              {this.renderSquare(2, 8)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(3, 0)}
              {this.renderSquare(3, 1)}
              {this.renderSquare(3, 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(4, 0)}
              {this.renderSquare(4, 1)}
              {this.renderSquare(4, 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(5, 0)}
              {this.renderSquare(5, 1)}
              {this.renderSquare(5, 2)}
            </div>
          </div>
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(3, 3)}
              {this.renderSquare(3, 4)}
              {this.renderSquare(3, 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(4, 3)}
              {this.renderSquare(4, 4)}
              {this.renderSquare(4, 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(5, 3)}
              {this.renderSquare(5, 4)}
              {this.renderSquare(5, 5)}
            </div>
          </div>
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(3, 6)}
              {this.renderSquare(3, 7)}
              {this.renderSquare(3, 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(4, 6)}
              {this.renderSquare(4, 7)}
              {this.renderSquare(4, 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(5, 6)}
              {this.renderSquare(5, 7)}
              {this.renderSquare(5, 8)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(6, 0)}
              {this.renderSquare(6, 1)}
              {this.renderSquare(6, 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(7, 0)}
              {this.renderSquare(7, 1)}
              {this.renderSquare(7, 2)}
            </div>
            <div className="board-row">
              {this.renderSquare(8, 0)}
              {this.renderSquare(8, 1)}
              {this.renderSquare(8, 2)}
            </div>
          </div>
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(6, 3)}
              {this.renderSquare(6, 4)}
              {this.renderSquare(6, 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(7, 3)}
              {this.renderSquare(7, 4)}
              {this.renderSquare(7, 5)}
            </div>
            <div className="board-row">
              {this.renderSquare(8, 3)}
              {this.renderSquare(8, 4)}
              {this.renderSquare(8, 5)}
            </div>
          </div>
          <div className="col p-0 border border-2 border-dark">
            <div className="board-row">
              {this.renderSquare(6, 6)}
              {this.renderSquare(6, 7)}
              {this.renderSquare(6, 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(7, 6)}
              {this.renderSquare(7, 7)}
              {this.renderSquare(7, 8)}
            </div>
            <div className="board-row">
              {this.renderSquare(8, 6)}
              {this.renderSquare(8, 7)}
              {this.renderSquare(8, 8)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default SudokuBoard;
