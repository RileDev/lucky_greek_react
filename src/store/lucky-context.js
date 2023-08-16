import React from 'react'

const LuckyContext = React.createContext({
    total: 0,
    betAmount: 0,
    userNumbers : [],
    updateTotal: () => {},
    addNumbers : () => {}
})

export default LuckyContext