import React, { MouseEventHandler, PropsWithChildren } from 'react'

const StackItem = (props: PropsWithChildren<{ click: MouseEventHandler }>) => {
  return (
    <div
      onClick={props.click}
      className="w-16 h-16 inline-block filter blur-md">
      {props.children}
    </div>
  )
}

export default StackItem
