import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function SudokuSquare(props) {
  return (
    <input
      className="square"
      value={props.value}
      disabled={props.disabled}
      onChange={props.onChange}
    ></input>
  );
}

export default SudokuSquare;
