import React from "react";
import "./score.css";

function Score({ score }) {
  return (
    <div className='circle'>
      <h3>{score}</h3>
      <span>of 100</span>
    </div>
  );
}
export default Score;
