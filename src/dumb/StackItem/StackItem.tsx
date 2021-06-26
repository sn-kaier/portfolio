import React, { MouseEventHandler } from 'react'

const StackItem = (props: {
  click?: MouseEventHandler
  imgUrl: string
  title: string
}) => {
  return (
    <div
      onClick={props.click}
      className="StackItem w-24 h-24
    transition duration-100 hover:bg-opacity-50 cursor-pointer">
      <img className="w-12" src={props.imgUrl} alt="" />
      {props.title}
    </div>
  )
}

export default StackItem
