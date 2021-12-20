import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class SudokuFooter extends React.Component {
  render() {
    return (
      <div className="container">
        {!this.props.isSolved && (
          <>
            {!this.props.isTrainingMode && (
              <div className="row py-5">
                <div className="col-12 text-center">
                  <button
                    type="button"
                    className="btn btn-labeled btn-info m-2"
                    onClick={() => this.props.turnOnTrainingMode()}
                  >
                    <span className="btn-label me-2">
                      <i className="bi-broadcast"></i>
                    </span>
                    Turn On Training Mode
                  </button>
                </div>
              </div>
            )}
            {this.props.isTrainingMode && (
              <div className="row py-5">
                <div className="col-5">
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
                <div className="col-4">
                  <button
                    type="button"
                    className={
                      "btn btn-labeled m-2 " +
                      (this.props.isSolvable ? "btn-success" : "btn-danger")
                    }
                    disabled={!this.props.isSolvable}
                    onClick={() => this.props.solve()}
                  >
                    Solve
                  </button>
                  <span>
                    {this.props.isSolvable ? "Solvable" : "Unsolvable"}
                  </span>
                </div>
                <div className="col-3 fs-2">
                  <div>Turn {this.props.stepNumber}</div>
                </div>
              </div>
            )}
          </>
        )}
        {this.props.isSolved && (
          <div className="row py-5 text-center">
            <h1>SOLVED!</h1>
          </div>
        )}
      </div>
    );
  }
}

export default SudokuFooter;
