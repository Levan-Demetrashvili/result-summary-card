import "./performance.css";
import icons from "./icons";
import React from "react";

function Performance({ type, color }) {
  const styles = {
    category: { color: color, fontSize: "18px", fontWeight: "500" },
    backgroundColor: {
      background: "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%)," + color,
    },
  };

  return (
    <div className='performance' style={styles.backgroundColor}>
      <div className='performance-text'>
        <img src={icons[type].icon} alt={icons[type].category} />
        <p style={styles.category}> {icons[type].category} </p>
      </div>
      <div className='performance-number'>
        <span className='rate'> {icons[type].score}</span>
        <span className='from'>/ 100</span>
      </div>
    </div>
  );
}

export default Performance;
