import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SudokuControl(props) {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-12 pb-3">
          <h1>Sudoku</h1>
        </div>
        <div className="col-12 text-center">
          <button
            type="button"
            className={
              "btn btn-labeled p-2 m-3 " +
              (props.difficulty == "easy" ? "btn-dark" : "btn-secondary")
            }
            onClick={() => props.newGame(`easy`)}
          >
            <span className="btn-label me-2">
              <i className="bi-hand-thumbs-up-fill"></i>
              <i className="bi-hand-thumbs-up"></i>
              <i className="bi-hand-thumbs-up"></i>
            </span>
            Easy
          </button>
          <button
            type="button"
            className={
              "btn btn-labeled p-2 m-3 " +
              (props.difficulty == "medium" ? "btn-dark" : "btn-secondary")
            }
            onClick={() => props.newGame(`medium`)}
          >
            <span className="btn-label me-2">
              <i className="bi-hand-thumbs-up-fill"></i>
              <i className="bi-hand-thumbs-up-fill"></i>
              <i className="bi-hand-thumbs-up"></i>
            </span>
            Medium
          </button>
          <button
            type="button"
            className={
              "btn btn-labeled p-2 m-3 " +
              (props.difficulty == "hard" ? "btn-dark" : "btn-secondary")
            }
            onClick={() => props.newGame(`hard`)}
          >
            <span className="btn-label me-2">
              <i className="bi-hand-thumbs-up-fill"></i>
              <i className="bi-hand-thumbs-up-fill"></i>
              <i className="bi-hand-thumbs-up-fill"></i>
            </span>
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default SudokuControl;
