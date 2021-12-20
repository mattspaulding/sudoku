import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SudokuSquare from "./SudokuSquare";

function SudokuBoard(props) {
  const renderSquare = (row, col) => {
    return (
      <SudokuSquare
        value={props.squares[row][col].val}
        disabled={props.squares[row][col].isLocked}
        onChange={(e) => props.onChange(row, col, e)}
      />
    );
  };

  return (
    <div className="container border border-2 border-dark sudoku-board">
      <div className="row">
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(0, 0)}
            {renderSquare(0, 1)}
            {renderSquare(0, 2)}
          </div>
          <div className="board-row">
            {renderSquare(1, 0)}
            {renderSquare(1, 1)}
            {renderSquare(1, 2)}
          </div>
          <div className="board-row">
            {renderSquare(2, 0)}
            {renderSquare(2, 1)}
            {renderSquare(2, 2)}
          </div>
        </div>
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(0, 3)}
            {renderSquare(0, 4)}
            {renderSquare(0, 5)}
          </div>
          <div className="board-row">
            {renderSquare(1, 3)}
            {renderSquare(1, 4)}
            {renderSquare(1, 5)}
          </div>
          <div className="board-row">
            {renderSquare(2, 3)}
            {renderSquare(2, 4)}
            {renderSquare(2, 5)}
          </div>
        </div>
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(0, 6)}
            {renderSquare(0, 7)}
            {renderSquare(0, 8)}
          </div>
          <div className="board-row">
            {renderSquare(1, 6)}
            {renderSquare(1, 7)}
            {renderSquare(1, 8)}
          </div>
          <div className="board-row">
            {renderSquare(2, 6)}
            {renderSquare(2, 7)}
            {renderSquare(2, 8)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(3, 0)}
            {renderSquare(3, 1)}
            {renderSquare(3, 2)}
          </div>
          <div className="board-row">
            {renderSquare(4, 0)}
            {renderSquare(4, 1)}
            {renderSquare(4, 2)}
          </div>
          <div className="board-row">
            {renderSquare(5, 0)}
            {renderSquare(5, 1)}
            {renderSquare(5, 2)}
          </div>
        </div>
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(3, 3)}
            {renderSquare(3, 4)}
            {renderSquare(3, 5)}
          </div>
          <div className="board-row">
            {renderSquare(4, 3)}
            {renderSquare(4, 4)}
            {renderSquare(4, 5)}
          </div>
          <div className="board-row">
            {renderSquare(5, 3)}
            {renderSquare(5, 4)}
            {renderSquare(5, 5)}
          </div>
        </div>
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(3, 6)}
            {renderSquare(3, 7)}
            {renderSquare(3, 8)}
          </div>
          <div className="board-row">
            {renderSquare(4, 6)}
            {renderSquare(4, 7)}
            {renderSquare(4, 8)}
          </div>
          <div className="board-row">
            {renderSquare(5, 6)}
            {renderSquare(5, 7)}
            {renderSquare(5, 8)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(6, 0)}
            {renderSquare(6, 1)}
            {renderSquare(6, 2)}
          </div>
          <div className="board-row">
            {renderSquare(7, 0)}
            {renderSquare(7, 1)}
            {renderSquare(7, 2)}
          </div>
          <div className="board-row">
            {renderSquare(8, 0)}
            {renderSquare(8, 1)}
            {renderSquare(8, 2)}
          </div>
        </div>
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(6, 3)}
            {renderSquare(6, 4)}
            {renderSquare(6, 5)}
          </div>
          <div className="board-row">
            {renderSquare(7, 3)}
            {renderSquare(7, 4)}
            {renderSquare(7, 5)}
          </div>
          <div className="board-row">
            {renderSquare(8, 3)}
            {renderSquare(8, 4)}
            {renderSquare(8, 5)}
          </div>
        </div>
        <div className="col p-0 border border-2 border-dark">
          <div className="board-row">
            {renderSquare(6, 6)}
            {renderSquare(6, 7)}
            {renderSquare(6, 8)}
          </div>
          <div className="board-row">
            {renderSquare(7, 6)}
            {renderSquare(7, 7)}
            {renderSquare(7, 8)}
          </div>
          <div className="board-row">
            {renderSquare(8, 6)}
            {renderSquare(8, 7)}
            {renderSquare(8, 8)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SudokuBoard;
