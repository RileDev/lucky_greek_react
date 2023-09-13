import React, { useState } from "react";

import GameContext from "./game-context";

const GameProvider = (props) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  }

  const closeGame = () => {
    setGameStarted(false);
  }

  const finishGame = () => {
    setGameFinished(true);
  };

  const unsetFinishGame = () => {
    setGameFinished(false);
  };

  const initValues = {
    gameStarted,
    gameFinished,
    startGame,
    closeGame,
    finishGame,
    unsetFinishGame 
  };

  return (
    <GameContext.Provider value={initValues}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
