import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class SudokuControl extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-12 pb-3">
            <h1>Sudoku</h1>
          </div>
          <div className="col-4 text-center">
            <button
              type="button"
              className={
                "btn btn-labeled " +
                (this.props.difficulty == "easy" ? "btn-dark" : "btn-secondary")
              }
              onClick={() => this.props.newGame(`easy`)}
            >
              <span className="btn-label me-2">
                <i className="bi-hand-thumbs-up-fill"></i>
                <i className="bi-hand-thumbs-up"></i>
                <i className="bi-hand-thumbs-up"></i>
              </span>
              Easy
            </button>
          </div>
          <div className="col-4 text-center">
            <button
              type="button"
              className={
                "btn btn-labeled " +
                (this.props.difficulty == "medium"
                  ? "btn-dark"
                  : "btn-secondary")
              }
              onClick={() => this.props.newGame(`medium`)}
            >
              <span className="btn-label me-2">
                <i className="bi-hand-thumbs-up-fill"></i>
                <i className="bi-hand-thumbs-up-fill"></i>
                <i className="bi-hand-thumbs-up"></i>
              </span>
              Medium
            </button>
          </div>
          <div className="col-4 text-center">
            <button
              type="button"
              className={
                "btn btn-labeled " +
                (this.props.difficulty == "hard" ? "btn-dark" : "btn-secondary")
              }
              onClick={() => this.props.newGame(`hard`)}
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
}

export default SudokuControl;
