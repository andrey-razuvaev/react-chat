import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Chat } from './lib'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ backgroundColor: 'orange' }}>
          <h1>CHAT</h1>
          
      </div>
      <Chat />
    </>
  )
}

export default App
