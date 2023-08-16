import React from "react";
import Card from "../UI/Card";

import classes from "./PlayersNumbers.module.css";

const PlayersNumbers = (props) => {
  const numbers = props.numbers;

  let content = numbers.map((number, index) => <span key={index} className={classes.number}>{number}</span>)

  return (
    <Card>
      <p className={classes.label}>Your Numbers</p>
      <div style={{marginTop: "60px", marginBottom: "50px"}}>{content}</div>
    </Card>
  );
};

export default PlayersNumbers;
