import React from 'react'
import BgSection from './dumb/BgSection'
import MyStack from './sections/MyStack'
import MyProjects from './sections/MyProjects'

import startDustUrl from '../assets/stardust.jpg';

function App() {
  return (
    <div className="flex flex-col">
      <BgSection imgUrl={startDustUrl}>
        <MyStack />
      </BgSection>
      <MyProjects />
    </div>
  )
}

export default App
