import React from 'react'

import profilePic from '../../assets/2020_gray-bg.png'

const PicAndTitle = () => {
  return (
    <div className="flex">
      <img className="StackItem w-24 h-24 m-4" src={profilePic} />
      <div className="StackItem flex flex-col w-56 h-24 m-4">
        <h1 className='text-2xl'>Simon Kaier</h1>
        <h2 className='text-sm mt-1 mb-2'>Full Stack Developer</h2>
      </div>
    </div>
  )
}

export default PicAndTitle
