import React, {useState} from 'react'
import Button from './propless/Button'

function App() {
  const [count, setCount] = useState(0)
  const inc = () => setCount((prev) => prev + 1);

  return (
    <div className="mx-auto container">
      <h1>Hello {count}</h1>
      <Button click={inc}>Inc</Button>
    </div>
  )
}

export default App
