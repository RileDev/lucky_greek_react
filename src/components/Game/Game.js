import React, { useContext, useEffect, useState } from "react";
import LuckyContext from "../../store/lucky-context";
import PlayersNumbers from "./PlayersNumbers";
import WinningStatus from "./WinningStatus"

import Button from "../UI/Button";
import BallsShowing from "./BallsShowing";
import GameContext from "../../store/game-context";

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

    const ctx = useContext(LuckyContext);
    const game = useContext(GameContext);

    const restartGame = () => {
      game.closeGame();
      game.unsetFinishGame();
    }
  
    useEffect(() => {
      game.unsetFinishGame();
      setWinningNumbers([]);
      let i = 0;
      const interval = setInterval(() => {
        if (i < 20) {
          const num = getRandomNumber(lowestNum, highestNum);
          if(winningNumbers.find(e => e === num)){
            return;
          }
          setWinningNumbers((prevNums) => [...prevNums, num]);
          i++;
        } else {
          clearInterval(interval);
          game.finishGame();
        }
      }, 250);
  
      return () => {
        clearInterval(interval);
      };
    }, [ctx.userNumbers]);

  return (
    <div>
      <BallsShowing winningNumbers={winningNumbers} />
      <PlayersNumbers numbers={ctx.userNumbers} />
      <WinningStatus winNumbers={winningNumbers} />
      {game.gameFinished && <Button value="play again" onClick={restartGame}/>}

    </div>
  );
};

export default Game;
