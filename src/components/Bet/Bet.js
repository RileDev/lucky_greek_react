import React, {useState} from "react";
import BetSetup from "./BetSetup";
import Game from "../Game/Game";

const Bet = () => {

    const [isGameStarted, setGameStarted] = useState(false);

    const startGameHandler = () => {
        setGameStarted(true);
    }

  return (
    <>
      {!isGameStarted && <BetSetup onStart={startGameHandler} />}
      {isGameStarted && <Game />}
    </>
  );
};

export default Bet;
