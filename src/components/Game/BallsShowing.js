import React, { useContext } from "react";

import LuckyContext from "../../store/lucky-context";

import classes from "./BallsShowing.module.css";

const BallsShowing = ({ winningNumbers }) => {
  const ctx = useContext(LuckyContext);

  //   const currentNumber = winningNumbers.pop();

  //   console.log(currentNumber);

  return (
    <div className={classes.container}>
      <div className={classes.circleContainer}>
        <div className={classes.bigCircle}>
          <div className={classes.currentNumber}>
            <span>{winningNumbers[winningNumbers.length - 1]}</span>
          </div>
        </div>
        <div className={classes.smallCircles}>
          {winningNumbers.map((num, index) => (
            <li className={classes.smallCircleOverlay} style={{"--i":index}} key={index}>
              <div className={classes.smallCircle}>{num}</div>
            </li>
          ))}
        </div>
      </div>
      {}
    </div>
  );
};

export default BallsShowing;
