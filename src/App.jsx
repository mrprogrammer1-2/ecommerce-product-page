import { useState } from 'react'
import { DataProvider } from './context/DataContext'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Cart from './components/Cart/Cart'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Cart/>
        <Body />
      </DataProvider>
    </div>
  )
}

export default App
