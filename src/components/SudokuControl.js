import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class SudokuControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <h1>Sudoku</h1>
          <h4>New Game</h4>
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
                (this.props.difficulty == "medium" ? "btn-dark" : "btn-secondary")
              }   onClick={() => this.props.newGame(`medium`)}
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
              }   onClick={() => this.props.newGame(`hard`)}
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
        <div className="row py-3">
          <div className="row">
            <div className="col-8">
              <button
                type="button"
                className="btn btn-labeled btn-warning m-2"
                onClick={() => this.props.undo()}
                disabled={this.props.stepNumber < 1}
              >
                <span className="btn-label me-2">
                  <i className="bi-arrow-counterclockwise"></i>
                </span>
                Undo
              </button>
              <button
                type="button"
                className="btn btn-labeled btn-info m-2"
                onClick={() => this.props.redo()}
                disabled={
                  this.props.stepNumber === this.props.history.length - 1
                }
              >
                <span className="btn-label me-2">
                  <i className="bi-arrow-clockwise"></i>
                </span>
                Redo
              </button>
            </div>
            <div className="col-4 fs-2">
                    <div>Turn {this.props.stepNumber}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SudokuControl;
