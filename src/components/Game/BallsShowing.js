import React, { useContext } from "react";

import LuckyContext from "../../store/lucky-context";

import classes from "./BallsShowing.module.css";

const BallsShowing = (props) => {
  const ctx = useContext(LuckyContext);
  const winningNumbers = props.winningNumbers;

//   const currentNumber = winningNumbers.pop();

//   console.log(currentNumber);


  return (
    <div className={classes.container}>
        <div className={classes.circleContainer}>
            <div className={classes.bigCircle}>
                <span className={classes.currentNumber}>{}</span>
            </div>
        </div>
      {/* {props.winningNumbers.map((num, index) => (
        <div key={index}>{num}</div>
      ))} */}
    </div>
  );
};

export default BallsShowing;
