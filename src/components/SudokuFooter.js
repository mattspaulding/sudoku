import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SudokuFooter(props) {
  return (
    <div className="container">
      {!props.isSolved && (
        <>
          {!props.isTrainingMode && (
            <div className="row py-5">
              <div className="col-12 text-center">
                <button
                  type="button"
                  className="btn btn-labeled btn-info m-2"
                  onClick={() => props.turnOnTrainingMode()}
                >
                  <span className="btn-label me-2">
                    <i className="bi-broadcast"></i>
                  </span>
                  Turn On Training Mode
                </button>
              </div>
            </div>
          )}
          {props.isTrainingMode && (
            <div className="row py-5">
              <div className="col-5 text-start">
                <button
                  type="button"
                  className="btn btn-labeled btn-warning m-2"
                  onClick={() => props.undo()}
                  disabled={props.stepNumber < 1}
                >
                  <span className="btn-label me-2">
                    <i className="bi-arrow-counterclockwise"></i>
                  </span>
                  Undo
                </button>
                <button
                  type="button"
                  className="btn btn-labeled btn-info m-2"
                  onClick={() => props.redo()}
                  disabled={props.stepNumber === props.history.length - 1}
                >
                  <span className="btn-label me-2">
                    <i className="bi-arrow-clockwise"></i>
                  </span>
                  Redo
                </button>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  className={
                    "btn btn-labeled m-2 " +
                    (props.isSolvable ? "btn-success" : "btn-danger")
                  }
                  disabled={!props.isSolvable}
                  onClick={() => props.solve()}
                >
                  {props.isSolvable ? "Solve" : "Unsolvable"}
                </button>
              </div>
              <div className="col-5 fs-2 text-end">
                <div>Turn {props.stepNumber}</div>
              </div>
            </div>
          )}
        </>
      )}
      {props.isSolved && (
        <div className="row py-5 text-center">
          <h1>SOLVED!</h1>
        </div>
      )}
    </div>
  );
}

export default SudokuFooter;
