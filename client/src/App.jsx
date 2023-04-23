import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleTask1 = async () => {
      const response = await fetch('https://localhost:8081/users/task1')
      console.log(response)
  }
  return (
    <>
      <div>
        <button onClick={handleTask1}>Task 1</button>
      </div>
      
    </>
  )
}

export default App
