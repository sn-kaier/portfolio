import React, { useState } from 'react'
import Button from './dumb/Button'
import BgSection from './dumb/BgSection'
import StackItem from './dumb/StackItem'

import angular from '../assets/angular.svg';

function App() {
  const [count, setCount] = useState(0)
  const inc = () => setCount((prev) => prev + 1)

  return (
    <div className="mx-auto container">
      <BgSection>
        <h1 className="text-white text-2xl">Hello {count}</h1>
        <Button click={inc}>Inc</Button>
        <StackItem imgUrl={angular} title='Angular'/>
        <div className='h-96 flex'/>
      </BgSection>
    </div>
  )
}

export default App
