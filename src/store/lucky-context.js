import React from 'react'

const LuckyContext = React.createContext({
    total: 0,
    betAmount: 0,
    userNumbers : [],
    updateTotal: () => {},
    updateBetAmount: () => {},
    winningTotal: () => {},
    addNumbers : () => {}
})

export default LuckyContext