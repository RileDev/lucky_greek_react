import React, { useContext, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./BetSetup.module.css";

import Input from "../UI/Input";
import Button from "../UI/Button";
import LuckyContext from "../../store/lucky-context";

const validateForm = (firstNum, secondNum, thirdNum, betAmount) => {
  const isGreaterThan80 = (value) => value > 80;
  const isZero = (value) => value === 0;

  if (
    isNaN(firstNum) ||
    isNaN(secondNum) ||
    isNaN(thirdNum) ||
    isNaN(betAmount)
  ) {
    return false;
  }

  const firstNumValid = !isGreaterThan80(firstNum);
  const secondNumValid = !isGreaterThan80(secondNum);
  const thirdNumValid = !isGreaterThan80(thirdNum);
  const betAmountValid = !isZero(betAmount);

  const numbersValid =
    firstNumValid && secondNumValid && thirdNumValid && betAmountValid;

  if (!numbersValid) return false;

  return true;
};

const BetSetup = (props) => {
  const ctx = useContext(LuckyContext);

  const [isValid, setIsValid] = useState(true);

  const firstNumRef = useRef();
  const secondNumRef = useRef();
  const thirdNumRef = useRef();
  const betAmountRef = useRef();

  const playHandler = () => {
    const firstNumValue = +firstNumRef.current.value;
    const secondNumValue = +secondNumRef.current.value;
    const thirdNumValue = +thirdNumRef.current.value;

    const betAmountValue = +betAmountRef.current.value;

    const formValid = validateForm(
      firstNumValue,
      secondNumValue,
      thirdNumValue,
      betAmountValue
    );

    if (formValid) {
      if(betAmountValue > ctx.total) return;
      setIsValid(true);
      ctx.addNumbers([firstNumValue, secondNumValue, thirdNumValue]);
      console.log(betAmountValue);
      ctx.updateBetAmount(betAmountValue);
      console.log(ctx.betAmount);
      ctx.updateTotal(ctx.betAmount);
    //   console.log("Form is valid");
    //   console.log("First Number:", firstNumValue);
    //   console.log("Second Number:", secondNumValue);
    //   console.log("Third Number:", thirdNumValue);
    //   console.log("Bet Amount:", betAmountValue);
    props.onStart();
    } else {
      setIsValid(false);
      console.log("Form is not valid");
    }
  };

  const classValidity = !isValid ? `${classes["invalid"]}` : "";

  return (
    <Card>
      <p className={classes.label}>Numbers</p>
      <div className={classValidity}>
        <Input
          maxLength="2"
          placeholder="0"
          size="s"
          id="1"
          ref={firstNumRef}
        />
        <Input
          maxLength="2"
          placeholder="0"
          size="s"
          id="2"
          ref={secondNumRef}
        />
        <Input
          maxLength="2"
          placeholder="0"
          size="s"
          id="3"
          ref={thirdNumRef}
        />
      </div>
      <div className={`${classes.inline} ${classValidity}`}>
        <p className={classes.label}>Bet amount</p>
        <Input maxLength="9" ref={betAmountRef} />
      </div>

      {!isValid && <p className={classes.label}>All fields must be filled with some value</p>}

      <Button value="play" onClick={playHandler} />
    </Card>
  );
};

export default BetSetup;
