import "./App.css";
import React from "react";
import Performance from "./components/Performance/Performance";
import Button from "./components/Button/Button";
import Score from "./components/Score/Score";

function App() {
  return (
    <main className='container'>
      <div className='result-container'>
        <h2 className='result-title'>Your Result</h2>
        <Score score='76' />
        <h1 className='result-message'>Great</h1>
        <p className='result-paragraph'>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
      <div className='summary-container'>
        <h2 className='summary-title'>Summary</h2>
        <div className='performance-container'>
          <Performance type='reaction' color='#f55' />
          <Performance type='memory' color='#FFB21E' />
          <Performance type='verbal' color='#00BB8F' />
          <Performance type='visual' color='#1125D6' />
        </div>
        <Button />
      </div>
    </main>
  );
}

export default App;
