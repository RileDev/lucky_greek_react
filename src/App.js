import React from 'react'
import Header from './components/Header/Header'

import LuckyProvider from './store/luckyProvider';
import Bet from './components/Bet/Bet';

const App = () => {
  return (
    <LuckyProvider>
      <Header />
      <Bet />
    </LuckyProvider>
  )
}

export default App