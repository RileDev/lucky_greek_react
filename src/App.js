import React from "react";
import Header from "./components/Header/Header";

import LuckyProvider from "./store/luckyProvider";
import Bet from "./components/Bet/Bet";
import GameProvider from "./store/gameProvider";

const App = () => {
  return (
    <GameProvider>
      <LuckyProvider>
        <Header />
        <Bet />
      </LuckyProvider>
    </GameProvider>
  );
};

export default App;
