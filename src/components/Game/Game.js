import React, { useContext, useEffect, useState } from "react";
import LuckyContext from "../../store/lucky-context";
import PlayersNumbers from "./PlayersNumbers";

import Button from "../UI/Button";
import BallsShowing from "./BallsShowing";

function getRandomNumber(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const Game = () => {
    const lowestNum = 1;
    const highestNum = 80;
  
    const [winningNumbers, setWinningNumbers] = useState([]);
    const [gameFinished, setGameFinished] = useState(false);

    const ctx = useContext(LuckyContext);

    const restartGame = () => {
      setGameFinished(false);
    }
  
    useEffect(() => {
      setGameFinished(false);
      setWinningNumbers([]);
      let i = 0;
      const interval = setInterval(() => {
        if (i < 20) {
          const num = getRandomNumber(lowestNum, highestNum);
          setWinningNumbers((prevNums) => [...prevNums, num]);
          i++;
        } else {
          clearInterval(interval);
          setGameFinished(true);
        }
      }, 500);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

  return (
    <div>
      <BallsShowing winningNumbers={winningNumbers} />
      <PlayersNumbers numbers={ctx.userNumbers} />

      {gameFinished && <Button value="play again"/>}

    </div>
  );
};

export default Game;
