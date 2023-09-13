import React from 'react'

const GameContext = React.createContext({
    gameStarted: false,
    gameFinished: false,
    startGame: () => {},
    closeGame: () => {},
    finishGame: () => {},
    unsetFinishGame : () => {}
})

export default GameContext