import React from 'react'
import BgSection from './dumb/BgSection'
import MyStack from './sections/MyStack'
import MyProjects from './sections/MyProjects'

import startDustUrl from '../assets/bg/stardust.jpg';
import sandUrl from '../assets/bg/sand.jpg';

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-black gap-4">
      <BgSection imgUrl={startDustUrl}>
        <MyStack />
      </BgSection>
      <BgSection imgUrl={sandUrl}>
        <MyProjects />
      </BgSection>
    </div>
  )
}

export default App
