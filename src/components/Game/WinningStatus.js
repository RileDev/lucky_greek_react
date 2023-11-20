import React, { useEffect, useState, useContext } from "react";
import LuckyContext from "../../store/lucky-context";

const WinningStatus = ({winNumbers}) => {
  const ctx = useContext(LuckyContext)
  const userNumbers = ctx.userNumbers;

  const [message, setMessage] = useState("")

  useEffect(() =>{
    const arrLen = winNumbers.length;
    if(arrLen === 20){
      const [firstNum, secondNum, thirdNum] = userNumbers;

      const isFirstNumInArr = winNumbers.includes(firstNum)
      const isSecondNumInArr = winNumbers.includes(secondNum)
      const isThirdNumInArr = winNumbers.includes(thirdNum)

      if(isFirstNumInArr && isSecondNumInArr && isThirdNumInArr){
        ctx.updateTotal(prevEl => prevEl * 97.5)
        setMessage("You Won!")
      }else{
        setMessage("You lost")
      }

    }
    
  }, [winNumbers])

  return <div>{message}</div>;
};

export default WinningStatus;
