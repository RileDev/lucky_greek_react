import React, {useContext, useState} from "react";
import BetSetup from "./BetSetup";
import Game from "../Game/Game";
import GameContext from "../../store/game-context";

const Bet = () => {

    const gameCtx = useContext(GameContext);

    const startGameHandler = () => {
      gameCtx.startGame();
    }

  return (
    <>
      {!gameCtx.gameStarted && <BetSetup onStart={startGameHandler} />}
      {gameCtx.gameStarted && <Game />}
    </>
  );
};

export default Bet;
