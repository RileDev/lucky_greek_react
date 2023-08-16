import React, { useState } from "react";

import LuckyContext from "./lucky-context";

const LuckyProvider = (props) => {
  const [total, setTotal] = useState(10000);
  const [userNumbers, setUserNumbers] = useState([]);

  const updateTotal = (betAmount) => {
    setTotal(prevTotal => prevTotal - betAmount);
  };
  
  const addNumbers = (numbers) => {
    setUserNumbers([...numbers])
  };

  const initValues = {
    total,
    betAmount: 0,
    userNumbers,
    updateTotal,
    addNumbers 
  };

  return (
    <LuckyContext.Provider value={initValues}>
      {props.children}
    </LuckyContext.Provider>
  );
};

export default LuckyProvider;
