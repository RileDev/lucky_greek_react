import React, { useState } from "react";

import LuckyContext from "./lucky-context";

const LuckyProvider = (props) => {
  const [total, setTotal] = useState(10000);
  const [betAmount, setBetAmount] = useState(0);
  const [userNumbers, setUserNumbers] = useState([]);

  const updateBetAmount = (betAmount) => {
    setBetAmount(betAmount)
  }

  const updateTotal = (betAmount) => {
    setTotal(prevTotal => prevTotal - betAmount);
  };

  const winningTotal = (betAmount) => {
    setTotal(prevTotal => prevTotal + (betAmount * 97.5));
  };
  
  const addNumbers = (numbers) => {
    setUserNumbers([...numbers])
  };

  const initValues = {
    total,
    betAmount,
    userNumbers,
    updateBetAmount,
    updateTotal,
    winningTotal,
    addNumbers
  };

  return (
    <LuckyContext.Provider value={initValues}>
        {props.children}
    </LuckyContext.Provider>
  );
};

export default LuckyProvider;
